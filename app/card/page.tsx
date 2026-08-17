import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talha Khan — TailFares",
  description:
    "Founder, TailFares. Pet relocation from Pakistan to anywhere in the world.",
  robots: { index: false },
};

const PLANE =
  "M0 -14 C 1.6 -9 2.4 -5 2.4 -1 L 12 7 L 12 10 L 2.2 6 L 1.6 12 L 4.6 14.6 L 4.6 16.6 L 0 15.4 L -4.6 16.6 L -4.6 14.6 L -1.6 12 L -2.2 6 L -12 10 L -12 7 L -2.4 -1 C -2.4 -5 -1.6 -9 0 -14 Z";

export default function Card() {
  return (
    <main className="card-page">
      <div className="biz-card">
        <div className="biz-top">
          <span>TailFares · Founder pass</span>
          <span>KHI ⇄ WORLD</span>
        </div>
        <div className="biz-body">
          <svg
            className="biz-plane"
            viewBox="-16 -16 32 32"
            aria-hidden="true"
          >
            <path d={PLANE} fill="var(--electric)" />
          </svg>
          <h1>Talha Khan</h1>
          <p className="biz-title">Founder, TailFares</p>
          <p className="biz-line">
            Pet relocation from Pakistan to anywhere — vet, permits, cargo,
            customs, door.
          </p>
          <div className="biz-actions">
            <a className="btn btn-electric" href="/talha-khan.vcf" download>
              Save contact
            </a>
            <a
              className="btn"
              href="https://wa.me/19793002736"
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
          </div>
          <div className="biz-meta">
            <a href="tel:+19793002736">+1 979 300 2736</a>
            <a href="mailto:hello@tailfares.com">hello@tailfares.com</a>
            <a href="https://tailfares.com">tailfares.com</a>
          </div>
        </div>
      </div>
    </main>
  );
}
