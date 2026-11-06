"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = { kicker: string; title: string; text?: string; center?: boolean; className?: string };

export function SectionHeading({ kicker, title, text, center, className }: Props) {
  return (
    <motion.header
      variants={stagger(0.1)}
      {...inView}
      className={cn("mb-12 max-w-2xl sm:mb-16", center && "mx-auto text-center", className)}
    >
      <motion.p variants={fadeUp} className="kicker">
        <span className="h-px w-6 bg-gradient-to-r from-brand-blue to-brand-violet" aria-hidden />
        {kicker}
      </motion.p>
      <motion.h2 variants={fadeUp} className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </motion.h2>
      {text && (
        <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-slate-400">
          {text}
        </motion.p>
      )}
    </motion.header>
  );
}
