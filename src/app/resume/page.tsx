"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Printer,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { siteConfig } from "@/lib/data/site";
import {
  experiences,
  education,
  certifications,
} from "@/lib/data/experience";
import { skillGroups } from "@/lib/data/skills";

import { Reveal } from "@/components/site/reveal";
import { MagneticButton } from "@/components/site/magnetic-button";
import { Separator } from "@/components/ui/separator";

export default function ResumePage() {
  const handlePrint = React.useCallback(() => {
    if (typeof window !== "undefined") window.print();
  }, []);

  // Render the "Updated <month year>" line only after mount to avoid SSR
  // hydration mismatches (toLocaleDateString output differs between Node
  // and browser runtimes / timezones).
  const [updatedLabel, setUpdatedLabel] = React.useState<string>("");
  React.useEffect(() => {
    setUpdatedLabel(
      new Date().toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  // Concise professional summary derived from the resume.
  const summary =
    "Software Engineer with experience in Java, JavaScript, web application development, RESTful APIs, and SQL. Skilled in building responsive user interfaces, backend services, and scalable software solutions in Agile environments. Solved 500+ DSA problems across LeetCode and GeeksforGeeks, and GenAI certified by Amdocs.";

  return (
    <>
      {/* ====================================================
          PAGE HEADER
          ==================================================== */}
      <section className="relative mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          Resume
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="mt-6 max-w-4xl text-balance font-display text-5xl font-normal leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          My resume,{" "}
          <span className="text-gradient-brand italic">at a glance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          A single-page snapshot of the work — experience, education, skills,
          and certifications. Download it as a PDF, or read it right here.
        </motion.p>

        {/* Action buttons row — hidden in print */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          data-no-print
          className="no-print mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3"
        >
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton onClick={handlePrint} variant="primary">
              <Download className="size-4" />
              Download PDF
            </MagneticButton>

            <MagneticButton onClick={handlePrint} variant="outline">
              <Printer className="size-4" />
              Print
            </MagneticButton>

            <MagneticButton href="/contact" variant="ghost">
              <Mail className="size-4" />
              Contact
            </MagneticButton>
          </div>

          <p className="text-xs text-muted-foreground sm:ml-2">
            Tip: choose <span className="font-medium text-foreground">“Save as PDF”</span>{" "}
            in the print dialog for a clean copy.
          </p>
        </motion.div>
      </section>

      {/* ====================================================
          THE RESUME "SHEET"
          ==================================================== */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal y={28}>
          <div className="print-area mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-premium sm:p-10 lg:p-12">
              {/* ---- Sheet header ---- */}
              <header className="print-block">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-display text-4xl font-normal leading-none tracking-tight sm:text-5xl">
                      {siteConfig.name}
                    </h2>
                    <p className="mt-2 text-base font-medium text-brand sm:text-lg">
                      {siteConfig.role}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:items-end sm:text-right">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                    >
                      <Mail className="size-3.5" />
                      {siteConfig.email}
                    </a>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" />
                      {siteConfig.location}
                    </span>
                    <div className="flex items-center gap-3 sm:justify-end">
                      <a
                        href={siteConfig.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                      >
                        <Github className="size-3.5" />
                        github.com/sakshisrivastava
                      </a>
                      <a
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                      >
                        <Linkedin className="size-3.5" />
                        in/sakshisrivastava
                      </a>
                    </div>
                  </div>
                </div>
                <Separator className="mt-6" />
              </header>

              {/* ---- Summary ---- */}
              <section className="print-block mt-6">
                <SectionLabel icon={<Sparkles className="size-3" />}>
                  Summary
                </SectionLabel>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90">
                  {summary}
                </p>
              </section>

              {/* ---- Experience ---- */}
              <section className="print-block mt-7">
                <SectionLabel icon={<Briefcase className="size-3" />}>
                  Experience
                </SectionLabel>
                <div className="mt-3 space-y-5">
                  {experiences.map((exp) => (
                    <article
                      key={`${exp.company}-${exp.period}`}
                      className="print-block"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <h3 className="text-sm font-semibold text-foreground">
                          {exp.role}
                          <span className="font-normal text-muted-foreground">
                            {" · "}
                            {exp.company}
                          </span>
                        </h3>
                        <span className="font-mono text-xs text-muted-foreground tabular-nums">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {exp.location}
                        {exp.current && (
                          <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-brand-3/15 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brand-3">
                            <span className="size-1 rounded-full bg-brand-3" />
                            Current
                          </span>
                        )}
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-foreground/85">
                        {exp.achievements.slice(0, 3).map((a, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-pretty"
                          >
                            <span
                              aria-hidden
                              className="mt-2 size-1 shrink-0 rounded-full bg-gradient-brand"
                            />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Compact stack row */}
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-border bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* ---- Two-column: Education + Certifications ---- */}
              <div className="mt-7 grid gap-7 sm:grid-cols-2">
                {/* Education */}
                <section className="print-block">
                  <SectionLabel icon={<GraduationCap className="size-3" />}>
                    Education
                  </SectionLabel>
                  <div className="mt-3 space-y-4">
                    {education.map((edu) => (
                      <article key={edu.institution} className="print-block">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                          <h3 className="text-sm font-semibold text-foreground">
                            {edu.institution}
                          </h3>
                          <span className="font-mono text-xs text-muted-foreground tabular-nums">
                            {edu.period}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs font-medium text-brand">
                          {edu.degree}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {edu.location}
                        </p>
                        {edu.highlights[0] && (
                          <p className="mt-1 text-xs leading-relaxed text-foreground/75">
                            {edu.highlights[0]}
                          </p>
                        )}
                      </article>
                    ))}
                  </div>
                </section>

                {/* Certifications */}
                <section className="print-block">
                  <SectionLabel icon={<Award className="size-3" />}>
                    Certifications
                  </SectionLabel>
                  <ul className="mt-3 space-y-2.5">
                    {certifications.map((cert) => (
                      <li
                        key={`${cert.name}-${cert.year}`}
                        className="print-block text-xs"
                      >
                        <div className="flex items-baseline justify-between gap-x-2">
                          <span className="font-medium text-foreground">
                            {cert.name}
                          </span>
                          <span className="font-mono text-muted-foreground tabular-nums">
                            {cert.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* ---- Skills ---- */}
              <section className="print-block mt-7">
                <SectionLabel icon={<Code2 className="size-3" />}>
                  Skills
                </SectionLabel>
                <div className="mt-3 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {skillGroups.map((group) => (
                    <div key={group.category} className="print-block">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground">
                        {group.category}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">
                        {group.skills.map((s) => s.name).join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ---- Footer line on the sheet ---- */}
              <div className="mt-8 pt-5">
                <Separator className="mb-3" />
                <p className="text-center text-[11px] text-muted-foreground">
                  References available on request
                  {updatedLabel ? ` · Updated ${updatedLabel}` : ""}
                  {" · "}
                  {siteConfig.email}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tip below the sheet */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-no-print
          className="no-print mx-auto mt-6 max-w-4xl text-center text-xs text-muted-foreground"
        >
          Tip: Click{" "}
          <span className="font-medium text-foreground">Download PDF</span> and
          choose <span className="font-medium text-foreground">“Save as PDF”</span>{" "}
          in the print dialog for a clean copy. Set margins to “None” or
          “Default” for best results.
        </motion.p>
      </section>

      {/* ====================================================
          CLOSING CTA
          ==================================================== */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal y={24}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-premium sm:p-12 lg:p-16">
            {/* Decorative layers (hidden in print) */}
            <div
              data-no-print
              className="no-print pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
            >
              <div className="absolute inset-0 bg-grid" />
            </div>
            <div
              data-no-print
              className="no-print pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-25 blur-3xl"
            />

            <div className="mx-auto max-w-2xl text-center">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                Let&apos;s talk
              </motion.span>

              <h2 className="mt-5 text-balance font-display text-3xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Want to dig into the{" "}
                <span className="text-gradient-brand italic">actual work?</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Browse the projects I&apos;ve shipped, or reach out directly —
                I read every email and reply within a day.
              </p>

              <div
                data-no-print
                className="no-print mt-8 flex flex-wrap items-center justify-center gap-3"
              >
                <MagneticButton href="/contact" variant="primary">
                  <Mail className="size-4" />
                  Get in touch
                </MagneticButton>
                <MagneticButton href="/projects" variant="outline">
                  View projects
                  <ArrowRight className="size-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ---------- Small inline subcomponents (kept local to the page) ---------- */

function SectionLabel({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <h3 className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {icon && <span className="text-brand">{icon}</span>}
      {children}
    </h3>
  );
}
