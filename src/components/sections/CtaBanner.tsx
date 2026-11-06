"use client";

import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/lib/data";
import { scaleIn, inView } from "@/lib/motion";

export function CtaBanner() {
  return (
    <section className="py-12 sm:py-20" aria-label="Start a project">
      <div className="container-x">
        <motion.div
          variants={scaleIn}
          {...inView}
          className="noise relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-16"
        >
          <div aria-hidden className="absolute inset-0 -z-10 animate-gradient bg-[length:200%_200%] bg-gradient-to-r from-brand-blue via-brand-violet to-brand-indigo" />
          <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-40" />
          <p className="font-mono text-sm text-white/80">{site.availability}</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Have a product idea? Let&apos;s build it properly.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Tell me what you&apos;re building and I&apos;ll get back to you with next steps and a rough estimate.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <MagneticButton href="#contact" variant="light">
              Start a project
              <LuArrowUpRight className="h-4 w-4" aria-hidden />
            </MagneticButton>
            <MagneticButton href={`mailto:${site.email}`} variant="ghost" className="border-white/30">
              {site.email}
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
