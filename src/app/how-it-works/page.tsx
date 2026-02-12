import { Metadata } from "next";
import HowItWorksContent from "@/components/pages/HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works - ImportEspana",
  description:
    "See how simple it is to import a car to Spain with ImportEspana. Calculate taxes, manage paperwork, and register your vehicle in 4 easy steps.",
  alternates: {
    canonical: "https://importespana.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
