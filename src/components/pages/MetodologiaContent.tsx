"use client";

import Link from "next/link";
import { BookOpen, Calculator, FileText, RefreshCw } from "lucide-react";

export default function MetodologiaContent() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-[var(--text-tertiary)] mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[var(--brand-blue)] transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-[var(--text-primary)]">Metodología</span>
      </nav>

      {/* Last updated badge */}
      <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
        <RefreshCw size={12} />
        Tablas actualizadas: Enero 2026 — Fuente: BOE
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
        Metodología del Cálculo
      </h1>
      <p className="text-[var(--text-secondary)] text-lg mb-10">
        Cómo calcula ImportEspana los impuestos y costes de importación. Todas las fórmulas, fuentes de datos y supuestos utilizados.
      </p>

      <div className="space-y-10">
        {/* Impuesto de Matriculación */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <Calculator size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Impuesto de Matriculación (IEDMT)
            </h2>
          </div>
          <div className="prose prose-sm max-w-none text-[var(--text-secondary)] space-y-3">
            <p>
              El Impuesto Especial sobre Determinados Medios de Transporte se calcula aplicando el tipo impositivo correspondiente sobre la base imponible:
            </p>
            <div className="bg-[var(--surface-dim)] border border-[var(--surface-border)] rounded-xl p-4 font-mono text-sm">
              IEDMT = Valor_Fiscal_BOE × Depreciación × Tipo_CO2
            </div>
            <p><strong>Valor Fiscal BOE:</strong> Precio de referencia del modelo según las tablas oficiales del BOE (Resolución de la Dirección General de Tributos). Es el precio de venta al público en España del modelo en el año de fabricación.</p>
            <p><strong>Coeficiente de depreciación:</strong> Factor de reducción según la antigüedad del vehículo. Por ejemplo, un coche de 3 años usa el 56% del valor BOE.</p>
            <p><strong>Tipo impositivo por CO2 (Tipo estatal — art. 70 Ley 38/1992):</strong></p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse my-2">
                <thead>
                  <tr className="bg-[var(--surface-dim)]">
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">Emisiones CO₂ (WLTP)</th>
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">Tipo IEDMT</th>
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">Ejemplo sobre base €20.000</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  {[
                    ["0 – 120 g/km", "0 % (exento)", "0 €"],
                    ["121 – 159 g/km", "4,75 %", "950 €"],
                    ["160 – 199 g/km", "9,75 %", "1.950 €"],
                    ["≥ 200 g/km", "14,75 %", "2.950 €"],
                  ].map(([co2, rate, example]) => (
                    <tr key={co2}>
                      <td className="p-3 border border-[var(--surface-border)] font-mono">{co2}</td>
                      <td className="p-3 border border-[var(--surface-border)] font-bold">{rate}</td>
                      <td className="p-3 border border-[var(--surface-border)] text-[var(--text-tertiary)]">{example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-tertiary)]">Algunas comunidades aplican un tipo superior en el último tramo (Asturias, Cataluña, C. Valenciana, Murcia, Cantabria, Baleares: hasta 16%). Canarias, Ceuta y Melilla aplican 0% en todos los tramos.</p>
            <p>
              <strong>Base legal:</strong>{" "}
              <a
                href="https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-blue)] hover:underline"
              >
                Ley 38/1992 de Impuestos Especiales (BOE)
              </a>
            </p>
          </div>
        </section>

        {/* Depreciation Table */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <Calculator size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Tabla de Depreciación Hacienda
            </h2>
          </div>
          <div className="prose prose-sm max-w-none text-[var(--text-secondary)] space-y-3">
            <p>
              Hacienda aplica un coeficiente de depreciación al valor fiscal BOE en función de la antigüedad exacta del vehículo:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--surface-dim)]">
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">Antigüedad del vehículo</th>
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">% Valor BOE retenido</th>
                    <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">Base sobre €30.000</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  {[
                    ["Menos de 1 año", "100 %", "30.000 €"],
                    ["1 – 2 años", "84 %", "25.200 €"],
                    ["2 – 3 años", "67 %", "20.100 €"],
                    ["3 – 4 años", "56 %", "16.800 €"],
                    ["4 – 5 años", "47 %", "14.100 €"],
                    ["5 – 6 años", "39 %", "11.700 €"],
                    ["6 – 7 años", "34 %", "10.200 €"],
                    ["7 – 8 años", "28 %", "8.400 €"],
                    ["8 – 9 años", "24 %", "7.200 €"],
                    ["9 – 10 años", "19 %", "5.700 €"],
                    ["10 – 11 años", "17 %", "5.100 €"],
                    ["11 – 12 años", "13 %", "3.900 €"],
                    ["Más de 12 años", "10 %", "3.000 €"],
                  ].map(([age, pct, example]) => (
                    <tr key={age}>
                      <td className="p-3 border border-[var(--surface-border)]">{age}</td>
                      <td className="p-3 border border-[var(--surface-border)] font-bold">{pct}</td>
                      <td className="p-3 border border-[var(--surface-border)] text-[var(--text-tertiary)] font-mono">{example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ITP */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <FileText size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              ITP — Impuesto de Transmisiones Patrimoniales
            </h2>
          </div>
          <div className="prose prose-sm max-w-none text-[var(--text-secondary)] space-y-3">
            <p>
              El ITP solo se aplica cuando el vehículo se compra a un particular (no a concesionario):
            </p>
            <div className="bg-[var(--surface-dim)] border border-[var(--surface-border)] rounded-xl p-4 font-mono text-sm">
              ITP = Valor_Fiscal_Hacienda × Tipo_Autonómico
            </div>
            <p>
              Usamos el mismo valor fiscal BOE como referencia. El tipo varía por comunidad autónoma (3%–8%).
              <strong> Base legal:</strong>{" "}
              <a
                href="https://www.boe.es/buscar/act.php?id=BOE-A-1993-15767"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-blue)] hover:underline"
              >
                Real Decreto Legislativo 1/1993 (TRLITPAJD)
              </a>
            </p>
          </div>
        </section>

        {/* IVA y aranceles (Non-EU) */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <Calculator size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Arancel e IVA — Importaciones Extracomunitarias (Non-EU)
            </h2>
          </div>
          <div className="prose prose-sm max-w-none text-[var(--text-secondary)] space-y-3">
            <div className="bg-[var(--surface-dim)] border border-[var(--surface-border)] rounded-xl p-4 font-mono text-sm space-y-1">
              <div>Valor_CIF = Precio + Transporte + Seguro</div>
              <div>Arancel = Valor_CIF × 10%</div>
              <div>IVA_importación = (Valor_CIF + Arancel) × 21%</div>
            </div>
            <p>
              El arancel del 10% corresponde al tipo general del arancel comunitario para automóviles de pasajeros (código NC 8703, TARIC). Algunos países con acuerdos de libre comercio con la UE pueden tener tipos reducidos (p.ej. Japón, Corea del Sur, Reino Unido). Consulta el TARIC para tu país de origen exacto.
            </p>
          </div>
        </section>

        {/* Tasas fijas */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <FileText size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Tasas Fijas
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--surface-dim)]">
                  <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">Concepto</th>
                  <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">Importe</th>
                  <th className="text-left p-3 border border-[var(--surface-border)] text-[var(--text-primary)]">Fuente</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                {[
                  ["ITV importación", "150 €", "Estimación media nacional"],
                  ["Tasas DGT", "99,77 €", "Tasa 1.1 — permiso de circulación (BOE 2026)"],
                  ["Placas de matrícula", "50 €", "Precio medio mercado (fabricantes privados)"],
                  ["Gestoría", "300 €", "No incluida por defecto"],
                  ["Agente aduanas (Non-EU)", "200 €", "Estimación media"],
                  ["Homologación (Non-EU)", "1.500 €", "Estimación media (rango 500–2.500 €)"],
                ].map(([c, i, f]) => (
                  <tr key={c}>
                    <td className="p-3 border border-[var(--surface-border)]">{c}</td>
                    <td className="p-3 border border-[var(--surface-border)] font-mono">{i}</td>
                    <td className="p-3 border border-[var(--surface-border)] text-xs text-[var(--text-tertiary)]">{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Data sources */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center">
              <BookOpen size={16} className="text-[var(--brand-blue)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Fuentes de Datos
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
            {[
              {
                name: "BOE — Tablas de Valoración de Vehículos",
                url: "https://www.boe.es",
                desc: "Valores fiscales de referencia para el cálculo del Impuesto de Matriculación",
              },
              {
                name: "Ley 38/1992 de Impuestos Especiales",
                url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740",
                desc: "Marco legal del impuesto de matriculación (IEDMT)",
              },
              {
                name: "Agencia Tributaria — Modelos 576 y 600",
                url: "https://www.agenciatributaria.es",
                desc: "Formularios oficiales de liquidación de impuestos",
              },
              {
                name: "DGT — Tasas de Tráfico",
                url: "https://www.dgt.es",
                desc: "Tasas oficiales por permiso de circulación",
              },
            ].map((s) => (
              <li key={s.name} className="flex gap-3">
                <div className="shrink-0 text-[var(--brand-blue)] mt-0.5">→</div>
                <div>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-blue)] hover:underline font-medium"
                  >
                    {s.name}
                  </a>
                  <p className="text-[var(--text-tertiary)] text-xs mt-0.5">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Disclaimer */}
        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
          <p className="font-semibold mb-1">Aviso Legal</p>
          <p>
            Los cálculos de ImportEspana son estimaciones orientativas basadas en datos oficiales. Los valores fiscales BOE se actualizan anualmente y pueden variar. Para el importe exacto y definitivo, consulta siempre con la Agencia Tributaria o una gestoría autorizada antes de realizar cualquier pago.
          </p>
        </div>
      </div>
    </main>
  );
}
