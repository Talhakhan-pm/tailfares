# DESIGN.md — TailFares "The Journey"

The style contract. Every future edit reads this first and stays inside it.

## Tokens (globals.css :root — verbatim source of truth)
- `--paper #F7F7F5` page ground · `--card #FFFFFF` raised surfaces
- `--ink #111318` all text/dark sections · `--ink-soft #565E6E` secondary text
- `--electric #2563EB` — RESERVED: the journey line, plane, stamps, CTAs, links, focus. Never decorative.
- `--electric-soft #93B4F5` glow/dim states · `--electric-wash #EAF1FF` tinted fills
- Radii 14/9. No gradients anywhere. No shadows except focus rings.

## Type
- Display: **Archivo** variable, `font-variation-settings: "wdth" 70–82`, weight 700–800, UPPERCASE, tight leading (0.94–1.04). Hero at wdth 70; section h2 at 78.
- Body: **Manrope** 400/600, 1.0625rem/1.65.
- Data voice: **IBM Plex Mono** — route codes, prices, board rows, checkpoint labels (uppercase mono microcopy is the brand's boarding-pass voice; slopscan's EYEBROW warn is accepted as this deliberate system).

## Motion vocabulary (3 families, GSAP + Lenis via components/Director.tsx)
1. **entrance-reveal** — yPercent/opacity from-tweens, power3.out, 0.5–0.7s, stagger 60–80ms (hero words, cards, pass).
2. **scroll-scrub** — SVG path dash-draw tied to section progress, scrub 0.5 (prep line, s4 margin line, hero plane taxi).
3. **pinned-stage** — ONE instance only: `.s3` night-cargo peak (300vh desktop / 180vh mobile). Do not add a second pinned scene.
- Reduced motion: `html.no-fx`, zero tweens, no pin; all content statically visible. Every new animated element must be visible with JS disabled (use from-tweens, never CSS-hidden states).

## Section-opening patterns (vary them; no eyebrow-kicker-on-every-section)
- s1: type-led departure board · s2: display h2 + intro paragraph · s3: centered display inside dark stage · s4: margin-line offset head · s5: oversized display + form. New sections must pick a different opening than both neighbours.

## Layout signatures
- The electric flight path is the grid break — it crosses section boundaries; content alternates around it.
- Dark (`--ink`) appears ONLY inside the s3 peak and the footer. The page base is always paper.
- **Backdrop (site-wide, added 2026-08-17 by user decision):** four fixed z-index:-1 layers behind everything — diagonal wash (electric-wash→paper→#eef0ea), two blurred drifting blobs (brand blue at 13–40% alpha, 28/34s alternate loops), 22px dot grid at 5.5% ink, and 7 rising paw prints at 3–8% opacity (components/Backdrop.tsx). Light sections are transparent so it shows through; s3 and the footer stay solid ink over it. Cards/tables stay solid `--card` white. Reduced motion: paws hidden, blobs frozen. This supersedes the earlier "no paw iconography" ban for the backdrop only; content-level paw icons remain off-limits.
- Mobile ≤640px: hero swaps to `.flightpath-mobile` (right-edge geometry); prep steps go single-column left-rail; nightmap city labels bump to 26px svg units.

## Project ban additions
- No pet photography/pastel warmth; illustration is line-work SVG only, monochrome + electric.
- No fabricated testimonials or invented stats. Proof = real corridor prices from lib/routes.ts and the honest-comparison table.
- No second dark section, no second pinned scene, no additional hue.

## Editing protocol
Reuse Director.tsx patterns for any new animation (register inside the existing matchMedia block, respect `reduce`). After any edit: `node <auteur>/scripts/slopscan.mjs app components` (0 fails), re-shoot affected viewports at 390/1440, check the s3 pin still replays scrolling up.
