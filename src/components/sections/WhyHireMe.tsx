"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyHireMe } from "@/lib/data";
import { fadeUp, inView, stagger } from "@/lib/motion";

export function WhyHireMe() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          kicker="Why hire me"
          title="What you get when we work together"
          text="Senior-level ownership without the agency overhead — clear communication, honest estimates and code your team can keep building on."
        />
        <motion.ul variants={stagger(0.08)} {...inView} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyHireMe.map((w) => (
            <motion.li key={w.title} variants={fadeUp} whileHover={{ y: -6 }} className="glow-card group p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 text-brand-cyan ring-1 ring-white/10 transition duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-white group-hover:shadow-[0_0_30px_-4px_rgba(99,102,241,0.8)]">
                <Icon name={w.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{w.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{w.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
