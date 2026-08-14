export type Corridor = {
  slug: string;
  destination: string; // country name
  destCity: string; // main arrival city for display
  destCode: string; // arrival airport code for the boarding-pass motif
  timeline: string; // realistic start-to-landing duration
  entryMode: string; // cabin / cargo constraints
  priceLowUsd: number; // typical full-service range, owner-adjustable
  priceHighUsd: number;
  tagline: string; // one-line route positioning
  requirements: string[]; // the compliance checklist, in order
  note?: string; // corridor-specific caveat worth surfacing
};

// Origin is always Pakistan — KHI, LHE, ISB. Ranges reflect Aug 2026 market
// research (see REPOINT.md); adjust as real quotes come in.
export const CORRIDORS: Corridor[] = [
  {
    slug: "pakistan-to-uae",
    destination: "UAE",
    destCity: "Dubai",
    destCode: "DXB",
    timeline: "2–3 weeks",
    entryMode: "Cabin or cargo, airline-dependent",
    priceLowUsd: 1200,
    priceHighUsd: 2000,
    tagline: "The fastest corridor out of Pakistan — no quarantine when the paperwork is clean.",
    requirements: [
      "ISO microchip implanted before rabies vaccination",
      "Rabies vaccination at least 21 days before travel",
      "MOCCAE import permit (AED 200) before departure",
      "NAFSA health certificate via Pakistan Single Window, valid days — timing choreographed",
      "IATA-compliant crate, sized and approved before booking",
    ],
    note: "Snub-nosed breeds face summer airline embargoes on Gulf routes — plan around the heat season.",
  },
  {
    slug: "pakistan-to-uk",
    destination: "United Kingdom",
    destCity: "London",
    destCode: "LHR",
    timeline: "4–6 months",
    entryMode: "Manifest cargo only, via Heathrow Animal Reception Centre",
    priceLowUsd: 2800,
    priceHighUsd: 4500,
    tagline: "A four-to-six-month project — the titer clock decides your move date, so start it first.",
    requirements: [
      "ISO microchip, then rabies vaccination",
      "Rabies titer (FAVN) blood draw ≥30 days after vaccination, tested at an EU-approved lab",
      "3-month wait after a passing titer before entry",
      "Tapeworm treatment 24–120 hours before arrival (dogs)",
      "Cargo booking and UK-side customs clearance at Heathrow ARC",
    ],
    note: "Discovering the 3-month wait four weeks before your flight is the most common UK disaster. Start early.",
  },
  {
    slug: "pakistan-to-canada",
    destination: "Canada",
    destCity: "Toronto",
    destCode: "YYZ",
    timeline: "2–4 weeks",
    entryMode: "In-cabin possible on some airlines; cargo for larger dogs",
    priceLowUsd: 900,
    priceHighUsd: 3200,
    tagline: "The lightest rules of any Western destination — often the cheapest way to fly a pet west.",
    requirements: [
      "Valid rabies vaccination certificate (English or French)",
      "Airline health documentation and fit-to-fly certificate",
      "NAFSA export paperwork via Pakistan Single Window",
      "CBSA inspection on arrival",
      "IATA-compliant crate",
    ],
    note: "Canadian rules for high-risk-origin animals have tightened recently — we re-verify CFIA requirements on every booking.",
  },
  {
    slug: "pakistan-to-usa",
    destination: "USA",
    destCity: "New York",
    destCode: "JFK",
    timeline: "6–10 weeks for dogs; 2–3 weeks for cats",
    entryMode: "Dogs restricted to CDC-approved airports; cats far simpler",
    priceLowUsd: 1500,
    priceHighUsd: 4000,
    tagline: "Pakistan is a CDC high-risk rabies country — dog imports are a compliance maze we run daily.",
    requirements: [
      "Dogs 6 months or older only (CDC rule)",
      "ISO microchip + CDC Dog Import Form receipt",
      "Rabies titer from a CDC-approved lab, or reservation at a CDC-registered quarantine facility",
      "Arrival only at airports with a CDC animal care facility",
      "USDA-accredited destination paperwork coordinated with the airline",
    ],
    note: "Cats skip nearly all of this — a cat to the US is closer to the Canada process.",
  },
  {
    slug: "pakistan-to-australia",
    destination: "Australia",
    destCity: "Melbourne",
    destCode: "MEL",
    timeline: "~12 months, staged",
    entryMode: "No direct import — 180-day residency in an approved country first",
    priceLowUsd: 12000,
    priceHighUsd: 20000,
    tagline: "The Dubai bridge: 180 days in the UAE, then Mickleham quarantine. Nobody else in Pakistan productizes this.",
    requirements: [
      "Stage 1: full UAE import (microchip, rabies, titer, MOCCAE permit)",
      "180 days' residency in the UAE with vaccine and vet management",
      "Australian import permit lodged from the UAE as an approved country",
      "Minimum 10 days at Mickleham post-entry quarantine",
      "Boarding, boosters, and paperwork managed across both stages",
    ],
    note: "This is a two-country, year-long relocation. We coordinate the UAE leg with established Dubai partners.",
  },
];

export function getCorridor(slug: string): Corridor | undefined {
  return CORRIDORS.find((c) => c.slug === slug);
}
