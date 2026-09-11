import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { profile } from "@/lib/content";
import "./globals.css";

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

/**
 * Netlify exposes the deployed site URL as `URL` at build time, so Open Graph,
 * canonical and JSON-LD metadata resolve correctly without editing this file.
 * Set NEXT_PUBLIC_SITE_URL to override, for example once a custom domain is on.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  "http://localhost:3000";
const title = `${profile.name} | ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description: profile.seoDescription,
  applicationName: `${profile.name} portfolio`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Premchand Tarange",
    "software engineer",
    "test automation engineer",
    "CI/CD engineer",
    "QA automation",
    "Python automation",
    "Selenium",
    "Pytest",
    "Jenkins",
    "Bengaluru",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title,
    description: profile.seoDescription,
    siteName: profile.name,
    locale: "en_IN",
    images: [
      {
        url: profile.ogImage,
        width: 1000,
        height: 1000,
        alt: `${profile.name}, ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.seoDescription,
    images: [profile.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  image: `${siteUrl}${profile.ogImage}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin, profile.github],
  worksFor: { "@type": "Organization", name: "Cisco Systems" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SKN Sinhgad Institute of Technology and Science, Lonavala",
  },
  knowsAbout: [
    "Test automation",
    "CI/CD pipelines",
    "Python",
    "Java",
    "Selenium",
    "Pytest",
    "Jenkins",
    "REST API testing",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <a
          href="#main"
          className="sr-only rounded-[10px] focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        <Nav />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
