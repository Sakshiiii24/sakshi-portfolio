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
    company: "Amdocs",
    role: "Associate Software Engineer",
    period: "Jul 2025 — Present",
    location: "Pune, India",
    current: true,
    summary:
      "Building Java-based backend services and RESTful APIs for enterprise applications, working across service and data access layers in an Agile environment.",
    achievements: [
      "Developed and maintained Java-based backend services, implementing business logic and feature enhancements for enterprise applications",
      "Contributed to the design and implementation of backend functionality across service and data access layers, ensuring reliable and efficient application behavior",
      "Developed and enhanced RESTful APIs to enable seamless communication and data exchange between application components",
      "Analyzed application workflows, identified code-level issues, and implemented maintainable solutions to improve functionality and stability",
      "Collaborated with cross-functional teams to gather requirements, deliver backend enhancements, and ensure successful production deployments",
    ],
    stack: ["Java", "RESTful APIs", "SQL", "Oracle Database", "Agile", "Jira"],
  },
  {
    company: "Kaspro Solutions",
    role: "Web Developer Intern",
    period: "Jan 2025 — Jun 2025",
    location: "Gurugram, India",
    current: false,
    summary:
      "Contributed to a live enterprise Java project — frontend enhancements, SQL queries, JDBC adapters, and Agile delivery including code reviews and testing.",
    achievements: [
      "Contributed to application feature development using Java while working on a live enterprise project",
      "Implemented frontend enhancements using HTML, CSS, and JavaScript to improve user experience",
      "Wrote SQL queries for data retrieval and validation, supporting application requirements",
      "Integrated JDBC adapters with MySQL databases to manage relational data, ensuring transactional integrity and secure schema execution",
      "Participated in software design, code reviews, testing activities, debugging, and defect resolution within an Agile development framework",
    ],
    stack: ["Java", "HTML5", "CSS3", "JavaScript", "MySQL", "JDBC", "Agile"],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Galgotias University",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2021 — 2025",
    location: "Gurugram, India",
    details:
      "Completed my B.Tech in CSE with a CGPA of 8.55, building strong foundations in OOP, DSA, operating systems, DBMS, and the software development lifecycle.",
    highlights: [
      "CGPA: 8.55 / 10",
      "Coursework: OOP, DSA, Operating Systems, DBMS, SDLC",
      "Built 6+ full-stack and backend projects across Java, Python, and JavaScript",
      "Solved 500+ DSA problems on LeetCode and GeeksforGeeks alongside coursework",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Java Development Certification",
    issuer: "Udemy",
    year: "2024",
  },
  {
    name: "GenAI Certification",
    issuer: "Amdocs",
    year: "2025",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Solved 500+ DSA problems",
    description:
      "Tackled 500+ data structures and algorithms problems across LeetCode and GeeksforGeeks — arrays, trees, graphs, DP, and everything in between.",
    year: "2022 — 2024",
    icon: "code",
  },
  {
    title: "GenAI Certified by Amdocs",
    description:
      "Earned the Generative AI certification from Amdocs, covering LLM fundamentals, prompt engineering, and applied GenAI use cases.",
    year: "2025",
    icon: "sparkles",
  },
  {
    title: "Java Development Certification",
    description:
      "Completed a comprehensive Java development program on Udemy — core Java, OOP, collections, JDBC, and backend fundamentals.",
    year: "2024",
    icon: "star",
  },
  {
    title: "B.Tech CGPA 8.55 / 10",
    description:
      "Graduated from Galgotias University with a strong academic record across core CS coursework — OOP, DSA, OS, and DBMS.",
    year: "2025",
    icon: "trophy",
  },
  {
    title: "Internship to full-time role",
    description:
      "Converted my web developer internship into a full-time Associate Software Engineer role at Amdocs within months.",
    year: "2025",
    icon: "users",
  },
  {
    title: "6+ full-stack projects shipped",
    description:
      "Built and shipped 6+ projects spanning web apps, backend APIs, and AI tools — from a healthcare portal to an AI incident management system.",
    year: "2023 — 2024",
    icon: "globe",
  },
];
