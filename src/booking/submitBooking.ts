import { site } from "../content/site";

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  date: string;
  time: string;
  details: string;
}

export interface SubmitResult {
  /** "api" = sent through the configured endpoint (FormSubmit / Web3Forms) */
  mode: "api" | "mailto";
}

/**
 * Sends the booking request to the site owner's inbox.
 *
 * SECURITY: no API keys or secrets live in this file.
 *  - FormSubmit (recommended): only the public ajax endpoint URL is stored
 *    in src/content/site.ts → booking.endpoint. FormSubmit requires no key.
 *  - Web3Forms: uses its public access key (designed for client-side use).
 *  - Fallback: if nothing is configured, the visitor's mail client opens
 *    with a fully pre-filled email — the form never dead-ends.
 */
export async function submitBooking(data: BookingData): Promise<SubmitResult> {
  const endpoint = site.booking.endpoint.trim();
  const subject = `New Booking Request — ${data.name}`;

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Company: ${data.company || "—"}`,
    `Website / Social: ${data.website || "—"}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget || "—"}`,
    `Preferred Date: ${data.date || "—"}`,
    `Preferred Time: ${data.time || "—"}`,
    ``,
    `Project Details:`,
    data.details,
  ];

  /* ── Option A: FormSubmit ajax endpoint ─────────────── */
  if (endpoint && endpoint.includes("formsubmit.co")) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: subject,
        _template: "table", // clean tabular email layout
        _captcha: "false",
        Name: data.name,
        Email: data.email,
        Phone: data.phone || "—",
        Company: data.company || "—",
        "Website / Social": data.website || "—",
        Service: data.service,
        Budget: data.budget || "—",
        "Preferred Date": data.date || "—",
        "Preferred Time": data.time || "—",
        "Project Details": data.details,
      }),
    });
    if (!res.ok) throw new Error(`Booking request failed (${res.status})`);
    return { mode: "api" };
  }

  /* ── Option B: Web3Forms ──────────────────────────────
     NOTE: fields are passed explicitly. A previous version
     derived them by splitting the display strings, which
     silently dropped the Project Details payload.           */
  if (endpoint && endpoint.includes("web3forms.com") && site.booking.web3formsKey) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: site.booking.web3formsKey, // public client-side key by design
        subject,
        from_name: `Portfolio — ${site.identity.name}`,
        Name: data.name,
        Email: data.email,
        Phone: data.phone || "—",
        Company: data.company || "—",
        "Website / Social": data.website || "—",
        Service: data.service,
        Budget: data.budget || "—",
        "Preferred Date": data.date || "—",
        "Preferred Time": data.time || "—",
        "Project Details": data.details,
      }),
    });
    if (!res.ok) throw new Error(`Booking request failed (${res.status})`);
    return { mode: "api" };
  }

  /* ── Fallback: pre-filled mailto (no dead end) ──────── */
  const to = site.identity.email.includes("[YOUR") ? "" : site.identity.email;
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  window.location.href = mailto;
  return { mode: "mailto" };
}
