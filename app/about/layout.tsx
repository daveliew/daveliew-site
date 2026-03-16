import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About David Liew - AI Solutions Architect",
  description:
    "Singapore-based AI Solutions Architect pioneering human-AI collaboration. Building intelligent systems that amplify human potential through the Three-Hat Framework.",
  alternates: {
    canonical: "https://daveliew.com/about",
  },
  openGraph: {
    title: "About David Liew - AI Solutions Architect",
    description:
      "Singapore-based AI Solutions Architect pioneering human-AI collaboration.",
    url: "https://daveliew.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
