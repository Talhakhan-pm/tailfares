import { NextResponse } from "next/server";

// Lead capture. Every quote request is the whole business — never lose one.
// Delivery: email via Resend if RESEND_API_KEY is set; always logged to the
// server console as a fallback so leads survive a mail outage in dev.
export async function POST(req: Request) {
  let lead: Record<string, unknown>;
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof lead.email !== "string" || !lead.email.includes("@")) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const stamp = new Date().toISOString();
  console.log(`[LEAD ${stamp}]`, JSON.stringify(lead));

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "TailFares Leads <leads@tailfares.com>",
          to: [process.env.LEAD_INBOX ?? "hello@tailfares.com"],
          subject: `New quote request: ${lead.from} → ${lead.to}`,
          text: Object.entries(lead)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n"),
        }),
      });
    } catch (err) {
      // Lead is already in the log; don't fail the user's submission.
      console.error("[LEAD EMAIL FAILED]", err);
    }
  }

  return NextResponse.json({ ok: true });
}
