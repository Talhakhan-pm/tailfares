export type PetSize = "small" | "medium" | "large";

export type QuoteInput = {
  miles: number;
  size: PetSize;
  solo: boolean; // dedicated ride vs. shared route
};

export type FareEstimate = {
  low: number; // what we'd quote on the low end, in USD
  high: number; // high end, in USD
};

/**
 * Estimate the fare range shown to a customer before a human quotes the job.
 *
 * This is TailFares' core pricing policy — the spread between what we charge
 * the customer and what we pay the partner driver is the whole business.
 * Market reference points from research (July 2026):
 *   - Marketplaces: driver quote ≈ $0.60–1.00/mile + ~$230 platform fee on 1,400 mi
 *   - White-glove companies: from $1,450 flat, domestic
 *   - Rule of thumb: per-mile rate FALLS as distance grows (a 300-mi trip
 *     can't go below ~$350; a 2,500-mi trip at $1.00/mi would be uncompetitive)
 *
 * TODO(you): implement the estimate. Things to decide:
 *   1. Base rate curve — flat per-mile, tiered bands, or base fee + per-mile?
 *   2. Size multiplier — large dogs cost partners more space/handling.
 *   3. Solo multiplier — dedicated rides typically run 1.5–2x shared.
 *   4. A floor — never show an estimate below your minimum viable job.
 * Return a {low, high} range (round to whole dollars), or null to show
 * "we'll email your quote within 24h" instead of a number.
 */
export function estimateFare(input: QuoteInput): FareEstimate | null {
  // TODO: implement pricing policy (see notes above)
  return null;
}
