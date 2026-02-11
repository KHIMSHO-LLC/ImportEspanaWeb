"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>

        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p>
            Welcome to <strong>ImportEspana</strong>, the leading tool for
            calculating vehicle import taxes in Spain.
          </p>

          <p>
            Our mission is to simplify the complex process of importing vehicles
            from Europe to Spain. We know that navigating the bureaucracy,
            understanding the BOE tables, and calculating the exact taxes can be
            overwhelming. That's why we built this free, easy-to-use calculator.
          </p>

          <p>
            Whether you are buying a car from Germany, moving to Spain with your
            vehicle, or are a professional importer, ImportEspana helps you
            avoid surprises and plan your budget accurately.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Contact Us
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" size={20} />
              <a href="mailto:giorgikhim@gmail.com" className="hover:underline">
                giorgikhim@gmail.com
              </a>
            </div>
            {/* Add more contact info if available */}
          </div>
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
