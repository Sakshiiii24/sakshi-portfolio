"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Github,
  ExternalLink,
  Calendar,
  User,
  Clock,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";
import { projects, type Project } from "@/lib/data/projects";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { MagneticButton } from "@/components/site/magnetic-button";
import { ProjectCard } from "@/components/site/project-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const accentText: Record<Project["accent"], string> = {
  amber: "text-amber-500 dark:text-amber-400",
  rose: "text-rose-500 dark:text-rose-400",
  emerald: "text-emerald-500 dark:text-emerald-400",
  violet: "text-violet-500 dark:text-violet-400",
  sky: "text-sky-500 dark:text-sky-400",
};

const accentGlow: Record<Project["accent"], string> = {
  amber: "bg-amber-500/30",
  rose: "bg-rose-500/30",
  emerald: "bg-emerald-500/30",
  violet: "bg-violet-500/30",
  sky: "bg-sky-500/30",
};

const accentIconBg: Record<Project["accent"], string> = {
  amber: "bg-amber-500/10 text-amber-500 dark:text-amber-400 ring-amber-500/20",
  rose: "bg-rose-500/10 text-rose-500 dark:text-rose-400 ring-rose-500/20",
  emerald:
    "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 ring-emerald-500/20",
  violet:
    "bg-violet-500/10 text-violet-500 dark:text-violet-400 ring-violet-500/20",
  sky: "bg-sky-500/10 text-sky-500 dark:text-sky-400 ring-sky-500/20",
};

