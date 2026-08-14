# TailFares Repoint: US Ground → Pakistan → World

*Plan written Aug 14, 2026, before any code changes (per plan-first workflow).
Basis: market research report — https://claude.ai/code/artifact/8da9c21b-049d-4d6c-bbb7-5dcc2d1804c5*

## Why

US ground transport is a crowded broker fight (CitizenShipper, uShip) we have no
edge in. The Pakistan→international corridor has ~1 credentialed competitor
nationally, empty SERPs for every route/permit/titer query, and a structural
emigration wave (862k emigrants in 2023; UK/Canada/US student + skilled flow).
Origin-side costs are PKR; revenue is USD/AED. Full report link above.

## Scope (this pass)

1. **lib/corridors.ts** (replaces routes.ts usage) — 5 corridors:
   PK→UAE, PK→UK, PK→Canada, PK→USA, PK→Australia. Each carries: timeline,
   entry mode (cabin/cargo), price range USD, difficulty, requirement list.
2. **Homepage** — hero repositioned "Pakistan → anywhere in the world";
   boarding-pass form gets origin-city select (KHI/LHE/ISB), destination-country
   select, WhatsApp field (primary PK contact channel); comparison table becomes
   DIY vs TailFares vs foreign full-service; FAQ rewritten around titer, UK
   3-month wait, CDC rules, scam fears.
3. **Corridor pages** at /routes/[slug] — requirements checklist, timeline,
   honest cost ranges (Fetchapet pattern: publish enough to win the SERP, then
   quote CTA).
4. **Two SEO guide pages** — /guides/pet-export-permit-pakistan (PSW/NAFSA
   walkthrough) and /guides/rabies-titer-test-pakistan (FAVN). The two
   highest-vacuum queries found in research.
5. **lib/pricing.ts** — corridor-based estimate (replaces unimplemented
   per-mile TODO). Launch ranges from research; marked for owner adjustment.
6. **Layout/metadata** — titles, descriptions, footer identity updated;
   WhatsApp CTA reads NEXT_PUBLIC_WHATSAPP (button hidden until number set).
7. **Old US route slugs** — removed. Site has ~no traffic; no redirects needed.

## Explicitly NOT claiming (honesty constraints)

- No IPATA membership badge until membership is real.
- No invented "pets moved" stats, reviews, or testimonials.
- Cost ranges labeled "typical range" and sourced from research, not promises.

## Out of scope (later passes)

- Urdu versions, USA/Saudi corridor guides, airline policy hub, cost calculator
  with live FX, /us archive of the ground product, Google Business Profile.

## Verification

- `npm run build` clean; dev-server visual check of home, one corridor page,
  one guide; quote form still posts to /api/quote.

## Checkpoints

- Pre-build commit: this plan on top of 617397e (clean tree).
- Post-build commit after verification.
