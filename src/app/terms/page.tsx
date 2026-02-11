"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Use</h1>

        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="font-medium text-gray-500">
            Last updated: February 11, 2026
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using ImportEspana, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              2. Disclaimer
            </h2>
            <p>
              ImportEspana is a calculator tool designed to provide estimates of
              vehicle import taxes in Spain based on official BOE data. While we
              strive for accuracy,{" "}
              <strong>we cannot guarantee 100% precision</strong> due to changes
              in legislation, local variations, or data errors.
            </p>
            <p>
              The results provided by this tool are for informational purposes
              only and should not be considered legal or financial advice.
              Always consult with a professional gestoría or the DGT/Hacienda
              directly before making any financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              3. Intellectual Property
            </h2>
            <p>
              The content, design, and code of this website are the property of
              ImportEspana and are protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              4. Limitation of Liability
            </h2>
            <p>
              In no event shall ImportEspana or its owners be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on ImportEspana's website.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link href="/" className="text-blue-600 font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
