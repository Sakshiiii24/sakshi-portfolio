import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated selection of products, tools, and experiments Sakshi has built end-to-end — from real-time analytics engines processing billions of events to design systems used across entire orgs.",
  openGraph: {
    title: "Projects · Sakshi",
    description:
      "Filter by category or stack to explore real products, developer tools, and open-source work.",
    type: "article",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
