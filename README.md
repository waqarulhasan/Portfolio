# Waqar UL Hassan — Portfolio

Next.js 15 · TypeScript · Tailwind CSS 4 · Framer Motion 12

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start
```

Requires Node.js 18.18 or newer (Node 20+ recommended).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, import the repo (framework: Next.js — no settings needed).
3. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with your live URL
   (for example `https://waqar-ul-hassan.vercel.app`). This is used for SEO, the sitemap and social previews.

### Optional: email delivery for the contact form

Without setup, the form opens the visitor's email app with the message filled in.
To receive messages directly by email, create a free key at https://resend.com and add:

| Variable | Example |
| --- | --- |
| `RESEND_API_KEY` | `re_...` |
| `CONTACT_TO_EMAIL` | `waqarulhassan2040@gmail.com` |
| `CONTACT_FROM_EMAIL` | `Portfolio <onboarding@resend.dev>` (or an address on your verified domain) |

## Edit the content

Everything is in **`src/lib/data.ts`** — name, roles, stats, about, skills (and progress-bar levels),
experience, projects, case studies, services, testimonials and social links. The components read from it.

- **Social links:** fill in `site.socials.github` / `linkedin` and the buttons appear automatically.
- **Project screenshots:** put an image in `public/projects/` and set `image: "/projects/name.jpg"` on the project.
  Until then a generated cover is shown.
- **GitHub buttons:** add `github: "https://github.com/..."` to a project.
- **Testimonials:** the section is hidden until you add real client quotes to `testimonials`.
- **Resume:** replace `public/resume.pdf`.

## Structure

```
src/
  app/            layout (SEO metadata, fonts, JSON-LD), page, sitemap, robots, manifest,
                  Open Graph image, contact API route, global styles
  components/
    layout/       Navbar, ScrollProgress, Loader, Footer, BackToTop
    hero/         Hero, TypingText, Particles, MouseGlow
    sections/     About, WhyHireMe, Skills (+ SkillSphere), TechStack, Experience, Projects,
                  CaseStudies, Services, Testimonials, CtaBanner, Contact
    ui/           Reveal, SectionHeading, MagneticButton, TiltCard, Counter, Icon
  hooks/          useActiveSection, useFinePointer
  lib/            data.ts (content), motion.ts (shared animation variants), utils.ts
public/           favicons, manifest icons, resume.pdf
```

## Performance notes

- Sections below the hero are code-split with `next/dynamic` but still server-rendered, so all content is crawlable.
- Particles and the skills sphere pause when off-screen or in a background tab.
- Hover-only effects (tilt, cursor glow, magnetic buttons) are skipped on touch devices.
- Everything respects the visitor's "reduce motion" setting.
- Fonts load through `next/font` (self-hosted, no layout shift).
