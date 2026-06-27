import { useEffect, useRef, useState } from "react";
import { Earth3D } from "./Earth3D";

/**
 * Renders the 3D Earth as a fixed overlay that:
 *  - Appears when #about enters the viewport, pinned on the right column
 *  - Stays pinned through the About section
 *  - As the user scrolls into Products, slides toward the right edge
 *    (only ~half visible) and stays there until Products ends
 *  - Reverses smoothly when scrolling back up
 */
export function StickyEarth() {
  const [style, setStyle] = useState<{ opacity: number; x: number; scale: number }>({
    opacity: 0,
    x: 0,
    scale: 1,
  });

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const about = document.getElementById("about");
      const products = document.getElementById("products");
      if (!about || !products) return;
      const vh = window.innerHeight;
      const aRect = about.getBoundingClientRect();
      const pRect = products.getBoundingClientRect();

      // appear when about starts entering, fade in across 25% viewport
      const enter = Math.min(1, Math.max(0, (vh - aRect.top) / (vh * 0.5)));

      // shift progress across Products section: 0 at products top reaches center, 1 near end
      const productsTotal = pRect.height;
      const scrolledIntoProducts = Math.min(productsTotal, Math.max(0, -pRect.top));
      const shift = productsTotal > 0 ? scrolledIntoProducts / productsTotal : 0;

      // exit when past products
      const exit = Math.min(1, Math.max(0, (pRect.bottom < 0 ? 1 : 0)));

      const x = shift * 0.55; // 0 = centered in column, 0.55 = pushed mostly off-screen right
      const scale = 1 - shift * 0.15;
      const opacity = Math.min(enter, 1 - exit);

      setStyle({ opacity, x, scale });
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Anchor: right half of screen on lg+, hidden on mobile
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-1/2 hidden lg:block z-[4]"
      style={{
        right: "5%",
        transform: `translate(${style.x * 60}%, -50%) scale(${style.scale})`,
        opacity: style.opacity,
        width: "min(46vw, 540px)",
        transition: "transform 0.15s linear, opacity 0.3s ease-out",
        willChange: "transform, opacity",
      }}
    >
      <Earth3D />
    </div>
  );
}
