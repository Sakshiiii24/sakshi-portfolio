import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sakshi Srivastava — an Associate Software Engineer open to software engineering opportunities. Replies usually within 24 hours.",
  openGraph: {
    title: "Contact · Sakshi Srivastava",
    description:
      "Send a message, copy an email, or find me on GitHub, LinkedIn, and LeetCode.",
    type: "article",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
