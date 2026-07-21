import Link from "next/link";
import BoardingPass from "@/components/BoardingPass";
import { ROUTES } from "@/lib/routes";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string }>;
}) {
  const { from = "", to = "" } = await searchParams;
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">Door-to-door pet transport, US-wide</span>
            <h1>
              One clear quote to get <em>your pet</em> home safe.
            </h1>
            <p className="lede">
              Skip the bidding wars and the $3,000 white-glove bill. Tell us the
              trip once — we match your pet with a vetted, USDA-registered
              driver and stay your single point of contact door to door.
            </p>
            <ul className="hero-points">
              <li>Background-checked, USDA-registered partner drivers</li>
              <li>Health-certificate paperwork coordinated for you</li>
              <li>Photo updates at every rest stop</li>
              <li>No payment until you approve the quote</li>
            </ul>
          </div>
          <BoardingPass defaultFrom={from} defaultTo={to} />
        </div>
      </section>

      <section className="section" id="how">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Three steps, one person answering the phone</h2>
          </div>
          <div className="journey">
            <div className="journey-step">
              <span className="dot">1</span>
              <h3>Tell us the trip</h3>
              <p>
                Fill in the boarding pass — where from, where to, who&apos;s
                traveling. It takes a minute and costs nothing.
              </p>
            </div>
            <div className="journey-step">
              <span className="dot">2</span>
              <h3>Get one all-in quote</h3>
              <p>
                We price the whole trip: driver, fuel, rest stops, paperwork.
                One number, no platform fees stacked on top at checkout.
              </p>
            </div>
            <div className="journey-step">
              <span className="dot">3</span>
              <h3>Track door to door</h3>
              <p>
                A vetted driver picks up at your door. You get photo updates
                along the route and a wagging tail at the other end.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section compare">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why a broker</span>
            <h2>The honest comparison</h2>
          </div>
          <div className="compare-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Bidding marketplaces</th>
                  <th scope="col">TailFares</th>
                  <th scope="col">White-glove shippers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">How you get a price</th>
                  <td>Strangers bid; you sort through them</td>
                  <td className="us">One vetted quote from us</td>
                  <td>One quote, premium-priced</td>
                </tr>
                <tr>
                  <th scope="row">Who vets the driver</th>
                  <td>You do, from profiles and reviews</td>
                  <td className="us">We do — USDA registration, insurance, track record</td>
                  <td>The company&apos;s own staff</td>
                </tr>
                <tr>
                  <th scope="row">Extra fees</th>
                  <td>Platform booking fee added at checkout</td>
                  <td className="us">None — the quote is the price</td>
                  <td>Add-ons for handling and boarding</td>
                </tr>
                <tr>
                  <th scope="row">Typical cross-country cost</th>
                  <td>Varies widely with bid quality</td>
                  <td className="us">Mid-range, confirmed up front</td>
                  <td>From $1,450 and up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="routes">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Popular routes</span>
            <h2>Where pets are flying the ground routes</h2>
          </div>
          <div className="routes-grid">
            {ROUTES.map((r) => (
              <Link key={r.slug} href={`/routes/${r.slug}`} className="route-card">
                <span className="codes">
                  {r.fromCode} <span className="arrow">→</span> {r.toCode}
                </span>
                <span className="cities">
                  {r.from} to {r.to} · {r.miles.toLocaleString()} mi
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>What pet owners ask us</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>How much does pet transport cost?</summary>
              <p>
                Ground transport typically runs a few hundred dollars for
                shorter trips up to $1,000–$1,500 for cross-country moves,
                depending on distance, pet size, and whether the ride is shared
                or dedicated. Your emailed quote is one all-in number — no fees
                added later.
              </p>
            </details>
            <details>
              <summary>Who actually drives my pet?</summary>
              <p>
                Independent professional transporters from our partner network.
                Every driver is background-checked, USDA-registered, and
                insured before we send them a single trip. We stay your point
                of contact the whole way.
              </p>
            </details>
            <details>
              <summary>Does my pet need paperwork to cross state lines?</summary>
              <p>
                Most states require a veterinary health certificate (CVI)
                issued shortly before travel. We tell you exactly what your
                route needs and coordinate the timing with your vet.
              </p>
            </details>
            <details>
              <summary>Can my pets travel together?</summary>
              <p>
                Yes — bonded pets ride together in the same vehicle, usually at
                a lower combined rate than two separate trips. Mention both
                pets in your quote request.
              </p>
            </details>
            <details>
              <summary>When do I pay?</summary>
              <p>
                Only after you approve the quote and we confirm your driver and
                dates. Nothing is charged when you request a quote.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
