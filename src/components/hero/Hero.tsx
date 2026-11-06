"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LuArrowRight, LuArrowUpRight, LuDownload } from "react-icons/lu";
import { Counter } from "@/components/ui/Counter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site, stats } from "@/lib/data";
import { ease } from "@/lib/motion";
import { Particles } from "./Particles";
import { TypingText } from "./TypingText";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const yCards = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Split the name into words (kept unbroken) and letters (animated one by one).
  const words = site.name.split(" ");
  const wordStart = words.map((_, i) => words.slice(0, i).join("").length);

  return (
    <section ref={ref} id="top" className="noise relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* animated gradient background */}
      <motion.div aria-hidden style={{ scale: bgScale }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-gradient bg-[length:200%_200%] bg-[radial-gradient(60%_60%_at_20%_20%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(50%_50%_at_80%_30%,rgba(139,92,246,0.35),transparent_60%),radial-gradient(60%_50%_at_50%_100%,rgba(34,211,238,0.18),transparent_60%)]" />
        <div className="bg-grid absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </motion.div>
      <Particles />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <motion.div style={{ y: yText, opacity: fade }}>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="glass group inline-flex items-center gap-2.5 rounded-full py-1.5 pr-3 pl-2 text-sm text-slate-300 transition hover:text-white"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            {site.availability}
            <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </motion.a>

          <p className="mt-8 font-mono text-sm text-slate-400">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
              Hi, I&apos;m
            </motion.span>
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] font-bold tracking-[-0.035em] text-white">
            <span className="sr-only">{site.name}</span>
            <span aria-hidden>
              {words.map((word, wi) => (
                <span key={word + wi}>
                  <span className="inline-block whitespace-nowrap">
                  {word.split("").map((l, li) => (
                    <motion.span
                      key={li}
                      className="inline-block"
                      initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.7, ease, delay: 0.5 + (wordStart[wi] + li) * 0.03 }}
                    >
                      {l}
                    </motion.span>
                  ))}
                  </span>
                  {wi < words.length - 1 && " "}
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.95 }}
            className="mt-5 font-display text-2xl font-medium text-slate-200 sm:text-3xl"
          >
            <TypingText words={site.roles} className="text-gradient" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.05 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.15 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contact">
              Start a project
              <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </MagneticButton>
            <MagneticButton href="#projects" variant="ghost">
              View my work
            </MagneticButton>
            <MagneticButton href={site.resume} variant="ghost" download className="px-5" aria-label="Download resume (PDF)">
              <LuDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
              Resume
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.ul style={{ y: yCards }} className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Highlights">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease, delay: 1.1 + i * 0.1 }}
              className={i % 2 === 1 ? "mt-6" : ""}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                className="glass glow-card rounded-3xl p-5 sm:p-6"
              >
                <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-400">{s.label}</p>
                <span
                  aria-hidden
                  className="absolute top-5 right-5 h-2 w-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-violet shadow-[0_0_12px_2px_rgba(139,92,246,0.7)]"
                />
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-slate-500 sm:flex"
      >
        scroll
        <span className="relative h-9 w-5 rounded-full border border-white/20">
          <motion.span
            className="absolute top-1.5 left-1/2 h-1.5 w-1 -translate-x-1/2 rounded-full bg-white/70"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </span>
      </motion.a>
    </section>
  );
}
