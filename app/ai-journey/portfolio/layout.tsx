import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - David Liew",
  description: "Projects from hackathons and personal exploration with AI.",
  alternates: {
    canonical: "https://daveliew.com/ai-journey/portfolio",
  },
  openGraph: {
    title: "Portfolio - David Liew",
    description: "Projects from hackathons and personal exploration with AI.",
    url: "https://daveliew.com/ai-journey/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
