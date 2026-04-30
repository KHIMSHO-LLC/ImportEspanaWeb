import { GoogleAnalytics } from "@next/third-parties/google";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SEO_KEYWORDS } from "@/constants/SeoKeywords";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://importespana.com"),
  title: {
    default:
      "ImportEspana 2026 — Calculadora IEDMT, ITP y Aranceles para Importar Coches a España",
    template: "%s | ImportEspana",
  },
  description:
    "Calculadora oficial 2026: IEDMT (Ley 38/1992), ITP por comunidad, arancel 10% e IVA 21% para coches importados a España. Tablas BOE Orden HAC/1501/2025. Compara comunidades y coste real de propiedad. Gratis.",
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
  alternates: {
    canonical: "https://importespana.com",
    languages: {
      "es-ES": "https://importespana.com",
      "en-US": "https://importespana.com",
      "de-DE": "https://importespana.com",
      "fr-FR": "https://importespana.com",
      "ru-RU": "https://importespana.com",
      "x-default": "https://importespana.com",
    },
  },
  openGraph: {
    title:
      "ImportEspana — Calculadora IEDMT, ITP y aranceles para importar coches (2026)",
    description:
      "Datos oficiales BOE 2026. IEDMT, ITP por comunidad (con exenciones), arancel 10% e IVA 21%, comparativa entre comunidades y coste real de propiedad.",
    url: "https://importespana.com",
    siteName: "ImportEspana",
    locale: "es_ES",
    alternateLocale: ["en_US", "de_DE", "fr_FR", "ru_RU"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImportEspana — Calcula impuestos de importación de coches a España (2026)",
    description:
      "IEDMT, ITP, aranceles, IVA y trámites. Tablas BOE oficiales y comparativa por comunidad.",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <GoogleAnalytics gaId="G-05KZ4XPMFR" />
        <JsonLd />
        <ThemeProvider>
          <LanguageProvider>
            {/* Cursor spotlight — renders behind everything */}
            <MouseSpotlight />

            <div
              className="flex flex-col min-h-screen print:min-h-0 print:h-auto print:block"
              style={{ position: "relative", zIndex: 1 }}
            >
              <Header />
              <main className="flex-1 pt-[72px] md:pt-[80px] print:pt-0">
                {children}
              </main>
              <Footer />
              <CookieConsent />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
