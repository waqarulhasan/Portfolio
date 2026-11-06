"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, inView } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
};

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({ children, className, variants = fadeUp, delay = 0, as = "div" }: Props) {
  const Tag = motion[as];
  const show = variants.show as { transition?: object } & Record<string, unknown>;
  const withDelay: Variants = delay ? { ...variants, show: { ...show, transition: { ...show.transition, delay } } } : variants;
  return (
    <Tag className={className} variants={withDelay} {...inView}>
      {children}
    </Tag>
  );
}
