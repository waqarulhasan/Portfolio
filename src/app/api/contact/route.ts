import { NextResponse } from "next/server";

/**
 * Sends contact-form messages by email through Resend when RESEND_API_KEY is set.
 * Without it, it answers 501 and the form falls back to opening the visitor's email app.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const company = str(body.company, 200);
  const message = str(body.message, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please fill in your name, a valid email and a message." }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ error: "Email not configured" }, { status: 501 });

  const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Project inquiry from ${name}`,
      html: `<p><strong>${escape(name)}</strong> (${escape(email)})${company ? ` — ${escape(company)}` : ""}</p><p>${escape(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Could not send" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
