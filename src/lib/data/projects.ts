export type ProjectCategory =
  | "Web App"
  | "AI / ML"
  | "Developer Tool"
  | "Mobile"
  | "Open Source";

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
    slug: "lumen-analytics",
    title: "Lumen Analytics",
    tagline: "Real-time product analytics with sub-second queries",
    description:
      "A privacy-first analytics platform that processes billions of events with sub-second query latency, powered by a custom columnar engine.",
    longDescription:
      "Lumen Analytics is a high-throughput product analytics platform built for teams that need answers fast. I designed a custom columnar storage layer that compresses event data 8x and serves aggregate queries in under 200ms at billion-event scale. The query engine supports a fluent API for funnel, retention, and cohort analysis with automatic query parallelization.",
    category: "Web App",
    year: 2024,
    featured: true,
    technologies: ["TypeScript", "Next.js", "Rust", "ClickHouse", "WebAssembly", "Tailwind CSS"],
    metrics: [
      { label: "Events / day", value: "2.4B" },
      { label: "Query latency p99", value: "180ms" },
      { label: "Compression ratio", value: "8x" },
      { label: "Active workspaces", value: "1,200+" },
    ],
    highlights: [
      "Designed a columnar storage format with 8x compression over row-based storage",
      "Built a WebAssembly-powered query planner that runs in the browser for instant previews",
      "Implemented incremental materialized views for sub-second funnel queries",
      "Reduced infra cost by 62% through adaptive batching and tiered storage",
    ],
    role: "Founding Engineer",
    duration: "Jan 2023 — Present",
    liveUrl: "https://example.com/lumen",
    githubUrl: "https://github.com/sakshi/lumen",
    accent: "amber",
    coverGradient: "from-amber-500/30 via-orange-500/20 to-rose-500/30",
  },
  {
    slug: "atlas-design-system",
    title: "Atlas Design System",
    tagline: "A composable design system used across 14 products",
    description:
      "A token-driven, themeable design system with 80+ accessible components, automated visual regression, and zero-runtime styling.",
    longDescription:
      "Atlas is a design system built to scale across an entire product org. It ships 80+ fully accessible components, a token pipeline that synchronizes design tokens from Figma to code, and a documentation site with live playgrounds. The system uses CSS-in-JS with zero runtime cost through compile-time extraction, cutting bundle size by 40%.",
    category: "Developer Tool",
    year: 2024,
    featured: true,
    technologies: ["React", "TypeScript", "Radix UI", "Style Dictionary", "Storybook", "Vitest"],
    metrics: [
      { label: "Components", value: "82" },
      { label: "Products adopted", value: "14" },
      { label: "Bundle reduction", value: "40%" },
      { label: "A11y score", value: "100" },
    ],
    highlights: [
      "Authored 82 accessible primitives built on Radix UI with full keyboard support",
      "Built a Figma to code token pipeline using Style Dictionary, eliminating manual sync",
      "Set up Chromatic visual regression on every PR, catching 230+ regressions",
      "Published comprehensive docs with interactive playgrounds and copy-paste snippets",
    ],
    role: "Lead Engineer",
    duration: "Jun 2022 — Dec 2023",
    liveUrl: "https://example.com/atlas",
    githubUrl: "https://github.com/sakshi/atlas",
    accent: "emerald",
    coverGradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  },
  {
    slug: "verba-ai",
    title: "Verba AI",
    tagline: "Context-aware writing assistant for technical docs",
    description:
      "An LLM-powered writing copilot that understands your codebase and turns code changes into accurate, version-aware documentation.",
    longDescription:
      "Verba AI is a documentation copilot that connects directly to your repository. As you write code, it generates, updates, and verifies documentation against the actual implementation. It uses a hybrid retrieval pipeline combining code-graph traversal and semantic search to keep docs honest, with a human-in-the-loop review flow.",
    category: "AI / ML",
    year: 2024,
    featured: true,
    technologies: ["Python", "LangChain", "Next.js", "PostgreSQL", "OpenAI", "pgvector"],
    metrics: [
      { label: "Docs accuracy", value: "94%" },
      { label: "Time saved / PR", value: "23 min" },
      { label: "Repos connected", value: "3,800+" },
      { label: "Tokens processed", value: "1.2B" },
    ],
    highlights: [
      "Built a code-graph retrieval pipeline that traces function calls to verify docs",
      "Designed a streaming review UI with inline suggestions and diff acceptance",
      "Fine-tuned embeddings on 40k open-source repos for code-aware semantic search",
      "Reduced documentation drift by 71% across beta customer repositories",
    ],
    role: "ML Engineer",
    duration: "Mar 2023 — Present",
    liveUrl: "https://example.com/verba",
    githubUrl: "https://github.com/sakshi/verba",
    accent: "violet",
    coverGradient: "from-violet-500/30 via-purple-500/20 to-fuchsia-500/30",
  },
  {
    slug: "tide-cli",
    title: "Tide CLI",
    tagline: "A delightful task runner for monorepos",
    description:
      "A fast, cache-aware task runner for JS monorepos with remote caching, affected-project detection, and a beautiful TUI.",
    longDescription:
      "Tide is a command-line task runner built for large JavaScript monorepos. It analyzes your dependency graph to run only affected tasks, caches outputs locally and remotely, and ships a terminal UI that makes long builds feel fast. Written in Rust for instant cold starts.",
    category: "Developer Tool",
    year: 2023,
    featured: false,
    technologies: ["Rust", "TypeScript", "Napi-rs", "Tokio", "ratatui"],
    metrics: [
      { label: "Cold start", value: "18ms" },
      { label: "Cache hit rate", value: "87%" },
      { label: "GitHub stars", value: "4.2k" },
      { label: "Avg build speedup", value: "6.1x" },
    ],
    highlights: [
      "Implemented content-addressed caching with remote sharing via S3-compatible storage",
      "Built a dependency-graph analyzer that handles 10k+ packages in under 100ms",
      "Shipped a polished TUI with live progress and parallel log streaming",
      "Napi-rs bindings keep the Node API ergonomic while the core stays in Rust",
    ],
    role: "Creator & Maintainer",
    duration: "Aug 2022 — Present",
    githubUrl: "https://github.com/sakshi/tide",
    accent: "sky",
    coverGradient: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
  },
  {
    slug: "petal-notes",
    title: "Petal Notes",
    tagline: "Local-first markdown notes with CRDT sync",
    description:
      "A privacy-respecting notes app with offline-first CRDT sync, end-to-end encryption, and a buttery editor.",
    longDescription:
      "Petal Notes is a local-first markdown editor that syncs across devices without a central server seeing your content. It uses Yjs CRDTs for conflict-free merging, encrypts everything client-side, and renders a fast, extensible editor with live preview and slash commands.",
    category: "Web App",
    year: 2023,
    featured: false,
    technologies: ["TypeScript", "React", "Yjs", "IndexedDB", "libsodium", "Tauri"],
    metrics: [
      { label: "Sync conflicts", value: "0" },
      { label: "Offline support", value: "100%" },
      { label: "Notes synced", value: "180k" },
      { label: "App size", value: "3.2MB" },
    ],
    highlights: [
      "Engineered a CRDT-based sync layer with zero merge conflicts across devices",
      "Implemented end-to-end encryption with libsodium and per-document keys",
      "Built a custom markdown editor with slash commands and live preview",
      "Shipped a Tauri desktop app at 3.2MB with full offline support",
    ],
    role: "Solo Developer",
    duration: "Feb 2023 — Oct 2023",
    liveUrl: "https://example.com/petal",
    githubUrl: "https://github.com/sakshi/petal",
    accent: "rose",
    coverGradient: "from-rose-500/30 via-pink-500/20 to-orange-500/30",
  },
  {
    slug: "orbit-mobile",
    title: "Orbit",
    tagline: "Habit tracker with behavioral-science nudges",
    description:
      "A cross-platform habit app that uses spaced-repetition and gentle nudges to make habits stick — built once, runs everywhere.",
    longDescription:
      "Orbit is a habit-tracking app that applies behavioral science to help people build lasting routines. It uses a spaced-repetition model to schedule nudges, adapts to your energy patterns, and ships a shared React Native codebase for iOS, Android, and the web.",
    category: "Mobile",
    year: 2022,
    featured: false,
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Reanimated"],
    metrics: [
      { label: "Avg retention", value: "78%" },
      { label: "DAU", value: "12k" },
      { label: "App rating", value: "4.8" },
      { label: "Platforms", value: "3" },
    ],
    highlights: [
      "Designed an adaptive scheduling engine based on spaced-repetition research",
      "Built fluid 60fps animations with Reanimated 3 and gesture handlers",
      "Shared 94% of code across iOS, Android, and web via Expo",
      "Reached 4.8 stars with 12k daily active users",
    ],
    role: "Mobile Engineer",
    duration: "May 2021 — Jan 2022",
    liveUrl: "https://example.com/orbit",
    accent: "emerald",
    coverGradient: "from-emerald-500/30 via-green-500/20 to-lime-500/30",
  },
  {
    slug: "spectra-viz",
    title: "Spectra",
    tagline: "Interactive data-viz playground in the browser",
    description:
      "A WebGL-powered visualization library and playground for exploring large datasets with custom shaders.",
    longDescription:
      "Spectra is a browser-based visualization toolkit for large datasets. It renders up to a million points at 60fps using custom WebGL shaders, exposes a declarative React API, and includes a live playground for designing and exporting charts.",
    category: "Open Source",
    year: 2022,
    featured: false,
    technologies: ["TypeScript", "WebGL", "React", "D3", "Vite"],
    metrics: [
      { label: "Points @ 60fps", value: "1M" },
      { label: "Weekly downloads", value: "18k" },
      { label: "Bundle size", value: "22kb" },
      { label: "GitHub stars", value: "2.1k" },
    ],
    highlights: [
      "Authored custom WebGL shaders for million-point scatter plots at 60fps",
      "Designed a declarative React API that mirrors D3's mental model",
      "Built a live playground with shareable URLs and PNG/SVG export",
      "Kept the library at 22kb gzipped with tree-shakeable modules",
    ],
    role: "Creator",
    duration: "Jan 2022 — Aug 2022",
    githubUrl: "https://github.com/sakshi/spectra",
    accent: "violet",
    coverGradient: "from-violet-500/30 via-indigo-500/20 to-blue-500/30",
  },
  {
    slug: "harbor-cms",
    title: "Harbor CMS",
    tagline: "Headless CMS with a visual schema builder",
    description:
      "A developer-friendly headless CMS where content models are built visually and queried via a typed GraphQL API.",
    longDescription:
      "Harbor is a headless CMS that treats content modeling as a first-class visual experience. Editors build schemas with a drag-and-drop canvas; developers get a fully typed GraphQL API and webhooks out of the box. The entire system runs on Postgres with row-level security for multi-tenant isolation.",
    category: "Web App",
    year: 2021,
    featured: false,
    technologies: ["Node.js", "GraphQL", "PostgreSQL", "React", "Prisma", "Redis"],
    metrics: [
      { label: "Tenants", value: "640" },
      { label: "API uptime", value: "99.98%" },
      { label: "Avg response", value: "42ms" },
      { label: "Content models", value: "11k" },
    ],
    highlights: [
      "Built a visual schema canvas that compiles to a typed GraphQL schema",
      "Implemented multi-tenant isolation with Postgres row-level security",
      "Added a webhook engine with retries, dead-letter queues, and signature verification",
      "Achieved 99.98% uptime with graceful degradation and read replicas",
    ],
    role: "Backend Engineer",
    duration: "Aug 2020 — Apr 2021",
    liveUrl: "https://example.com/harbor",
    githubUrl: "https://github.com/sakshi/harbor",
    accent: "amber",
    coverGradient: "from-amber-500/30 via-yellow-500/20 to-lime-500/30",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Web App",
  "AI / ML",
  "Developer Tool",
  "Mobile",
  "Open Source",
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
