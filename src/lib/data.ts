/**
 * All portfolio content lives here. Edit this file to update the site —
 * every section reads from it, so you never need to touch the components.
 */

export const site = {
  name: "Waqar UL Hassan",
  initials: "WUH",
  title: "Full Stack Software Engineer",
  roles: ["Full Stack Developer", "ASP.NET Core Expert", "QA Engineer", "Azure & Cloud Developer"],
  tagline:
    "I design and ship scalable web, mobile and cloud products — from ASP.NET Core APIs to React, Angular and React Native front ends.",
  location: "Pakistan",
  timezone: "Asia/Karachi",
  email: "waqarulhassan2040@gmail.com",
  resume: "/resume.pdf",
  available: true,
  availability: "Available for new projects",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://waqar-ul-hassan.vercel.app",
  description:
    "Waqar UL Hassan — Full Stack Software Engineer with 7+ years building scalable web, mobile and cloud applications with ASP.NET Core, Angular, React, React Native, .NET MAUI, Azure and AWS.",
  keywords: [
    "Waqar UL Hassan",
    "Full Stack Developer",
    "ASP.NET Core Developer",
    ".NET Developer",
    "React Developer",
    "Angular Developer",
    "React Native Developer",
    ".NET MAUI",
    "Azure Developer",
    "AWS",
    "Freelance Software Engineer Pakistan",
  ],
  // Add your profile URLs here — buttons only appear for links you fill in.
  socials: {
    github: "",
    linkedin: "",
  },
};

export const stats = [
  { value: 7, suffix: "+", label: "Years experience" },
  { value: 30, suffix: "+", label: "Projects completed" },
  { value: 60, suffix: "+", label: "Technologies used" },
  { value: 6, suffix: "", label: "Companies & teams" },
];

export const about = {
  heading: "Engineer who owns the whole product, not just a ticket.",
  paragraphs: [
    "I'm a Full-Stack Software Engineer with 7+ years of experience delivering scalable web, mobile and desktop applications for international clients.",
    "My core stack is ASP.NET Core, Angular, React, React Native and .NET MAUI. I design RESTful APIs, lead development teams and deploy cloud-native solutions on AWS and Azure — across the full lifecycle, from architecture to production support.",
  ],
  // Short milestones for the About timeline.
  journey: [
    { year: "2018", text: "Started with C++ and ATL desktop components" },
    { year: "2019", text: "Joined East Flicker as an ASP.NET developer" },
    { year: "2021", text: "Led a sub-team at Ultimate Solutions" },
    { year: "2022", text: "BS Information Technology, University of Gujrat" },
    { year: "2023", text: "Independent full-stack engineer for global clients" },
  ],
};

export const whyHireMe = [
  {
    icon: "layers",
    title: "End-to-end ownership",
    text: "Architecture, APIs, front end, mobile, deployment and support — one engineer who sees the whole system.",
  },
  {
    icon: "smartphone",
    title: "Web, mobile and desktop",
    text: "One codebase strategy across React, React Native, .NET MAUI, WPF and Avalonia — less duplication, faster delivery.",
  },
  {
    icon: "cloud",
    title: "Cloud-native by default",
    text: "Docker, CI/CD and AWS or Azure infrastructure set up so releases are repeatable and boring.",
  },
  {
    icon: "shield",
    title: "Quality you can trust",
    text: "Clean architecture, code reviews and testing habits that keep production calm as the product grows.",
  },
  {
    icon: "users",
    title: "Team lead experience",
    text: "I've led a sub-team, coordinated delivery and reviewed code — I work well with PMs, designers and clients.",
  },
  {
    icon: "globe",
    title: "International delivery",
    text: "Years of remote work with clients across Europe and beyond, including German e-invoicing compliance.",
  },
];

/** `level` is a self-rating from 0–100 used for the progress bars — adjust to taste. */
export const skillGroups = [
  {
    name: "Backend",
    level: 95,
    items: ["ASP.NET Core", ".NET MVC", "Python (FastAPI, Django)", "Blazor Server", "Blazor WebAssembly", "RESTful APIs", "Node.js", "NestJS", "Express", "Entity Framework Core", "Identity Server", "OAuth 2.0", "JWT", "SignalR", "Socket.IO"],
  },
  {
    name: "Frontend",
    level: 90,
    items: ["React", "Next.js", "Angular", "AngularJS", "HTML", "SCSS", "Tailwind CSS", "Bootstrap", "jQuery", "DataTables", "Material Design", "Syncfusion UI"],
  },
  { name: "Mobile", level: 88, items: ["React Native (TypeScript)", "Custom native plugins (C++, Java, Kotlin)", ".NET MAUI", "Ionic"] },
  { name: "Desktop", level: 82, items: ["WPF (MVVM)", "Avalonia UI", ".NET MAUI Desktop", "Windows Forms", "Native AOT"] },
  { name: "Databases", level: 88, items: ["SQL Server", "PostgreSQL", "MongoDB", "Firebase"] },
  {
    name: "DevOps & Cloud",
    level: 84,
    items: ["Docker", "Linux", "AWS (ECS, ECR, EC2, Lambda, CloudFormation, RDS, ElastiCache)", "Azure", "GCP", "IIS", "CI/CD", "Git/GitHub"],
  },
  {
    name: "AI / Data Science",
    level: 68,
    items: ["Python", "Pandas", "NumPy", "TensorFlow", "TensorFlow Lite", "Machine Learning", "Deep Learning", "CNN", "RNN", "CoreML", ".NET ML"],
  },
  { name: "Methodologies", level: 86, items: ["Agile", "Scrum", "SDLC", "Jira", "Trello", "Azure DevOps"] },
];

