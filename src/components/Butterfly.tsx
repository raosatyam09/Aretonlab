import { useEffect, useRef } from "react";

export function Butterfly() {
  const btfCanvas = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = btfCanvas.current;
    const tCanvas = trailRef.current;
    if (!canvas || !tCanvas) return;

    const ctx = canvas.getContext("2d")!;
    const tCtx = tCanvas.getContext("2d")!;
    const DPR = window.devicePixelRatio || 1;

    let W = 0, H = 0;
    function setSize() {
      W = window.innerWidth;
      H = window.innerHeight;
      [canvas, tCanvas].forEach((c) => {
        c!.width = W * DPR;
        c!.height = H * DPR;
        c!.style.width = W + "px";
        c!.style.height = H + "px";
      });
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      tCtx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    setSize();
    window.addEventListener("resize", setSize);

    // Start closer to the hero text (more toward center), end further off-screen
    const HOME = () => ({ x: Math.min(W - 220, W * 0.62), y: H - 220 });
    const DEST = () => ({ x: W + 140, y: -140 });
    const CTRL = () => ({ x: W * 1.15, y: H * 0.05 });

    function getFlightPos(p: number) {
      const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      const h = HOME(), d = DEST(), c = CTRL();
      return {
        x: (1 - ease) ** 2 * h.x + 2 * (1 - ease) * ease * c.x + ease ** 2 * d.x,
        y: (1 - ease) ** 2 * h.y + 2 * (1 - ease) * ease * c.y + ease ** 2 * d.y,
      };
    }

    // Slower wing flap across all phases
    function wingSpeed(p: number) {
      if (p < 0.04) return 0.018;
      if (p < 0.2) return 0.12;
      if (p < 0.65) return 0.2;
      return 0.14;
    }

    let wingAngle = 0, wingDir = 1;
    let scrollProg = 0;
    let animId = 0;

    const onScroll = () => {
      // Longer flight path: map full butterfly journey across ~1.8 viewports of scroll
      const heroProg = Math.min(1, window.scrollY / Math.max(1, window.innerHeight * 1.8));
      scrollProg = Math.min(1, Math.max(0, heroProg));
    };
    window.addEventListener("scroll", onScroll, { passive: true });


    function drawButterfly(bx: number, by: number, p: number, wA: number) {
      ctx.clearRect(0, 0, W, H);
      tCtx.clearRect(0, 0, W, H);

      const scale = p < 0.05 ? 1.0 : Math.max(0.15, 1 - p * 0.87);
      const opacity = p > 0.9 ? Math.max(0, 1 - (p - 0.9) / 0.1) : 1;
      const tilt = p < 0.05 ? 0 : Math.sin(p * Math.PI) * 0.28;
      if (opacity <= 0) return;

      if (p > 0.06 && p < 0.92) {
        for (let i = 0; i < 4; i++) {
          const tp = Math.max(0, p - (i + 1) * 0.035);
          const tpos = getFlightPos(tp);
          const ta = (0.22 - i * 0.05) * opacity;
          tCtx.beginPath();
          tCtx.arc(tpos.x, tpos.y, (1.6 - i * 0.3) * scale, 0, Math.PI * 2);
          tCtx.fillStyle = `rgba(160,140,255,${ta})`;
          tCtx.fill();
        }
      }

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(bx, by);
      ctx.rotate(tilt);
      ctx.scale(scale, scale);

      const s = wA;

      const ug = ctx.createRadialGradient(0, -15, 3, 0, -50, 105);
      ug.addColorStop(0, "rgba(159,110,255,0.97)");
      ug.addColorStop(0.3, "rgba(123,94,248,0.92)");
      ug.addColorStop(0.6, "rgba(95,70,210,0.86)");
      ug.addColorStop(0.85, "rgba(70,50,170,0.8)");
      ug.addColorStop(1, "rgba(45,32,120,0.65)");

      const ws = ctx.createLinearGradient(-80, 0, -10, 0);
      ws.addColorStop(0, "rgba(255,255,255,0)");
      ws.addColorStop(0.42, "rgba(220,200,255,0.22)");
      ws.addColorStop(0.7, "rgba(190,170,255,0.08)");
      ws.addColorStop(1, "rgba(255,255,255,0)");

      const lg = ctx.createRadialGradient(0, 25, 2, 0, 60, 90);
      lg.addColorStop(0, "rgba(140,100,240,0.93)");
      lg.addColorStop(0.5, "rgba(105,80,220,0.86)");
      lg.addColorStop(1, "rgba(70,50,170,0.65)");

      const edge = "rgba(28,20,55,0.65)";

      for (const side of [-1, 1]) {
        ctx.save();
        ctx.scale(side * s, 1);

        // Upper wing
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-12, -22, -55, -50, -78, -34);
        ctx.bezierCurveTo(-105, -18, -100, 22, -68, 46);
        ctx.bezierCurveTo(-40, 62, -12, 34, 0, 12);
        ctx.closePath();
        ctx.fillStyle = ug; ctx.fill();
        ctx.fillStyle = ws; ctx.fill();
        ctx.strokeStyle = edge; ctx.lineWidth = 5; ctx.stroke();
        ctx.lineWidth = 0.7;
        ctx.strokeStyle = "rgba(40,30,100,0.4)";
        ctx.beginPath(); ctx.moveTo(0, 6); ctx.quadraticCurveTo(-38, -18, -72, -28); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, 6); ctx.quadraticCurveTo(-32, 22, -62, 40); ctx.stroke();

        // Lower wing
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.bezierCurveTo(-10, 24, -45, 62, -62, 68);
        ctx.bezierCurveTo(-84, 74, -82, 46, -60, 24);
        ctx.bezierCurveTo(-44, 12, -16, 14, 0, 10);
        ctx.closePath();
        ctx.fillStyle = lg; ctx.fill();
        ctx.strokeStyle = edge; ctx.lineWidth = 4; ctx.stroke();
        ctx.lineWidth = 0.6;
        ctx.strokeStyle = "rgba(40,30,100,0.3)";
        ctx.beginPath(); ctx.moveTo(0, 12); ctx.quadraticCurveTo(-30, 38, -58, 52); ctx.stroke();

        ctx.restore();
      }

      // Body
      const bodyG = ctx.createLinearGradient(-3, 0, 3, 0);
      bodyG.addColorStop(0, "rgba(48,38,65,0.92)");
      bodyG.addColorStop(0.5, "rgba(75,60,95,0.97)");
      bodyG.addColorStop(1, "rgba(42,32,58,0.88)");
      ctx.beginPath(); ctx.ellipse(0, 12, 4.5, 50, 0, 0, Math.PI * 2);
      ctx.fillStyle = bodyG; ctx.fill();
      ctx.beginPath(); ctx.ellipse(-0.5, 12, 1.8, 44, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(190,165,230,0.22)"; ctx.fill();

      // Head
      ctx.beginPath(); ctx.arc(0, -38, 6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(55,42,72,0.95)"; ctx.fill();

      // Antennae
      ctx.strokeStyle = "rgba(52,40,68,0.88)"; ctx.lineWidth = 1.0;
      ctx.beginPath(); ctx.moveTo(-2, -42); ctx.quadraticCurveTo(-22, -72, -18, -84); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(2, -42); ctx.quadraticCurveTo(22, -72, 18, -84); ctx.stroke();
      ctx.fillStyle = "rgba(52,40,68,0.92)";
      ctx.beginPath(); ctx.arc(-18, -84, 3, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(18, -84, 3, 0, Math.PI * 2); ctx.fill();

      ctx.restore();
    }

    function loop() {
      const spd = wingSpeed(scrollProg);
      wingAngle += wingDir * spd;
      if (wingAngle >= 1) { wingAngle = 1; wingDir = -1; }
      if (wingAngle <= 0) { wingAngle = 0; wingDir = 1; }

      const pos = getFlightPos(scrollProg);
      drawButterfly(pos.x, pos.y, scrollProg, wingAngle);
      animId = requestAnimationFrame(loop);
    }
    onScroll();
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={trailRef}
        className="pointer-events-none fixed inset-0 z-[5]"
        aria-hidden
      />
      <canvas
        ref={btfCanvas}
        className="pointer-events-none fixed inset-0 z-[6]"
        aria-hidden
      />
    </>
  );
}
