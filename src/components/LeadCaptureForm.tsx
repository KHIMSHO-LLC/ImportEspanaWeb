"use client";

import { useState } from "react";
import { Phone, Mail, User, CheckCircle, AlertTriangle } from "lucide-react";

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
      setError("No se pudo enviar. Por favor, llámanos directamente.");
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
          ¡Solicitud recibida!
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Un asesor te contactará en menos de 24 horas para ayudarte con la importación.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="font-bold text-[var(--text-primary)] text-lg">
          ¿Quieres ayuda profesional con la importación?
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Déjanos tus datos y un asesor especializado te contactará gratis para guiarte en todo el proceso.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="label-caps flex items-center gap-1.5">
            <User size={12} className="text-[var(--brand-blue)]" />
            Nombre *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            required
            className="input-field"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="label-caps flex items-center gap-1.5">
            <Phone size={12} className="text-[var(--brand-blue)]" />
            Teléfono *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+34 600 000 000"
            required
            className="input-field"
          />
        </div>

        {/* Email (optional) */}
        <div className="space-y-1.5">
          <label className="label-caps flex items-center gap-1.5">
            <Mail size={12} className="text-[var(--text-tertiary)]" />
            Email (opcional)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
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
          {isSubmitting ? "Enviando..." : "Solicitar asesoramiento gratuito"}
        </button>

        <p className="text-xs text-[var(--text-tertiary)] text-center">
          Sin compromiso. Tus datos no se compartirán con terceros.
        </p>
      </form>
    </div>
  );
}
