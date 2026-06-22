"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, Moon, Sun, FileText, Mail, FolderGit2, User, Briefcase, Home, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/data/site";
import { siteConfig } from "@/lib/data/site";

export function CommandPalette() {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "/" && !open) {
        const target = e.target as HTMLElement | null;
        const tag = target?.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA" && !target?.isContentEditable) {
          e.preventDefault();
          setOpen(true);
        }
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const iconFor = (label: string) => {
    switch (label) {
      case "Home":
        return <Home className="h-4 w-4" />;
      case "About":
        return <User className="h-4 w-4" />;
      case "Projects":
        return <FolderGit2 className="h-4 w-4" />;
      case "Experience":
        return <Briefcase className="h-4 w-4" />;
      case "Contact":
        return <Mail className="h-4 w-4" />;
      case "Resume":
        return <FileText className="h-4 w-4" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed inset-0 z-[80] flex items-start justify-center p-4 pt-[18vh]"
      overlayClassName="fixed inset-0 bg-background/70 backdrop-blur-sm"
    >
      <div className="glass mx-auto flex max-h-[60vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-border shadow-premium">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Command.Input
            autoFocus
            placeholder="Search pages and actions…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:block">
            ESC
          </kbd>
        </div>
        <Command.List className="overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="text-xs text-muted-foreground">
            {navLinks.map((link) => (
              <Command.Item
                key={link.href}
                value={`go ${link.label}`}
                onSelect={() => go(link.href)}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                {iconFor(link.label)}
                <span className="flex-1">{link.label}</span>
                <span className="text-xs text-muted-foreground">{link.href}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Actions" className="text-xs text-muted-foreground">
            <Command.Item
              value="toggle theme dark light"
              onSelect={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              Toggle {theme === "dark" ? "light" : "dark"} mode
            </Command.Item>
            <Command.Item
              value="download resume"
              onSelect={() => go("/resume")}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
            >
              <FileText className="h-4 w-4" />
              View resume
            </Command.Item>
            <Command.Item
              value="copy email contact"
              onSelect={() => {
                navigator.clipboard?.writeText(siteConfig.email);
                setOpen(false);
              }}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
            >
              <Mail className="h-4 w-4" />
              Copy email address
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Social" className="text-xs text-muted-foreground">
            <Command.Item
              value="github"
              onSelect={() => window.open(siteConfig.socials.github, "_blank")}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
            >
              <Github className="h-4 w-4" /> Open GitHub
            </Command.Item>
            <Command.Item
              value="linkedin"
              onSelect={() => window.open(siteConfig.socials.linkedin, "_blank")}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
            >
              <Linkedin className="h-4 w-4" /> Open LinkedIn
            </Command.Item>
            <Command.Item
              value="twitter x"
              onSelect={() => window.open(siteConfig.socials.twitter, "_blank")}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
            >
              <Twitter className="h-4 w-4" /> Open X / Twitter
            </Command.Item>
          </Command.Group>
        </Command.List>
        <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 py-0.5">↑</kbd>
            <kbd className="rounded border border-border bg-muted px-1 py-0.5">↓</kbd>
            to navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 py-0.5">↵</kbd>
            to select
          </span>
        </div>
      </div>
    </Command.Dialog>
  );
}
