"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { HomeContent } from "@/app/page";
import SeoSchema from "@/components/SeoSchema";
import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Ship,
  FileCheck,
  ClipboardList,
  CheckCircle,
  Car,
  Clock,
  ArrowRight,
  Info,
} from "lucide-react";

const DUBAI_FAQ = [
  {
    question: "¿Cuánto es el arancel para importar un coche de Dubái a España?",
    answer:
      "Los vehículos de origen no-UE pagan un arancel del 6,5% del valor CIF (coste del coche + seguro + flete). Además, sobre el valor CIF más el arancel se aplica el IVA del 21%. Para un coche de 40.000 € con transporte de 3.000 €, el coste adicional en aduanas sería de aproximadamente 12.500 €.",
  },
  {
    question: "¿Necesito homologación para importar mi coche de Dubái?",
    answer:
      "Sí, los coches vendidos en EAU no tienen homologación europea. Necesitarás una homologación individual que certifique que el vehículo cumple la normativa española y europea. El coste varía entre 800 € y 4.000 € dependiendo del modelo. Para coches que ya cuentan con especificación europea (muchos Mercedes, BMW o VW vendidos en EAU), el proceso es más sencillo.",
  },
  {
    question: "¿Cuánto tarda el transporte marítimo desde Dubái a España?",
    answer:
      "El transporte desde el Puerto de Jebel Ali (Dubái) a España tarda entre 20 y 35 días dependiendo del puerto de destino. Los tiempos orientativos son: Valencia 25–30 días, Barcelona 22–28 días, Algeciras 20–25 días. El coste del transporte es de 1.600–2.800 € según el puerto.",
  },
  {
    question: "¿Los coches eléctricos importados de Dubái pagan impuesto de matriculación?",
    answer:
      "No. Los coches eléctricos (0 g/km CO2) están exentos del Impuesto de Matriculación en España, independientemente de su país de origen. Sin embargo, siguen pagando aranceles aduaneros (6,5%) e IVA (21%) al cruzar la frontera de la UE.",
  },
  {
    question: "¿Los coches de Dubái tienen el volante a la izquierda?",
    answer:
      "Sí, en los Emiratos Árabes Unidos se circula por la derecha, por lo que los coches tienen el volante a la izquierda, igual que en España y el resto de Europa continental. Esto elimina la necesidad de convertir el volante, a diferencia de los coches del Reino Unido o Japón.",
  },
  {
    question: "¿Qué marcas son más baratas en Dubái que en España?",
    answer:
      "En Dubái suelen ser más baratos que en España: ciertos modelos americanos (Cadillac, Dodge, GMC), algunos camiones pickups (Ford F-150, RAM 1500), versiones con especificaciones especiales de marcas europeas, y el mercado de coches de alta gama de segunda mano puede ofrecer buenas oportunidades en Rolls-Royce, Bentley y Lamborghini.",
  },
];

const PROCESS_STEPS = [
  {
    icon: <Car size={20} className="text-[var(--brand-blue)]" />,
    title: "Localiza y compra el coche en EAU",
    desc: "Busca en Dubizzle, Cars.co o concesionarios locales. Verifica que el coche tenga spec europea o que sea posible homologarlo.",
    time: "1–4 semanas",
  },
  {
    icon: <Ship size={20} className="text-[var(--brand-blue)]" />,
    title: "Contrata el transporte marítimo ro-ro",
    desc: "Desde el Puerto de Jebel Ali (Dubái) a un puerto español. El tránsito dura 20–35 días. Contrata seguro obligatorio.",
    time: "20–35 días",
  },
  {
    icon: <ClipboardList size={20} className="text-[var(--brand-blue)]" />,
    title: "Despacho aduanero en España",
    desc: "Al llegar al puerto, un agente de aduanas realiza el despacho: pago del arancel (6,5%) e IVA (21%). Documentos: factura de compra, packing list, conocimiento de embarque (B/L).",
    time: "3–7 días",
  },
  {
    icon: <FileCheck size={20} className="text-[var(--brand-blue)]" />,
    title: "Homologación individual",
    desc: "Lleva el coche a un organismo de control (IDIADA, INTA…) para la homologación individual. Coste: 800–4.000 € según modelo.",
    time: "2–8 semanas",
  },
  {
    icon: <CheckCircle size={20} className="text-[var(--brand-blue)]" />,
    title: "ITV y matriculación final",
    desc: "Con la homologación, pasa la ITV española. Paga el Impuesto de Matriculación en Hacienda y solicita la matrícula en la DGT.",
    time: "1–2 semanas",
  },
];