/** Words that orbit in the interactive skills sphere. */
export const sphereWords = [
  "ASP.NET Core", "C#", "React", "Next.js", "Angular", "TypeScript", "React Native", ".NET MAUI", "Blazor", "Node.js",
  "NestJS", "Python", "Django", "FastAPI", "SQL Server", "PostgreSQL", "MongoDB", "Firebase", "Docker", "Azure",
  "AWS", "GCP", "SignalR", "Socket.IO", "EF Core", "OAuth 2.0", "WPF", "Avalonia", "Tailwind", "TensorFlow",
  "CI/CD", "Linux", "Kotlin", "C++", "Jira", "Scrum",
];

/** Keys map to logos in components/sections/TechStack.tsx. */
export const techStack = [
  "dotnet", "csharp", "blazor", "react", "nextjs", "angular", "typescript", "javascript", "nodejs", "nestjs",
  "python", "django", "fastapi", "sqlserver", "postgresql", "mongodb", "firebase", "docker", "linux", "aws",
  "azure", "gcp", "github", "tailwind", "sass", "bootstrap", "tensorflow", "kotlin", "cplusplus", "jira",
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  points: string[];
  highlight: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "DigiTech Fox (Freelance)",
    role: "Full Stack .NET Core Developer",
    period: "Oct 2023 — Present",
    summary: "Independent engineer delivering complete products for international clients.",
    points: [
      "Deliver web and mobile solutions using ASP.NET Core, Node.js, Angular, React, React Native and .NET MAUI.",
      "Design and implement backend services, RESTful APIs and cross-platform mobile applications.",
      "Manage SQL Server, PostgreSQL, MongoDB and Firebase databases; handle deployments, optimization and production support.",
    ],
    highlight: "Shipped platforms such as VZTA, Neos-7 and Guul Prime end to end",
    tech: ["ASP.NET Core", "Node.js", "React", "Angular", "React Native", ".NET MAUI"],
  },
  {
    company: "Expert Soft Solution",
    role: "Full Stack .NET Core Developer",
    period: "May 2022 — Oct 2023",
    summary: "Full-stack delivery across several concurrent client projects.",
    points: [
      "Built end-to-end web and mobile solutions using .NET Core, Node.js, Angular, React, React Native and .NET MAUI.",
      "Specialized in frontend architecture and React Native cross-platform development across multiple concurrent projects.",
      "Integrated backend services with SQL Server and NoSQL databases; supported deployments and system enhancements.",
    ],
    highlight: "Frontend architecture lead for multiple concurrent projects",
    tech: [".NET Core", "React", "React Native", "Angular", "SQL Server"],
  },
  {
    company: "Auxilium.Digital",
    role: "Full Stack .NET Core Developer",
    period: "Aug 2021 — May 2022",
    summary: "Client projects spanning web, API and mobile.",
    points: [
      "Delivered full-stack solutions using ASP.NET Core, Angular and React Native for client projects.",
      "Built RESTful APIs, responsive web interfaces and mobile application components.",
    ],
    highlight: "Full-stack delivery across web and mobile",
    tech: ["ASP.NET Core", "Angular", "React Native"],
  },
  {
    company: "Ultimate Solutions",
    role: "ASP.NET Core Developer / Team Lead",
    period: "Mar 2021 — Aug 2021",
    summary: "Backend lead with team responsibilities.",
    points: [
      "Led backend development using ASP.NET Core and contributed to Xamarin.Forms mobile application development.",
      "Managed a sub-team, coordinating delivery, code reviews and quality across assigned modules.",
    ],
    highlight: "Led a sub-team: delivery, code reviews and quality",
    tech: ["ASP.NET Core", "Xamarin.Forms"],
  },
  {
    company: "East Flicker",
    role: "ASP.NET Developer",
    period: "Aug 2019 — Jan 2021",
    summary: "International, industry-standard web projects.",
    points: [
      "Developed ASP.NET web applications as part of a developer team for international projects.",
      "Collaborated with cross-functional teams to deliver client-facing features on schedule.",
    ],
    highlight: "Client-facing features delivered on schedule",
    tech: ["ASP.NET", "C#", "SQL Server"],
  },
  {
    company: "Self Employed",
    role: "C++ Developer",
    period: "Sep 2018 — Jul 2019",
    summary: "Native Windows development foundations.",
    points: ["Developed Windows desktop components using C++ and ATL, building foundational skills in native application development."],
    highlight: "Native Windows components with C++ and ATL",
    tech: ["C++", "ATL", "Windows"],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  /** Optional screenshot in /public, e.g. "/projects/vzta.jpg". A generated cover is used when empty. */
  image?: string;
  featured?: boolean;
  /** Two colors for the generated cover. */
  hue: [string, string];
};