export function ProjectDetail({ project }: { project: Project }) {
  // 2–3 "more projects" (exclude current, prefer different categories, fall back to any)
  const others = React.useMemo(() => {
    const remaining = projects.filter((p) => p.slug !== project.slug);
    const sameCat = remaining.filter(
      (p) => p.category === project.category && p.slug !== project.slug
    );
    const different = remaining.filter((p) => p.category !== project.category);
    const pool = [...different, ...sameCat];
    // Prefer featured first, then by year desc
    const sorted = [...pool].sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.year - a.year;
    });
    return sorted.slice(0, 3);
  }, [project.slug, project.category]);

  const meta = [
    { icon: User, label: "Role", value: project.role },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: Calendar, label: "Year", value: String(project.year) },
  ];

  return (
    <>
      {/* ============ BACK LINK ============ */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <Reveal>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All projects
          </Link>
        </Reveal>
      </section>

      {/* ============ HERO ============ */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          {/* Left: title + meta */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  project.accent === "amber" && "bg-amber-500",
                  project.accent === "rose" && "bg-rose-500",
                  project.accent === "emerald" && "bg-emerald-500",
                  project.accent === "violet" && "bg-violet-500",
                  project.accent === "sky" && "bg-sky-500"
                )}
              />
              {project.category}
              <span className="text-muted-foreground/40">·</span>
              <span className="font-mono tabular-nums">{project.year}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="mt-5 text-balance font-display text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
            >
              {project.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              {meta.map((m) => (
                <span key={m.label} className="inline-flex items-center gap-1.5">
                  <m.icon className="h-3.5 w-3.5 text-brand" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
                    {m.label}
                  </span>
                  <span className="font-medium text-foreground">
                    {m.value}
                  </span>
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {project.liveUrl && (
                <MagneticButton
                  href={project.liveUrl}
                  variant="primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit live
                </MagneticButton>
              )}
              {project.githubUrl && (
                <MagneticButton
                  href={project.githubUrl}
                  variant="outline"
                >
                  <Github className="h-4 w-4" />
                  View source
                </MagneticButton>
              )}
              {!project.liveUrl && !project.githubUrl && (
                <Badge variant="outline" className="rounded-full text-xs">
                  Private build
                </Badge>
              )}
            </motion.div>
          </div>

          {/* Right: gradient cover banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full overflow-hidden rounded-3xl border border-border bg-card/60 shadow-premium lg:w-[360px]"
          >
            <div
              className={cn(
                "relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br",
                project.coverGradient
              )}
            >
              <div className="absolute inset-0 bg-grid opacity-30" />
              {/* Radial glow */}
              <div
                className={cn(
                  "absolute -top-12 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl",
                  accentGlow[project.accent]
                )}
              />
              {/* Monogram initial */}
              <span
                className={cn(
                  "relative font-display text-[10rem] italic leading-none",
                  accentText[project.accent]
                )}
              >
                {project.title.charAt(0)}
              </span>

              {/* Bottom meta strip */}
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                <div className="flex items-center justify-between text-[11px] text-white/80">
                  <span className="font-mono uppercase tracking-[0.16em]">
                    {project.category}
                  </span>
                  <span className="font-mono tabular-nums">{project.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ OVERVIEW + PROJECT INFO ============ */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          {/* Long description */}
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Overview
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-3 text-balance font-display text-3xl font-normal leading-tight tracking-tight sm:text-4xl"
              >
                The {project.title.split(" ")[0].toLowerCase()} story, in plain
                English.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/90">
                {project.longDescription}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </Reveal>
          </div>

          {/* Sticky project info card */}
          <Reveal delay={0.1}>
            <aside className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-2xl border border-border bg-card/60 shadow-premium">
                <div className="border-b border-border bg-background/40 px-5 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Project info
                  </p>
                </div>
                <dl className="divide-y divide-border">
                  {meta.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between gap-3 px-5 py-3.5"
                    >
                      <dt className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <m.icon className="h-3.5 w-3.5" />
                        {m.label}
                      </dt>
                      <dd className="text-sm font-medium text-foreground text-right">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                  <div className="px-5 py-3.5">
                    <dt className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <Layers className="h-3.5 w-3.5" />
                      Tech stack
                    </dt>
                    <dd className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="border-border font-normal text-muted-foreground"
                        >
                          {t}
                        </Badge>
                      ))}
                    </dd>
                  </div>
                </dl>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-col gap-2 border-t border-border px-5 py-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-brand"
                      >
                        <span className="inline-flex items-center gap-2">
                          <ExternalLink className="h-3.5 w-3.5" /> Live demo
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-brand"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Github className="h-3.5 w-3.5" /> Source code
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* ============ METRICS ============ */}
      <section className="relative border-y border-border/60 bg-background/30">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="By the numbers"
            title={
              <>
                Outcomes, not{" "}
                <span className="font-display italic text-gradient-brand">
                  vanity metrics
                </span>
                .
              </>
            }
            description="Real outcomes from real builds. Every number below reflects what the project delivered."
          />

          <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((m, i) => (
              <StaggerItem key={m.label} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-premium lift-on-hover hover:border-brand/40">
                  <div
                    className={cn(
                      "absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                      accentGlow[project.accent]
                    )}
                  />
                  <div className="relative">
                    <div
                      className={cn(
                        "text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl",
                        accentText[project.accent]
                      )}
                    >
                      {m.value}
                    </div>
                    <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                What I did
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl font-normal leading-tight tracking-tight sm:text-4xl">
                Highlights from the build.
              </h2>
              <p className="mt-4 text-pretty text-sm text-muted-foreground">
                The decisions, trade-offs, and small wins that defined this
                project.
              </p>
            </div>
          </Reveal>

          <StaggerGroup>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <StaggerItem key={i}>
                  <li className="group flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-colors duration-300 hover:border-brand/40 hover:bg-card/70 sm:p-6">
                    <span
                      className={cn(
                        "mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full ring-1",
                        accentIconBg[project.accent]
                      )}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg">
                        {h}
                      </p>
                      <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                        0{i + 1}
                      </span>
                    </div>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerGroup>
        </div>
      </section>

      {/* ============ TECH STACK ============ */}
      <section className="relative border-t border-border/60 bg-background/30">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            align="center"
            eyebrow="Built with"
            title={
              <>
                The stack behind{" "}
                <span className="font-display italic text-gradient-brand">
                  {project.title}
                </span>
                .
              </>
            }
            description="Every technology below was chosen for a specific reason — fit for the problem, team, or learning goal."
          />

          <StaggerGroup className="mt-12 flex flex-wrap justify-center gap-2.5">
            {project.technologies.map((t) => (
              <StaggerItem key={t}>
                <div className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium shadow-premium transition-colors duration-300 hover:border-brand/40 hover:text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                  {t}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ MORE PROJECTS ============ */}
      {others.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Keep exploring"
              title={
                <>
                  More things I&apos;ve{" "}
                  <span className="font-display italic text-gradient-brand">
                    built
                  </span>
                  .
                </>
              }
            />
            <Reveal>
              <MagneticButton href="/projects" variant="outline">
                All projects
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </Reveal>
          </div>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <StaggerItem key={p.slug} className="h-full">
                <ProjectCard project={p} index={i} featured={p.featured} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      )}

      {/* ============ NEXT PROJECT CTA ============ */}
      <NextProjectCta currentSlug={project.slug} />
    </>
  );
}

function NextProjectCta({ currentSlug }: { currentSlug: string }) {
  const next = React.useMemo(() => {
    const idx = projects.findIndex((p) => p.slug === currentSlug);
    if (idx === -1) return null;
    return projects[(idx + 1) % projects.length];
  }, [currentSlug]);

  if (!next) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 pt-4 sm:px-6 lg:px-8">
      <Reveal>
        <Link
          href={`/projects/${next.slug}`}
          className="group relative block overflow-hidden rounded-3xl border border-border bg-card/60 p-8 shadow-premium transition-colors duration-300 hover:border-brand/40 sm:p-12"
        >
          <div
            className={cn(
              "absolute inset-0 -z-10 bg-gradient-to-br opacity-10",
              next.coverGradient
            )}
          />
          <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
          <div
            className={cn(
              "absolute -top-16 right-0 -z-10 h-48 w-72 rounded-full blur-3xl",
              accentGlow[next.accent]
            )}
          />

          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="h-3 w-3 text-brand" /> Next project
              </span>
              <h2 className="mt-4 text-balance font-display text-3xl font-normal tracking-tight sm:text-4xl">
                {next.title}
              </h2>
              <p className="mt-2 max-w-md text-pretty text-muted-foreground">
                {next.tagline}
              </p>
            </div>
            <div className="flex flex-none items-center gap-3">
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-premium",
                  accentText[next.accent]
                )}
              >
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
