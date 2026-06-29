import { useEffect, useRef, useState } from "react";
import butterflyAsset from "@/assets/butterfly.png.asset.json";

/**
 * Hero butterfly. Uses the provided blue-morpho PNG.
 * Rests aligned with the "gap" text in the hero, then flies up and off
 * to the top-right along a bezier path as the user scrolls.
 * Subtle wing "flap" is faked via scaleX pulsing of the image.
 */
export function Butterfly() {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [scroll, setScroll] = useState(0);
  const flapRef = useRef(0);
  const [, force] = useState(0);

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);

    const onScroll = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / Math.max(1, window.innerHeight * 2.6)));
      setScroll(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      // slow flap when resting, faster when in flight
      const speed = scrollRef.current < 0.04 ? 2.8 : scrollRef.current < 0.7 ? 5.2 : 3.6;
      flapRef.current = (flapRef.current + dt * speed) % (Math.PI * 2);
      force((n) => (n + 1) % 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // keep latest scroll in a ref for the rAF loop
  const scrollRef = useRef(0);
  scrollRef.current = scroll;

  const { w: W, h: H } = size;
  if (!W || !H) return null;

  const isMobile = W < 1024;
  // Home: mobile → top-right just below the hamburger menu button.
  // Desktop → a bit lower-right, aligned with the "gap" line of hero text.
  const home = isMobile
    ? { x: W - 70, y: 110 }
    : { x: Math.min(W - 140, W * 0.74), y: Math.max(220, H * 0.56) };
  const dest = { x: W + 160, y: -160 };
  const ctrl = { x: W * 1.1, y: H * 0.08 };

  const p = scroll;
  const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
  const x = (1 - e) ** 2 * home.x + 2 * (1 - e) * e * ctrl.x + e ** 2 * dest.x;
  const y = (1 - e) ** 2 * home.y + 2 * (1 - e) * e * ctrl.y + e ** 2 * dest.y;

  const scale = p < 0.05 ? 1 : Math.max(0.2, 1 - p * 0.82);
  const opacity = p > 0.92 ? Math.max(0, 1 - (p - 0.92) / 0.08) : 1;
  const tilt = Math.sin(p * Math.PI) * 18; // degrees, flight arc tilt

  // wing flap: scaleX from ~0.55 to 1 via abs(sin)
  const flap = 0.55 + 0.45 * Math.abs(Math.sin(flapRef.current));

  const baseSize = isMobile ? 110 : 220; // px

  return (
    <div
      className="pointer-events-none fixed z-[6]"
      style={{
        left: 0,
        top: 0,
        width: baseSize,
        height: baseSize,
        transform: `translate3d(${x - baseSize / 2}px, ${y - baseSize / 2}px, 0) rotate(${tilt}deg) scale(${scale})`,
        opacity,
        transition: "opacity 200ms linear",
        willChange: "transform, opacity",
        filter: "drop-shadow(0 18px 40px rgba(80, 130, 255, 0.35))",
      }}
      aria-hidden
    >
      <img
        src={butterflyAsset.url}
        alt=""
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          transform: `scaleX(${flap})`,
          transformOrigin: "50% 50%",
          willChange: "transform",
        }}
      />
    </div>
  );
}
