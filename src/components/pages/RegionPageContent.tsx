"use client";

import { Suspense } from "react";

import { REGIONS, getRegionBySlug } from "@/constants/Regions";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import {
  MapPin,
  Calculator,
  Building2,
  Car,
  FileCheck,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Users,
  Percent,
  ChevronRight,
} from "lucide-react";
import { HomeContent } from "@/app/page";

const texts = {
  es: {
    guideComplete: "Guía completa",
    data2026: "Datos 2026",
    itp: "ITP",
    population: "Población",
    capital: "Capital",
    popularBrand: "Marca popular",
    itpCalcTitle: "Ejemplo de cálculo ITP en",
    carPrice: "Precio del coche (ejemplo)",
    depreciation: "Depreciación BOE (5 años)",
    fiscalValue: "Valor fiscal",
    calcExact: "Calcula tu caso exacto",
    dgtOffice: "Oficina DGT en",
    bookAppointment: "Pedir cita previa",
    dgtRegistrations: "Matriculaciones DGT",
    tipsTitle: "Consejos para importar en",
    stepsTitle: "Pasos para importar un coche en",
    mostImported: "Marcas más importadas en",
    ctaQuestion: "¿Importando un coche a",
    ctaDesc:
      "Calcula todos los impuestos y costes en segundos con nuestra calculadora gratuita.",
    ctaButton: "Usar calculadora gratis",
    otherRegions: "Importar coches en otras comunidades",
    viewAll: "Ver todas las comunidades",
    importCar: "Importar Coche en",
    // Step labels
    step1Title: "Compra el vehículo en el extranjero",
    step1Desc: "Verifica el historial, documentación y que no tenga cargas.",
    step2Title: "Transporta el coche a España",
    step2DescPort: "Transporte por carretera o marítimo vía",
    step2DescNoPort: "Transporte por carretera desde Europa.",
    step3Title: "Pasa la ITV de importación",
    step3Desc: "Inspección técnica obligatoria para vehículos extranjeros.",
    step4Title: "Paga el impuesto de matriculación",
    step4Desc: "Basado en las emisiones de CO₂ (0–14.75% según tramo).",
    step5Title: "Paga el ITP",
    step6Title: "Matricula en la DGT",
  },
  en: {
    guideComplete: "Complete guide",
    data2026: "2026 data",
    itp: "ITP",
    population: "Population",
    capital: "Capital",
    popularBrand: "Top brand",
    itpCalcTitle: "Example ITP calculation in",
    carPrice: "Car price (example)",
    depreciation: "BOE depreciation (5 years)",
    fiscalValue: "Fiscal value",
    calcExact: "Calculate your exact case",
    dgtOffice: "DGT Office in",
    bookAppointment: "Book appointment",
    dgtRegistrations: "DGT Registrations",
    tipsTitle: "Tips for importing in",
    stepsTitle: "Steps to import a car in",
    mostImported: "Most imported brands in",
    ctaQuestion: "Importing a car to",
    ctaDesc:
      "Calculate all taxes and costs in seconds with our free calculator.",
    ctaButton: "Use free calculator",
    otherRegions: "Import cars in other regions",
    viewAll: "View all regions",
    importCar: "Import a Car in",
    // Step labels
    step1Title: "Buy the vehicle abroad",
    step1Desc: "Verify the history, documentation and that it has no liens.",
    step2Title: "Transport the car to Spain",
    step2DescPort: "By road or maritime transport via",
    step2DescNoPort: "Road transport from Europe.",
    step3Title: "Pass the import ITV",
    step3Desc: "Mandatory technical inspection for foreign vehicles.",
    step4Title: "Pay the registration tax",
    step4Desc: "Based on CO₂ emissions (0–14.75% depending on bracket).",
    step5Title: "Pay the ITP",
    step6Title: "Register at the DGT",
  },
};

function buildSteps(
  t: (typeof texts)["es"],
  regionName: string,
  itpRate: number,
  capital: string,
  nearestPort?: string,
) {
  return [
    { title: t.step1Title, desc: t.step1Desc },
    {
      title: t.step2Title,
      desc: nearestPort
        ? `${t.step2DescPort} ${nearestPort}.`
        : t.step2DescNoPort,
    },
    { title: t.step3Title, desc: t.step3Desc },
    { title: t.step4Title, desc: t.step4Desc },
    {
      title: `${t.step5Title} (${itpRate}%)`,
      desc:
        t === texts.es
          ? `El ITP en ${regionName} es del ${itpRate}% sobre el valor fiscal del BOE.`
          : `The ITP in ${regionName} is ${itpRate}% on the fiscal value from the BOE.`,
    },
    {
      title: t.step6Title,
      desc:
        t === texts.es
          ? `Pide cita previa en la DGT de ${capital} y lleva toda la documentación.`
          : `Book an appointment at the DGT in ${capital} and bring all documentation.`,
    },
  ];
}

