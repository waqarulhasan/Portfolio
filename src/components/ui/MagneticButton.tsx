"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentPropsWithoutRef, PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "light";

type Props = Omit<ComponentPropsWithoutRef<"a">, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> & {
  children: ReactNode;
  variant?: Variant;
  strength?: number;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-blue to-brand-violet text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.8)] hover:shadow-[0_14px_50px_-8px_rgba(139,92,246,0.9)]",
  ghost: "glass text-white hover:bg-white/10",
  light: "bg-white text-ink hover:bg-slate-100",
};

/** A link-button that is gently pulled toward the cursor. */
export function MagneticButton({ children, variant = "primary", strength = 0.35, className, ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-[background,box-shadow,color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue",
        styles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
