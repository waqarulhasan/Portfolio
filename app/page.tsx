// app/page.tsx — Next.js (App Router). No Tailwind needed: the styles are at the bottom of this file.
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
const familyOf = (name: string) => FAMILIES.find((f) => name.startsWith(f)) ?? "Other products";
const families = [...FAMILIES, "Other products"]
  .map((f) => ({ name: f === "Bee" ? "Beewen (BeeCam & BeeStore)" : f, items: profile.projects.filter((p) => familyOf(p.name) === f) }))
  .filter((g) => g.items.length > 0);

export default function Home() {
  const initials = profile.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <main className={`pf ${display.variable} ${body.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <a href="#work" className="skip">Skip to projects</a>

      <header className="nav">
        <nav className="wrap nav-in">
          <a href="#" className="brand">
            <span className="mono">{initials}</span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <div className="links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills" className="hide-sm">Skills</a>
            <a href={`mailto:${profile.email}`} className="btn btn-blue">Email me</a>
          </div>
        </nav>
      </header>

      <div className="wrap">
        <section className="hero">
          <div>
            <p className="badge"><span className="dot" /> Available for new projects</p>
            <h1 className="name">{profile.name}</h1>
            <p className="title">{profile.title}</p>
            <p className="tagline">{profile.tagline}</p>
            <div className="row">
              <a href="#work" className="btn btn-dark">See the projects</a>
            </div>
          </div>
          <aside className="record">
            <p className="record-label">Delivery record</p>
            <dl>
              {[...profile.stats, { value: String(profile.projects.length), label: "Shown here" }].map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section className="split">
          <h2 className="h2">About</h2>
          <p className="lead">{profile.about}</p>
        </section>

        <section id="work" className="block">
          <div className="work-head">
            <h2 className="h2 big">Selected work</h2>
            <p className="muted">{profile.projects.length} projects across {families.length} product families</p>
          </div>
          {families.map((g) => (
            <div key={g.name} className="family">
              <h3 className="family-head">
                {g.name}
                <span className="count">{g.items.length}</span>
              </h3>
              <ul className="plain">
                {g.items.map((p) => (
                  <li key={p.name} className="proj">
                    <div>
                      <p className="proj-name">{p.name}</p>
                      {p.role && <p className="proj-role">{p.role}</p>}
                    </div>
                    <div>
                      <p className="proj-desc">{p.description}</p>
                      {p.tech.length > 0 && (
                        <ul className="plain tags">
                          {p.tech.map((t) => <li key={t}>{t}</li>)}
                        </ul>
                      )}
                    </div>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-small">Visit site</a>
                    ) : <span />}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="experience" className="split">
          <h2 className="h2">Experience</h2>
          <ol className="plain timeline">
            {profile.experience.map((e, i) => (
              <li key={e.role + e.company} className={i === 0 ? "now" : ""}>
                <p className="proj-name">{e.role}</p>
                <p className="muted">
                  {e.company}
                  {e.period && <span className="period">({e.period})</span>}
                </p>
                {e.points.length > 0 && <ul className="points">{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="split">
          <h2 className="h2">Skills</h2>
          <div className="skills">
            {Object.entries(profile.skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="skill-head">{group}</h3>
                <p className="body-text">{items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="contact">
        <div className="wrap">
          <h2 className="contact-title">Have a product to build? Let’s talk.</h2>
          <div className="row">
            <a href={`mailto:${profile.email}`} className="btn btn-yellow">{profile.email}</a>
            {profile.phone && <a href={`tel:${profile.phone}`} className="btn btn-outline">Call {profile.phone}</a>}
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn btn-outline">{s.label}</a>
            ))}
          </div>
          <p className="copy">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </section>
    </main>
  );
}

const css = `
.pf{--fog:#EEF0F3;--paper:#fff;--ink:#121A2B;--text:#3A4456;--slate:#5B6578;--blue:#2F4BDB;--blue-d:#2338B0;--sun:#F2B632;--line:rgba(18,26,43,.1);
  min-height:100vh;background:var(--fog);color:var(--ink);font-family:var(--font-body),system-ui,sans-serif;font-size:16px;line-height:1.5;-webkit-font-smoothing:antialiased}
body{margin:0;background:#EEF0F3}
.pf *{box-sizing:border-box}
.pf p,.pf h1,.pf h2,.pf h3,.pf dl,.pf dd{margin:0}
.pf a{color:inherit;text-decoration:none}
.pf a:focus-visible{outline:3px solid var(--blue);outline-offset:3px;border-radius:999px}
.pf ::selection{background:rgba(242,182,50,.6)}
.plain{list-style:none;margin:0;padding:0}
.wrap{max-width:72rem;margin:0 auto;padding:0 1.25rem}
@media(min-width:640px){.wrap{padding:0 2rem}}
.skip{position:absolute;left:-9999px}.skip:focus{left:1rem;top:1rem;position:fixed;z-index:50;background:#fff;padding:.5rem 1rem;border-radius:.5rem}

.nav{position:sticky;top:0;z-index:30;border-bottom:1px solid var(--line);background:rgba(238,240,243,.85);backdrop-filter:blur(8px)}
.nav-in{display:flex;align-items:center;justify-content:space-between;padding-top:.75rem;padding-bottom:.75rem}
.brand{display:flex;align-items:center;gap:.75rem;font-weight:600}
.mono{display:grid;place-items:center;width:2.25rem;height:2.25rem;border-radius:50%;background:var(--ink);color:var(--sun);font-size:.85rem}
.links{display:flex;align-items:center;gap:1.25rem;font-size:.9rem;color:var(--slate)}
.links a:not(.btn):hover{color:var(--ink)}
@media(max-width:639px){.brand-name,.hide-sm{display:none}}

.btn{display:inline-block;border-radius:999px;padding:.75rem 1.5rem;font-weight:500;transition:background .15s,border-color .15s,color .15s;white-space:nowrap}
.btn-blue{background:var(--blue);color:#fff!important;padding:.5rem 1rem}.btn-blue:hover{background:var(--blue-d)}
.btn-dark{background:var(--ink);color:#fff!important}.btn-dark:hover{background:var(--blue)}
.btn-ghost{background:#fff;border:1px solid rgba(18,26,43,.2)}.btn-ghost:hover{border-color:var(--ink)}
.btn-small{padding:.4rem 1rem;font-size:.875rem;border:1px solid rgba(18,26,43,.15);height:fit-content;width:fit-content}
.btn-small:hover{background:var(--blue);border-color:var(--blue);color:#fff!important}
.btn-yellow{background:var(--sun);color:var(--ink)!important;font-weight:600}.btn-yellow:hover{background:#fff}
.btn-outline{border:1px solid rgba(255,255,255,.25)}.btn-outline:hover{border-color:#fff}
.row{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2.25rem}

.hero{display:grid;gap:3rem;padding:5rem 0}
@media(min-width:1024px){.hero{grid-template-columns:1.5fr 1fr;align-items:end;padding:7rem 0}}
.badge{display:inline-flex;align-items:center;gap:.5rem;background:#fff;border-radius:999px;padding:.35rem .8rem;font-size:.875rem;color:var(--slate);margin-bottom:1.5rem!important;box-shadow:0 1px 2px rgba(18,26,43,.06)}
.dot{width:.5rem;height:.5rem;border-radius:50%;background:#1FA971}
.name{font-family:var(--font-display),sans-serif;font-size:clamp(3rem,9vw,6.5rem);font-weight:800;line-height:.92;letter-spacing:-.04em}
.title{margin-top:1.5rem!important;font-size:clamp(1.25rem,2.5vw,1.5rem);font-weight:500;color:var(--blue)}
.tagline{margin-top:1rem!important;max-width:34rem;font-size:1.125rem;line-height:1.65;color:var(--slate)}

.record{background:var(--ink);color:#fff;border-radius:1.5rem;padding:1.75rem}
.record-label,.record dt{font-size:.875rem;color:rgba(255,255,255,.6)}
.record dl{display:grid;grid-template-columns:1fr 1fr;gap:1.75rem 1.5rem;margin-top:1.25rem}
.record dd{font-family:var(--font-display),sans-serif;font-size:2.25rem;font-weight:700;color:var(--sun)}

.split{display:grid;gap:1.5rem 2rem;border-top:1px solid var(--line);padding:4rem 0;scroll-margin-top:5rem}
@media(min-width:1024px){.split{grid-template-columns:1fr 2fr}}
.block{border-top:1px solid var(--line);padding:4rem 0;scroll-margin-top:5rem}
.h2{font-family:var(--font-display),sans-serif;font-size:1.875rem;font-weight:700;letter-spacing:-.02em}
.h2.big{font-size:clamp(2.25rem,5vw,3rem)}
.lead{max-width:40rem;font-size:1.125rem;line-height:1.7;color:var(--text)}
.muted{color:var(--slate)}
.body-text{color:var(--text);line-height:1.65}

.work-head{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:1rem;margin-bottom:2.5rem}
.family{background:var(--paper);border-radius:1.5rem;overflow:hidden;margin-bottom:2.5rem;box-shadow:0 1px 0 rgba(18,26,43,.06)}
.family-head{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;border-bottom:1px solid rgba(18,26,43,.08);font-family:var(--font-display),sans-serif;font-size:1.125rem;font-weight:600}
.count{background:var(--fog);border-radius:999px;padding:.1rem .6rem;font-size:.875rem;font-weight:500;color:var(--slate)}
.proj{display:grid;gap:.75rem;padding:1.5rem;border-bottom:1px solid rgba(18,26,43,.08)}
.proj:last-child{border-bottom:0}
@media(min-width:640px){.family-head,.proj{padding-left:2rem;padding-right:2rem}}
@media(min-width:768px){.proj{grid-template-columns:14rem 1fr auto;gap:2rem}}
.proj-name{font-weight:600;line-height:1.35}
.proj-role{margin-top:.25rem!important;font-size:.875rem;color:var(--blue)}
.proj-desc{max-width:38rem;line-height:1.65;color:var(--text)}
.tags{display:flex;flex-wrap:wrap;gap:.375rem;margin-top:.75rem}
.tags li{background:var(--fog);border-radius:.375rem;padding:.1rem .5rem;font-size:.75rem;color:var(--slate)}

.timeline{border-left:2px solid var(--line);padding-left:1.75rem}
.timeline>li{position:relative;margin-bottom:2rem}
.timeline>li::before{content:"";position:absolute;left:-2.35rem;top:.35rem;width:1rem;height:1rem;border-radius:50%;border:4px solid var(--fog);background:rgba(18,26,43,.3)}
.timeline>li.now::before{background:var(--sun)}
.period{margin-left:.5rem;font-size:.875rem}
.points{margin:.5rem 0 0;padding-left:1.25rem;color:var(--text)}

.skills{display:grid;gap:2rem}
@media(min-width:640px){.skills{grid-template-columns:1fr 1fr}}
.skill-head{font-size:1rem;font-weight:600;margin-bottom:.75rem!important}

.contact{background:var(--ink);color:#fff;padding:5rem 0}
.contact-title{max-width:18ch;font-family:var(--font-display),sans-serif;font-size:clamp(2.25rem,6vw,4.5rem);font-weight:800;line-height:.95;letter-spacing:-.03em}
.copy{margin-top:4rem!important;font-size:.875rem;color:rgba(255,255,255,.5)}
@media(prefers-reduced-motion:reduce){.pf *{transition:none!important}}
`;
