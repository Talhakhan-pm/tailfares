import { CORRIDORS, type Corridor } from "@/lib/routes";

export type Species = "dog" | "cat" | "other";

export type FareEstimate = {
  low: number; // USD, what we'd quote on the low end
  high: number; // USD, high end
};

// Cats dodge the heaviest rules on the USA corridor (no CDC dog regime) and
// generally book cheaper cargo space everywhere. Multipliers are launch
// values from the Aug 2026 research — tune them as real quotes come in.
const CAT_DISCOUNT: Record<string, number> = {
  "pakistan-to-usa": 0.45,
  "pakistan-to-uk": 0.75,
  "pakistan-to-uae": 0.8,
  "pakistan-to-canada": 0.7,
  "pakistan-to-australia": 0.9,
};

export function estimateFare(corridor: Corridor, species: Species): FareEstimate {
  const m = species === "cat" ? CAT_DISCOUNT[corridor.slug] ?? 0.8 : 1;
  const round50 = (n: number) => Math.round(n / 50) * 50;
  return {
    low: round50(corridor.priceLowUsd * m),
    high: round50(corridor.priceHighUsd * m),
  };
}

export function corridorBySlug(slug: string): Corridor | undefined {
  return CORRIDORS.find((c) => c.slug === slug);
}
