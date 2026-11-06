"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { LuChevronDown, LuSparkles } from "react-icons/lu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";
import { ease, fadeUp, inView } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Experience() {
  const [open, setOpen] = useState(0);
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          kicker="Experience"
          title="Seven years of shipping real products"
          text="From native C++ components to cloud-native SaaS — click a role to see what I did there."
        />

        <ol ref={list} className="relative mx-auto max-w-4xl">
          <span aria-hidden className="absolute top-0 bottom-0 left-4 w-px bg-white/10 sm:left-1/2" />
          <motion.span
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute top-0 bottom-0 left-4 w-px origin-top bg-gradient-to-b from-brand-cyan via-brand-blue to-brand-violet sm:left-1/2"
          />

          {experience.map((job, i) => {
            const isOpen = open === i;
            const right = i % 2 === 1;
            return (
              <motion.li
                key={job.company + job.period}
                variants={fadeUp}
                {...inView}
                className={cn("relative mb-6 pl-12 sm:w-1/2 sm:pl-0", right ? "sm:ml-auto sm:pl-10" : "sm:pr-10")}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-7 left-4 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-ink transition-all duration-500",
                    right ? "sm:left-0" : "sm:left-full",
                    isOpen
                      ? "scale-125 bg-gradient-to-br from-brand-cyan to-brand-violet shadow-[0_0_18px_rgba(139,92,246,0.9)]"
                      : "bg-slate-600",
                  )}
                />
                <div className={cn("glow-card overflow-hidden", isOpen && "border-brand-violet/40")}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="font-mono text-xs text-brand-cyan">{job.period}</span>
                      <span className="mt-1.5 block font-display text-lg font-semibold text-white">{job.role}</span>
                      <span className="block text-sm text-slate-400">{job.company}</span>
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="mt-1 text-slate-400">
                      <LuChevronDown className="h-5 w-5" aria-hidden />
                    </motion.span>
                  </button>

                  {/* Always in the page (good for SEO); collapsed with height animation. */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="overflow-hidden"
                    aria-hidden={!isOpen}
                  >
                        <div className="px-5 pb-6 sm:px-6">
                          <p className="flex items-start gap-2 rounded-xl bg-gradient-to-r from-brand-blue/15 to-brand-violet/15 px-3.5 py-2.5 text-sm text-white ring-1 ring-white/10">
                            <LuSparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
                            {job.highlight}
                          </p>
                          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-400">
                            {job.points.map((p) => (
                              <li key={p} className="flex gap-2.5">
                                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-violet" />
                                {p}
                              </li>
                            ))}
                          </ul>
                          <ul className="mt-4 flex flex-wrap gap-1.5">
                            {job.tech.map((t) => (
                              <li key={t} className="badge">
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                  </motion.div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
