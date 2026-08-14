# TailFares Website Revamp — Plan

Decided 2026-08-14. Full visual revamp: new palette + cinematic scroll-driven landing page.

## Decisions (locked)

- **Palette**: white base, deep flight-blue, violet accent
  - `--paper: #FFFFFF` / off-white section tint `#F6F8FC`
  - `--flight-blue: #0B3B8C` (headings, dark sections, footer)
  - `--sky-blue: #2E6BD6` (flight path, links, secondary UI)
  - `--violet: #8B5CF6` (CTAs, journey checkpoints, highlights) — text on violet: `#F4F0FF`
  - Old "vintage airmail" palette (navy/cream/red/tan) is fully retired
- **Scroll story**: **The Journey** — an animated flight path draws down the page as you scroll.
  Pet leaves home (Karachi) → checkpoints pin content sections → lands abroad.
  Checkpoints: 1) Vet & vaccinations 2) Permits & titer test 3) Crate & cargo booking
  4) Customs clearance 5) Arrival/delivery. Each checkpoint = existing content section rehomed.
- **Skills**: `1.3.1:auteur` (direction + build + asset generation + screenshot verification),
  `oil-motion` (scroll-scrubbed animation engine), `frontend-design` (palette/type discipline).

## Scope

1. `app/globals.css` — new design tokens, retire old palette everywhere
2. `app/page.tsx` — landing page rebuilt as scroll-directed Journey narrative
3. `components/BoardingPass.tsx` — restyle to new palette (keep logic/lead capture untouched)
4. Route pages (`app/routes/[slug]`) + guides — palette/typography pass only, no motion
5. `app/layout.tsx` — font/meta check against new design

## Non-goals

- No changes to pricing logic (`lib/pricing.ts`), routes data (`lib/routes.ts`), or API/lead capture
- No copy rewrite beyond what the new sections require
- Logo/OG assets stay as-is for now (revisit after palette lands)

## Guardrails

- `prefers-reduced-motion`: static fallback, no scroll scrubbing
- Mobile: flight path simplifies to vertical line + checkpoints; verify at 375px
- `npm run build` must pass; Lighthouse-sane (no layout shift from pinned sections)
- Verify in browser (screenshots) before push; Vercel deploys from master on push

## Order of work

1. Palette swap in globals.css + verify all pages still legible
2. Journey landing page (auteur + oil-motion)
3. BoardingPass + secondary pages restyle
4. Build, browser verification loop, mobile pass
5. Commit per phase; push to deploy only after final verification
