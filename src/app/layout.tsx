import type { Metadata } from "next";
import { manrope, newsreader } from "@/lib/fonts";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Han-Ling Hsu | Product & Growth Analytics",
    template: "%s | Han-Ling Hsu",
  },
  description:
    "Product and growth analytics leader in London, turning behavioural data into confident product decisions and measurable growth.",
  keywords: [
    "Han-Ling Hsu",
    "Product Analyst",
    "Growth Analytics",
    "Data Analyst",
    "Product Analytics",
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
    title: "Han-Ling Hsu | Product & Growth Analytics",
    description:
      "I turn behavioural data into product decisions that compound.",
    siteName: "Han-Ling Hsu",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Han-Ling Hsu — Product & Growth Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Han-Ling Hsu | Product & Growth Analytics",
    description:
      "I turn behavioural data into product decisions that compound.",
    images: ["/og.png"],
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
