export interface SkillGroup {
  category: string;
  icon: "code" | "layout" | "server" | "sparkles" | "cloud" | "terminal";
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "code",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "Rust", level: 78 },
      { name: "Python", level: 85 },
      { name: "Go", level: 70 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: 96 },
      { name: "Next.js", level: 94 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Framer Motion", level: 90 },
      { name: "WebGL / Three.js", level: 72 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "GraphQL", level: 88 },
      { name: "PostgreSQL", level: 86 },
      { name: "Prisma", level: 88 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    category: "AI / ML",
    icon: "sparkles",
    skills: [
      { name: "LangChain", level: 82 },
      { name: "Embeddings / RAG", level: 85 },
      { name: "PyTorch", level: 70 },
      { name: "Vector DBs", level: 84 },
      { name: "Prompt Engineering", level: 88 },
    ],
  },
  {
    category: "Cloud / DevOps",
    icon: "cloud",
    skills: [
      { name: "AWS", level: 84 },
      { name: "Docker", level: 86 },
      { name: "Kubernetes", level: 76 },
      { name: "Terraform", level: 72 },
      { name: "CI/CD", level: 88 },
    ],
  },
  {
    category: "Tooling",
    icon: "terminal",
    skills: [
      { name: "Git", level: 95 },
      { name: "Vite", level: 88 },
      { name: "Vitest / Jest", level: 86 },
      { name: "Storybook", level: 84 },
      { name: "Playwright", level: 80 },
    ],
  },
];

export const marqueeSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Rust",
  "GraphQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "Prisma",
  "AWS",
  "Docker",
  "Kubernetes",
  "LangChain",
  "WebGL",
  "Vite",
  "Redis",
  "Python",
];
