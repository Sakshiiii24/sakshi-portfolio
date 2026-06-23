import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated selection of projects Sakshi Srivastava has built — from an AI incident management system to a healthcare portal, a DSA visualizer, and RESTful APIs across Java, Python, JavaScript, and React.",
  openGraph: {
    title: "Projects · Sakshi Srivastava",
    description:
      "Web apps, backend APIs, and full-stack projects built with Java, Python, JavaScript, and React.",
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