export default function RegionContent({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const lang = language === "es" ? "es" : "en";
  const t = texts[lang];

  const region = getRegionBySlug(slug);
  if (!region) return null;

  const otherRegions = REGIONS.filter((r) => r.slug !== slug).slice(0, 6);

  const examplePrice = 15000;
  const exampleDepreciation = 0.67;
  const exampleFiscalValue = Math.round(examplePrice * exampleDepreciation);
  const exampleITP = Math.round(exampleFiscalValue * (region.itpRate / 100));

  const description =
    lang === "es" ? region.descriptionEs : region.descriptionEn;
  const tips = lang === "es" ? region.tipsEs : region.tipsEn;
  const regionName = lang === "es" ? region.nameEs : region.name;

  const importSteps = buildSteps(
    t,
    regionName,
    region.itpRate,
    region.capital,
    region.nearestPort,
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <nav
          className="flex items-center gap-1 text-xs text-gray-400"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-blue-600 transition-colors">
            ImportEspana
          </Link>
          <ChevronRight size={12} />
          <Link href="/itp" className="hover:text-blue-600 transition-colors">
            ITP
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">{regionName}</span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-xl">
              <MapPin className="text-blue-600" size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {lang === "es"
                  ? `Importar Coche en ${regionName}`
                  : `Import a Car in ${regionName}`}
              </h1>
              <p className="text-gray-500 mt-1">
                {t.guideComplete} • {t.itp} {region.itpRate}% • {t.data2026}
              </p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <Percent size={18} className="text-blue-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-900">
                {region.itpRate}%
              </div>
              <div className="text-xs text-gray-500">{t.itp}</div>
            </div>
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <Users size={18} className="text-green-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-900">
                {region.population}
              </div>
              <div className="text-xs text-gray-500">{t.population}</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <Building2 size={18} className="text-purple-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-900">
                {region.capital}
              </div>
              <div className="text-xs text-gray-500">{t.capital}</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 text-center">
              <Car size={18} className="text-amber-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-900">
                {region.popularBrands[0]}
              </div>
              <div className="text-xs text-gray-500">{t.popularBrand}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-6 pb-20">
        {/* Live Interactive Calculator for this Region */}
        <section className="bg-white rounded-2xl shadow-sm p-4 md:p-6 mb-8 border border-blue-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6 border-b pb-4">
            <Calculator size={24} className="text-blue-600" />
            Calculadora de Costes para {regionName}
          </h2>
          <Suspense
            fallback={
              <div className="p-10 text-center text-gray-500">
                Cargando calculadora...
              </div>
            }
          >
            <HomeContent prefilledRegion={region.name} />
          </Suspense>
        </section>

        {/* DGT Office */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <Building2 size={20} className="text-green-600" />
            {t.dgtOffice} {region.capital}
          </h2>
          <div className="bg-green-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-700 font-medium">
              📍 {region.dgtOffice}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="https://sede.dgt.gob.es/es/otros-tramites/cita-previa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-green-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              {t.bookAppointment}
              <ExternalLink size={14} />
            </a>
            <a
              href="https://sede.dgt.gob.es/es/vehiculos/matriculaciones-de-vehiculos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-white border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium hover:bg-green-50 transition-colors"
            >
              {t.dgtRegistrations}
              <ExternalLink size={14} />
            </a>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <Lightbulb size={20} className="text-amber-500" />
            {t.tipsTitle} {regionName}
          </h2>
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <span className="mt-0.5 w-5 h-5 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Import Steps */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FileCheck size={20} className="text-purple-600" />
            {t.stepsTitle} {regionName}
          </h2>
          <ol className="space-y-4">
            {importSteps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-7 h-7 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Popular Brands */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {t.mostImported} {regionName}
          </h2>
          <div className="flex flex-wrap gap-2">
            {region.popularBrands.map((brand) => (
              <span
                key={brand}
                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
              >
                {brand}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center text-white">
          <h2 className="text-xl font-bold mb-2">
            {t.ctaQuestion} {regionName}?
          </h2>
          <p className="text-blue-100 text-sm mb-4">{t.ctaDesc}</p>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-blue-700 px-6 py-3.5 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors"
          >
            <Calculator size={18} />
            {t.ctaButton}
            <ArrowRight size={16} />
          </Link>
        </section>

        {/* Other Regions */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            {t.otherRegions}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {otherRegions.map((r) => (
              <Link
                key={r.slug}
                href={`/importar-coche/${r.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-3 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="font-medium text-sm text-gray-900">
                  {lang === "es" ? r.nameEs : r.name}
                </div>
                <div className="text-xs text-gray-400">
                  {t.itp} {r.itpRate}%
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/itp"
            className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-3 hover:underline"
          >
            {t.viewAll}
            <ArrowRight size={14} />
          </Link>
        </section>
      </div>
    </div>
  );
}
