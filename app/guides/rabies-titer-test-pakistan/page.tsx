import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rabies titer (FAVN) test from Pakistan: labs, cost, and timeline (2026)",
  description:
    "How to get a rabies titer (FAVN) test for a pet in Pakistan: why the UK, US, EU, and Australia require it, how the blood sample reaches an approved lab abroad, what it costs, and when to start.",
};

export default function TiterGuide() {
  return (
    <main>
      <section className="route-hero">
        <div className="wrap">
          <span className="eyebrow">Guide · The titer clock</span>
          <h1>The rabies titer (FAVN) test from Pakistan, explained</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <p className="lede">
            Pakistan is classified as a high-risk (rabies-uncontrolled) country
            by the UK, US, EU, Japan, and Australia. For those destinations, a
            rabies vaccination certificate alone is not enough — your pet needs
            a <strong>blood test proving the vaccine produced antibodies</strong>,
            called a FAVN or rabies titer test. It is the single most
            common reason a pet&apos;s move is delayed by months.
          </p>

          <h2>How it works</h2>
          <ol>
            <li>
              <strong>Microchip first, then rabies vaccination.</strong> The
              titer only counts if the vaccination is recorded against the
              microchip.
            </li>
            <li>
              <strong>Blood draw at least 30 days after vaccination.</strong> A
              vet in Karachi, Lahore, or Islamabad draws the sample.
            </li>
            <li>
              <strong>The sample is tested abroad.</strong> No lab in Pakistan
              is approved for FAVN — serum is shipped to a
              destination-approved laboratory (for example Kansas State
              Veterinary Diagnostic Lab in the US, or an EU-approved lab for
              UK/EU moves). Approved-lab lists are destination-specific — this
              is where DIY moves most often pick the wrong lab and lose months.
            </li>
            <li>
              <strong>The result sets your earliest travel date.</strong> A
              passing titer starts the destination&apos;s waiting period: the UK
              requires <strong>3 months</strong> from the draw date; the US
              accepts a valid titer from a CDC-approved lab in place of
              quarantine; Australia&apos;s staged process has its own windows.
            </li>
          </ol>

          <h2>What it costs and how long it takes</h2>
          <p>
            The Pakistan-side draw is inexpensive (a few thousand rupees); the
            lab fee and courier shipping of the serum abroad add more, and
            results typically take a few weeks depending on the lab. The real
            cost is time: vaccination → 30-day wait → draw → lab turnaround →
            destination waiting period. For the UK, that chain is 4–6 months
            end to end. If the titer fails, the clock resets.
          </p>

          <h2>When to start</h2>
          <p>
            The day you decide you might emigrate. A titer done early never
            hurts — it simply sits valid in your pet&apos;s file — while a titer
            started late is the difference between flying with your family and
            following them half a year later. If your visa process has started,
            your pet&apos;s titer should have started too.
          </p>
          <div className="cta-block">
            <Link href="/#quote" className="btn btn-red">
              Start the titer clock now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
