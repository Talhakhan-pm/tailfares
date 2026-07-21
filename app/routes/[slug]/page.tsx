import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROUTES, getRoute } from "@/lib/routes";
import { estimateFare } from "@/lib/pricing";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = getRoute((await params).slug);
  if (!route) return {};
  return {
    title: `Pet transport from ${route.from} to ${route.to}`,
    description: `Door-to-door ground pet transport from ${route.from} to ${route.to} (${route.miles.toLocaleString()} miles). One clear quote, USDA-registered drivers, photo updates en route.`,
  };
}

export default async function RoutePage({ params }: Props) {
  const route = getRoute((await params).slug);
  if (!route) notFound();

  const estimate = estimateFare({ miles: route.miles, size: "medium", solo: false });

  return (
    <main>
      <section className="route-hero">
        <div className="wrap">
          <span className="eyebrow">
            {route.fromCode} → {route.toCode}
          </span>
          <h1>
            Pet transport from {route.from} to {route.to}
          </h1>
          <div className="route-facts">
            <div>
              <strong>{route.miles.toLocaleString()} mi</strong>
              door to door
            </div>
            <div>
              <strong>{route.days}</strong>
              typical ground trip
            </div>
            <div>
              <strong>{estimate ? `$${estimate.low.toLocaleString()}–$${estimate.high.toLocaleString()}` : "Quoted in 24h"}</strong>
              {estimate ? "typical range" : "one all-in price"}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>How this trip works</h2>
          <p>
            A vetted, USDA-registered partner driver picks your pet up at your
            door in {route.from.split(",")[0]} and drives them straight through
            to {route.to.split(",")[0]}, with climate control the whole way and
            leash breaks, water, and feeding on your pet&apos;s normal schedule.
            You get photo updates at every stop.
          </p>
          <p>
            A typical {route.from.split(",")[0]}–{route.to.split(",")[0]} ground
            trip takes {route.days}, depending on weather and whether the ride
            is dedicated or shared with one or two other pets heading the same
            direction. Shared rides cost less; dedicated rides are faster and
            suit anxious pets.
          </p>
          <h2>Paperwork for this route</h2>
          <p>
            Crossing state lines commercially generally requires a veterinary
            health certificate (CVI) issued within days of departure. When you
            book, we confirm the exact requirements for your route and
            coordinate timing with your vet so the paperwork is valid on pickup
            day.
          </p>
          <div className="cta-block">
            <Link
              href={`/?from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}#quote`}
              className="btn btn-red"
            >
              Get a quote for this route
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
