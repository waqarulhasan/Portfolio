"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { nav, site } from "@/lib/data";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ids = nav.map((n) => n.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Lock page scroll while the mobile menu is open and close it with Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        aria-label="Main"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-4",
          scrolled ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : "border border-transparent",
        )}
      >
        <a href="#top" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet font-display text-[11px] font-bold tracking-tight text-white shadow-[0_0_24px_-4px_rgba(99,102,241,0.8)] transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105">
            {site.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold text-white sm:block">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === item.id ? "text-white" : "text-slate-400 hover:text-white",
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-slate-200 sm:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative grid h-10 w-10 place-items-center rounded-xl text-white md:hidden"
          >
            <span className="sr-only">Menu</span>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute h-[2px] w-5 rounded-full bg-white"
                animate={
                  open
                    ? i === 1
                      ? { opacity: 0, scaleX: 0 }
                      : { rotate: i === 0 ? 45 : -45, y: 0 }
                    : { rotate: 0, y: (i - 1) * 6, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.3, ease }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden"
          >
            <motion.ul initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.05 } } }}>
              {nav.map((item) => (
                <motion.li key={item.id} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-base",
                      active === item.id ? "bg-white/[0.08] text-white" : "text-slate-300",
                    )}
                  >
                    {item.label}
                    <span aria-hidden className="text-slate-500">→</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex justify-center rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet py-3.5 font-medium text-white"
            >
              Start a project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
