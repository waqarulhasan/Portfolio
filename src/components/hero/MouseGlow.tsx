"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useFinePointer } from "@/hooks/useFinePointer";

/** A soft spotlight that follows the cursor (mouse devices only). */
export function MouseGlow() {
  const fine = useFinePointer();
  const x = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 });
  const y = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 });
  const bg = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(99,102,241,0.16), transparent 60%)`;

  useEffect(() => {
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine, x, y]);

  if (!fine) return null;
  return <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-30" style={{ background: bg }} />;
}
