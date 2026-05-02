import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing - David Liew",
  description:
    "Notes on context engineering, Claude, agents, and human-AI collaboration. Published as I figure things out.",
  alternates: {
    canonical: "https://daveliew.com/ai-journey",
  },
  openGraph: {
    title: "Writing - David Liew",
    description:
      "Notes on context engineering, Claude, agents, and human-AI collaboration.",
    url: "https://daveliew.com/ai-journey",
  },
};

export default function AIJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
