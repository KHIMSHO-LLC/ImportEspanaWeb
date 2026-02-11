"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="font-medium text-gray-500">
            Last updated: February 11, 2026
          </p>

          <p>
            We (ImportEspana) respect your privacy. This policy explains how we
            handle your data.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              1. Data We Collect
            </h2>
            <p>
              We do not collect personal information like your name, email, or
              phone number directly. We do not require you to create an account.
              However, we use third-party services that may collect information
              used to identify you, specifically for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              2. Third-Party Services
            </h2>
            <p>
              We use <strong>Google AdSense</strong> (for web) and{" "}
              <strong>AdMob</strong> (for mobile) to display advertisements.
              These services may collect and use:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Device identifiers (e.g., Advertising ID, IDFA)</li>
              <li>Usage data (e.g., ad interactions, crash logs)</li>
              <li>Approximate location</li>
              <li>Cookies for personalized advertising</li>
            </ul>
            <p className="mt-2">
              For more information, please see the{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              3. How We Use Data
            </h2>
            <p>The data collected by our partners is used to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Display relevant advertisements to you (Personalized Ads).
              </li>
              <li>Analyze app performance and stability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              4. Children’s Privacy
            </h2>
            <p>
              Our services do not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from
              children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              5. Changes to This Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. You are
              advised to review this page periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:giorgikhim@gmail.com"
                className="text-blue-600 hover:underline"
              >
                giorgikhim@gmail.com
              </a>
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
