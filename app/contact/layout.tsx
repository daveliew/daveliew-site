import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact David Liew - Product Deployment Engineer",
  description:
    "Connect with David Liew on LinkedIn or GitHub. Happy to compare notes on product deployment, Search, measurement integrity, or AI adoption. Singapore.",
  alternates: {
    canonical: "https://daveliew.com/contact",
  },
  openGraph: {
    title: "Contact David Liew - Product Deployment Engineer",
    description:
      "Compare notes on product deployment, Search, measurement integrity, or AI adoption.",
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
