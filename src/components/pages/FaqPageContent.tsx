"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ_DATA } from "@/constants/FaqData";
import SeoSchema from "@/components/SeoSchema";

const CATEGORIES = [
  {
    id: "costes",
    title: "Costes e Impuestos",
    icon: "💶",
    range: [0, 6],
  },
  {
    id: "proceso",
    title: "Proceso y Trámites",
    icon: "📋",
    range: [6, 12],
  },
  {
    id: "vehiculos",
    title: "Tipos de Vehículos",
    icon: "🚗",
    range: [12, 17],
  },
  {
    id: "comparativas",
    title: "Comparativas Regionales",
    icon: "🗺️",
    range: [17, 21],
  },
  {
    id: "dubai",
    title: "Importar desde Dubái",
    icon: "🇦🇪",
    range: [21, 28],
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[var(--surface-border)] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-[var(--surface)] hover:bg-[var(--surface-dim)] transition-colors duration-200"
      >
        <span className="font-semibold text-[var(--text-primary)] pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp size={18} className="text-[var(--brand-blue)] shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-[var(--text-tertiary)] shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-3 bg-[var(--surface-dim)] text-sm text-[var(--text-secondary)] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqPageContent() {
  const allFaqs = FAQ_DATA.es;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const breadcrumbs = [
    { name: "Inicio", url: "https://importespana.com" },
    { name: "Preguntas Frecuentes", url: "https://importespana.com/preguntas-frecuentes" },
  ];

  return (
    <>
      <SeoSchema
        breadcrumbs={breadcrumbs}
        faqItems={allFaqs}
        showHomeSchemas={false}
      />

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--text-tertiary)] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)]">Preguntas Frecuentes</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Preguntas Frecuentes sobre Importar Coches a España
        </h1>
        <p className="text-[var(--text-secondary)] mb-10 text-lg">
          Todo lo que necesitas saber sobre costes, trámites, impuestos y cómo importar un coche desde Alemania, Dubái y otros países a España.
        </p>

        <div className="space-y-12">
          {CATEGORIES.map((cat) => {
            const faqs = allFaqs.slice(cat.range[0], cat.range[1]);
            return (
              <section key={cat.id}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">
                    {cat.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => {
                    const globalIdx = cat.range[0] + idx;
                    return (
                      <AccordionItem
                        key={globalIdx}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === globalIdx}
                        onToggle={() =>
                          setOpenIndex(openIndex === globalIdx ? null : globalIdx)
                        }
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA links */}
        <div className="mt-12 p-6 bg-[var(--surface-dim)] rounded-2xl border border-[var(--surface-border)]">
          <h3 className="font-bold text-[var(--text-primary)] mb-3">
            ¿Listo para calcular tu importación?
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Usa nuestra calculadora gratuita para obtener el coste exacto con los datos oficiales del BOE.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Calcular ahora
            </Link>
            <Link
              href="/importar-coche-dubai"
              className="btn-secondary text-sm px-5 py-2.5"
            >
              Importar desde Dubái
            </Link>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-8 border-t border-[var(--surface-border)]">
          <h3 className="font-semibold text-[var(--text-secondary)] mb-4 text-sm uppercase tracking-wider">
            También puede interesarte
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { href: "/itp", label: "Tabla ITP por comunidad" },
              { href: "/how-it-works", label: "Cómo funciona la importación" },
              { href: "/metodologia", label: "Metodología del cálculo" },
              { href: "/blog", label: "Blog sobre importación" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--brand-blue)] hover:underline py-1"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
