import type { Metadata } from "next";
import { Sora, Manrope, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--sora",
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
    default: "TailFares — Door-to-door pet transport with one clear quote",
    template: "%s | TailFares",
  },
  description:
    "TailFares arranges door-to-door ground transport for dogs and cats across the US. One quote, one point of contact, USDA-registered partner drivers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="logo">
              Tail<em>Fares</em>
            </Link>
            <nav className="nav" aria-label="Main">
              <Link href="/#how">How it works</Link>
              <Link href="/#routes">Routes</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/#quote" className="btn btn-red">
                Get a quote
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <div className="airmail-strip" aria-hidden="true" />
        <footer className="site-footer">
          <div className="wrap">
            <div>
              <span className="logo">
                Tail<em>Fares</em>
              </span>
              <p className="fine">
                TailFares is a pet transport broker. Transport is carried out by
                independent, USDA-registered partner drivers. We coordinate the
                trip, the paperwork, and the updates.
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
