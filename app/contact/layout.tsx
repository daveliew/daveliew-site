import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact David Liew - Solutions Architect",
  description:
    "Connect with David Liew on LinkedIn or GitHub. Happy to compare notes on measurement, AI adoption, or governance in financial services and brand marketing. Singapore.",
  alternates: {
    canonical: "https://daveliew.com/contact",
  },
  openGraph: {
    title: "Contact David Liew - Solutions Architect",
    description:
      "Compare notes on measurement, AI adoption, or governance in financial services and brand marketing.",
    url: "https://daveliew.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
