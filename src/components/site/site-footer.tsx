"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socials = [
    { name: "GitHub", href: siteConfig.socials.github, icon: Github },
    { name: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
    { name: "X", href: siteConfig.socials.twitter, icon: Twitter },
    { name: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  ];

  return (
    <footer className="mt-auto border-t border-border/60 bg-background/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + blurb */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-sm font-semibold text-brand-foreground">
                S
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold">{siteConfig.name}</span>
                <span className="text-[11px] text-muted-foreground">
                  {siteConfig.role}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground text-pretty">
              Building elegant, performant software with care for the details
              that most people never notice. Currently {siteConfig.availability.toLowerCase()}.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.name === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Sitemap
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-brand"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground/80 transition-colors hover:text-brand"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-foreground/80">{siteConfig.location}</li>
              <li className="text-muted-foreground">{siteConfig.availability}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Designed & built with care.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for new opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
