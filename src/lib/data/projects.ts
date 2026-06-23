export type ProjectCategory =
  | "Web App"
  | "AI / ML"
  | "Developer Tool"
  | "Backend"
  | "Full-Stack";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  year: number;
  featured: boolean;
  technologies: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  role: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  accent: "amber" | "rose" | "emerald" | "violet" | "sky";
  coverGradient: string;
}

export const projects: Project[] = [
  {
    slug: "ai-incident-management",
    title: "AI Incident Management System",
    tagline: "Automating incident categorization with Python & OOP",
    description:
      "A Python-based system that automates incident categorization and workflow processing using OOP principles, REST API integrations, and SQL operations.",
    longDescription:
      "The AI Incident Management System automates the way incidents are categorized, routed, and processed. I built the core business logic in Python using OOP principles — modular classes for incident types, workflow processors, and validation layers. The system integrates with external REST APIs to enrich incidents, validates data against SQL-backed rules, and supports scalable tracking through modular workflow components. The goal was to reduce manual triage and make incident handling repeatable and auditable.",
    category: "AI / ML",
    year: 2024,
    featured: true,
    technologies: ["Python", "SQL", "REST APIs", "OOP"],
    metrics: [
      { label: "Incident types automated", value: "5+" },
      { label: "Faster resolution", value: "40%" },
      { label: "Design pattern", value: "OOP" },
      { label: "API integrations", value: "REST" },
    ],
    highlights: [
      "Developed Python business logic using OOP principles to automate incident categorization and workflow processing",
      "Implemented REST API integrations, data validation, and SQL operations to improve incident management efficiency",
      "Designed modular components and workflow logic to support scalable incident tracking",
      "Separated concerns across categorization, validation, and persistence layers for maintainability",
    ],
    role: "Developer",
    duration: "2024",
    githubUrl: "https://github.com/sakshisrivastava",
    accent: "violet",
    coverGradient: "from-violet-500/30 via-purple-500/20 to-fuchsia-500/30",
  },
  {
    slug: "healthcare-management-system",
    title: "Healthcare Management System",
    tagline: "A responsive healthcare portal with appointment scheduling",
    description:
      "A responsive healthcare management portal built with Java, HTML, CSS, and JavaScript — featuring appointment scheduling, patient management, and interactive workflows.",
    longDescription:
      "The Healthcare Management System is a responsive web portal for managing appointments, patient records, and day-to-day clinic workflows. I built the backend in Java with MySQL for persistence, and the frontend with HTML, CSS, and JavaScript for an accessible, interactive experience. The system covers appointment scheduling, patient management, and integrated frontend-to-backend data flows — designed so that non-technical staff can use it comfortably on any device.",
    category: "Full-Stack",
    year: 2024,
    featured: true,
    technologies: ["Java", "HTML5", "CSS3", "JavaScript", "MySQL"],
    metrics: [
      { label: "Core modules", value: "3" },
      { label: "Frontend", value: "Responsive" },
      { label: "Database", value: "MySQL" },
      { label: "Flows", value: "End-to-end" },
    ],
    highlights: [
      "Developed a responsive healthcare management portal with appointment scheduling, patient management, and interactive user workflows",
      "Integrated frontend components with backend services and database operations for efficient data processing",
      "Implemented responsive UI components to enhance accessibility and the overall user experience",
      "Built secure CRUD operations over MySQL with input validation on both client and server sides",
    ],
    role: "Full-Stack Developer",
    duration: "2024",
    githubUrl: "https://github.com/sakshisrivastava",
    accent: "emerald",
    coverGradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  },
  {
    slug: "dsa-visualizer",
    title: "DSA Visualizer",
    tagline: "Interactive visualizations of data structures & algorithms",
    description:
      "A React-based visualizer that animates 12+ data structures and algorithms step-by-step — born from solving 500+ DSA problems and wanting to make them intuitive.",
    longDescription:
      "DSA Visualizer is an interactive web app that animates how data structures and algorithms actually work — step by step, on real input. I built it in React and JavaScript after solving 500+ DSA problems and realizing how much a good visualization helps the intuition click. It covers sorting (bubble, merge, quick), searching, pathfinding (BFS, DFS, Dijkstra), and classic structures (stacks, queues, linked lists, trees). Every step is pausable, speed-adjustable, and rendered at 60fps.",
    category: "Web App",
    year: 2024,
    featured: true,
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    metrics: [
      { label: "Algorithms", value: "12+" },
      { label: "Animation", value: "60fps" },
      { label: "Structures", value: "8+" },
      { label: "Inspiration", value: "500+ DSA" },
    ],
    highlights: [
      "Animated 12+ algorithms (sorting, searching, pathfinding) with step-by-step playback and speed control",
      "Built reusable React components for arrays, trees, and graphs with smooth 60fps transitions",
      "Designed a responsive, accessible UI that works on mobile and desktop",
      "Tied every visualization to the underlying complexity so learners see the 'why', not just the 'how'",
    ],
    role: "Frontend Developer",
    duration: "2024",
    githubUrl: "https://github.com/sakshisrivastava",
    liveUrl: "https://example.com/dsa-visualizer",
    accent: "amber",
    coverGradient: "from-amber-500/30 via-orange-500/20 to-rose-500/30",
  },
  {
    slug: "taskflow-api",
    title: "TaskFlow REST API",
    tagline: "A RESTful task-management API with JWT authentication",
    description:
      "A Node.js REST API for task management with JWT auth, input validation, and PostgreSQL persistence — built to practice clean backend design.",
    longDescription:
      "TaskFlow is a RESTful API for managing tasks, projects, and users. I built it in Node.js with Express to practice clean backend architecture — proper layering (routes, controllers, services), JWT-based authentication, request validation, and PostgreSQL for persistence. The API exposes endpoints for CRUD operations on tasks, user registration and login, and per-user task isolation. It's documented with clear request/response examples and includes error handling for every edge case.",
    category: "Backend",
    year: 2024,
    featured: false,
    technologies: ["Node.js", "Express", "JWT", "PostgreSQL", "REST APIs"],
    metrics: [
      { label: "Endpoints", value: "8+" },
      { label: "Auth", value: "JWT" },
      { label: "Validation", value: "Input" },
      { label: "Database", value: "PostgreSQL" },
    ],
    highlights: [
      "Designed 8+ RESTful endpoints for tasks, projects, and user management",
      "Implemented JWT-based authentication with secure password hashing and token refresh",
      "Added request validation and consistent error handling across all routes",
      "Layered the codebase into routes, controllers, and services for maintainability",
    ],
    role: "Backend Developer",
    duration: "2024",
    githubUrl: "https://github.com/sakshisrivastava",
    accent: "sky",
    coverGradient: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
  },
  {
    slug: "library-management-system",
    title: "Library Management System",
    tagline: "A Java + JDBC system for managing library inventory",
    description:
      "A Java application using JDBC and MySQL to manage book inventory, issue/return workflows, and member records — built to solidify OOP and database fundamentals.",
    longDescription:
      "The Library Management System is a Java desktop application for managing a library's day-to-day operations — book inventory, member records, and issue/return workflows. I built it to put OOP and database fundamentals into practice: Java for the application logic, JDBC to talk to MySQL, and a clean class hierarchy (Book, Member, Transaction) that mirrors the real-world domain. It supports search and filter across the catalog, transactional issue/return with due-date tracking, and fine calculation for overdue returns.",
    category: "Full-Stack",
    year: 2023,
    featured: false,
    technologies: ["Java", "JDBC", "MySQL", "OOP", "SQL"],
    metrics: [
      { label: "Workflows", value: "Issue/Return" },
      { label: "Search", value: "Filter" },
      { label: "Design", value: "OOP" },
      { label: "Database", value: "MySQL" },
    ],
    highlights: [
      "Modeled the domain with a clean OOP class hierarchy (Book, Member, Transaction)",
      "Integrated JDBC adapters with MySQL for transactional issue/return operations",
      "Implemented search and filter across the book catalog with indexed queries",
      "Added fine calculation for overdue returns with date arithmetic in SQL",
    ],
    role: "Java Developer",
    duration: "2023",
    githubUrl: "https://github.com/sakshisrivastava",
    accent: "rose",
    coverGradient: "from-rose-500/30 via-pink-500/20 to-orange-500/30",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    tagline: "A responsive weather dashboard consuming live APIs",
    description:
      "A responsive React app that fetches live weather data from a public API, showing current conditions and a 5-day forecast with city search.",
    longDescription:
      "The Weather Dashboard is a responsive web app that consumes a live weather API to display current conditions and a 5-day forecast for any city. I built it in React and JavaScript to practice working with external APIs, async data fetching, and responsive layout design. The app supports city search, shows temperature, humidity, wind, and conditions at a glance, and degrades gracefully when the API is unavailable. It's fully responsive and works well from mobile to desktop.",
    category: "Web App",
    year: 2023,
    featured: false,
    technologies: ["React.js", "JavaScript", "REST APIs", "CSS3"],
    metrics: [
      { label: "API", value: "Live" },
      { label: "Forecast", value: "5-day" },
      { label: "Search", value: "By city" },
      { label: "Layout", value: "Responsive" },
    ],
    highlights: [
      "Integrated a live weather REST API with async fetching and loading/error states",
      "Built a responsive layout that adapts cleanly from mobile to desktop",
      "Implemented city search with debounced input and recent-search history",
      "Added graceful degradation when the API is rate-limited or unreachable",
    ],
    role: "Frontend Developer",
    duration: "2023",
    githubUrl: "https://github.com/sakshisrivastava",
    accent: "amber",
    coverGradient: "from-amber-500/30 via-yellow-500/20 to-lime-500/30",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Web App",
  "AI / ML",
  "Developer Tool",
  "Backend",
  "Full-Stack",
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
