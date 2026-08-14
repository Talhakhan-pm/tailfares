import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet export permit in Pakistan: the 2026 step-by-step (NAFSA + Pakistan Single Window)",
  description:
    "How to get a pet export health certificate in Pakistan in 2026: NAFSA (formerly the Animal Quarantine Department), the Pakistan Single Window portal, validity windows, and the mistakes that strand pets at cargo.",
};

export default function ExportPermitGuide() {
  return (
    <main>
      <section className="route-hero">
        <div className="wrap">
          <span className="eyebrow">Guide · Export paperwork</span>
          <h1>The pet export permit in Pakistan, step by step (2026)</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <p className="lede">
            Every pet leaving Pakistan needs a government export health
            certificate. Most guides online still name the wrong agency — the
            Animal Quarantine Department (AQD) was merged into <strong>NAFSA,
            the National Food Safety and Animal &amp; Plant Health Regulatory
            Authority, in 2025</strong>, and certificates now flow through the
            Pakistan Single Window (PSW) digital portal. Here is the current
            process.
          </p>

          <h2>Before the permit: what must already be done</h2>
          <ol>
            <li>
              <strong>ISO microchip</strong> implanted — and implanted{" "}
              <em>before</em> the rabies vaccination, or several destinations
              treat the vaccination as invalid.
            </li>
            <li>
              <strong>Rabies vaccination</strong> at least 21–30 days before
              travel (destination-dependent), recorded against the microchip
              number.
            </li>
            <li>
              <strong>Destination requirements met</strong> — titer test for the
              UK/US/EU/Australia, import permit for the UAE, and so on. The
              export certificate does not replace any of these.
            </li>
          </ol>

          <h2>The export certificate itself</h2>
          <ol>
            <li>
              A registered vet issues a <strong>health certificate</strong>{" "}
              shortly before travel — validity is short (days, not weeks), so
              it is timed against the flight.
            </li>
            <li>
              The export application goes through the{" "}
              <strong>Pakistan Single Window</strong> (psw.gov.pk), where
              NAFSA processes animal export certification digitally.
            </li>
            <li>
              A <strong>quarantine inspection</strong> at the NAFSA office
              (offices sit at Karachi, Lahore, and Islamabad airports) confirms
              the animal matches the paperwork. The quarantine certificate is
              also short-lived — roughly a week — so it, too, is choreographed
              against departure.
            </li>
            <li>
              The airline checks all of it at cargo acceptance or check-in,
              together with an <strong>IATA-compliant crate</strong>. Crate
              rejection at the counter is one of the most common ways a move
              fails on the day.
            </li>
          </ol>

          <h2>Where DIY moves go wrong</h2>
          <ul>
            <li>Vaccinating before the microchip, invalidating the vaccine record.</li>
            <li>Getting certificates too early, so they expire before the flight.</li>
            <li>Verbal airline approvals that evaporate at check-in — get it in writing.</li>
            <li>Following pre-2025 guides that send you to the wrong agency.</li>
          </ul>

          <p>
            The sequencing is the hard part: three documents with different
            validity windows, one government portal, one airline, and a fixed
            flight date. That choreography is exactly what we do.
          </p>
          <div className="cta-block">
            <Link href="/#quote" className="btn btn-red">
              Have us run the paperwork
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
