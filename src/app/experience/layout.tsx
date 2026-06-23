import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The experience, education, certifications, and achievements of Sakshi Srivastava — from a web development internship to an Associate Software Engineer role at Amdocs.",
  openGraph: {
    title: "Experience · Sakshi Srivastava",
    description:
      "Work history, education, certifications, and achievements — Sakshi Srivastava, Associate Software Engineer.",
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
