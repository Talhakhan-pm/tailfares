import type { Metadata } from "next";
import { Archivo, Manrope, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import Backdrop from "@/components/Backdrop";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--archivo",
  axes: ["wdth"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--manrope",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tailfares.com"),
  title: {
    default:
      "TailFares — Pet relocation from Pakistan to anywhere in the world",
    template: "%s | TailFares",
  },
  description:
    "TailFares relocates cats and dogs from Pakistan to the UAE, UK, Canada, USA, Australia and beyond. Permits, titer tests, airline booking, and door-to-door coordination from Karachi, Lahore, and Islamabad.",
};

// Set NEXT_PUBLIC_WHATSAPP (digits only, e.g. 923001234567) to surface the
// WhatsApp CTA — the primary conversion channel for Pakistani customers.
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body>
        <Backdrop />
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="logo">
              Tail<em>Fares</em>
            </Link>
            <nav className="nav" aria-label="Main">
              <Link href="/#how">How it works</Link>
              <Link href="/#routes">Corridors</Link>
              <Link href="/#faq">FAQ</Link>
              {WHATSAPP ? (
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  className="btn btn-red"
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp us
                </a>
              ) : (
                <Link href="/#quote" className="btn btn-red">
                  Get a quote
                </Link>
              )}
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="wrap">
            <div>
              <span className="logo">
                Tail<em>Fares</em>
              </span>
              <p className="fine">
                TailFares coordinates international pet relocation from
                Pakistan — permits, health certification, airline booking, and
                arrival clearance — from Karachi, Lahore, and Islamabad.
              </p>
              <p className="fine">
                Guides:{" "}
                <Link href="/guides/pet-export-permit-pakistan">
                  Pet export permit in Pakistan
                </Link>{" "}
                ·{" "}
                <Link href="/guides/rabies-titer-test-pakistan">
                  Rabies titer test from Pakistan
                </Link>
              </p>
            </div>
            <div>
              <p>
                <a href="mailto:hello@tailfares.com">hello@tailfares.com</a>
              </p>
              <p className="fine">© {new Date().getFullYear()} TailFares</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
