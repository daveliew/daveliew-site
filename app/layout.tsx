import type { Metadata } from "next";
import { Jura, Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { MotionProvider } from "@/components/common";

// Optimized font loading:
// - preload: true adds <link rel="preload"> for critical fonts
// - Limited weights reduce font file size (75KB → ~40KB)
// - adjustFontFallback reduces CLS during font swap
const jura = Jura({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jura",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daveliew.com"),
  title: {
    default: "David Liew",
    template: "%s | David Liew",
  },
  description:
    "Solutions Architect — measurement, signal integrity, AI governance. Currently at Google gTech Ads (Finance & Brands). Ex-Meta. Singapore.",
  keywords:
    "Solutions Architect, measurement, signal integrity, AI governance, Google Ads, advertising, Singapore",
  authors: [{ name: "David Liew" }],
  creator: "David Liew",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daveliew.com",
    siteName: "David Liew",
    title: "David Liew — Solutions Architect",
    description:
      "Solutions Architect — measurement, signal integrity, AI governance. Currently at Google gTech Ads. Ex-Meta. Singapore.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "David Liew — Solutions Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Liew — Solutions Architect",
    description:
      "Measurement, signal integrity, AI governance. Currently at Google gTech Ads. Ex-Meta.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jura.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "David Liew",
              jobTitle: "Advertising Solutions Architect",
              description:
                "Solutions Architect focused on measurement, signal integrity, and AI governance for financial services and brand marketing",
              url: "https://daveliew.com",
              sameAs: [
                "https://linkedin.com/in/daveliew",
                "https://github.com/daveliew",
              ],
              knowsAbout: [
                "Advertising Solutions Architecture",
                "Measurement and Signal Integrity",
                "AI Governance",
                "Human-AI Collaboration",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Singapore",
                addressCountry: "SG",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "David Liew",
              url: "https://daveliew.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://daveliew.com/ai-journey?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <MotionProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
