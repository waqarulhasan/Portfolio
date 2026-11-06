"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the top of the page showing how far you've scrolled. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet"
    />
  );
}
