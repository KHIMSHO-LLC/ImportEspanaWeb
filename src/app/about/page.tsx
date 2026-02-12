import { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us - ImportEspana",
  description:
    "Learn about ImportEspana, the leading tool for calculating vehicle import taxes in Spain. Our mission is to simplify the complex process of importing vehicles.",
  alternates: {
    canonical: "https://importespana.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
