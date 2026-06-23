"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
  Code2,
  Heart,
} from "lucide-react";
import { aboutContent } from "@/lib/data/about";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/reveal";
import { MagneticButton } from "@/components/site/magnetic-button";

export default function AboutPage() {
  const snapshot = [
    {
      icon: MapPin,
      label: "Based in",
      value: aboutContent.location,
    },
    {
      icon: Clock,
      label: "Currently",
      value: aboutContent.availability,
    },
    {
      icon: Code2,
      label: "DSA",
      value: "500+ problems solved",
    },
    {
      icon: Heart,
      label: "Projects",
      value: "6+ full-stack built",
    },
  ];

  return (
    <>
      {/* ============ HERO / INTRO ============ */}
      <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          About
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="mt-6 text-balance font-display text-5xl font-normal leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          The story behind
          <br />
          <span className="text-gradient-brand italic">the work.</span>
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {aboutContent.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {aboutContent.availability}
          </span>
        </motion.div>

        {/* Intro paragraphs — editorial two-column */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {aboutContent.role}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60">
                Est. 2021
              </p>
            </div>
          </Reveal>

          <div className="max-w-3xl space-y-6">
            {aboutContent.intro.map((para, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                as="p"
                className="text-pretty text-lg leading-relaxed text-foreground/90 sm:text-xl"
              >
                {para}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CURRENTLY / SNAPSHOT BAND ============ */}
      <section className="relative border-y border-border/60 bg-background/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {snapshot.map((stat, i) => (
              <StaggerItem key={stat.label} className="h-full">
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card/60 p-5 shadow-premium transition-colors duration-300 hover:border-brand/40">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <stat.icon className="h-4 w-4 text-brand" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em]">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground text-pretty">
                    {stat.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ JOURNEY TIMELINE ============ */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="The journey"
          title={
            <>
              From first commit to{" "}
              <span className="font-display italic text-gradient-brand">first</span>{" "}
              <br />
              <span className="text-muted-foreground">full-time role.</span>
            </>
          }
          description="Every milestone left a mark on how I build today. From late-night coding sessions at Galgotias University to shipping backend services at Amdocs."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
          {/* Side label */}
          <Reveal className="hidden lg:block">
            <div className="sticky top-32">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                2021 → Now
              </p>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                {aboutContent.journey.length} chapters,
                <br />
                still being written.
              </p>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/50 via-border to-transparent" />
            <StaggerGroup className="space-y-10">
              {aboutContent.journey.map((item, i) => (
                <StaggerItem key={item.year}>
                  <div className="relative flex gap-6">
                    {/* dot */}
                    <div className="relative z-10 mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-border bg-card shadow-premium">
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-brand shadow-glow-brand" />
                    </div>
                    {/* content */}
                    <div className="flex-1 pb-2 pt-0.5">
                      <span className="font-mono text-xs uppercase tracking-wider text-brand">
                        {item.year}
                      </span>
                      <h3 className="mt-1.5 text-xl font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-pretty text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY ============ */}
      <section className="relative border-t border-border/60 bg-background/30">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Philosophy"
            title={
              <>
                Four principles I{" "}
                <span className="font-display italic text-gradient-brand">refuse</span>{" "}
                to compromise.
              </>
            }
            description="Not slogans. The actual rules I apply when reviewing PRs, picking libraries, and shipping to production."
          />

          <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2">
            {aboutContent.philosophy.map((p, i) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-7 shadow-premium lift-on-hover hover:border-brand/40">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-5">
                    <span className="font-mono text-sm tabular-nums text-muted-foreground/60">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-2 text-pretty text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="Values"
          title={
            <>
              What I{" "}
              <span className="font-display italic text-gradient-brand">believe</span>.
            </>
          }
          description="A short list. I'd rather be known for these than for any single line of code."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <StaggerGroup>
            <ul className="divide-y divide-border/70 border-y border-border/70">
              {aboutContent.values.map((value, i) => (
                <StaggerItem key={value}>
                  <li className="group flex items-baseline gap-5 py-5 sm:gap-7 sm:py-6">
                    <span className="font-mono text-sm tabular-nums text-muted-foreground/60">
                      0{i + 1}
                    </span>
                    <span className="font-display text-2xl text-foreground text-balance transition-colors duration-300 group-hover:text-brand sm:text-3xl">
                      {value}
                    </span>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerGroup>
        </div>
      </section>

      {/* ============ HOBBIES & INTERESTS ============ */}
      <section className="relative border-t border-border/60 bg-background/30">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Off the clock"
            title={
              <>
                Things that{" "}
                <span className="font-display italic text-gradient-brand">recharge</span>{" "}
                the batteries.
              </>
            }
            description="Most of my best engineering ideas show up while I'm doing something else entirely."
          />

          <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.hobbies.map((hobby, i) => (
              <StaggerItem key={hobby.name} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-premium lift-on-hover hover:border-brand/40">
                  <div className="text-4xl transition-transform duration-500 ease-out group-hover:scale-110">
                    {hobby.emoji}
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">
                    {hobby.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-pretty text-muted-foreground">
                    {hobby.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ FUN FACTS ============ */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="Fun facts"
          title={
            <>
              Things you{" "}
              <span className="font-display italic text-gradient-brand">didn&apos;t</span>{" "}
              ask.
            </>
          }
          description="The delightful, the nerdy, and the slightly absurd."
        />

        <StaggerGroup className="mt-16 flex flex-wrap justify-center gap-3">
          {aboutContent.funFacts.map((fact, i) => (
            <StaggerItem key={i}>
              <div className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground shadow-premium transition-colors duration-300 hover:border-brand/40 hover:text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                {fact}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="mx-auto max-w-6xl px-4 pb-28 pt-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-10 text-center shadow-premium sm:p-16">
            <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-10" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
            <div className="absolute -top-24 left-1/2 -z-10 h-48 w-96 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3 w-3 text-brand" /> Let&apos;s talk
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-4xl font-normal tracking-tight sm:text-5xl">
              Still here?{" "}
              <span className="italic text-gradient-brand">Let&apos;s talk.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Whether it&apos;s a software engineering role, an internship, or just a
              hello — I read every message and usually reply within a day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="/contact" variant="primary">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="/projects" variant="outline">
                View my work
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
