import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "The resume of Sakshi Srivastava, Associate Software Engineer — experience at Amdocs and Kaspro Solutions, B.Tech in CSE from Galgotias University, and skills across Java, JavaScript, Python, and SQL. Print-ready and downloadable as PDF.",
  openGraph: {
    title: "Resume · Sakshi Srivastava",
    description:
      "Print-ready resume of Sakshi Srivastava, Associate Software Engineer. Download as PDF or read inline.",
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
