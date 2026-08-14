import Link from "next/link";
import BoardingPass from "@/components/BoardingPass";
import Director from "@/components/Director";
import { CORRIDORS } from "@/lib/routes";

const PLANE =
  "M0 -14 C 1.6 -9 2.4 -5 2.4 -1 L 12 7 L 12 10 L 2.2 6 L 1.6 12 L 4.6 14.6 L 4.6 16.6 L 0 15.4 L -4.6 16.6 L -4.6 14.6 L -1.6 12 L -2.2 6 L -12 10 L -12 7 L -2.4 -1 C -2.4 -5 -1.6 -9 0 -14 Z";

const BOARD_ROWS = [
  { flight: "TF·011", route: "KHI → LHR London", transit: "18–26h", slug: "pakistan-to-uk" },
  { flight: "TF·014", route: "KHI → JFK New York", transit: "22–30h", slug: "pakistan-to-usa" },
  { flight: "TF·008", route: "LHE → DXB Dubai", transit: "6–10h", slug: "pakistan-to-uae" },
  { flight: "TF·019", route: "ISB → YYZ Toronto", transit: "20–28h", slug: "pakistan-to-canada" },
];

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ corridor?: string }>;
}) {
  const { corridor = "" } = await searchParams;
  return (
    <main>
      {/* ============ Scene 1 — departure board ============ */}
      <section className="s1">
        <svg
          className="flightpath flightpath-desktop"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            className="hero-path"
            d="M 1130 130 C 1260 210, 1300 340, 1210 450 C 1120 560, 940 560, 860 660 C 800 735, 830 820, 900 910"
            stroke="var(--electric)"
            strokeWidth="2.5"
            strokeDasharray="1 10"
            strokeLinecap="round"
          />
          <circle cx="1130" cy="130" r="5" fill="var(--electric)" />
          <g className="hero-plane" transform="translate(1196 306) rotate(128)">
            <path d={PLANE} fill="var(--electric)" />
          </g>
        </svg>
        <svg
          className="flightpath flightpath-mobile"
          viewBox="0 0 390 780"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            className="hero-path"
            d="M 348 128 C 390 210, 352 290, 330 360 C 305 440, 356 520, 344 620 C 338 680, 320 730, 330 790"
            stroke="var(--electric)"
            strokeWidth="2"
            strokeDasharray="1 8"
            strokeLinecap="round"
          />
          <circle cx="348" cy="128" r="4" fill="var(--electric)" />
          <g className="hero-plane" transform="translate(349 300) rotate(172)">
            <path d={PLANE} fill="var(--electric)" transform="scale(0.8)" />
          </g>
        </svg>

        <div className="wrap">
          <h1>
            <span className="w">Your</span> <span className="w">pet&apos;s</span>{" "}
            <span className="w seat">seat</span> <span className="w">is</span>{" "}
            <span className="w">booked.</span>
          </h1>
          <p className="lede">
            Pakistan to anywhere — vet, permits, cargo, customs, door. One fare,
            every step handled.
          </p>
          <div className="cta-row">
            <a className="btn btn-electric" href="#quote">
              Get a quote
            </a>
            <a className="btn-ghost" href="#routes">
              SEE ROUTES →
            </a>
          </div>
        </div>

        <div className="wrap board">
          <div className="board-head">
            <span>FLIGHT</span>
            <span>ROUTE</span>
            <span>TRANSIT</span>
            <span>STATUS</span>
          </div>
          {BOARD_ROWS.map((r) => (
            <div className="board-row" key={r.flight}>
              <span>{r.flight}</span>
              <span>
                <Link href={`/routes/${r.slug}`}>{r.route}</Link>
              </span>
              <span>{r.transit}</span>
              <span className="status">BOOKING</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Scene 2 — preparation ============ */}
      <section className="s2" id="how">
        <div className="wrap">
          <h2 className="display">Before the airport, everything.</h2>
          <p className="s2-intro">
            Moving a pet out of Pakistan is a paperwork project with a
            heartbeat. Every certificate has a validity window and an order —
            we sequence all of it so nothing expires before departure day.
          </p>
          <div className="prep-steps">
            <svg
              className="prep-line"
              viewBox="0 0 120 1200"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                className="draw-path"
                d="M60 0 C 60 150, 30 220, 60 380 C 90 540, 30 620, 60 780 C 90 940, 45 1040, 60 1200"
                stroke="var(--electric)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="prep-step">
              <span className="stamp">01</span>
              <div className="prep-card">
                <span className="k">CHECKPOINT · VET &amp; VACCINATIONS</span>
                <h3>The clock starts at the clinic</h3>
                <p>
                  ISO microchip, rabies vaccination, health certificate — done
                  in the right order, because a vaccine given before the chip
                  doesn&apos;t count and resets your timeline.
                </p>
              </div>
            </div>
            <div className="prep-step">
              <span className="stamp">02</span>
              <div className="prep-card">
                <span className="k">CHECKPOINT · PERMITS &amp; TITER</span>
                <h3>The paperwork gauntlet</h3>
                <p>
                  FAVN blood test at an approved lab abroad, NAFSA export
                  certificate through Pakistan Single Window, destination
                  import permit — timed so every window overlaps departure day.
                </p>
              </div>
            </div>
            <div className="prep-step">
              <span className="stamp">03</span>
              <div className="prep-card">
                <span className="k">CHECKPOINT · IATA CRATE</span>
                <h3>A seat that fits</h3>
                <p>
                  Sized, ventilated, airline-approved — and the booking
                  confirmed in writing before you pay a rupee. Verbal airline
                  approvals evaporate at check-in; written ones don&apos;t.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Scene 3 — night cargo (peak) ============ */}
      <section className="s3">
        <div className="s3-stage">
          <h2>
            The part you&apos;re scared of is the part we&apos;ve done 200
            times.
          </h2>
          <svg
            className="nightmap"
            viewBox="0 0 1080 420"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 90 Q 540 30 1080 90"
              stroke="rgba(247,247,245,0.08)"
              strokeWidth="1"
            />
            <path
              d="M0 210 Q 540 150 1080 210"
              stroke="rgba(247,247,245,0.08)"
              strokeWidth="1"
            />
            <path
              d="M0 330 Q 540 270 1080 330"
              stroke="rgba(247,247,245,0.08)"
              strokeWidth="1"
            />
            <path
              className="arc"
              d="M120 330 Q 480 40 960 110"
              strokeWidth="2.5"
              strokeDasharray="2 9"
              strokeLinecap="round"
              fill="none"
            />
            <circle className="city city-a" cx="120" cy="330" r="6" fill="var(--electric)" />
            <circle className="city city-b" cx="960" cy="110" r="6" fill="var(--electric-soft)" />
            <text className="city-label" x="120" y="368" textAnchor="middle">
              KHI · KARACHI
            </text>
            <text className="city-label" x="960" y="148" textAnchor="middle">
              LHR · LONDON
            </text>
            <g className="night-plane" transform="translate(120 330) rotate(65)">
              <path d={PLANE} fill="var(--paper)" transform="scale(1.5)" />
            </g>
          </svg>
          <div className="s3-captions">
            <div className="s3-caption">
              <p>
                <span className="k">CARGO · 01</span>
                Manifest cargo, never excess baggage — a live-animal waybill
                with your pet&apos;s name on it.
              </p>
            </div>
            <div className="s3-caption">
              <p>
                <span className="k">CARGO · 02</span>
                Pressurized, temperature-controlled hold — the same air as the
                cabin, two decks down.
              </p>
            </div>
            <div className="s3-caption">
              <p>
                <span className="k">CARGO · 03</span>
                Status updates at every handoff — vet, check-in, wheels up,
                landed, cleared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Scene 4 — landing & proof ============ */}
      <section className="s4" id="routes">
        <svg
          className="s4-line"
          viewBox="0 0 8 800"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            className="draw-path"
            d="M4 0 L4 800"
            stroke="var(--electric)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <div className="wrap">
          <div className="s4-head">
            <h2 className="display">Landed, cleared, delivered.</h2>
            <p>
              Customs clearance is coordinated before wheels touch down, and
              the journey ends at your new front door — not a cargo warehouse
              counter in a country you landed in yesterday.
            </p>
          </div>
          <div className="landing-stamps">
            <div className="landing-stamp">
              <span className="stamp">04</span>
              <span>CUSTOMS CLEARANCE</span>
            </div>
            <div className="landing-stamp">
              <span className="stamp">05</span>
              <span>HOME DELIVERY</span>
            </div>
          </div>

          <div className="fares-scroll">
            <table className="fares">
              <thead>
                <tr>
                  <th scope="col">Route</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Typical fare</th>
                  <th scope="col">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {CORRIDORS.map((c) => (
                  <tr key={c.slug}>
                    <td className="dest">PAK → {c.destCode}</td>
                    <td>
                      <Link href={`/routes/${c.slug}`}>
                        {c.destCity}, {c.destination}
                      </Link>
                    </td>
                    <td className="range">
                      ${c.priceLowUsd.toLocaleString()}–$
                      {c.priceHighUsd.toLocaleString()}
                    </td>
                    <td>{c.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section-head">
            <h2 className="display">The honest comparison</h2>
          </div>
          <div className="compare-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Doing it yourself</th>
                  <th scope="col">TailFares</th>
                  <th scope="col">Foreign relocation firms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Who does the paperwork</th>
                  <td>You, across 3–4 agencies and a government portal</td>
                  <td className="us">
                    We do — permits, certificates, and timing choreographed
                  </td>
                  <td>They do, from abroad, through a local subcontractor</td>
                </tr>
                <tr>
                  <th scope="row">Airline booking</th>
                  <td>Verbal approvals that evaporate at check-in</td>
                  <td className="us">Written confirmation before you pay</td>
                  <td>Handled, at a premium</td>
                </tr>
                <tr>
                  <th scope="row">Typical cost to the UAE</th>
                  <td>~$900 + your time, mistakes reset the clock</td>
                  <td className="us">One all-in price, mid-range, quoted up front</td>
                  <td>$3,000–10,000 depending on corridor</td>
                </tr>
                <tr>
                  <th scope="row">Where they are</th>
                  <td>—</td>
                  <td className="us">
                    On the ground in Pakistan, at the vet and the airport
                  </td>
                  <td>A phone number in another timezone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ FAQ (quiet proof) ============ */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head">
            <h2>What pet parents ask us</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>
                How much does it cost to send a pet abroad from Pakistan?
              </summary>
              <p>
                It depends almost entirely on the destination&apos;s rules. A cat
                to Dubai can run around $1,000–1,600 all-in; a dog to the UK is
                a $2,800–4,500 project because of the titer test and cargo-only
                entry; Australia is a staged year-long move from $12,000. Every
                corridor page on this site shows its typical range — your quote
                is one all-in number.
              </p>
            </details>
            <details>
              <summary>
                What is a rabies titer test and does my pet need one?
              </summary>
              <p>
                Pakistan is classified as a high-risk rabies country by the UK,
                US, EU, and Australia, so most Western destinations require a
                blood test (FAVN) proving the rabies vaccine worked. The sample
                is drawn in Pakistan and tested at an approved lab abroad. Some
                destinations then impose a waiting period — the UK&apos;s is 3
                months — which is why we start the clock at your first message.
              </p>
            </details>
            <details>
              <summary>Can my pet fly in the cabin with me?</summary>
              <p>
                Sometimes. It depends on the airline, the route, your pet&apos;s
                size, and the destination&apos;s entry rules — the UK, for
                example, only accepts pets as manifest cargo. We tell you what
                your corridor allows and get the airline&apos;s confirmation in
                writing either way.
              </p>
            </details>
            <details>
              <summary>How do I know this isn&apos;t a scam?</summary>
              <p>
                Fair question — fake pet shippers are the industry&apos;s biggest
                plague, and we built TailFares around that fear. Nothing is
                charged until you approve a written plan, airline bookings are
                confirmed in writing before payment, and you can verify every
                permit yourself on the Pakistan Single Window portal. You watch
                every step happen on WhatsApp.
              </p>
            </details>
            <details>
              <summary>My flight is in three weeks. Is that enough time?</summary>
              <p>
                For the UAE or Canada, usually yes. For the US (dogs), UK, or
                Australia — no, those corridors have mandatory waiting periods.
                If you&apos;re emigrating later this year, message us now even if
                the move feels far away: starting the titer early is free
                insurance on your travel date.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ============ Scene 5 — the door ============ */}
      <section className="s5">
        <div className="wrap">
          <div>
            <h2>Book the seat.</h2>
            <p className="lede">
              Tell us the route and the pet — a real person replies with a
              full plan and one all-in price within 24 hours, on WhatsApp or
              email.
            </p>
          </div>
          <BoardingPass defaultCorridor={corridor} />
        </div>
      </section>

      <Director />
    </main>
  );
}
