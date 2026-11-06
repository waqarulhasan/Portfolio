"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight floating particles on a canvas. Pauses when off-screen or when the tab is hidden,
 * and is skipped entirely for visitors who prefer reduced motion.
 */
export function Particles({ density = 0.00009 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; hue: number };
    let particles: P[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.max(24, Math.floor(w * h * density)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.05,
        r: Math.random() * 1.6 + 0.4,
        a: Math.random() * 0.6 + 0.2,
        hue: Math.random() > 0.5 ? 220 : 265,
      }));
    };

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0 && dist < 120) {
          p.x += (dx / dist) * 0.8;
          p.y += (dy / dist) * 0.8;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 72%, ${p.a})`;
        ctx.fill();
        // cheap glow: a larger, faint halo instead of canvas shadows
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${p.a * 0.08})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const setRunning = (v: boolean) => {
      if (v === running) return;
      running = v;
      if (v) raf = requestAnimationFrame(tick);
      else cancelAnimationFrame(raf);
    };
    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting && !document.hidden));
    const onVis = () => setRunning(!document.hidden);

    resize();
    raf = requestAnimationFrame(tick);
    io.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [density]);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
