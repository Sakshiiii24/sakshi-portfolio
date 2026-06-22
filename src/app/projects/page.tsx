"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Sparkles,
  FolderOpen,
  SlidersHorizontal,
} from "lucide-react";
import {
  projects,
  projectCategories,
  allTechnologies,
  type ProjectCategory,
} from "@/lib/data/projects";
import { ProjectCard } from "@/components/site/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type CategoryFilter = "All" | ProjectCategory;

const ALL = "All" as const;

export default function ProjectsPage() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<CategoryFilter>(ALL);
  const [tech, setTech] = React.useState<string>(ALL);

  // Cap the technology pills at ~12 to keep the row tidy.
  const topTechs = React.useMemo(() => allTechnologies.slice(0, 12), []);

  const featuredCount = React.useMemo(
    () => projects.filter((p) => p.featured).length,
    []
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== ALL && p.category !== category) return false;
      if (tech !== ALL && !p.technologies.includes(tech)) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category, tech]);

  const hasActiveFilters = query !== "" || category !== ALL || tech !== ALL;

  const clearFilters = () => {
    setQuery("");
    setCategory(ALL);
    setTech(ALL);
  };

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="mt-6 text-balance font-display text-5xl font-normal leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Things I&apos;ve{" "}
          <span className="text-gradient-brand italic">shipped</span>,
          <br />
          <span className="text-muted-foreground">broken, and rebuilt.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
        >
          A curated selection of products, tools, and experiments &mdash; from
          real-time analytics engines processing billions of events to design
          systems used across entire orgs. Filter by category or stack to find
          what matters to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <FolderOpen className="h-3.5 w-3.5 text-brand" />
            <span className="font-mono tabular-nums text-foreground">
              {projects.length}
            </span>{" "}
            total projects
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span className="font-mono tabular-nums text-foreground">
              {featuredCount}
            </span>{" "}
            featured
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="font-mono tabular-nums text-foreground">
              {projectCategories.length}
            </span>{" "}
            categories
          </span>
        </motion.div>
      </section>

      {/* ============ FILTER BAR (sticky) ============ */}
      <section className="sticky top-16 z-30 border-y border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl space-y-3 px-4 py-4 sm:px-6 lg:px-8">
          {/* Search + categories row */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, tech, keywords…"
                className="h-10 rounded-full border-border bg-card/60 pl-9 pr-9 text-sm shadow-premium"
                aria-label="Search projects"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-1">
              {([ALL, ...projectCategories] as CategoryFilter[]).map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-300",
                      active
                        ? "text-brand-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="category-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-brand shadow-glow-brand"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tech row */}
          <div className="flex items-center gap-3">
            <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
              Stack
            </span>
            <div className="flex flex-1 items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <TechPill
                label="All"
                active={tech === ALL}
                onClick={() => setTech(ALL)}
              />
              {topTechs.map((t) => (
                <TechPill
                  key={t}
                  label={t}
                  active={tech === t}
                  onClick={() => setTech(t === tech ? ALL : t)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ RESULTS META ============ */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="text-muted-foreground">
            Showing{" "}
            <span className="font-mono tabular-nums text-foreground">
              {filtered.length}
            </span>{" "}
            of{" "}
            <span className="font-mono tabular-nums text-foreground">
              {projects.length}
            </span>{" "}
            projects
          </p>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" /> Clear filters
            </Button>
          )}
        </div>
      </section>

      {/* ============ GRID ============ */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <ProjectCard
                    project={project}
                    index={i}
                    featured={project.featured}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <EmptyState onReset={clearFilters} />
        )}
      </section>
    </>
  );
}

function TechPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300",
        active
          ? "border-brand/40 bg-brand/10 text-brand shadow-glow-brand"
          : "border-border bg-card/40 text-muted-foreground hover:border-brand/30 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-dashed border-border bg-card/30 px-6 py-24 text-center"
    >
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-full bg-brand/20 blur-2xl" />
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card shadow-premium">
          <Search className="h-6 w-6 text-brand" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight">
          No projects match
        </h3>
        <p className="mt-2 max-w-sm text-pretty text-muted-foreground">
          Try a different search term, category, or technology &mdash; or clear
          your filters to see everything.
        </p>
      </div>
      <Button onClick={onReset} variant="outline" className="rounded-full">
        <SlidersHorizontal className="h-3.5 w-3.5" /> Clear all filters
      </Button>
    </motion.div>
  );
}
