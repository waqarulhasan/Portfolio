"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive 3D word sphere. Words are spread on a sphere with a Fibonacci layout and rotated
 * with plain transforms (no WebGL). Drag or move the mouse to steer it; it pauses off-screen.
 */
export function SkillSphere({ words }: { words: string[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = words.length;
    const points = words.map((_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return { x: Math.cos(theta) * Math.sin(phi), y: Math.sin(theta) * Math.sin(phi), z: Math.cos(phi) };
    });

    let radius = el.clientWidth / 2.4;
    let ax = 0.0016;
    let ay = 0.0024;
    let targetAx = ax;
    let targetAy = ay;
    let raf = 0;
    let running = true;

    const render = () => {
      const cx = Math.cos(ax), sx = Math.sin(ax), cy = Math.cos(ay), sy = Math.sin(ay);
      points.forEach((p, i) => {
        // rotate around X then Y
        const y1 = p.y * cx - p.z * sx;
        const z1 = p.y * sx + p.z * cx;
        const x2 = p.x * cy + z1 * sy;
        const z2 = -p.x * sy + z1 * cy;
        p.x = x2; p.y = y1; p.z = z2;
        const node = items.current[i];
        if (!node) return;
        const scale = (p.z + 2) / 3;
        node.style.transform = `translate3d(${p.x * radius}px, ${p.y * radius}px, 0) translate(-50%, -50%) scale(${scale})`;
        node.style.opacity = String(0.25 + ((p.z + 1) / 2) * 0.75);
        node.style.zIndex = String(Math.round(scale * 100));
      });
    };

    const tick = () => {
      if (!running) return;
      ax += (targetAx - ax) * 0.05;
      ay += (targetAy - ay) * 0.05;
      render();
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      targetAy = dx * 0.03;
      targetAx = -dy * 0.03;
    };
    const onLeave = () => {
      targetAx = 0.0016;
      targetAy = 0.0024;
    };
    const onResize = () => (radius = el.clientWidth / 2.4);
    const io = new IntersectionObserver(([e]) => {
      const v = e.isIntersecting;
      if (v && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!v) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });

    if (reduce) {
      ax = 0; ay = 0; render();
      return;
    }
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    io.observe(el);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [words]);

  return (
    <div
      ref={wrap}
      className="relative mx-auto aspect-square w-full max-w-[460px] touch-pan-y select-none"
      role="img"
      aria-label={`Technologies: ${words.join(", ")}`}
    >
      <div aria-hidden className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.25),transparent_65%)] blur-2xl" />
      <div aria-hidden className="absolute inset-[8%] rounded-full border border-white/5" />
      <div aria-hidden className="absolute top-1/2 left-1/2">
        {words.map((w, i) => (
          <span
            key={w}
            ref={(node: HTMLSpanElement | null) => {
              items.current[i] = node;
            }}
            className="absolute top-0 left-0 cursor-default whitespace-nowrap font-mono text-xs font-medium text-slate-200 transition-colors hover:text-brand-cyan sm:text-sm"
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
