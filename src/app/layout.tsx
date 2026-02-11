import { AdSense } from "@/components/AdSense";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SEO_KEYWORDS } from "@/constants/SeoKeywords";

export const metadata: Metadata = {
  title: {
    default: "ImportEspana - Calculadora Impuestos Matriculación España",
    template: "%s | ImportEspana",
  },
  description:
    "Calculadora gratuita de impuestos de matriculación para coches importados en España. Calcula el coste de importar coche de Alemania, Francia o cualquier parte de la UE.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: "KHIMSHO LLC" }],
  creator: "KHIMSHO LLC",
  publisher: "ImportEspana",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ImportEspana - Calculadora Impuesto Matriculación",
    description:
      "Calcula el coste exacto de importar y matricular tu coche en España. Datos oficiales del BOE.",
    url: "https://importespana.com",
    siteName: "ImportEspana",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImportEspana - Calculadora Importación Coches",
    description:
      "Calcula cuánto cuesta matricular tu coche extranjero en España.",
  },
  other: {
    "google-adsense-account": "ca-pub-8296385442547902",
  },
};

import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 font-sans text-slate-900`}
      >
        <LanguageProvider>
          <AdSense pId="8296385442547902" />
          <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
