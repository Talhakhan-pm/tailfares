import type { Metadata } from "next";
import CardPlane from "@/components/CardPlane";

export const metadata: Metadata = {
  title: "Talha Khan — TailFares",
  description:
    "Founder, TailFares. Pet relocation from Pakistan to anywhere in the world.",
  robots: { index: false },
};

export default function Card() {
  return (
    <main className="card-page">
      <div className="biz-card">
        <div className="biz-top">
          <span>TailFares · Founder pass</span>
          <span>KHI ⇄ WORLD</span>
        </div>
        <div className="biz-body">
          <CardPlane />
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
            <a
              href="https://instagram.com/tail.fares"
              target="_blank"
              rel="noopener"
            >
              IG · @tail.fares
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
