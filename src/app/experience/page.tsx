"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Star,
  Sparkles,
  Users,
  Code2,
  Globe,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Download,
  Building2,
} from "lucide-react";
import {
  experiences,
  education,
  certifications,
  achievements,
  type Achievement,
} from "@/lib/data/experience";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/reveal";
import { MagneticButton } from "@/components/site/magnetic-button";
import { Badge } from "@/components/ui/badge";

const achievementIcons: Record<Achievement["icon"], React.ElementType> = {
  trophy: Trophy,
  star: Star,
  sparkles: Sparkles,
  users: Users,
  code: Code2,
  globe: Globe,
};

export default function ExperiencePage() {
  const metaStats = [
    { label: "Experience", value: "1+ yr" },
    { label: "Companies", value: "2" },
    { label: "Projects built", value: "6+" },
    { label: "DSA problems", value: "500+" },
    { label: "CGPA", value: "8.55" },
  ];

  const accomplishmentStats = [
    { value: "500+", label: "DSA problems solved" },
    { value: "6+", label: "Full-stack projects built" },
    { value: "8.55", label: "B.Tech CGPA out of 10" },
    { value: "2", label: "Professional certifications" },
  ];

  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          Experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="mt-6 max-w-4xl text-balance font-display text-5xl font-normal leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          A career of{" "}
          <span className="text-gradient-brand italic">building and shipping.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          A year into my professional journey — from a web development
          internship to an Associate Software Engineer role at Amdocs. Building
          Java backend services, RESTful APIs, and responsive web apps in Agile
          environments.
        </motion.p>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/60 pt-6"
        >
          {metaStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline gap-2"
            >
              <span className="font-display text-2xl text-foreground tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ============ WORK EXPERIENCE TIMELINE ============ */}
      <section className="relative border-t border-border/60 bg-background/30">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Work history"
            title={
              <>
                The roles that{" "}
                <span className="font-display italic text-gradient-brand">
                  shaped
                </span>{" "}
                the engineer.
              </>
            }
            description="Two roles — from a web development internship to an Associate Software Engineer seat. Every role left a system, a habit, or a lesson behind."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Side label */}
            <Reveal className="hidden lg:block">
              <div className="sticky top-32">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  2025 → Now
                </p>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">
                  {experiences.length} roles,
                  <br />
                  still shipping.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  Currently at {experiences[0].company}
                </div>
              </div>
            </Reveal>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-brand/70 via-brand/40 to-border" />
              <StaggerGroup className="space-y-12">
                {experiences.map((exp) => (
                  <StaggerItem key={`${exp.company}-${exp.period}`}>
                    <div className="relative flex gap-6">
                      {/* dot */}
                      <div className="relative z-10 mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-border bg-card shadow-premium">
                        {exp.current ? (
                          <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-brand shadow-[0_0_12px] shadow-brand/60" />
                          </span>
                        ) : (
                          <span className="h-2.5 w-2.5 rounded-full bg-gradient-brand" />
                        )}
                      </div>

                      {/* content */}
                      <div className="flex-1 pb-4">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-brand">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </span>
                          {exp.current && (
                            <Badge
                              variant="outline"
                              className="border-brand/40 bg-brand/10 text-brand dark:text-brand"
                            >
                              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-brand" />
                              Current
                            </Badge>
                          )}
                        </div>

                        <h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                          {exp.role}
                        </h3>
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                            <Building2 className="h-3.5 w-3.5 text-brand" />
                            {exp.company}
                          </span>
                          <span className="text-border">·</span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            {exp.location}
                          </span>
                        </p>

                        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-foreground/80">
                          {exp.summary}
                        </p>

                        {/* Achievements */}
                        <ul className="mt-5 max-w-2xl space-y-2.5">
                          {exp.achievements.map((a, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-sm text-foreground/75"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand/70" />
                              <span className="text-pretty">{a}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Stack */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.stack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-border bg-background/50 font-mono text-[11px] font-normal tracking-tight text-muted-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EDUCATION ============ */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Where the{" "}
              <span className="font-display italic text-gradient-brand">
                foundations
              </span>{" "}
              were laid.
            </>
          }
          description="Formal computer science training at Galgotias University, plus continuous learning through professional certifications."
        />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <StaggerItem key={`${edu.institution}-${edu.period}`} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-7 shadow-premium lift-on-hover hover:border-brand/40">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-border bg-background/60 text-brand">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="mt-5 text-balance text-xl font-semibold leading-snug tracking-tight">
                    {edu.institution}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-brand">
                    {edu.degree}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </p>

                  <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/75">
                    {edu.details}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-border/60 pt-5">
                    {edu.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground/75"
                      >
                        <Sparkles className="mt-0.5 h-3.5 w-3.5 flex-none text-brand/70" />
                        <span className="text-pretty">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ============ CERTIFICATIONS ============ */}
      <section className="relative border-t border-border/60 bg-background/30">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Certifications"
            title={
              <>
                Credentials, kept{" "}
                <span className="font-display italic text-gradient-brand">
                  current
                </span>
                .
              </>
            }
            description="Certifications I've earned to keep my skills current — from core Java development to Generative AI."
          />

          <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <StaggerItem
                key={`${cert.name}-${cert.year}`}
                className="h-full"
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-premium lift-on-hover hover:border-brand/40">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border bg-background/60 text-brand">
                      <Award className="h-5 w-5" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-border bg-background/50 font-mono text-[11px] text-muted-foreground"
                    >
                      {cert.year}
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-balance text-base font-semibold leading-snug tracking-tight">
                    {cert.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>

                  {cert.credentialId && (
                    <p className="mt-4 border-t border-border/60 pt-3 font-mono text-[11px] text-muted-foreground/70">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ ACHIEVEMENTS ============ */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Moments worth{" "}
              <span className="font-display italic text-gradient-brand">
                remembering
              </span>
              .
            </>
          }
          description="From solving 500+ DSA problems to earning a GenAI certification — the milestones I'm most proud of so far."
        />

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((ach) => {
            const Icon = achievementIcons[ach.icon];
            return (
              <StaggerItem
                key={`${ach.title}-${ach.year}`}
                className="h-full"
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-premium lift-on-hover hover:border-brand/40">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-brand text-brand-foreground shadow-glow-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-balance text-base font-semibold leading-snug tracking-tight">
                          {ach.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {ach.description}
                      </p>
                      <span className="mt-3 inline-block font-mono text-[11px] uppercase tracking-wider text-brand">
                        {ach.year}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* ============ KEY ACCOMPLISHMENTS BAND ============ */}
      <section className="relative overflow-hidden border-y border-border/60 bg-background/30">
        <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
        <div className="absolute -top-32 left-1/2 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <Reveal>
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              By the numbers
            </p>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {accomplishmentStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="font-display text-5xl font-normal tracking-tight text-gradient-brand sm:text-6xl">
                    {stat.value}
                  </div>
                  <p className="mx-auto mt-3 max-w-[14rem] text-pretty text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="mx-auto max-w-6xl px-4 pb-28 pt-24 sm:px-6 lg:px-8 lg:pt-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-10 text-center shadow-premium sm:p-16">
            <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-10" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
            <div className="absolute -top-24 left-1/2 -z-10 h-48 w-96 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Briefcase className="h-3 w-3 text-brand" /> The full picture
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-4xl font-normal tracking-tight sm:text-5xl">
              Want the long version?{" "}
              <span className="italic text-gradient-brand">Grab the resume.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              The full PDF has a detailed breakdown of my experience, projects,
              and skills. Or just say hello — I read every message.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="/resume" variant="primary">
                <Download className="h-4 w-4" />
                Download résumé
              </MagneticButton>
              <MagneticButton href="/contact" variant="outline">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