export const projects: Project[] = [
  {
    name: "VZTA Smart Town Platform",
    category: "Multi-tenant SaaS",
    description:
      "A digital high street: consumer app, business portal, authority dashboard and real-time digital screens that connect town centres with local shops, offers and events.",
    tech: ["Next.js", "React", "ASP.NET Core", "MongoDB", "AWS"],
    link: "https://app.vzta.com",
    featured: true,
    hue: ["#3B82F6", "#22D3EE"],
  },
  {
    name: "Neos-7 Ecosystem",
    category: "AI marketing + Web3",
    description:
      "Multi-service platform for brands and influencers to plan campaigns, automate publishing with AI and reward engagement with the NB7 token.",
    tech: ["Django", "NestJS", ".NET Core", "React", "PostgreSQL"],
    link: "https://www.neos7.io/",
    featured: true,
    hue: ["#8B5CF6", "#EC4899"],
  },
  {
    name: "Guul Prime",
    category: "Translation platform + apps",
    description:
      "Translation and localization platform where clients submit jobs and teams track work through role-based dashboards, with iOS and Android apps.",
    tech: ["ASP.NET Core", "React", "React Native", "SQL Server"],
    link: "https://guulprime.com/",
    featured: true,
    hue: ["#6366F1", "#3B82F6"],
  },
  {
    name: "YouBega",
    category: "Marketplace + messenger",
    description:
      "E-commerce, service marketplace and community in one ecosystem, with a real-time cross-platform messenger app.",
    tech: ["Node.js", "Angular", "Socket.IO", "React Native", "Firebase"],
    link: "https://www.youbega.com/",
    featured: true,
    hue: ["#06B6D4", "#8B5CF6"],
  },
  {
    name: "E-Invoice (XRechnung & ZUGFeRD)",
    category: "Enterprise compliance",
    description: "German-compliant electronic invoicing that generates and validates XRechnung and ZUGFeRD documents automatically.",
    tech: [".NET Core", "XML/EDI", "SQL Server"],
    link: "https://e-invoice.easetechcare.com",
    featured: true,
    hue: ["#2563EB", "#7C3AED"],
  },
  {
    name: "Stella Home Manager",
    category: "Home management",
    description: "Household organiser for rooms, family members, chores and reminders, with alerts and emergency handling.",
    tech: ["ASP.NET Core", "React", "SQL Server"],
    link: "https://front.stellatech.co.uk/",
    featured: true,
    hue: ["#A855F7", "#3B82F6"],
  },
  {
    name: "BeeCam",
    category: "Desktop app",
    description: "Cross-platform camera and media app for Windows and Linux with native-feeling performance.",
    tech: [".NET Core", "Avalonia UI"],
    link: "https://beewen.com/",
    hue: ["#F59E0B", "#8B5CF6"],
  },
  {
    name: "BeeStore",
    category: "App distribution",
    description: "Desktop and mobile app store handling packages and automatic update delivery.",
    tech: [".NET", "Xamarin", "C#"],
    hue: ["#F59E0B", "#3B82F6"],
  },
  {
    name: "WendeWork",
    category: "Workforce management",
    description: "Workforce and operations management platform for day-to-day business processes.",
    tech: ["ASP.NET Core", "Angular", "SQL Server"],
    link: "https://wendewerk.com/",
    hue: ["#10B981", "#3B82F6"],
  },
  {
    name: "BrainGain",
    category: "EdTech",
    description: "Learning and tutoring platform focused on structured courses and student engagement.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://www.braingain-lernfoerderung.com/",
    hue: ["#EC4899", "#8B5CF6"],
  },
  {
    name: "AD Log",
    category: "IT administration",
    description: "Active Directory logging and administration portal for auditing activity and events.",
    tech: [".NET Core", "Angular"],
    link: "https://adlog.ease.pk/",
    hue: ["#64748B", "#3B82F6"],
  },
  {
    name: "CertCom",
    category: "Certificate management",
    description: "Certificate management system for issuing, tracking and verifying certificates.",
    tech: [".NET", "SQL Server"],
    link: "http://certificate.ease.pk",
    hue: ["#0EA5E9", "#6366F1"],
  },
];

