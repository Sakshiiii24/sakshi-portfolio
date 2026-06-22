import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Six years of building, shipping, and scaling software — from founding-engineer roles to design-system leadership. The full career timeline, education, certifications, and achievements of Sakshi, software engineer.",
  openGraph: {
    title: "Experience · Sakshi",
    description:
      "A career of building and shipping — work timeline, education, certifications, and notable achievements.",
    type: "article",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
