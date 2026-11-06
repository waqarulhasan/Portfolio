"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about, stats } from "@/lib/data";
import { fadeUp, inView, slideLeft, stagger } from "@/lib/motion";

export function About() {
  const timeline = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: timeline, offset: ["start 80%", "end 50%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading kicker="About me" title={about.heading} />

        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.div variants={stagger(0.12)} {...inView} className="space-y-5 text-lg leading-relaxed text-slate-400">
              {about.paragraphs.map((p) => (
                <motion.p key={p} variants={fadeUp}>
                  {p}
                </motion.p>
              ))}
            </motion.div>

            <motion.ul variants={stagger(0.1)} {...inView} className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {stats.slice(0, 3).map((s) => (
                <motion.li
                  key={s.label}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="glow-card p-5 text-center sm:p-6"
                >
                  <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                    <span className="text-gradient">
                      <Counter to={s.value} suffix={s.suffix} />
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">{s.label}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <ol ref={timeline} className="relative ml-3 space-y-4 border-l border-white/10 pl-8" aria-label="Career journey">
            <motion.span
              aria-hidden
              style={{ scaleY: line }}
              className="absolute top-0 -left-px h-full w-px origin-top bg-gradient-to-b from-brand-cyan via-brand-blue to-brand-violet"
            />
            {about.journey.map((j, i) => (
              <motion.li key={j.year} variants={slideLeft} {...inView} transition={{ delay: i * 0.05 }} className="relative">
                <span
                  aria-hidden
                  className="absolute top-5 -left-[38.5px] h-3 w-3 rounded-full border-2 border-ink bg-gradient-to-br from-brand-blue to-brand-violet shadow-[0_0_14px_rgba(99,102,241,0.9)]"
                />
                <motion.div whileHover={{ x: 6 }} className="glow-card px-5 py-4">
                  <p className="font-mono text-xs text-brand-cyan">{j.year}</p>
                  <p className="mt-1 text-slate-200">{j.text}</p>
                </motion.div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
