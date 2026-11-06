"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ComponentType, FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuClock, LuLoader, LuMail, LuMapPin, LuSend } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/data";
import { ease, fadeUp, inView, slideLeft } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

function Field({
  id,
  label,
  type = "text",
  textarea,
  required = true,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
}) {
  const base =
    "peer w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 pt-6 pb-2.5 text-white placeholder-transparent outline-none transition focus:border-brand-violet/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-brand-violet/15";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} placeholder={label} required={required} rows={5} className={cn(base, "resize-none")} />
      ) : (
        <input id={id} name={id} type={type} placeholder={label} required={required} autoComplete={autoComplete} className={base} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-2 left-4 text-xs text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-cyan"
      >
        {label}
        {!required && <span className="text-slate-500"> (optional)</span>}
      </label>
    </div>
  );
}

/** Stylised dot map with a pulsing pin — decorative, reacts to the cursor. */
function MapBackground() {
  const dots = useMemo(() => {
    const out: { x: number; y: number }[] = [];
    for (let y = 0; y < 22; y++) {
      for (let x = 0; x < 48; x++) {
        // rough continent mask using overlapping ellipses
        const nx = x / 48;
        const ny = y / 22;
        const inLand =
          ((nx - 0.2) / 0.14) ** 2 + ((ny - 0.35) / 0.3) ** 2 < 1 || // Americas north
          ((nx - 0.28) / 0.07) ** 2 + ((ny - 0.75) / 0.22) ** 2 < 1 || // Americas south
          ((nx - 0.5) / 0.07) ** 2 + ((ny - 0.3) / 0.16) ** 2 < 1 || // Europe
          ((nx - 0.53) / 0.08) ** 2 + ((ny - 0.62) / 0.22) ** 2 < 1 || // Africa
          ((nx - 0.7) / 0.17) ** 2 + ((ny - 0.35) / 0.22) ** 2 < 1 || // Asia
          ((nx - 0.85) / 0.06) ** 2 + ((ny - 0.78) / 0.1) ** 2 < 1; // Oceania
        if (inLand) out.push({ x: x * 20 + 10, y: y * 20 + 10 });
      }
    }
    return out;
  }, []);

  return (
    <svg aria-hidden viewBox="0 0 960 440" className="absolute inset-0 h-full w-full opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" preserveAspectRatio="xMidYMid slice">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={2.2} className="fill-white/15 transition-[fill] duration-300 hover:fill-brand-cyan" />
      ))}
      {/* Pakistan (approx.) */}
      <g transform="translate(650 150)">
        <circle r="20" className="animate-pulse-ring fill-brand-violet/40" style={{ transformOrigin: "center", transformBox: "fill-box" }} />
        <circle r="6" className="fill-brand-cyan" />
      </g>
    </svg>
  );
}

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      setTime(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: site.timezone }).format(new Date()));
    fmt();
    const t = setInterval(fmt, 30_000);
    return () => clearInterval(t);
  }, []);
  return <span suppressHydrationWarning>{time || "—"}</span>;
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.company_website) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 501) {
        // Email sending isn't configured: open the visitor's email app with the message filled in.
        const body = `${data.message}\n\n— ${data.name} (${data.email})${data.company ? `, ${data.company}` : ""}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry from ${data.name}`)}&body=${encodeURIComponent(body)}`;
        setStatus("sent");
        form.reset();
        return;
      }
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const socials = [
    { label: "Email", href: `mailto:${site.email}`, icon: LuMail },
    site.socials.github && { label: "GitHub", href: site.socials.github, icon: SiGithub },
    site.socials.linkedin && { label: "LinkedIn", href: site.socials.linkedin, icon: FaLinkedinIn },
  ].filter(Boolean) as { label: string; href: string; icon: ComponentType<{ className?: string }> }[];

  return (
    <section id="contact" className="section overflow-hidden">
      <MapBackground />
      <div className="container-x relative">
        <SectionHeading
          kicker="Contact"
          title="Let's talk about your project"
          text="Share a few details and I'll get back to you with questions, next steps and a rough estimate."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <motion.div variants={slideLeft} {...inView} className="space-y-4">
            <a href={`mailto:${site.email}`} className="glow-card group flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet text-white transition-transform group-hover:scale-110 group-hover:-rotate-6">
                <LuMail className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-400">Email</span>
                <span className="block truncate text-white">{site.email}</span>
              </span>
            </a>
            <div className="glow-card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.05] text-brand-cyan ring-1 ring-white/10">
                <LuMapPin className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Based in</span>
                <span className="block text-white">{site.location} · works remotely worldwide</span>
              </span>
            </div>
            <div className="glow-card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.05] text-brand-cyan ring-1 ring-white/10">
                <LuClock className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-slate-400">My local time</span>
                <span className="block text-white">
                  <LocalTime /> (PKT, UTC+5)
                </span>
              </span>
            </div>
            <ul className="flex gap-3 pt-2" aria-label="Social links">
              {socials.map((s) => (
                <li key={s.label}>
                  <motion.a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -4, rotate: -6 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass grid h-12 w-12 place-items-center rounded-2xl text-slate-300 transition-colors hover:border-brand-violet/50 hover:text-white hover:shadow-[0_0_24px_-4px_rgba(139,92,246,0.8)]"
                  >
                    <s.icon className="h-5 w-5" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} {...inView} className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex min-h-[24rem] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <svg viewBox="0 0 52 52" className="h-20 w-20" aria-hidden>
                    <motion.circle
                      cx="26" cy="26" r="24" fill="none" strokeWidth="2.5" stroke="url(#ok)"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease }}
                    />
                    <motion.path
                      d="M15 27 l7 7 l15 -15" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="white"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.5, ease }}
                    />
                    <defs>
                      <linearGradient id="ok" x1="0" x2="1">
                        <stop offset="0" stopColor="#22d3ee" />
                        <stop offset="1" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">Message on its way</h3>
                  <p className="mt-2 max-w-sm text-slate-400">Thanks for reaching out — I&apos;ll get back to you soon.</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-brand-cyan hover:text-white">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -10 }} className="space-y-4" noValidate={false}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="name" label="Your name" autoComplete="name" />
                    <Field id="email" label="Email address" type="email" autoComplete="email" />
                  </div>
                  <Field id="company" label="Company" required={false} autoComplete="organization" />
                  <Field id="message" label="Tell me about your project" textarea />
                  {/* honeypot field for bots */}
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                  {status === "error" && (
                    <p className="text-sm text-rose-400" role="alert">
                      The message couldn&apos;t be sent. Please email me directly at {site.email}.
                    </p>
                  )}
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-violet py-4 font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.8)] disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <LuLoader className="h-4 w-4 animate-spin" aria-hidden /> Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <LuSend className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
