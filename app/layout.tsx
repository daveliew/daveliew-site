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
    "Building intelligent systems that amplify human potential. Expert in agentic AI, automation, and sustainable technology solutions for purpose-driven businesses.",
  keywords:
    "agentic AI architect, AI automation, intelligent systems, purpose-driven technology, sustainable AI, AI voice agents Singapore",
  authors: [{ name: "David Liew" }],
  creator: "David Liew",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daveliew.com",
    siteName: "David Liew",
    title: "David Liew - Agentic AI Architect",
    description:
      "Building intelligent systems that amplify human potential. Expert in agentic AI, automation, and sustainable technology solutions.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "David Liew - Agentic AI Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Liew - Agentic AI Architect",
    description:
      "Building intelligent systems that amplify human potential through purposeful technology.",
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
              jobTitle: "AI Solutions Architect",
              description:
                "Building intelligent systems that amplify human potential through purposeful technology",
              url: "https://daveliew.com",
              sameAs: [
                "https://linkedin.com/in/daveliew",
                "https://github.com/daveliew",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Agentic Brewery",
              },
              knowsAbout: [
                "Agentic AI",
                "AI Automation",
                "Sustainable Technology",
                "Purpose-Driven Business Solutions",
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
