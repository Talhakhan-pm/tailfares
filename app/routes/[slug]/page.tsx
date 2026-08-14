import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CORRIDORS, getCorridor } from "@/lib/routes";
import { estimateFare } from "@/lib/pricing";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CORRIDORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const corridor = getCorridor((await params).slug);
  if (!corridor) return {};
  return {
    title: `Pet relocation from Pakistan to ${corridor.destination} — cost, requirements, timeline`,
    description: `How to send a cat or dog from Pakistan to ${corridor.destination}: requirements, typical cost ($${corridor.priceLowUsd.toLocaleString()}–$${corridor.priceHighUsd.toLocaleString()}), and timeline (${corridor.timeline}). Door-to-door service from Karachi, Lahore, and Islamabad.`,
  };
}

export default async function CorridorPage({ params }: Props) {
  const corridor = getCorridor((await params).slug);
  if (!corridor) notFound();

  const dog = estimateFare(corridor, "dog");
  const cat = estimateFare(corridor, "cat");

  return (
    <main>
      <section className="route-hero">
        <div className="wrap">
          <span className="eyebrow">
            KHI · LHE · ISB → {corridor.destCode}
          </span>
          <h1>
            Pet relocation from Pakistan to {corridor.destination}
          </h1>
          <div className="route-facts">
            <div>
              <strong>{corridor.timeline}</strong>
              start to landing
            </div>
            <div>
              <strong>
                ${cat.low.toLocaleString()}–${dog.high.toLocaleString()}
              </strong>
              typical range, cat to large dog
            </div>
            <div>
              <strong>{corridor.entryMode}</strong>
              entry mode
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <p className="lede">{corridor.tagline}</p>

          <h2>What {corridor.destination} requires from Pakistan</h2>
          <p>
            Pakistan is treated as a high-risk rabies country by most Western
            destinations, so the checklist below is stricter than what pets
            from Europe or the Gulf face. Order matters — several steps are
            invalid if done out of sequence.
          </p>
          <ol>
            {corridor.requirements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
          {corridor.note && <p><strong>Worth knowing:</strong> {corridor.note}</p>}

          <h2>What it costs</h2>
          <p>
            A cat typically runs ${cat.low.toLocaleString()}–$
            {cat.high.toLocaleString()} all-in on this corridor; a dog $
            {dog.low.toLocaleString()}–${dog.high.toLocaleString()} depending on
            size, airline, and season. That covers the Pakistan-side vet work,
            permits and export certificate, the IATA crate, the flight, and
            coordination with clearance on arrival. Your quote is one number —
            nothing stacked on later.
          </p>

          <h2>How we run this corridor</h2>
          <p>
            We sequence the paperwork backwards from your travel date: microchip
            and vaccinations first, the export certificate through the Pakistan
            Single Window in its narrow validity window, and the airline booking
            confirmed in writing before you pay. On departure day we handle
            crate checks and cargo check-in at the airport, and you get updates
            until the crate opens at the destination.
          </p>
          <div className="cta-block">
            <Link
              href={`/?corridor=${corridor.slug}#quote`}
              className="btn btn-red"
            >
              Get a quote for {corridor.destination}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
