import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product Deployment Engineer at Google gTech Ads. Ex-Meta. Working on product adoption, deployment, and measurement integrity, specialising in Search+. Singapore.",
  keywords:
    "David Liew, Product Deployment Engineer, Google Ads, Search, product adoption, deployment, measurement integrity, Meta, Singapore",
  openGraph: {
    title: "About David Liew - Product Deployment Engineer",
    description:
      "Product Deployment Engineer — product adoption, deployment, measurement integrity. Currently at Google gTech Ads (Search+). Ex-Meta.",
    type: "profile",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
