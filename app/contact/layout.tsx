import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact David Liew - AI Solutions Architect",
  description:
    "Connect with David Liew for AI voice agent projects or to explore how agentic systems can amplify your team. Based in Singapore.",
  alternates: {
    canonical: "https://daveliew.com/contact",
  },
  openGraph: {
    title: "Contact David Liew - AI Solutions Architect",
    description:
      "Connect for AI voice agent projects or to explore agentic systems.",
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
