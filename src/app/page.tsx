"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  FileText,
  ChevronRight,
} from "lucide-react";
import { aboutContent } from "@/lib/data/about";
import { siteConfig } from "@/lib/data/site";
import { getFeaturedProjects } from "@/lib/data/projects";
import { experiences } from "@/lib/data/experience";
import { marqueeSkills } from "@/lib/data/skills";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/reveal";
import { MagneticButton } from "@/components/site/magnetic-button";
import { ProjectCard } from "@/components/site/project-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const snapshotExperience = experiences.slice(0, 3);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="font-display text-gradient-brand italic">Sakshi</span>.
              <br />
              I build software
              <br />
              <span className="text-muted-foreground">that feels inevitable.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground"
            >
              A software engineer focused on the details most people never notice —
              performance, motion, and the difference between 200ms and 50ms.
              Currently building real-time analytics at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="/projects" variant="primary">
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
              <MagneticButton href="/contact" variant="outline">
                Get in touch
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {siteConfig.location}
              </span>
              <Link
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </Link>
              <Link
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </Link>
              <Link
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
              >
                <Twitter className="h-3.5 w-3.5" /> X
              </Link>
            </motion.div>
          </div>

          {/* Right: premium monogram avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-square">
              {/* Glow */}
              <div className="absolute inset-0 -z-10 animate-float rounded-full bg-gradient-brand opacity-40 blur-3xl" />
              {/* Card */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-card/60 p-8 shadow-premium backdrop-blur">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
                      <Sparkles className="h-3 w-3 text-brand" /> Open to work
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      v2025.1
                    </span>
                  </div>

                  {/* Monogram */}
                  <div className="flex flex-1 items-center justify-center py-6">
                    <div className="relative">
                      <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-gradient-brand opacity-20 blur-2xl" />
                      <span className="font-display text-[10rem] italic leading-none text-gradient-brand">
                        S
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{siteConfig.name}</span>
                      <span className="text-xs text-muted-foreground">{siteConfig.role}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>6+ years experience</span>
                      <span>40+ projects shipped</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ SKILLS MARQUEE ============ */}
      <section className="relative border-y border-border/60 bg-background/30 py-6">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="flex items-center gap-10 text-lg font-medium text-muted-foreground/70"
              >
                {skill}
                <span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured work"
            title={
              <>
                Projects that shipped,
                <br />
                <span className="text-muted-foreground">not just assignments.</span>
              </>
            }
            description="A selection of products and tools I've built end-to-end — from real-time analytics engines to design systems used across entire orgs."
          />
          <Reveal>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/projects">
                All projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} featured index={i} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ============ EXPERIENCE SNAPSHOT ============ */}
      <section className="relative border-t border-border/60 bg-background/30">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Experience"
              title={
                <>
                  Six years of building,
                  <br />
                  <span className="text-muted-foreground">shipping, and leading.</span>
                </>
              }
            />
            <Reveal>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/experience">
                  Full timeline <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 space-y-4">
            {snapshotExperience.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-brand/40 sm:p-7">
                  <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8">
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${exp.current ? "bg-emerald-400" : "bg-muted-foreground/40"}`} />
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-brand">{exp.company}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground text-pretty">
                        {exp.summary}
                      </p>
                    </div>
                    <ChevronRight className="hidden h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 sm:block" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-10 text-center shadow-premium sm:p-16">
            <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-10" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
            <div className="absolute -top-24 left-1/2 -z-10 h-48 w-96 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3 w-3 text-brand" /> Let&apos;s build something
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Have a role or project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              I&apos;m open to senior and staff engineering roles, and selectively take on
              freelance work. I usually reply within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="/contact" variant="primary">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="/resume" variant="outline">
                <FileText className="h-4 w-4" /> View resume
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
