// app/page.tsx — Next.js (App Router) + Tailwind CSS
// Edit only the `profile` object below; the layout updates automatically.

import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

const profile = {
  name: "Waqar UL Hassan",
  title: "Full Stack Software Engineer",
  location: "Pakistan",
  tagline:
    "Building scalable web, mobile, and cloud solutions with ASP.NET Core, Angular, React, React Native, .NET MAUI, Azure, and AWS.",
  about:
    "Full-Stack Software Engineer with more than 6 years of experience delivering enterprise web applications, mobile applications, SaaS solutions, and cloud-native systems for international clients.",
  email: "waqarulhassan2040@gmail.com",
  phone: "03337419194",
  cvUrl: "/cv.pdf", // put your CV in /public/cv.pdf
  socials: [
    // { label: "GitHub", href: "https://github.com/your-username" },
    // { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  ] as { label: string; href: string }[],
  stats: [
    { value: "6+", label: "Years experience" },
    { value: "30+", label: "Projects delivered" },
    { value: "10+", label: "Technologies" },
  ],
  skills: {
    "Backend": [".NET Core", "ASP.NET MVC", "Node.js"],
    "Frontend": ["Angular", "React", "Next.js"],
    "Mobile": ["React Native", ".NET MAUI"],
    "Data & Cloud": ["SQL Server", "PostgreSQL", "MongoDB", "Azure", "AWS", "Docker"],
  } as Record<string, string[]>,
  // Each card shows your role on the project. Add link: "https://..." for live links.
  projects: [
    { name: "Neos-7 Ecosystem", role: "Project Manager", description: "Managed delivery of a multi-service marketing platform that lets brands and influencers plan campaigns, schedule posts with AI assistance, and reward audience engagement with the NB7 token.", tech: ["Django", "NestJS", ".NET Core", "React", "PostgreSQL", "Web3"], link: "https://www.neos7.io/" },
    { name: "VZTA Smart Town Mobile App", role: "Project Manager", description: "Led the mobile app that turns a town centre into a digital high street, so residents can find nearby shops, offers, services and events in real time.", tech: ["React", "Next.js", "MongoDB", "AWS", "Location-Based"], link: "http://app.vzta.com/" },
    { name: "VZTA Digital Screens Platform", role: "Project Manager", description: "Coordinated a real-time signage system that pushes promotions and event content from a central dashboard to public screens across town centres.", tech: ["Next.js", "React", "Real-Time", "AWS"], link: "https://digitalscreen.vzta.com/smart/65b971ce288534a79246617b/promotions" },
    { name: "VZTA Business Portal", role: "Project Manager", description: "Delivered a self-service portal where local retailers manage listings, publish offers and message nearby customers.", tech: ["ASP.NET Core", "React", "Local Commerce"], link: "http://develop.business.vzta.com/" },
    { name: "VZTA Admin & Authority Dashboard", role: "Project Manager", description: "Managed the control centre for the VZTA ecosystem, giving councils and admins oversight of users, businesses, content and engagement data.", tech: ["ASP.NET Core", "React", "Analytics"], link: "http://develop.admin.vzta.com/" },
    { name: "VZTA Data Migration Utility", role: "Project Manager", description: "Planned the migration of legacy business and user records into the VZTA platform with validation and minimal downtime.", tech: [".NET Core", "ETL", "Automation"], link: "http://admin.vzta.com/" },
    { name: "Stella Home Manager", role: "Project Manager", description: "Led a household organiser covering rooms, family members, chores and reminders, with alerts and emergency handling.", tech: ["ASP.NET Core", "React", "SQL Server"], link: "https://front.stellatech.co.uk/" },
    { name: "Guul Prime Translation Platform", role: "Project Manager", description: "Managed a translation-services platform where clients submit jobs and teams track localization work through role-based dashboards.", tech: ["ASP.NET Core", "React", "SQL Server", "Localization"], link: "https://guulprime.com/" },
    { name: "Guul Prime Mobile App", role: "Project Manager", description: "Delivered the Android companion app for assigning, tracking and completing translation tasks on the go.", tech: ["React Native", "Android", "REST APIs"], link: "https://play.google.com/store/apps/details?id=com.guulprime.app&hl=en" },
    { name: "YouBega Platform", role: "Project Manager", description: "Coordinated an all-in-one ecosystem combining online shopping, a services marketplace and built-in messaging.", tech: ["Node.js", "Angular", "SQL Server", "Socket.IO"], link: "https://www.youbega.com/" },
    { name: "YouBega Messenger", role: "Project Manager", description: "Led the real-time chat app with push notifications, built to scale with the YouBega platform.", tech: ["React Native", "Socket.IO", "Firebase"], link: "https://play.google.com/store/apps/details?id=com.youbega.messenger&hl=en" },
    { name: "E-Invoice System", role: "Project Manager", description: "Managed an invoicing product that generates and validates XRechnung and ZUGFeRD e-invoices for compliance.", tech: [".NET Core", "XML/EDI", "Compliance"], link: "https://e-invoice.ease.pk/" },
    { name: "BeeCam", role: "Project Manager", description: "Delivered a cross-platform camera and media desktop app for Windows and Linux with native-feeling performance.", tech: [".NET Core", "Avalonia UI", "Desktop"], link: "https://beewen.com/" },
    { name: "BeeStore", role: "Project Manager", description: "Led an app-distribution store for desktop and mobile, handling packages and automatic updates.", tech: [".NET", "Xamarin", "C#"], link: "https://neos7.io/" },
    { name: "WendeWork Platform", role: "Project Manager", description: "Managed a business platform with a modern UI and scalable backend for day-to-day operations.", tech: ["ASP.NET Core", "Angular", "SQL Server"], link: "https://wendewerk.com/" },
    { name: "BrainGain", role: "Project Manager", description: "Delivered an e-learning platform focused on structured courses and student engagement.", tech: ["React", "Node.js", "MongoDB", "EdTech"], link: "https://www.braingain-lernfoerderung.com/" },
    { name: "AD Log System", role: "Project Manager", description: "Coordinated a logging and monitoring tool for tracking application activity and audit events.", tech: [".NET Core", "Angular", "Monitoring"], link: "https://adlog.ease.pk/" },
    { name: "CertCom", role: "Project Manager", description: "Enterprise-grade software solution.", tech: [] },
  ] as { name: string; description: string; tech: string[]; role?: string; link?: string }[],
  experience: [
    { role: "Full Stack .NET Developer", company: "DigiTech Fox", period: "2023 — Present", points: [] as string[] },
    { role: "Full Stack Developer", company: "Expert Soft Solution", period: "2022 — 2023", points: [] as string[] },
    { role: "Full Stack Developer", company: "Auxilium Digital", period: "2021 — 2022", points: [] as string[] },
    { role: "Team Lead / ASP.NET Core Developer", company: "Ultimate Solutions", period: "", points: [] as string[] },
    { role: "ASP.NET Developer", company: "East Flicker", period: "", points: [] as string[] },
  ],
};


// Groups projects into product families by name; everything else is "Other products".
const FAMILIES = ["VZTA", "Guul Prime", "YouBega", "Bee"];
function familyOf(name: string) {
  return FAMILIES.find((f) => name.startsWith(f)) ?? "Other products";
}
const families = [...FAMILIES, "Other products"]
  .map((f) => ({ name: f === "Bee" ? "Beewen (BeeCam & BeeStore)" : f, items: profile.projects.filter((p) => familyOf(p.name) === f) }))
  .filter((g) => g.items.length > 0);

export default function Home() {
  const initials = profile.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <main className={`${display.variable} ${body.variable} min-h-screen bg-[#EEF0F3] font-[family-name:var(--font-body)] text-[#121A2B] antialiased selection:bg-[#F2B632]/60`}>
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Skip to projects
      </a>

      {/* nav */}
      <header className="sticky top-0 z-30 border-b border-[#121A2B]/10 bg-[#EEF0F3]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#" className="flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#121A2B] text-sm text-[#F2B632]">{initials}</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>
          <div className="flex items-center gap-5 text-sm text-[#5B6578] sm:gap-7">
            <a href="#work" className="hover:text-[#121A2B]">Work</a>
            <a href="#experience" className="hover:text-[#121A2B]">Experience</a>
            <a href="#skills" className="hidden hover:text-[#121A2B] sm:inline">Skills</a>
            <a href={`mailto:${profile.email}`} className="rounded-full bg-[#2F4BDB] px-4 py-2 font-medium text-white hover:bg-[#2338B0]">
              Email me
            </a>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* hero */}
        <section className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-[#5B6578] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#1FA971]" /> Available for new projects
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
              {profile.name}
            </h1>
            <p className="mt-6 text-xl font-medium text-[#2F4BDB] sm:text-2xl">{profile.title}</p>
            <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-[#5B6578]">{profile.tagline}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-[#121A2B] px-6 py-3 font-medium text-white hover:bg-[#2F4BDB]">
                See the projects
              </a>
              <a href={profile.cvUrl} className="rounded-full border border-[#121A2B]/20 bg-white px-6 py-3 font-medium hover:border-[#121A2B]">
                Download CV
              </a>
            </div>
          </div>

          {/* delivery summary — the one bold element */}
          <aside className="rounded-3xl bg-[#121A2B] p-7 text-white">
            <p className="text-sm text-white/60">Delivery record</p>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-7">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-sm text-white/60">{s.label}</dt>
                  <dd className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#F2B632]">{s.value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-sm text-white/60">Shown here</dt>
                <dd className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#F2B632]">{profile.projects.length}</dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* about */}
        <section className="grid gap-6 border-t border-[#121A2B]/10 py-16 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">About</h2>
          <p className="max-w-[40rem] text-lg leading-relaxed text-[#3A4456]">{profile.about}</p>
        </section>

        {/* work */}
        <section id="work" className="scroll-mt-24 border-t border-[#121A2B]/10 py-16">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">Selected work</h2>
            <p className="text-[#5B6578]">{profile.projects.length} projects across {families.length} product families</p>
          </div>

          <div className="space-y-10">
            {families.map((g) => (
              <div key={g.name} className="overflow-hidden rounded-3xl bg-white shadow-[0_1px_0_rgba(18,26,43,0.06)]">
                <h3 className="flex items-center justify-between border-b border-[#121A2B]/8 px-6 py-4 font-[family-name:var(--font-display)] text-lg font-semibold sm:px-8">
                  {g.name}
                  <span className="rounded-full bg-[#EEF0F3] px-2.5 py-0.5 text-sm font-medium text-[#5B6578]">{g.items.length}</span>
                </h3>
                <ul>
                  {g.items.map((p) => (
                    <li key={p.name} className="grid gap-3 border-b border-[#121A2B]/8 px-6 py-6 last:border-0 sm:px-8 md:grid-cols-[14rem_1fr_auto] md:gap-8">
                      <div>
                        <p className="font-semibold leading-snug">{p.name}</p>
                        {p.role && <p className="mt-1 text-sm text-[#2F4BDB]">{p.role}</p>}
                      </div>
                      <div>
                        <p className="max-w-[38rem] leading-relaxed text-[#3A4456]">{p.description}</p>
                        {p.tech.length > 0 && (
                          <ul className="mt-3 flex flex-wrap gap-1.5">
                            {p.tech.map((t) => (
                              <li key={t} className="rounded-md bg-[#EEF0F3] px-2 py-0.5 text-xs text-[#5B6578]">{t}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="h-fit w-fit whitespace-nowrap rounded-full border border-[#121A2B]/15 px-4 py-1.5 text-sm font-medium hover:border-[#2F4BDB] hover:bg-[#2F4BDB] hover:text-white"
                        >
                          Visit site
                        </a>
                      ) : (
                        <span />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* experience */}
        <section id="experience" className="scroll-mt-24 grid gap-8 border-t border-[#121A2B]/10 py-16 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">Experience</h2>
          <ol className="relative space-y-8 border-l-2 border-[#121A2B]/10 pl-7">
            {profile.experience.map((e, i) => (
              <li key={e.role + e.company} className="relative">
                <span className={`absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-4 border-[#EEF0F3] ${i === 0 ? "bg-[#F2B632]" : "bg-[#121A2B]/30"}`} />
                <p className="font-semibold">{e.role}</p>
                <p className="text-[#5B6578]">
                  {e.company}
                  {e.period && <span className="ml-2 text-sm">({e.period})</span>}
                </p>
                {e.points.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[#3A4456]">
                    {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* skills */}
        <section id="skills" className="scroll-mt-24 grid gap-8 border-t border-[#121A2B]/10 py-16 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">Skills</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {Object.entries(profile.skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-3 font-semibold">{group}</h3>
                <p className="leading-relaxed text-[#3A4456]">{items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* contact */}
      <section className="bg-[#121A2B] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="max-w-[18ch] font-[family-name:var(--font-display)] text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            Have a product to build? Let’s talk.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-[#F2B632] px-6 py-3 font-semibold text-[#121A2B] hover:bg-white">
              {profile.email}
            </a>
            {profile.phone && (
              <a href={`tel:${profile.phone}`} className="rounded-full border border-white/25 px-6 py-3 font-medium hover:border-white">
                Call {profile.phone}
              </a>
            )}
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-6 py-3 font-medium hover:border-white">
                {s.label}
              </a>
            ))}
          </div>
          <p className="mt-16 text-sm text-white/50">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </section>
    </main>
  );
}
