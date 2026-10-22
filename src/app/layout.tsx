import type { Metadata } from "next";
import { manrope, newsreader } from "@/lib/fonts";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Han-Ling Hsu | Senior Product Analyst",
    template: "%s | Han-Ling Hsu",
  },
  description:
    "Senior Product Analyst in London leading AI product measurement, experimentation and subscription analytics to support confident product decisions.",
  keywords: [
    "Han-Ling Hsu",
    "Senior Product Analyst",
    "AI Product Analytics",
    "Experimentation",
    "Subscription Analytics",
    "Causal Inference",
    "London",
  ],
  authors: [{ name: "Han-Ling Hsu" }],
  creator: "Han-Ling Hsu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_GB",
    url: "/",
    title: "Han-Ling Hsu | Senior Product Analyst",
    description:
      "I turn product questions into evidence teams can act on.",
    siteName: "Han-Ling Hsu",
    images: [
      {
        url: "/og-decision.png",
        width: 1200,
        height: 630,
        alt: "Han-Ling Hsu — Senior Product Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Han-Ling Hsu | Senior Product Analyst",
    description:
      "I turn product questions into evidence teams can act on.",
    images: ["/og-decision.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${manrope.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
