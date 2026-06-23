export interface SkillGroup {
  category: string;
  icon: "code" | "layout" | "server" | "sparkles" | "cloud" | "terminal";
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 82 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Frontend Technologies",
    icon: "layout",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 82 },
      { name: "Responsive Web Design", level: 85 },
    ],
  },
  {
    category: "Backend Technologies",
    icon: "server",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "RESTful APIs", level: 88 },
      { name: "JDBC", level: 80 },
      { name: "Java (Spring/Enterprise)", level: 88 },
    ],
  },
  {
    category: "Databases",
    icon: "cloud",
    skills: [
      { name: "Oracle Database", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "terminal",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Git Bash", level: 85 },
      { name: "Jira", level: 82 },
      { name: "AWS", level: 72 },
    ],
  },
  {
    category: "Coursework",
    icon: "sparkles",
    skills: [
      { name: "OOP", level: 88 },
      { name: "DSA", level: 90 },
      { name: "Operating Systems", level: 80 },
      { name: "DBMS", level: 85 },
      { name: "SDLC", level: 82 },
    ],
  },
];

export const marqueeSkills = [
  "Java",
  "Python",
  "JavaScript",
  "SQL",
  "React.js",
  "Node.js",
  "HTML5",
  "CSS3",
  "RESTful APIs",
  "Oracle Database",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "Jira",
  "AWS",
  "OOP",
  "DSA",
];