const POPULAR_MODELS = [
  { name: "Tesla Model S/3/X/Y", emoji: "⚡", note: "Exento matriculación" },
  { name: "Lamborghini Urus", emoji: "🏎️", note: "Ahorro potencial" },
  { name: "Rolls-Royce Ghost", emoji: "👑", note: "Segunda mano" },
  { name: "Dodge Challenger", emoji: "🇺🇸", note: "Solo en EAU" },
  { name: "GMC Yukon", emoji: "🚙", note: "No disponible en UE" },
  { name: "Ford F-150", emoji: "🛻", note: "Pickup exclusivo" },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--surface-border)] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left bg-[var(--surface)] hover:bg-[var(--surface-dim)] transition-colors"
      >
        <span className="font-semibold text-[var(--text-primary)] pr-4 text-sm">{q}</span>
        {open ? (
          <ChevronUp size={16} className="text-[var(--brand-blue)] shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-[var(--text-tertiary)] shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4 pt-2 bg-[var(--surface-dim)] text-sm text-[var(--text-secondary)] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function DubaiCalculatorContent() {
  const breadcrumbs = [
    { name: "Inicio", url: "https://importespana.com" },
    { name: "Importar desde Dubái", url: "https://importespana.com/importar-coche-dubai" },
  ];

  return (
    <>
      <SeoSchema
        breadcrumbs={breadcrumbs}
        faqItems={DUBAI_FAQ}
        showHomeSchemas={false}
      />

      <div className="max-w-3xl mx-auto px-4 pt-8 pb-20 space-y-10">

        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--text-tertiary)] flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">Importar desde Dubái</span>
        </nav>

        {/* Hero — card-hero gradient */}
        <div className="card-hero p-7 md:p-10">
          <div className="relative z-10 space-y-4">
            <div className="label-caps text-white/60 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
              Guía de importación 2026
            </div>
            <div className="flex items-center gap-3 text-3xl">
              🇦🇪 <ArrowRight size={20} className="text-white/50" /> 🇪🇸
            </div>
            <h1 className="heading-display text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
              Importar Coche desde Dubái a España
            </h1>
            <p className="text-white/70 text-base max-w-xl leading-relaxed">
              Calcula aranceles (6,5%), IVA (21%), impuesto de matriculación, homologación y transporte marítimo — todo en segundos.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["✅ Calculadora gratuita", "📋 Datos reales 2026", "⚡ Resultado inmediato"].map((b) => (
                <span key={b} className="text-xs font-semibold bg-white/10 border border-white/20 text-white/80 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cost overview — 3 key figures */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "6,5%", label: "Arancel aduanero", sub: "del valor CIF", color: "text-[var(--brand-blue)]" },
            { value: "21%", label: "IVA importación", sub: "sobre CIF + arancel", color: "text-[var(--brand-blue)]" },
            { value: "~25–30%", label: "Sobrecosto total", sub: "del precio del coche", color: "text-[var(--warning)]" },
          ].map((item) => (
            <div key={item.label} className="card p-4 text-center space-y-1">
              <div className={`number-display text-2xl font-bold ${item.color}`}>{item.value}</div>
              <div className="font-semibold text-[var(--text-primary)] text-xs leading-tight">{item.label}</div>
              <div className="text-[10px] text-[var(--text-tertiary)]">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Warning callout */}
        <div className="flex items-start gap-3 p-4 rounded-xl border border-amber-200 bg-amber-50">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <span className="font-semibold text-amber-800">Importante:</span>{" "}
            <span className="text-amber-700">
              Importar desde Dubái conlleva aranceles e IVA que no existen en importaciones desde la UE. Usa la calculadora para conocer el coste exacto antes de comprar.
            </span>
          </div>
        </div>

        {/* Calculator */}
        <div className="space-y-4">
          <div>
            <h2 className="heading-section text-xl text-[var(--text-primary)]">
              Calculadora — Dubái a España
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Configurada automáticamente para importación desde EAU.
            </p>
          </div>
          <Suspense fallback={
            <div className="card p-8 text-center text-sm text-[var(--text-tertiary)]">
              <div className="w-8 h-8 border-2 border-[var(--brand-blue)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              Cargando calculadora...
            </div>
          }>
            <HomeContent
              prefilledCountry="UAE"
              prefilledImportType="NonEU"
            />
          </Suspense>
        </div>

        {/* Cost build-up explainer */}
        <div className="card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-[var(--brand-blue)] shrink-0" />
            <h3 className="font-bold text-[var(--text-primary)]">¿Cómo se construye el coste total?</h3>
          </div>
          <div className="space-y-2 text-sm">
            {[
              { label: "Precio del coche (ejemplo)", value: "40.000 €", bar: 56, color: "bg-[var(--brand-blue)]" },
              { label: "+ Transporte marítimo (aprox.)", value: "2.200 €", bar: 8, color: "bg-[var(--brand-blue-light)]" },
              { label: "+ Arancel 6,5% del CIF", value: "2.743 €", bar: 10, color: "bg-amber-400" },
              { label: "+ IVA 21% sobre (CIF + arancel)", value: "9.450 €", bar: 20, color: "bg-amber-500" },
              { label: "+ Homologación + ITV + tasas", value: "~3.000 €", bar: 6, color: "bg-[var(--brand-gold)]" },
            ].map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[var(--text-secondary)]">{row.label}</span>
                  <span className="font-semibold text-[var(--text-primary)] number-display">{row.value}</span>
                </div>
                <div className="h-1.5 bg-[var(--surface-border)] rounded-full overflow-hidden">
                  <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.bar}%` }} />
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-[var(--surface-border)] flex justify-between font-bold text-sm">
              <span className="text-[var(--text-primary)]">Total estimado</span>
              <span className="number-display text-[var(--brand-blue)]">~57.400 €</span>
            </div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)]">
            Ejemplo orientativo. Usa la calculadora para tu caso específico.
          </p>
        </div>

        {/* Process steps */}
        <div className="space-y-4">
          <h2 className="heading-section text-xl text-[var(--text-primary)]">
            Proceso de Importación desde Dubái
          </h2>
          <div className="space-y-3">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="card p-5 flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[rgba(29,78,216,0.08)] flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="font-semibold text-[var(--text-primary)] text-sm">{s.title}</div>
                    <div className="flex items-center gap-1 text-xs text-[var(--text-tertiary)] shrink-0">
                      <Clock size={11} />
                      {s.time}
                    </div>
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">{s.desc}</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dubai vs. Alemania comparison */}
        <div className="space-y-4">
          <h2 className="heading-section text-xl text-[var(--text-primary)]">
            Dubái vs. Alemania — ¿Cuál conviene más?
          </h2>
          <div className="card overflow-hidden">
            <div className="grid grid-cols-3 text-xs font-semibold text-[var(--text-tertiary)] bg-[var(--surface-dim)] px-4 py-3 border-b border-[var(--surface-border)] label-caps">
              <span>Factor</span>
              <span className="text-center">🇦🇪 Dubái</span>
              <span className="text-center">🇩🇪 Alemania</span>
            </div>
            {[
              { label: "Arancel", dubai: "6,5% CIF", alemania: "0%", dubaiBad: true },
              { label: "IVA importación", dubai: "21%", alemania: "0%", dubaiBad: true },
              { label: "Homologación", dubai: "800–4.000€", alemania: "Incluida COC", dubaiBad: true },
              { label: "Transporte", dubai: "1.600–2.800€", alemania: "500–1.200€", dubaiBad: true },
              { label: "Coches exclusivos", dubai: "✅ F-150, Yukon…", alemania: "❌ No disponible", dubaiGood: true },
              { label: "Mercado lujo 2ª mano", dubai: "✅ Muy activo", alemania: "⚠️ Menor oferta", dubaiGood: true },
              { label: "Tiempo total", dubai: "3–4 meses", alemania: "4–8 semanas", dubaiBad: true },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-sm px-4 py-3 border-b border-[var(--surface-border)] last:border-0 hover:bg-[var(--surface-dim)] transition-colors">
                <span className="text-[var(--text-secondary)] font-medium">{row.label}</span>
                <span className={`text-center text-xs font-medium ${row.dubaiBad ? "text-[var(--brand-red)]" : "text-[var(--success)]"}`}>
                  {row.dubai}
                </span>
                <span className={`text-center text-xs font-medium ${row.dubaiBad ? "text-[var(--success)]" : "text-[var(--text-secondary)]"}`}>
                  {row.alemania}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--text-tertiary)]">
            Importar desde Alemania suele ser más barato salvo que busques un modelo no disponible en Europa.
          </p>
        </div>

        {/* Popular models */}
        <div className="space-y-4">
          <h2 className="heading-section text-xl text-[var(--text-primary)]">
            Modelos Populares desde Dubái
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {POPULAR_MODELS.map((m) => (
              <div key={m.name} className="card p-4 space-y-1.5">
                <div className="text-2xl">{m.emoji}</div>
                <div className="font-semibold text-[var(--text-primary)] text-sm leading-tight">{m.name}</div>
                <div className="text-xs text-[var(--brand-blue)] font-medium">{m.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Watch out section */}
        <div className="card p-6 border-l-4 border-l-[var(--brand-gold)] space-y-3">
          <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
            <AlertTriangle size={16} className="text-[var(--brand-gold)]" />
            Qué tener en cuenta antes de importar
          </h3>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            {[
              "Verifica que el modelo tiene spec europea o que la homologación es posible — algunos modelos EAU no pueden homologarse en España.",
              "El coche debe pasar la ITV española y cumplir normativa WLTP/Euro 6 de emisiones.",
              "Solicita el historial del vehículo (Carfax o similar) — el mercado de Dubái tiene alta rotación.",
              "El tipo de cambio AED/EUR puede afectar el precio final. Confirma precio y coste de envío por escrito.",
              "Contrata un gestor especializado en importaciones extra-UE para el despacho aduanero.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="heading-section text-xl text-[var(--text-primary)]">
            Preguntas Frecuentes — Importar desde Dubái
          </h2>
          <div className="space-y-2">
            {DUBAI_FAQ.map((item, i) => (
              <FaqItem key={i} q={item.question} a={item.answer} />
            ))}
          </div>
        </div>

        {/* Internal links */}
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/blog/como-importar-coche-dubai-espana-2026"
            className="card p-4 flex items-center gap-3 hover:border-[var(--brand-blue-light)] transition-all group"
          >
            <span className="text-2xl shrink-0">📖</span>
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
                Guía completa: Dubai → España 2026
              </div>
              <div className="text-xs text-[var(--text-tertiary)] mt-0.5">Proceso paso a paso y ejemplos reales</div>
            </div>
          </Link>
          <Link
            href="/importar-desde/uae"
            className="card p-4 flex items-center gap-3 hover:border-[var(--brand-blue-light)] transition-all group"
          >
            <span className="text-2xl shrink-0">🇦🇪</span>
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
                Guía: Importar desde EAU
              </div>
              <div className="text-xs text-[var(--text-tertiary)] mt-0.5">País de origen, documentación, consejos</div>
            </div>
          </Link>
        </div>

      </div>
    </>
  );
}
