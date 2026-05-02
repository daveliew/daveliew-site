import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with David Liew on LinkedIn or GitHub. Happy to compare notes on measurement, AI adoption, or governance in financial services and brand marketing.",
  keywords: "contact, David Liew, LinkedIn, GitHub, measurement, AI governance",
  openGraph: {
    title: "Contact David Liew",
    description:
      "Compare notes on measurement, AI adoption, or governance in financial services and brand marketing.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
