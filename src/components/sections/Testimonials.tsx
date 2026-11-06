"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuQuote, LuStar } from "react-icons/lu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Auto-playing carousel. Renders nothing until real testimonials are added in data.ts. */
export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (count < 2 || paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count, paused]);

  if (count === 0) return null;
  const t = testimonials[i];

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading kicker="Testimonials" title="What clients say" center />
        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          <div className="glow-card relative min-h-[18rem] overflow-hidden rounded-3xl p-8 sm:p-12">
            <LuQuote aria-hidden className="absolute top-6 right-8 h-16 w-16 text-white/5" />
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease }}
                aria-live="polite"
              >
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <LuStar key={s} aria-hidden className={cn("h-4 w-4", s < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-600")} />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  {t.logo ? (
                    <Image src={t.logo} alt={t.company} width={44} height={44} className="h-11 w-11 rounded-xl bg-white/5 object-contain p-1.5" />
                  ) : (
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet font-semibold text-white">
                      {t.name[0]}
                    </span>
                  )}
                  <span>
                    <span className="block font-semibold text-white">{t.name}</span>
                    <span className="block text-sm text-slate-400">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          {count > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((x, d) => (
                <button
                  key={x.name + d}
                  onClick={() => setI(d)}
                  aria-label={`Show testimonial ${d + 1}`}
                  aria-current={d === i}
                  className={cn("h-2 rounded-full transition-all", d === i ? "w-8 bg-gradient-to-r from-brand-blue to-brand-violet" : "w-2 bg-white/20 hover:bg-white/40")}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
