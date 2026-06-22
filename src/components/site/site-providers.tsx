"use client";

import * as React from "react";
import { CustomCursor } from "@/components/site/custom-cursor";
import { InteractiveBackground } from "@/components/site/interactive-background";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { BackToTop } from "@/components/site/back-to-top";
import { CommandPalette } from "@/components/site/command-palette";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageTransition } from "@/components/site/page-transition";

export function SiteProviders({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <InteractiveBackground />
      <ScrollProgress />
      <CustomCursor />
      <SiteHeader />
      <PageTransition>
        <main className="relative z-10 flex-1">{children}</main>
      </PageTransition>
      <SiteFooter />
      <BackToTop />
      <CommandPalette />
    </div>
  );
}
