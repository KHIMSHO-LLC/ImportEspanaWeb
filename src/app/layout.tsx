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

export const metadata: Metadata = {
  title: "ImportEspana - Calculadora Impuestos",
  description: "Calculadora de impuestos de importación de vehículos en España",
  other: {
    "google-adsense-account": "ca-pub-8296385442547902",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <AdSense pId="8296385442547902" />
      </body>
    </html>
  );
}
