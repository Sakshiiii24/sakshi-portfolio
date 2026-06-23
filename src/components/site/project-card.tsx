"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";

const accentMap: Record<Project["accent"], string> = {
  blue: "text-blue-500 dark:text-blue-400",
  purple: "text-violet-500 dark:text-violet-400",
  cyan: "text-cyan-500 dark:text-cyan-400",
  indigo: "text-indigo-500 dark:text-indigo-400",
  violet: "text-violet-400 dark:text-violet-300",
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

export function ProjectCard({ project, featured = false, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group lift-on-hover relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-premium hover:border-brand/40 hover:shadow-glow-brand"
      >
        {/* Cover gradient */}
        <div
          className={cn(
            "relative mb-5 flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br",
            project.coverGradient
          )}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <span
            className={cn(
              "font-display text-3xl italic tracking-tight",
              accentMap[project.accent]
            )}
          >
            {project.title.charAt(0)}
          </span>
          <div className="absolute right-3 top-3">
            <Badge
              variant="secondary"
              className="border border-white/10 bg-black/20 text-white backdrop-blur"
            >
              {project.category}
            </Badge>
          </div>
          <ArrowUpRight className="absolute bottom-3 right-3 h-5 w-5 -translate-x-2 translate-y-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-brand">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs text-muted-foreground">{project.year}</span>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, featured ? 5 : 4).map((tech) => (
              <Badge key={tech} variant="outline" className="border-border font-normal text-muted-foreground">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > (featured ? 5 : 4) && (
              <Badge variant="outline" className="border-border font-normal text-muted-foreground">
                +{project.technologies.length - (featured ? 5 : 4)}
              </Badge>
            )}
          </div>

          {/* Metrics row for featured */}
          {featured && project.metrics.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
              {project.metrics.slice(0, 2).map((m) => (
                <div key={m.label}>
                  <div className={cn("text-lg font-semibold", accentMap[project.accent])}>
                    {m.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center gap-3 pt-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Github className="h-3 w-3" /> {project.role}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
