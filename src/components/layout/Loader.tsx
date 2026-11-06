"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { ease } from "@/lib/motion";

/**
 * Short intro animation on the first visit of a session.
 * The page renders underneath, so it never delays content loading.
 */
export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("wuh-intro") === "1";
      sessionStorage.setItem("wuh-intro", "1");
    } catch {}
    const t = setTimeout(() => setShow(false), seen ? 0 : 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          className="loader-failsafe fixed inset-0 z-[100] grid place-items-center bg-ink"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease }}
              className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet font-display text-lg font-bold text-white shadow-[0_0_60px_-6px_rgba(99,102,241,0.9)]"
            >
              {site.initials}
            </motion.div>
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-violet"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.9, ease }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
