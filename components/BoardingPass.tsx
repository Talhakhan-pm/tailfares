"use client";

import { useState } from "react";
import { CORRIDORS, getCorridor } from "@/lib/routes";
import { estimateFare, type Species } from "@/lib/pricing";

type Status = "idle" | "sending" | "sent" | "error";

const ORIGINS = [
  { code: "KHI", city: "Karachi" },
  { code: "LHE", city: "Lahore" },
  { code: "ISB", city: "Islamabad" },
  { code: "OTH", city: "Another city" },
] as const;

export default function BoardingPass({
  defaultCorridor = "",
}: {
  defaultCorridor?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [origin, setOrigin] = useState("KHI");
  const [corridorSlug, setCorridorSlug] = useState(defaultCorridor);
  const [petName, setPetName] = useState("");
  const [species, setSpecies] = useState<Species>("cat");
  const [breed, setBreed] = useState("");
  const [date, setDate] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const corridor = corridorSlug ? getCorridor(corridorSlug) : undefined;
  const estimate = corridor ? estimateFare(corridor, species) : null;
  const originCity = ORIGINS.find((o) => o.code === origin);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: originCity ? `${originCity.city}, Pakistan` : "Pakistan",
          to: corridor?.destination ?? "",
          corridor: corridorSlug,
          petName,
          petType: species,
          breed,
          date,
          whatsapp,
          email,
        }),
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
          <span className="stamp-ok">Request received</span>
          <p>
            {petName ? `${petName} is` : "You're"} on the manifest. We&apos;ll
            reply on WhatsApp {whatsapp ? "" : "or email "}within 24 hours with
            a full plan and one all-in price.
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
          <span className="code">{origin === "OTH" ? "PAK" : origin}</span>
          <svg className="arc" viewBox="0 0 200 34" preserveAspectRatio="none">
            <path
              d="M4 30 Q 100 -8 196 30"
              fill="none"
              stroke="var(--electric)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            <circle cx="4" cy="30" r="3.5" fill="var(--ink)" />
            <circle cx="196" cy="30" r="3.5" fill="var(--electric)" />
          </svg>
          <span className="code">{corridor?.destCode ?? "···"}</span>
        </div>

        <div className="pass-row">
          <div className="pass-field">
            <label htmlFor="bp-from">Flying from</label>
            <select
              id="bp-from"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              {ORIGINS.map((o) => (
                <option key={o.code} value={o.code}>
                  {o.city}
                </option>
              ))}
            </select>
          </div>
          <div className="pass-field">
            <label htmlFor="bp-to">Destination</label>
            <select
              id="bp-to"
              required
              value={corridorSlug}
              onChange={(e) => setCorridorSlug(e.target.value)}
            >
              <option value="" disabled>
                Choose a country
              </option>
              {CORRIDORS.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.destination}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pass-row">
          <div className="pass-field">
            <label htmlFor="bp-pet">Passenger (pet&apos;s name)</label>
            <input
              id="bp-pet"
              placeholder="Simba"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </div>
          <div className="pass-field">
            <label htmlFor="bp-type">Species</label>
            <select
              id="bp-type"
              value={species}
              onChange={(e) => setSpecies(e.target.value as Species)}
            >
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="pass-row">
          <div className="pass-field">
            <label htmlFor="bp-breed">Breed (helps with airline rules)</label>
            <input
              id="bp-breed"
              placeholder="Persian, Labrador…"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
          <div className="pass-field">
            <label htmlFor="bp-date">When do you fly?</label>
            <input
              id="bp-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="pass-tear" aria-hidden="true" />

        <div className="pass-row">
          <div className="pass-field">
            <label htmlFor="bp-wa">WhatsApp number</label>
            <input
              id="bp-wa"
              type="tel"
              placeholder="+92 300 0000000"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>
          <div className="pass-field">
            <label htmlFor="bp-email">Email</label>
            <input
              id="bp-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {estimate && corridor && (
          <p className="pass-estimate">
            {corridor.destination} typical range: ${estimate.low.toLocaleString()}–$
            {estimate.high.toLocaleString()} · {corridor.timeline} · confirmed in
            your quote
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
          No payment now. A real person replies with a full plan and one all-in
          price.
        </p>
      </div>
    </form>
  );
}
