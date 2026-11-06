"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuArrowUp, LuDownload, LuMail } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { nav, site } from "@/lib/data";

const wave =
  "M0 40 C 120 10, 240 70, 360 40 S 600 10, 720 40 S 960 70, 1080 40 S 1320 10, 1440 40 V 80 H 0 Z";

export function Footer() {
  const socials = [
    { label: "Email", href: `mailto:${site.email}`, icon: LuMail },
    site.socials.github && { label: "GitHub", href: site.socials.github, icon: SiGithub },
    site.socials.linkedin && { label: "LinkedIn", href: site.socials.linkedin, icon: FaLinkedinIn },
  ].filter(Boolean) as { label: string; href: string; icon: ComponentType<{ className?: string }> }[];

  return (
    <footer className="relative mt-10 overflow-hidden">
      {/* animated waves */}
      <div aria-hidden className="relative h-20 w-full overflow-hidden">
        <svg viewBox="0 0 2880 80" preserveAspectRatio="none" className="absolute bottom-0 h-full w-[200%] animate-wave fill-brand-violet/10">
          <path d={wave} />
          <path d={wave} transform="translate(1440 0)" />
        </svg>
        <svg
          viewBox="0 0 2880 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-[70%] w-[200%] animate-wave fill-surface [animation-direction:reverse] [animation-duration:18s]"
        >
          <path d={wave} />
          <path d={wave} transform="translate(1440 0)" />
        </svg>
      </div>

      <div className="bg-surface">
        <div className="container-x grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet font-display text-xs font-bold text-white">
                {site.initials}
              </span>
              <span className="font-display font-semibold text-white">{site.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{site.description}</p>
          </div>
          <nav aria-label="Footer">
            <p className="font-mono text-xs text-slate-500">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-slate-300 transition hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-mono text-xs text-slate-500">Connect</p>
            <ul className="mt-4 flex gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <motion.a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-300 transition-colors hover:border-brand-violet/60 hover:bg-brand-violet/10 hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </motion.a>
                </li>
              ))}
            </ul>
            <a href={site.resume} download className="mt-5 inline-flex items-center gap-2 text-sm text-brand-cyan hover:text-white">
              <LuDownload className="h-4 w-4" aria-hidden /> Download resume
            </a>
          </div>
        </div>
        <div className="container-x flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <motion.a
            href="#top"
            whileHover={{ y: -3 }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-slate-300 transition hover:border-brand-violet/50 hover:text-white"
          >
            Back to top
            <LuArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
