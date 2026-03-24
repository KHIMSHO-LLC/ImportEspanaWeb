import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  brand?: string;
  model?: string;
  price?: string;
  totalCost?: string;
  originCountry?: string;
  city?: string;
}

export async function POST(request: NextRequest) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!payload.name || !payload.phone) {
    return NextResponse.json(
      { error: "Name and phone are required" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_EMAIL_TO;

  if (!apiKey || !toEmail) {
    // Dev fallback — log the lead to console
    console.log("[LEAD RECEIVED]", {
      timestamp: new Date().toISOString(),
      ...payload,
    });
    return NextResponse.json({ success: true });
  }

  const vehicleInfo = [
    payload.brand && payload.model
      ? `${payload.brand} ${payload.model}`
      : null,
    payload.price ? `Precio: ${payload.price} €` : null,
    payload.totalCost ? `Coste total estimado: ${payload.totalCost} €` : null,
    payload.originCountry ? `País origen: ${payload.originCountry}` : null,
    payload.city ? `Ciudad destino: ${payload.city}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const emailBody = `
Nuevo lead de ImportEspana.com

DATOS DE CONTACTO
─────────────────
Nombre: ${payload.name}
Teléfono: ${payload.phone}
Email: ${payload.email || "No proporcionado"}

VEHÍCULO
─────────────────
${vehicleInfo || "Sin datos de vehículo"}

Fecha: ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}
`.trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ImportEspana <leads@importespana.com>",
        to: [toEmail],
        subject: `Nuevo lead: ${payload.name} — ${payload.brand ?? "coche"} importación`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      console.error("[LEAD EMAIL ERROR]", await res.text());
      // Still return success to the user — lead is captured even if email fails
    }
  } catch (err) {
    console.error("[LEAD EMAIL EXCEPTION]", err);
  }

  return NextResponse.json({ success: true });
}
