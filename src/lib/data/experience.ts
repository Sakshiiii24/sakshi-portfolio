export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: "trophy" | "star" | "sparkles" | "users" | "code" | "globe";
}

export const experiences: ExperienceItem[] = [
  {
    company: "Lumen Labs",
    role: "Founding Engineer",
    period: "Jan 2023 — Present",
    location: "Remote",
    current: true,
    summary:
      "Building real-time product analytics from zero to 1,200+ workspaces. Own the storage engine, query planner, and core web app.",
    achievements: [
      "Designed a columnar storage engine handling 2.4B events/day at 180ms p99",
      "Built the founding team's engineering culture — hiring, code review, on-call",
      "Shipped the v1 product in 9 weeks and reached first $1M ARR in 11 months",
      "Mentored 4 engineers, two of whom now lead their own teams",
    ],
    stack: ["TypeScript", "Rust", "Next.js", "ClickHouse", "WebAssembly"],
  },
  {
    company: "Northwind",
    role: "Senior Frontend Engineer",
    period: "Jun 2021 — Dec 2022",
    location: "Bengaluru, India",
    current: false,
    summary:
      "Led the design system and core application frontend for a B2B SaaS serving 40k+ daily users.",
    achievements: [
      "Architected the Atlas design system adopted across 14 products",
      "Cut initial JS bundle by 47% through code-splitting and lazy hydration",
      "Drove a migration from CRA to Next.js App Router with zero downtime",
      "Established visual regression testing, reducing UI bugs by 63%",
    ],
    stack: ["React", "TypeScript", "Next.js", "Radix UI", "Vitest"],
  },
  {
    company: "Cobalt Studio",
    role: "Frontend Engineer",
    period: "Aug 2019 — May 2021",
    location: "Pune, India",
    current: false,
    summary:
      "Shipped marketing sites and web apps for early-stage startups, specializing in motion and performance.",
    achievements: [
      "Delivered 20+ client projects with a 100% on-time launch rate",
      "Built a reusable animation toolkit adopted company-wide",
      "Achieved 95+ Lighthouse scores across all delivered sites",
      "Promoted to senior contributor within 14 months",
    ],
    stack: ["React", "Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "Jun 2018 — Jul 2019",
    location: "Remote",
    current: false,
    summary:
      "Built end-to-end web products for small businesses and indie founders.",
    achievements: [
      "Shipped 12 production apps end-to-end, from schema to deploy",
      "Maintained a 4.9/5 client rating across 30+ contracts",
      "Specialized in MVP delivery — average time to launch: 3 weeks",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "Stripe", "AWS"],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Indian Institute of Technology, Bombay",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2015 — 2019",
    location: "Mumbai, India",
    details:
      "Graduated with distinction. Focus on distributed systems, human-computer interaction, and compilers.",
    highlights: [
      "CGPA: 9.1 / 10, graduated with distinction",
      "Thesis: Conflict-free replicated data types for collaborative editing",
      "Lead the campus web development club (300+ members)",
      "Won the ACM-ICPC regional codeathon two years running",
    ],
  },
  {
    institution: "Stanford Online",
    degree: "Professional Certificate in Machine Learning",
    period: "2022",
    location: "Online",
    details:
      "A rigorous program covering supervised and unsupervised learning, deep learning, and ML systems design.",
    highlights: [
      "Capstone: built a retrieval-augmented generation pipeline for technical Q&A",
      "Top 5% of cohort on the final systems design project",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    year: "2023",
    credentialId: "AWS-PSA-2023-04421",
  },
  {
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    year: "2022",
    credentialId: "GCP-PCD-2022-11890",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    year: "2021",
    credentialId: "CKAD-2021-7765",
  },
  {
    name: "Meta Front-End Developer Professional",
    issuer: "Meta",
    year: "2021",
  },
  {
    name: "Stripe Certified Developer",
    issuer: "Stripe",
    year: "2020",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Speaker — ReactConf India",
    description:
      "Delivered a talk on building zero-runtime design systems to 1,200+ engineers.",
    year: "2024",
    icon: "globe",
  },
  {
    title: "Open Source — 6.3k GitHub stars",
    description:
      "Maintained three open-source libraries with a combined 6,300+ stars and 80+ contributors.",
    year: "2024",
    icon: "star",
  },
  {
    title: "ACM-ICPC Regional Finalist",
    description:
      "Placed top 20 in the Asia regionals across two consecutive years.",
    year: "2018",
    icon: "trophy",
  },
  {
    title: "Mentor — ADPList",
    description:
      "Mentored 60+ early-career engineers on frontend, system design, and career growth.",
    year: "2023",
    icon: "users",
  },
  {
    title: "Hackathon Winner — Smart India Hackathon",
    description:
      "Led a 6-person team to first place out of 400+ teams with an accessibility-first edtech app.",
    year: "2019",
    icon: "sparkles",
  },
  {
    title: "Top Contributor — Hacktoberfest",
    description:
      "Merged 30+ meaningful contributions across 12 open-source repositories.",
    year: "2022",
    icon: "code",
  },
];
