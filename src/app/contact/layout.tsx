import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sakshi — a software engineer open to senior and staff engineering roles. Replies usually within 24 hours.",
  openGraph: {
    title: "Contact · Sakshi",
    description:
      "Let's build something great. Recruiters and founders welcome — email, social, or the form. I usually reply within 24 hours.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
