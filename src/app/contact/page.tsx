import { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - ImportEspana",
  description:
    "Get in touch with the ImportEspana team. Questions about vehicle import taxes in Spain, data corrections, or feedback — email us at info@importespana.com.",
  alternates: {
    canonical: "https://importespana.com/contact",
    languages: {
      "es-ES": "https://importespana.com/contact",
      "en-US": "https://importespana.com/contact",
      "x-default": "https://importespana.com/contact",
    },
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
