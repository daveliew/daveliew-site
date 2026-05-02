import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Advertising Solutions Architect at Google gTech Ads. Ex-Meta. Working on measurement, signal integrity, and AI governance in financial services and brand marketing. Singapore.",
  keywords:
    "David Liew, Solutions Architect, Google Ads, measurement, signal integrity, AI governance, Meta, Singapore",
  openGraph: {
    title: "About David Liew - Solutions Architect",
    description:
      "Solutions Architect — measurement, signal integrity, AI governance. Currently at Google gTech Ads. Ex-Meta.",
    type: "profile",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
