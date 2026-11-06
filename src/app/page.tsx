import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";

// Below-the-fold sections are split into separate chunks so the first screen loads fast.
// They are still rendered on the server, so all content stays crawlable for SEO.
const WhyHireMe = dynamic(() => import("@/components/sections/WhyHireMe").then((m) => m.WhyHireMe));
const Skills = dynamic(() => import("@/components/sections/Skills").then((m) => m.Skills));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((m) => m.TechStack));
const Experience = dynamic(() => import("@/components/sections/Experience").then((m) => m.Experience));
const Projects = dynamic(() => import("@/components/sections/Projects").then((m) => m.Projects));
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies").then((m) => m.CaseStudies));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => m.Services));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials));
const CtaBanner = dynamic(() => import("@/components/sections/CtaBanner").then((m) => m.CtaBanner));
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => m.Contact));

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <WhyHireMe />
        <Skills />
        <TechStack />
        <Experience />
        <Projects />
        <CaseStudies />
        <Services />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
