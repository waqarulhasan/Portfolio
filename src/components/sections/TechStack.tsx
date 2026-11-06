"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiAngular,
  SiBlazor,
  SiBootstrap,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiJavascript,
  SiJira,
  SiKotlin,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/lib/data";
import { inView, scaleIn, stagger } from "@/lib/motion";

const logos: Record<(typeof techStack)[number], { name: string; icon: IconType; color: string }> = {
  dotnet: { name: ".NET", icon: SiDotnet, color: "#8B5CF6" },
  csharp: { name: "C#", icon: TbBrandCSharp, color: "#A179DC" },
  blazor: { name: "Blazor", icon: SiBlazor, color: "#7C5CFC" },
  react: { name: "React", icon: SiReact, color: "#61DAFB" },
  nextjs: { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  angular: { name: "Angular", icon: SiAngular, color: "#E23237" },
  typescript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  javascript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  nodejs: { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  nestjs: { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  python: { name: "Python", icon: SiPython, color: "#4B8BBE" },
  django: { name: "Django", icon: SiDjango, color: "#44B78B" },
  fastapi: { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  sqlserver: { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
  postgresql: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  mongodb: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  firebase: { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
  linux: { name: "Linux", icon: SiLinux, color: "#FCC624" },
  aws: { name: "AWS", icon: FaAws, color: "#FF9900" },
  azure: { name: "Azure", icon: VscAzure, color: "#0089D6" },
  gcp: { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  github: { name: "GitHub & Actions", icon: SiGithub, color: "#FFFFFF" },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  sass: { name: "SCSS", icon: SiSass, color: "#CC6699" },
  bootstrap: { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  tensorflow: { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  kotlin: { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  cplusplus: { name: "C++", icon: SiCplusplus, color: "#00599C" },
  jira: { name: "Jira", icon: SiJira, color: "#2684FF" },
};

export function TechStack() {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <SectionHeading kicker="Tech stack" title="Tools I reach for every day" center />
        <motion.ul
          variants={stagger(0.03)}
          {...inView}
          className="mx-auto grid max-w-4xl grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-10"
        >
          {techStack.map((key) => {
            const { name, icon: Logo, color } = logos[key];
            return (
              <motion.li key={key} variants={scaleIn} className="group relative">
                <motion.div
                  tabIndex={0}
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileFocus={{ y: -6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="glow-card grid aspect-square place-items-center rounded-2xl outline-none"
                  style={{ ["--c" as string]: color }}
                  aria-label={name}
                >
                  <Logo
                    aria-hidden
                    className="h-7 w-7 text-slate-400 transition duration-300 group-hover:text-[var(--c)] group-hover:drop-shadow-[0_0_10px_var(--c)] group-focus-within:text-[var(--c)]"
                  />
                </motion.div>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 translate-y-1 rounded-lg border border-white/10 bg-surface-2 px-2.5 py-1 text-xs whitespace-nowrap text-white opacity-0 shadow-xl transition duration-200 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {name}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
