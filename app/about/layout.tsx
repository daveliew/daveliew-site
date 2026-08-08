import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About David Liew - Product Deployment Engineer",
  description:
    "Product Deployment Engineer — product adoption, deployment, measurement integrity. Currently at Google gTech Ads (Search+). Ex-Meta. Singapore.",
  alternates: {
    canonical: "https://daveliew.com/about",
  },
  openGraph: {
    title: "About David Liew - Product Deployment Engineer",
    description:
      "Product Deployment Engineer at Google gTech Ads. Ex-Meta. Singapore.",
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