export const caseStudies = [
  {
    project: "VZTA Smart Town Platform",
    tag: "Multi-tenant SaaS",
    challenge:
      "Town centres needed one ecosystem for residents, retailers and local authorities — each with different data, permissions and devices.",
    approach: [
      "Split the product into consumer, business and admin portals on a shared multi-tenant backend.",
      "Built a real-time content pipeline that pushes promotions to physical digital screens.",
      "Wrote a migration utility to bring legacy business and user data in without downtime.",
    ],
    outcome: "One platform now powers mobile apps, web portals and street-level screens from a single source of content.",
    tech: ["Next.js", "React", "ASP.NET Core", "MongoDB", "AWS"],
    link: "https://app.vzta.com",
  },
  {
    project: "Neos-7 Ecosystem",
    tag: "AI + Web3",
    challenge:
      "Combine AI-assisted social publishing with a token-based reward system without turning the product into a fragile monolith.",
    approach: [
      "Designed a multi-service architecture across Django, NestJS and .NET Core, each owning one domain.",
      "Automated campaign scheduling and content publishing across social channels.",
      "Separated admin, staging and production environments for safe releases.",
    ],
    outcome: "Brands and influencers run campaigns and reward engagement with NB7 tokens in one place.",
    tech: ["Django", "NestJS", ".NET Core", "React", "PostgreSQL"],
    link: "https://www.neos7.io/",
  },
  {
    project: "E-Invoice (XRechnung & ZUGFeRD)",
    tag: "Enterprise compliance",
    challenge: "German businesses must send e-invoices in strict XRechnung and ZUGFeRD formats — a mistake means a rejected invoice.",
    approach: [
      "Modelled both standards in .NET Core with automated document generation.",
      "Added validation and compliance checks before an invoice is ever sent.",
      "Built workflows so finance teams can review and correct issues quickly.",
    ],
    outcome: "Invoices are generated and validated automatically against the German standards.",
    tech: [".NET Core", "XML/EDI", "SQL Server"],
    link: "https://e-invoice.easetechcare.com",
  },
];

export const services = [
  {
    icon: "code",
    title: "Web application development",
    text: "Fast, secure web apps and SaaS platforms with ASP.NET Core, Next.js, React or Angular.",
    points: ["Multi-tenant SaaS", "Admin dashboards", "Customer portals"],
  },
  {
    icon: "smartphone",
    title: "Mobile apps",
    text: "iOS and Android apps from one codebase with React Native or .NET MAUI.",
    points: ["Cross-platform", "Native plugins", "Store release"],
  },
  {
    icon: "server",
    title: "APIs & backend systems",
    text: "Clean, documented REST APIs, real-time features and integrations that scale.",
    points: ["REST & real-time", "Auth (OAuth, JWT)", "Third-party integrations"],
  },
  {
    icon: "cloud",
    title: "Azure & AWS cloud",
    text: "Containerised deployments, CI/CD pipelines and cloud infrastructure that just works.",
    points: ["Docker & CI/CD", "AWS ECS / Lambda", "Azure App Services"],
  },
  {
    icon: "bug",
    title: "QA & code quality",
    text: "Test plans, bug hunting and code reviews to make an existing product stable.",
    points: ["Manual & automated tests", "Code reviews", "Performance fixes"],
  },
  {
    icon: "monitor",
    title: "Desktop applications",
    text: "Windows and cross-platform desktop apps with WPF, Avalonia UI or .NET MAUI.",
    points: ["WPF (MVVM)", "Avalonia UI", "Native AOT"],
  },
];

export const engagements = [
  {
    name: "Fixed-scope project",
    best: "Clear requirements and a launch date",
    points: ["Discovery & estimate up front", "Milestone-based delivery", "Handover and documentation"],
    cta: "Get a quote",
  },
  {
    name: "Dedicated developer",
    best: "Ongoing product work",
    points: ["Full-time or part-time monthly", "Joins your standups and tools", "Long-term ownership"],
    cta: "Book a call",
    highlight: true,
  },
  {
    name: "Hourly consulting",
    best: "Audits, fixes and advice",
    points: ["Architecture & code reviews", "Bug fixing & performance", "Cloud setup help"],
    cta: "Ask a question",
  },
];

export type Testimonial = { quote: string; name: string; role: string; company: string; rating: number; logo?: string };

/**
 * Add real client feedback here (e.g. from Upwork, LinkedIn or email, with permission).
 * The Testimonials section stays hidden until at least one entry is added.
 * Example:
 * { quote: "Waqar delivered our app ahead of schedule…", name: "Jane Doe", role: "CTO", company: "Acme", rating: 5, logo: "/logos/acme.svg" }
 */
export const testimonials: Testimonial[] = [];

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
