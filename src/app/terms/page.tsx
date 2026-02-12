import { Metadata } from "next";
import TermsContent from "@/components/pages/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use - ImportEspana",
  description:
    "Terms of Use for ImportEspana. Read our conditions regarding the use of our vehicle import tax calculator and disclaimer.",
  alternates: {
    canonical: "https://importespana.com/terms",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
