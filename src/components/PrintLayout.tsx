import { CalculationResult, CalculationInput } from "@/types";
import Image from "next/image";

type PrintLayoutProps = {
  result: CalculationResult;
  input: CalculationInput;
  date?: string;
};

export const PrintLayout = ({ result, input, date }: PrintLayoutProps) => {
  const currentDate = date || new Date().toLocaleDateString("es-ES");

  return (
    <div className="hidden print:block font-sans text-black p-6 max-w-[210mm] mx-auto bg-white h-auto">
      {/* Header */}
      <div className="flex justify-between items-end border-b-2 border-blue-600 pb-2 mb-6">
        <div>
          <Image
            src="/logo-full.png"
            alt="ImportEspana"
            width={200}
            height={40}
            className="h-10 w-auto object-contain mb-2"
          />
          <p className="text-xs text-gray-500">
            Calculadora de Impuestos de Matriculación
          </p>
        </div>
        <div className="text-right">
          <h1 className="text-xl font-bold uppercase tracking-wide text-blue-700">
            Estimación de Costes
          </h1>
          <p className="text-sm text-gray-600">Fecha: {currentDate}</p>
        </div>
      </div>

      {/* Vehicle Summary */}
      <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-5">
        <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-4 border-b border-blue-200 pb-2">
          Vehículo Importado
        </h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Marca / Modelo:</span>
            <span className="font-bold text-gray-900 text-right">
              {input.brand || ""} {input.model || ""}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Origen:</span>
            <span className="font-medium text-gray-900">
              {input.originCountry}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Año / Antigüedad:</span>
            <span className="font-medium text-gray-900">{input.carAge}</span> //
            Assuming carAge is descriptive or we might need to format
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Emisiones CO2:</span>
            <span className="font-medium text-gray-900">
              {input.co2Emissions} g/km
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Valor Fiscal (BOE):</span>
            <span className="font-medium text-gray-900">
              {input.officialFiscalValue.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Depreciación:</span>
            <span className="font-medium text-gray-900">
              {((1 - result.depreciationPercentage) * 100).toFixed(0)}%
            </span>
          </div>
        </div>
      </div>

      {/* Financial Breakdown Table */}
      <div className="mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="text-left py-2 px-3 font-bold uppercase rounded-l-md">
                Concepto
              </th>
              <th className="text-right py-2 px-3 font-bold uppercase rounded-r-md">
                Importe
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-100">
            {/* Base Costs */}
            <tr className="even:bg-blue-50/50">
              <td className="py-3 px-3 text-gray-700">
                Precio del Vehículo (Estimado)
              </td>
              <td className="py-3 px-3 text-right font-medium text-gray-900">
                {input.carPrice.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </td>
            </tr>
            <tr className="even:bg-blue-50/50">
              <td className="py-3 px-3 text-gray-700">Transporte (Estimado)</td>
              <td className="py-3 px-3 text-right font-medium text-gray-900">
                {(input.transportCost || 0).toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </td>
            </tr>

            {/* Taxes */}
            <tr className="bg-blue-50/80 font-medium">
              <td className="py-3 px-3 text-blue-900 pl-2">
                Impuesto de Matriculación (IEDMT)
              </td>
              <td className="py-3 px-3 text-right font-bold text-blue-900">
                {result.registrationTax.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </td>
            </tr>
            {(result.duty || 0) > 0 && (
              <tr>
                <td className="py-3 text-gray-600 pl-2">Arancel (10%)</td>
                <td className="py-3 text-right font-medium text-gray-900">
                  {(result.duty || 0).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </td>
              </tr>
            )}
            {(result.vat || 0) > 0 && (
              <tr>
                <td className="py-3 text-gray-600 pl-2">IVA (21%)</td>
                <td className="py-3 text-right font-medium text-gray-900">
                  {(result.vat || 0).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </td>
              </tr>
            )}
            {(result.itpTax || 0) > 0 && (
              <tr>
                <td className="py-3 text-gray-600 pl-2">
                  Impuesto Transmisiones (ITP)
                </td>
                <td className="py-3 text-right font-medium text-gray-900">
                  {result.itpTax.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </td>
              </tr>
            )}

            {/* Administrative */}
            <tr>
              <td className="py-3 text-gray-600">Tasa DGT (Matriculación)</td>
              <td className="py-3 text-right font-medium text-gray-900">
                {result.dgtFee.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </td>
            </tr>
            <tr>
              <td className="py-3 text-gray-600">Inspección ITV</td>
              <td className="py-3 text-right font-medium text-gray-900">
                {result.itvFee.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </td>
            </tr>
            <tr>
              <td className="py-3 text-gray-600">Placas de Matrícula</td>
              <td className="py-3 text-right font-medium text-gray-900">
                {result.platesFee.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </td>
            </tr>
            {(result.customsAgentFee || 0) > 0 && (
              <tr>
                <td className="py-3 text-gray-600">
                  Agente de Aduanas (Estimado)
                </td>
                <td className="py-3 text-right font-medium text-gray-900">
                  {(result.customsAgentFee || 0).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </td>
              </tr>
            )}
            {(result.homologationFee || 0) > 0 && (
              <tr>
                <td className="py-3 text-gray-600">
                  Homologación Individual/Ficha Reducida
                </td>
                <td className="py-3 text-right font-medium text-gray-900">
                  {(result.homologationFee || 0).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-blue-600">
              <td className="py-4 text-lg font-bold text-gray-900 text-right pr-8">
                COSTE TOTAL ESTIMADO
              </td>
              <td className="py-4 text-xl font-black text-blue-700 text-right">
                {result.totalCost.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="text-right text-xs text-gray-500 pt-1">
                (Incluye precio del vehículo + todos los impuestos y gastos)
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-[10px] text-gray-500 text-center">
        <p className="mb-2">
          <strong>Aviso Legal:</strong> Este documento es una estimación basada
          en los datos proporcionados y las tablas oficiales del BOE vigentes.
          No tiene validez legal ni contractual. Los costes reales pueden variar
          según la comunidad autónoma, cambios legislativos o tarifas de
          gestoría.
        </p>
        <p>
          Generado gratuitamente por{" "}
          <strong className="text-blue-600">ImportEspana.com</strong>
        </p>
      </div>
    </div>
  );
};
