"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { LuArrowUpRight, LuChevronDown } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects, type Project } from "@/lib/data";
import { ease, fadeUp, inView, stagger } from "@/lib/motion";

/** Generated cover art used until a real screenshot is added in data.ts. */
function Cover({ p }: { p: Project }) {
  const initials = p.name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div
      className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
      style={{ background: `radial-gradient(120% 120% at 0% 0%, ${p.hue[0]}55, transparent 55%), radial-gradient(120% 120% at 100% 100%, ${p.hue[1]}55, transparent 55%), #0b0d18` }}
    >
      <div className="bg-grid absolute inset-0 opacity-60" />
      {/* faux app window */}
      <div className="absolute top-6 right-6 left-6 rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur-sm sm:left-10">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <span className="col-span-2 h-2 rounded bg-white/20" />
          <span className="h-2 rounded" style={{ background: p.hue[0] }} />
          <span className="h-2 rounded bg-white/10" />
          <span className="col-span-2 h-2 rounded bg-white/10" />
        </div>
      </div>
      <span className="absolute -bottom-6 left-5 font-display text-[7rem] leading-none font-bold tracking-tighter text-white/[0.08]">
        {initials}
      </span>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.li variants={fadeUp} className="h-full">
      <TiltCard className="glow-card h-full rounded-3xl" max={7}>
        <article className="flex h-full flex-col overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/10] overflow-hidden">
            {p.image ? (
              <Image
                src={p.image}
                alt={`${p.name} screenshot`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            ) : (
              <Cover p={p} />
            )}
            <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-xs text-white">{p.category}</span>
          </div>
          <div className="flex flex-1 flex-col p-6 [transform:translateZ(30px)]">
            <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
              {p.tech.map((t) => (
                <li key={t} className="badge">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-slate-200"
                >
                  Live demo
                  <LuArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden />
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  <SiGithub className="h-4 w-4" aria-hidden />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </article>
      </TiltCard>
    </motion.li>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div aria-hidden className="absolute top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-brand-blue/10 blur-[140px]" />
      <div className="container-x">
        <SectionHeading
          kicker="Projects"
          title="Selected work"
          text={`${projects.length} products shipped for clients across SaaS, marketplaces, compliance, education and desktop.`}
        />

        <motion.ul variants={stagger(0.1)} {...inView} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </motion.ul>

        {rest.length > 0 && (
          <>
            <AnimatePresence initial={false}>
              {showAll && (
                <motion.ul
                  key="more"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="grid gap-3 overflow-hidden pt-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {rest.map((p, i) => (
                    <motion.li
                      key={p.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <a
                        href={p.link ?? "#contact"}
                        target={p.link ? "_blank" : undefined}
                        rel={p.link ? "noopener noreferrer" : undefined}
                        className="glow-card group flex h-full items-start gap-4 p-5"
                      >
                        <span
                          aria-hidden
                          className="mt-1 h-10 w-10 shrink-0 rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                          style={{ background: `linear-gradient(135deg, ${p.hue[0]}, ${p.hue[1]})` }}
                        />
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center justify-between gap-2 font-display font-semibold text-white">
                            {p.name}
                            {p.link && (
                              <LuArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-white" aria-hidden />
                            )}
                          </span>
                          <span className="mt-1 block text-sm text-slate-400">{p.description}</span>
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                className="glass group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-white transition hover:bg-white/10"
              >
                {showAll ? "Show fewer projects" : `Show ${rest.length} more projects`}
                <motion.span animate={{ rotate: showAll ? 180 : 0 }}>
                  <LuChevronDown className="h-4 w-4" aria-hidden />
                </motion.span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
