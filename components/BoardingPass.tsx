"use client";

import { useState } from "react";
import { estimateFare, type PetSize } from "@/lib/pricing";

type Status = "idle" | "sending" | "sent" | "error";

// Rough straight-line miles between typed cities isn't knowable client-side
// without a geo API, so the estimate only renders when the user picks a
// distance band. The API lead always captures the raw city text.
const DISTANCE_BANDS = [
  { label: "Under 500 miles", miles: 350 },
  { label: "500–1,000 miles", miles: 750 },
  { label: "1,000–1,500 miles", miles: 1250 },
  { label: "1,500–2,000 miles", miles: 1750 },
  { label: "Over 2,000 miles", miles: 2400 },
  { label: "Not sure", miles: 0 },
] as const;

export default function BoardingPass({
  defaultFrom = "",
  defaultTo = "",
}: {
  defaultFrom?: string;
  defaultTo?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("dog");
  const [size, setSize] = useState<PetSize>("medium");
  const [bandMiles, setBandMiles] = useState(0);
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const estimate =
    bandMiles > 0 ? estimateFare({ miles: bandMiles, size, solo: false }) : null;

  const code = (city: string) =>
    city.trim().length >= 3
      ? city.trim().replace(/[^a-zA-Z]/g, "").slice(0, 3).toUpperCase()
      : "···";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, petName, petType, size, bandMiles, date, email, phone }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="pass" aria-live="polite">
        <div className="pass-top">
          <span>TailFares · Pet boarding pass</span>
          <span>№ pending</span>
        </div>
        <div className="pass-success">
          <span className="stamp">Request received</span>
          <p>
            {petName ? `${petName} is` : "You're"} on the manifest. We&apos;ll
            email your quote within 24 hours — usually much sooner.
          </p>
          <p className="pass-note">
            Questions in the meantime? <a href="mailto:hello@tailfares.com">hello@tailfares.com</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="pass" onSubmit={submit} id="quote">
      <div className="pass-top">
        <span>TailFares · Pet boarding pass</span>
        <span>Free quote</span>
      </div>
      <div className="pass-body">
        <div className="pass-route" aria-hidden="true">
          <span className="code">{code(from)}</span>
          <svg className="arc" viewBox="0 0 200 34" preserveAspectRatio="none">
            <path
              d="M4 30 Q 100 -8 196 30"
              fill="none"
              stroke="var(--airmail)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            <circle cx="4" cy="30" r="3.5" fill="var(--night)" />
            <circle cx="196" cy="30" r="3.5" fill="var(--airmail)" />
          </svg>
          <span className="code">{code(to)}</span>
        </div>

        <div className="pass-row">
          <div className="pass-field">
            <label htmlFor="bp-from">From (city, state)</label>
            <input
              id="bp-from"
              required
              placeholder="Dallas, TX"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="pass-field">
            <label htmlFor="bp-to">To (city, state)</label>
            <input
              id="bp-to"
              required
              placeholder="Seattle, WA"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </div>

        <div className="pass-row">
          <div className="pass-field">
            <label htmlFor="bp-pet">Passenger (pet&apos;s name)</label>
            <input
              id="bp-pet"
              placeholder="Biscuit"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </div>
          <div className="pass-field">
            <label htmlFor="bp-type">Species</label>
            <select id="bp-type" value={petType} onChange={(e) => setPetType(e.target.value)}>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="pass-row">
          <div className="pass-field">
            <label htmlFor="bp-size">Size</label>
            <select
              id="bp-size"
              value={size}
              onChange={(e) => setSize(e.target.value as PetSize)}
            >
              <option value="small">Small (under 25 lb)</option>
              <option value="medium">Medium (25–60 lb)</option>
              <option value="large">Large (over 60 lb)</option>
            </select>
          </div>
          <div className="pass-field">
            <label htmlFor="bp-dist">Trip distance</label>
            <select
              id="bp-dist"
              value={bandMiles}
              onChange={(e) => setBandMiles(Number(e.target.value))}
            >
              {DISTANCE_BANDS.map((b) => (
                <option key={b.label} value={b.miles}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pass-tear" aria-hidden="true" />

        <div className="pass-row">
          <div className="pass-field">
            <label htmlFor="bp-date">Travel window</label>
            <input
              id="bp-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="pass-field">
            <label htmlFor="bp-phone">Phone (optional)</label>
            <input
              id="bp-phone"
              type="tel"
              placeholder="(555) 010-2233"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="pass-field">
          <label htmlFor="bp-email">Email — where the quote goes</label>
          <input
            id="bp-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {estimate && (
          <p className="pass-estimate">
            Typical range: ${estimate.low.toLocaleString()}–${estimate.high.toLocaleString()} ·
            confirmed in your emailed quote
          </p>
        )}

        {status === "error" && (
          <p className="form-error" role="alert">
            That didn&apos;t send. Try again, or email hello@tailfares.com.
          </p>
        )}

        <button className="btn btn-red" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Get my quote"}
        </button>
        <p className="pass-note">
          No payment now. A real person replies with one all-in price.
        </p>
      </div>
    </form>
  );
}
