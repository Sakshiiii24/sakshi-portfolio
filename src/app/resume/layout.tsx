import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "The resume of Sakshi, software engineer — six years of building and shipping across founding teams, design-system leadership, and freelance delivery. Print-ready and downloadable as PDF.",
  openGraph: {
    title: "Resume · Sakshi",
    description:
      "Print-ready resume of Sakshi, software engineer. Download as PDF or read inline.",
    type: "article",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
