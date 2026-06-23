import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sakshi Srivastava — an Associate Software Engineer skilled in Java, JavaScript, Python, and SQL. The story, journey, philosophy, and values behind the work.",
  openGraph: {
    title: "About · Sakshi Srivastava",
    description:
      "The story, philosophy, values, and interests behind the work — Sakshi Srivastava, Associate Software Engineer.",
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
