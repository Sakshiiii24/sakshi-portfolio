"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Clock,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Code2,
  FileText,
  ArrowUpRight,
  Loader2,
  CalendarClock,
  Globe,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";
import { contactInfo } from "@/lib/data/about";
import { siteConfig } from "@/lib/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/reveal";
import { MagneticButton } from "@/components/site/magnetic-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const socialLinks = [
  {
    name: "GitHub",
    handle: "sakshisrivastava",
    href: siteConfig.socials.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "in/sakshisrivastava",
    href: siteConfig.socials.linkedin,
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    handle: "500+ problems solved",
    href: siteConfig.socials.leetcode,
    icon: Code2,
  },
];

const whatToExpect = [
  {
    icon: Clock,
    title: "I usually reply within 24h",
    text: "Weekends excluded — but I often reply sooner. You'll hear back from me personally, not an autoresponder.",
  },
  {
    icon: Globe,
    title: "Open to remote & relocation",
    text: "I'm based in Greater Noida and open to opportunities across India. Relocation is on the table for the right team.",
  },
  {
    icon: HeartHandshake,
    title: "Happy to do a tech chat first",
    text: "Prefer an informal 30-minute call or a quick DSA round before a formal loop? Me too. Bring a problem you're trying to solve.",
  },
  {
    icon: CalendarClock,
    title: "I'll send materials proactively",
    text: "Expect a tailored note, an up-to-date resume, and links to relevant work — no chasing required on your end.",
  },
];

