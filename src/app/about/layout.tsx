import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sakshi — a software engineer who lives at the intersection of design, performance, and human-centric product thinking. Six years of building products used by hundreds of thousands of people.",
  openGraph: {
    title: "About · Sakshi",
    description:
      "The story, philosophy, values, and quiet obsessions behind the work — Sakshi, software engineer.",
    type: "article",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
