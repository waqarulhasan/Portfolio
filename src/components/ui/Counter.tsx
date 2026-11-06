"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `to` when it first becomes visible. */
export function Counter({ to, suffix = "", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: (v: number) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [visible, reduce, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
