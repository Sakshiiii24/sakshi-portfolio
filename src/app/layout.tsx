import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteProviders } from "@/components/site/site-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://sakshisrivastava.dev";
const siteName = "Sakshi Srivastava — Associate Software Engineer";
const siteDescription =
  "Sakshi Srivastava is an Associate Software Engineer skilled in Java, JavaScript, Python, and SQL — building responsive web interfaces, RESTful APIs, and reliable backend services. Explore projects, experience, and get in touch.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s · Sakshi Srivastava",
  },
  description: siteDescription,
  keywords: [
    "Sakshi Srivastava",
    "Software Engineer",
    "Associate Software Engineer",
    "Java Developer",
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "RESTful APIs",
    "SQL",
    "Amdocs",
    "Portfolio",
  ],
  authors: [{ name: "Sakshi Srivastava" }],
  creator: "Sakshi Srivastava",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f0" },
    { media: "(prefers-color-scheme: dark)", color: "#161310" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteProviders>{children}</SiteProviders>
          <Toaster />
          <SonnerToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
