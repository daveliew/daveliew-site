import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with David Liew on LinkedIn or GitHub. Happy to compare notes on product deployment, Search, measurement integrity, or AI adoption.",
  keywords:
    "contact, David Liew, LinkedIn, GitHub, Search, product deployment, measurement",
  openGraph: {
    title: "Contact David Liew",
    description:
      "Compare notes on product deployment, Search, measurement integrity, or AI adoption.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
