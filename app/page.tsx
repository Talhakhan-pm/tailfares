import Link from "next/link";
import BoardingPass from "@/components/BoardingPass";
import { CORRIDORS } from "@/lib/routes";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ corridor?: string }>;
}) {
  const { corridor = "" } = await searchParams;
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">Pet relocation from Pakistan, worldwide</span>
            <h1>
              Fly <em>your pet</em> from Pakistan to anywhere in the world.
            </h1>
            <p className="lede">
              Titer tests, export permits, airline rules, crate specs — moving a
              pet out of Pakistan is a paperwork project with a heartbeat. We
              run the whole thing: vet visits, NAFSA permits, the flight, and
              the reunion at the other end.
            </p>
            <ul className="hero-points">
              <li>Every permit and certificate handled, in the right order</li>
              <li>Written airline confirmation before you pay a rupee</li>
              <li>Photo updates from vet visit to boarding to landing</li>
              <li>One WhatsApp thread from first question to reunion</li>
            </ul>
          </div>
          <BoardingPass defaultCorridor={corridor} />
        </div>
      </section>

      <section className="section" id="how">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Three stages, one person answering your messages</h2>
          </div>
          <div className="journey">
            <div className="journey-step">
              <span className="dot">1</span>
              <h3>The plan</h3>
              <p>
                Tell us the destination and your pet. We map the exact
                requirements and timeline for that country — some corridors
                take three weeks, some need a titer clock started months ahead.
              </p>
            </div>
            <div className="journey-step">
              <span className="dot">2</span>
              <h3>The paperwork</h3>
              <p>
                Microchip, vaccinations, titer draw, NAFSA export certificate
                through Pakistan Single Window, destination import permit — we
                sequence every step so nothing expires before departure day.
              </p>
            </div>
            <div className="journey-step">
              <span className="dot">3</span>
              <h3>The flight</h3>
              <p>
                Airline-approved crate, confirmed booking in writing, check-in
                handled at the airport, and clearance coordinated on the other
                side. You get updates until the crate opens at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section compare">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why TailFares</span>
            <h2>The honest comparison</h2>
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
                  <td className="us">We do — permits, certificates, and timing choreographed</td>
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
                  <td className="us">On the ground in Pakistan, at the vet and the airport</td>
                  <td>A phone number in another timezone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="routes">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Corridors</span>
            <h2>Where pets fly from Pakistan</h2>
          </div>
          <div className="routes-grid">
            {CORRIDORS.map((c) => (
              <Link key={c.slug} href={`/routes/${c.slug}`} className="route-card">
                <span className="codes">
                  PAK <span className="arrow">→</span> {c.destCode}
                </span>
                <span className="cities">
                  Pakistan to {c.destination} · {c.timeline}
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
            <h2>What pet parents ask us</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>How much does it cost to send a pet abroad from Pakistan?</summary>
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
              <summary>What is a rabies titer test and does my pet need one?</summary>
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
    </main>
  );
}
