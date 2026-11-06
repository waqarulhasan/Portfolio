"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LuBrain, LuCloud, LuCode, LuDatabase, LuMonitor, LuServer, LuSmartphone, LuWorkflow } from "react-icons/lu";
import type { IconType } from "react-icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups, sphereWords } from "@/lib/data";
import { ease, fadeUp, inView, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SkillSphere } from "./SkillSphere";

const groupIcons: Record<string, IconType> = {
  Backend: LuServer,
  Frontend: LuCode,
  Mobile: LuSmartphone,
  Desktop: LuMonitor,
  Databases: LuDatabase,
  "DevOps & Cloud": LuCloud,
  "AI / Data Science": LuBrain,
  Methodologies: LuWorkflow,
};

export function Skills() {
  const [open, setOpen] = useState<string>(skillGroups[0].name);
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="skills" className="section overflow-hidden">
      <div aria-hidden className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-brand-violet/10 blur-[120px]" />
      <div className="container-x">
        <SectionHeading
          kicker="Skills"
          title="A full-stack toolkit, from database to device"
          text={`${total} tools and technologies across ${skillGroups.length} areas. Move your mouse over the sphere to spin it.`}
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <motion.div variants={fadeUp} {...inView} className="lg:sticky lg:top-28">
            <SkillSphere words={sphereWords} />
          </motion.div>

          <motion.ul variants={stagger(0.06)} {...inView} className="space-y-3">
            {skillGroups.map((g) => {
              const Ico = groupIcons[g.name] ?? LuCode;
              const isOpen = open === g.name;
              return (
                <motion.li key={g.name} variants={fadeUp} className={cn("glow-card group overflow-hidden", isOpen && "border-brand-violet/40")}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? "" : g.name)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-brand-cyan ring-1 ring-white/10 transition duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-violet group-hover:text-white">
                      <Ico className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-display font-semibold text-white">{g.name}</span>
                        <span className="font-mono text-xs text-slate-500">
                          {g.items.length} · {g.level}%
                        </span>
                      </span>
                      <span className="mt-2.5 block h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.span
                          className="block h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${g.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, ease }}
                        />
                      </span>
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="overflow-hidden"
                  >
                    <ul className="flex flex-wrap gap-2 px-5 pb-5">
                      {g.items.map((t, i) => (
                        <motion.li
                          key={t}
                          initial={false}
                          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                          transition={{ delay: isOpen ? i * 0.025 : 0 }}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-brand-violet/50 hover:text-white"
                        >
                          {t}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