export default function ContactPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      toast.success("Email copied", {
        description: contactInfo.email,
      });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — try selecting instead.");
    }
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    else if (name.trim().length < 2) next.name = "That seems a little short.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_REGEX.test(email.trim()))
      next.email = "That email doesn't look right.";
    if (!message.trim()) next.message = "Please write a short message.";
    else if (message.trim().length < 10)
      next.message = "A sentence or two more would help.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (data.ok) {
        toast.success("Message sent! I'll be in touch soon.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setErrors({});
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch {
      toast.error("Network error — please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          Contact
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="mt-6 text-balance font-display text-5xl font-normal leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Let&apos;s build something
          <br />
          <span className="text-gradient-brand italic">great.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          Whether you&apos;re hiring for a software engineering role,
          looking for an intern or junior developer, or just want to talk
          shop — I&apos;d love to hear from you. Real replies from a real person,
          usually within a day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-medium text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {contactInfo.availability}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {contactInfo.location}
          </span>
        </motion.div>
      </section>

      {/* ============ MAIN: FORM + SIDEBAR ============ */}
      <section className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* ---------- LEFT: FORM ---------- */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-premium backdrop-blur sm:p-8">
              {/* subtle decorative glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-brand opacity-[0.08] blur-3xl"
              />

              <div className="relative">
                <h2 className="font-display text-2xl font-normal tracking-tight sm:text-3xl">
                  Send me a note.
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  A few sentences is plenty. Tell me about the team, the
                  problem, and what good looks like.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-brand">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Jane Recruiter"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name)
                          setErrors((p) => ({ ...p, name: undefined }));
                      }}
                      aria-invalid={!!errors.name}
                      className="h-11 rounded-xl px-4 text-sm"
                    />
                    {errors.name && (
                      <p className="text-xs font-medium text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-brand">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email)
                          setErrors((p) => ({ ...p, email: undefined }));
                      }}
                      aria-invalid={!!errors.email}
                      className="h-11 rounded-xl px-4 text-sm"
                    />
                    {errors.email && (
                      <p className="text-xs font-medium text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject (optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-muted-foreground">
                      Subject{" "}
                      <span className="text-xs font-normal text-muted-foreground/70">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Senior Engineer role — Platform team"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="h-11 rounded-xl px-4 text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-brand">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Hi Sakshi — we're hiring a senior engineer to lead our design system work. Here's the team and the problem we're solving…"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message)
                          setErrors((p) => ({ ...p, message: undefined }));
                      }}
                      aria-invalid={!!errors.message}
                      rows={6}
                      className="min-h-[140px] rounded-xl px-4 py-3 text-sm"
                    />
                    {errors.message && (
                      <p className="text-xs font-medium text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-muted-foreground">
                      By sending, you agree to be replied to. That&apos;s it.
                    </p>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="h-11 gap-2 rounded-full bg-gradient-brand px-6 text-sm font-medium text-brand-foreground shadow-glow-brand transition-opacity hover:opacity-90 disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>

          {/* ---------- RIGHT: SIDEBAR ---------- */}
          <div className="space-y-6">
            <StaggerGroup className="space-y-4">
              {/* Email row with copy button */}
              <StaggerItem>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 shadow-premium backdrop-blur lift-on-hover hover:border-brand/40">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="mt-1.5 block truncate text-base font-medium text-foreground transition-colors hover:text-brand"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </StaggerItem>

              {/* Info rows: location / availability / response time */}
              <StaggerItem>
                <div className="overflow-hidden rounded-2xl border border-border bg-card/60 shadow-premium backdrop-blur">
                  <InfoRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="Location"
                    value={contactInfo.location}
                  />
                  <InfoRow
                    icon={<Clock className="h-4 w-4" />}
                    label="Availability"
                    value={contactInfo.availability}
                  />
                  <InfoRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Response time"
                    value={contactInfo.responseTime}
                    last
                  />
                </div>
              </StaggerItem>

              {/* Social links grid */}
              <StaggerItem>
                <div>
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Find me online
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {socialLinks.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.name}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3 shadow-premium backdrop-blur lift-on-hover hover:border-brand/40"
                        >
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background/60 text-foreground transition-colors group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-medium">
                              {s.name}
                            </span>
                            <span className="block truncate text-xs text-muted-foreground">
                              {s.handle}
                            </span>
                          </span>
                          <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground/60 transition-all group-hover:text-brand" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </StaggerItem>

              {/* Resume CTA */}
              <StaggerItem>
                <Link
                  href="/resume"
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-gradient-brand/10 p-5 shadow-premium backdrop-blur lift-on-hover hover:border-brand/40"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-20 blur-2xl"
                  />
                  <div className="relative flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow-brand">
                      <FileText className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Recruiter shortcut
                      </p>
                      <p className="mt-0.5 font-display text-lg font-normal tracking-tight">
                        Grab the resume
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                </Link>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ============ WHAT TO EXPECT ============ */}
      <section className="relative border-t border-border bg-background/30 py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What to expect"
            title={
              <>
                No black boxes, no{" "}
                <span className="text-gradient-brand italic">ghosting.</span>
              </>
            }
            description="A few things to set expectations before you hit send."
            align="center"
            className="mx-auto mb-12 max-w-2xl"
          />

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatToExpect.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="group h-full rounded-2xl border border-border bg-card/60 p-5 shadow-premium backdrop-blur lift-on-hover hover:border-brand/40">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background/60 text-brand transition-colors group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ CLOSING BAND ============ */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-[0.12] blur-3xl"
        />

        <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Or, the direct route
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Prefer email? I read every one.
          </h2>
          <a
            href={`mailto:${contactInfo.email}`}
            className="mt-6 inline-block text-balance font-display text-4xl font-normal tracking-tight text-foreground transition-colors hover:text-gradient-brand sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient-brand">{contactInfo.email}</span>
          </a>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href={`mailto:${contactInfo.email}`} variant="primary">
              <Mail className="h-4 w-4" />
              Compose an email
            </MagneticButton>
            <MagneticButton href="/resume" variant="outline">
              <FileText className="h-4 w-4" />
              View resume
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
  last,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 px-5 py-4 ${
        last ? "" : "border-b border-border"
      }`}
    >
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background/60 text-brand">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}
