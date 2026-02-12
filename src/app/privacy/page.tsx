import { Metadata } from "next";
import PrivacyContent from "@/components/pages/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - ImportEspana",
  description:
    "Privacy Policy for ImportEspana. Learn how we handle your data and respect your privacy while using our vehicle import tax calculator.",
  alternates: {
    canonical: "https://importespana.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
