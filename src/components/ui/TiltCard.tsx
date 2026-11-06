"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { useFinePointer } from "@/hooks/useFinePointer";
import { cn } from "@/lib/utils";

type Props = { children: ReactNode; className?: string; max?: number };

/** 3D tilt that follows the cursor, with a moving light reflection. Static on touch devices. */
export function TiltCard({ children, className, max = 10 }: Props) {
  const fine = useFinePointer();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 180, damping: 18 });
  const sy = useSpring(py, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const gx = useTransform(sx, (v: number) => `${v * 100}%`);
  const gy = useTransform(sy, (v: number) => `${v * 100}%`);
  const shine = useMotionTemplate`radial-gradient(500px circle at ${gx} ${gy}, rgba(139,92,246,0.18), transparent 45%)`;

  return (
    <motion.div
      onPointerMove={(e: PointerEvent<HTMLDivElement>) => {
        if (!fine) return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      style={fine ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      className={cn("group relative [transform-style:preserve-3d]", className)}
    >
      {children}
      {fine && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: shine }}
        />
      )}
    </motion.div>
  );
}
