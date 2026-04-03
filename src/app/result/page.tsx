import { Metadata } from "next";
import ResultClient from "./ResultClient";

// Personalized calculation results have no SEO value — prevent indexing
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ResultPage() {
  return <ResultClient />;
}
