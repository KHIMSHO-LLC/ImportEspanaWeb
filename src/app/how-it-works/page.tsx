"use client";

import Link from "next/link";
import { Calculator, CheckCircle, FileText, Globe } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How ImportEspana Works
          </h1>
          <p className="text-xl text-gray-600">
            Understand the process of calculating import taxes for your vehicle
            in Spain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              1. Select Origin
            </h3>
            <p className="text-gray-600">
              Choose the country where you are importing the car from (e.g.,
              Germany, France). This helps us determine estimated transport
              costs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              2. Enter Vehicle Details
            </h3>
            <p className="text-gray-600">
              Input the car's brand, model, age, and CO2 emissions. We use this
              to find the official "Fiscal Value" from the BOE (Boletín Oficial
              del Estado) tables.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Calculator size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              3. Instant Calculation
            </h3>
            <p className="text-gray-600">
              Our algorithm applies the depreciation rates based on age and
              calculates the Registration Tax (Impuesto de Matriculación) based
              on CO2 emissions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              4. Get Total Cost
            </h3>
            <p className="text-gray-600">
              See a full breakdown including the Registration Tax, ITV fees, DGT
              fees, License Plates, and estimated Agency fees.
            </p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to calculate?</h2>
          <p className="mb-6 opacity-90">
            Get precise tax estimates in seconds.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition-colors"
          >
            Go to Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}
