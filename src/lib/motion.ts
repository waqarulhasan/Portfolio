import type { Transition, Variants } from "framer-motion";

/** Shared easing used across the site — a soft "expo out". */
export const ease = [0.16, 1, 0.3, 1] as const;

export const spring: Transition = { type: "spring", stiffness: 260, damping: 24 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Props for elements that animate once when scrolled into view. */
export const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;
