"use client";

import { motion } from "framer-motion";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engagements, services } from "@/lib/data";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="section overflow-hidden">
      <div aria-hidden className="absolute top-1/4 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-indigo/10 blur-[140px]" />
      <div className="container-x">
        <SectionHeading
          kicker="Services"
          title="How I can help your product"
          text="Whether you need a new platform built, an existing one rescued, or an extra senior engineer on your team."
        />

        <motion.ul variants={stagger(0.08)} {...inView} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <motion.li key={s.title} variants={fadeUp} whileHover={{ y: -8 }} className="glow-card group relative overflow-hidden p-7">
              <div
                aria-hidden
                className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-violet/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet text-white shadow-[0_8px_30px_-6px_rgba(99,102,241,0.7)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[10deg]">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="relative mt-6 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="relative mt-2 leading-relaxed text-slate-400">{s.text}</p>
              <ul className="relative mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                    <LuCheck className="h-4 w-4 text-brand-cyan" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>

        <motion.h3 variants={fadeUp} {...inView} className="mt-24 mb-8 text-center font-display text-2xl font-semibold text-white">
          Ways to work together
        </motion.h3>
        <motion.ul variants={stagger(0.1)} {...inView} className="grid gap-4 lg:grid-cols-3">
          {engagements.map((e) => (
            <motion.li
              key={e.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={cn(
                "relative flex flex-col rounded-3xl p-7",
                e.highlight
                  ? "bg-gradient-to-b from-brand-blue/20 to-brand-violet/10 ring-1 ring-brand-violet/50 shadow-[0_30px_80px_-30px_rgba(139,92,246,0.7)]"
                  : "glow-card",
              )}
            >
              {e.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h4 className="font-display text-xl font-semibold text-white">{e.name}</h4>
              <p className="mt-1 text-sm text-slate-400">Best for: {e.best}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-slate-300">
                    <LuCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition",
                  e.highlight ? "bg-white text-ink hover:bg-slate-200" : "border border-white/15 text-white hover:bg-white/5",
                )}
              >
                {e.cta}
                <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-6 text-center text-sm text-slate-500">Pricing depends on scope — tell me about your project for a free estimate.</p>
      </div>
    </section>
  );
}
