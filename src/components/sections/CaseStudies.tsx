"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/data";
import { ease, fadeUp, inView } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const c = caseStudies[active];

  return (
    <section id="case-studies" className="section">
      <div className="container-x">
        <SectionHeading
          kicker="Case studies"
          title="How I approach hard problems"
          text="A closer look at the thinking behind three of the platforms I've built."
        />

        <motion.div variants={fadeUp} {...inView} className="glow-card overflow-hidden rounded-3xl hover:shadow-none">
          <div role="tablist" aria-label="Case studies" className="flex gap-1 overflow-x-auto border-b border-white/10 p-2">
            {caseStudies.map((s, i) => (
              <button
                key={s.project}
                role="tab"
                aria-selected={active === i}
                aria-controls="case-panel"
                onClick={() => setActive(i)}
                className={cn(
                  "relative shrink-0 rounded-xl px-4 py-2.5 text-sm transition-colors",
                  active === i ? "text-white" : "text-slate-400 hover:text-white",
                )}
              >
                {active === i && (
                  <motion.span layoutId="case-tab" className="absolute inset-0 -z-10 rounded-xl bg-white/[0.08] ring-1 ring-white/10" />
                )}
                {s.project}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={c.project}
              id="case-panel"
              role="tabpanel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease }}
              className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]"
            >
              <div>
                <span className="badge">{c.tag}</span>
                <h3 className="mt-4 font-display text-3xl font-semibold text-white">{c.project}</h3>
                <p className="mt-6 font-mono text-xs text-brand-cyan">The challenge</p>
                <p className="mt-2 text-lg leading-relaxed text-slate-300">{c.challenge}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {c.tech.map((t) => (
                    <li key={t} className="badge">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs text-brand-cyan">The approach</p>
                <ol className="mt-3 space-y-3">
                  {c.approach.map((a, i) => (
                    <motion.li
                      key={a}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, ease }}
                      className="flex gap-4 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/5"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet font-mono text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-slate-300">{a}</span>
                    </motion.li>
                  ))}
                </ol>
                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-brand-blue/10 p-4 ring-1 ring-emerald-400/20">
                  <LuCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
                  <p className="text-slate-200">
                    <span className="font-semibold text-white">Outcome: </span>
                    {c.outcome}
                  </p>
                </div>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:text-white"
                  >
                    Visit the live product
                    <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
