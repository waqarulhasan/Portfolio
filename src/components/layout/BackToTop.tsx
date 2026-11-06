"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { LuArrowUp } from "react-icons/lu";

/** Floating button that appears after scrolling down. */
export function BackToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 900));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4 }}
          className="fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet text-white shadow-[0_10px_30px_-6px_rgba(99,102,241,0.8)]"
        >
          <LuArrowUp className="h-5 w-5" aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
