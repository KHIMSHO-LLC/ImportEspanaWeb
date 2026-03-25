"use client";

import { useState } from "react";
import { Phone, Mail, User, CheckCircle, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LeadCaptureFormProps {
  vehicleContext?: {
    brand?: string;
    model?: string;
    price?: string;
    totalCost?: string;
    originCountry?: string;
    city?: string;
  };
}

export default function LeadCaptureForm({ vehicleContext }: LeadCaptureFormProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          ...vehicleContext,
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);
    } catch {
      setError(t("leadFormError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card p-6 text-center space-y-3 animate-fadeInUp">
        <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={24} className="text-emerald-500" />
        </div>
        <h3 className="font-bold text-[var(--text-primary)]">
          {t("leadFormSuccess")}
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          {t("leadFormSuccessMsg")}
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-bold text-[var(--text-primary)] text-lg">
          {t("leadFormTitle")}
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          {t("leadFormSubtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="label-caps flex items-center gap-1.5">
            <User size={12} className="text-[var(--brand-blue)]" />
            {t("leadFormNameLabel")}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("leadFormNamePlaceholder")}
            required
            className="input-field"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="label-caps flex items-center gap-1.5">
            <Phone size={12} className="text-[var(--brand-blue)]" />
            {t("leadFormPhoneLabel")}
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t("leadFormPhonePlaceholder")}
            required
            className="input-field"
          />
        </div>

        {/* Email (optional) */}
        <div className="space-y-1.5">
          <label className="label-caps flex items-center gap-1.5">
            <Mail size={12} className="text-[var(--text-tertiary)]" />
            {t("leadFormEmailLabel")}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("leadFormEmailPlaceholder")}
            className="input-field"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 text-[var(--brand-red)] text-sm">
            <AlertTriangle size={14} />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !name.trim() || !phone.trim()}
          className="btn-primary w-full py-3"
        >
          {isSubmitting ? t("leadFormSubmitting") : t("leadFormSubmit")}
        </button>

        <p className="text-xs text-[var(--text-tertiary)] text-center">
          {t("leadFormDisclaimer")}
        </p>
      </form>
    </div>
  );
}
