import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About David Liew - Solutions Architect",
  description:
    "Solutions Architect — measurement, signal integrity, AI governance. Currently at Google gTech Ads (Finance & Brands). Ex-Meta. Singapore.",
  alternates: {
    canonical: "https://daveliew.com/about",
  },
  openGraph: {
    title: "About David Liew - Solutions Architect",
    description: "Solutions Architect at Google gTech Ads. Ex-Meta. Singapore.",
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
