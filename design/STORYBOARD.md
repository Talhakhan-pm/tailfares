# STORYBOARD — TailFares "The Journey"

## Film meta
- **Product:** TailFares — Pakistan-to-international pet relocation. Handles vet prep, permits, IATA crate, cargo booking, customs, door-to-door delivery for expat families moving pets from Karachi/Lahore/Islamabad to UK/USA/UAE/Canada/EU.
- **Audience:** Pakistani expat families relocating abroad; anxious about a live animal in cargo, burned by scam brokers, comparing 2–3 providers on trust.
- **The one feeling:** **Trust through competence** — "these people know every step of the route." Calm, not hype.
- **Peak scene:** Scene 3 "Night cargo" — page inverts white→ink mid-scroll; the electric plane crosses a dark route map Karachi→destination, 300vh pinned.
- **Assets available up front:** Tailfare logo (dog + plane emblem), existing copy/FAQ, corridor data in lib/routes.ts. No photos, no video.
- **Sourced-asset findings:** none needed — the film is type-led + hand-drawn SVG line art (plane, route arc, checkpoint marks). Monochrome editorial style makes generated imagery a liability, not an asset.
- **Assumptions made:** intake derived from REVAMP-PLAN.md + existing site copy. Feeling chosen as "trust" (matches scam-awareness positioning from social strategy). Destination shown in peak = London (flagship corridor). No sound layer.
- **References taken:** recon skipped (palette + story pre-locked by user; reflex table used instead). Mechanic vocabulary from scroll-cinema.md library only.
- **Moodboard read:** n/a — direction fixed: ink editorial monochrome, single electric hue reserved for the journey line. Avoid: pastel pet-industry warmth, paw-print iconography.
- **Style gate verdict:** approved with carried notes (user, 2026-08-14). Carried note 1: mobile flight path must be correctly placed — its own path geometry per breakpoint (≤640px), positioned clear of the nav, plane visible in-frame; not the desktop path squeezed down. Resolve by GATE 2, verify in 390px shots.

## Arc

| # | Scene | Beat | Intensity | layout family | motion family |
|---|-------|------|-----------|---------------|---------------|
| 1 | Departure board | hook | 6 | centred-type | entrance-reveal |
| 2 | Preparation | rising | 4 | split-asymmetric | scroll-scrub |
| 3 | Night cargo | **peak** | 9 | pinned-canvas | pinned-stage |
| 4 | Landing & proof | proof | 5 | editorial-columns | scroll-scrub |
| 5 | Boarding pass | door | 6 | full-bleed-media | entrance-reveal |

Motion families page-wide: entrance-reveal, scroll-scrub, pinned-stage = 3. No two adjacent scenes share layout or motion family.

---

### Scene 1 — Departure board | beat: hook | intensity: 6
- **purpose:** feel: instant competence, airline-grade seriousness / learn: they fly pets from Pakistan to the world, door to door.
- **subject:** typography — a departure-board headline with live-feeling route rows.
- **layout_family / motion_family:** centred-type / entrance-reveal
- **camera:** static, eye-level; oversized type fills the frame.
- **lighting:** paper-flat — warm white #F7F7F5, ink text, zero decoration.
- **motion:** headline words flip in like split-flap departure boards (per-word entrance, 40ms stagger); below, 4 corridor rows (KHI→LHR, KHI→JFK, LHE→DXB, ISB→YYZ) tick in like a departures screen; the electric flight path starts at the plane glyph and exits the bottom of the fold, pulling the eye down. Mono type for route codes.
- **transition_in / out:** cut / the flight path line continues across the boundary into Scene 2 (wipe-mask on the line).
- **scroll_len:** 100vh
- **copy:** H: "Your pet's seat is booked." / sub: "Pakistan to anywhere — vet, permits, cargo, customs, door. One fare, every step handled."
- **media:** type: element / route: hand-drawn SVG (plane glyph + path start) / frame prompt: n/a — type-led / score: none
- **fallback:** static headline + visible route rows + static drawn path. Fully readable, no JS.

### Scene 2 — Preparation | beat: rising | intensity: 4
- **purpose:** feel: every box is ticked before the airport / learn: vet + vaccinations, permits + titer test, IATA crate — TailFares does them in order.
- **subject:** the flight path drawing downward through 3 checkpoint stamps.
- **layout_family / motion_family:** split-asymmetric / scroll-scrub
- **camera:** high-angle overview — the path reads like a route on a planning desk.
- **lighting:** paper-flat, ink line work.
- **motion:** the electric path draws with scroll (stroke-dashoffset scrub); at each checkpoint (Vet & vaccinations → Permits & titer → IATA crate) a circular stamp fills electric and its content card slides in from the opposite side of the path (cards alternate left/right of the line — the asymmetry).
- **transition_in / out:** continuous line from S1 / letterbox squeeze into the peak: white margins collapse as ink floods in.
- **scroll_len:** 250vh (content-paced, not pinned)
- **copy:** H: "Before the airport, everything." / checkpoints: "Vet & vaccinations — rabies, microchip, health certificate" · "Permits & titer test — NAFSA export permit, FAVN blood test, timed right" · "IATA crate — sized, ventilated, airline-approved"
- **media:** type: element / route: hand-drawn SVG (path + stamps) / frame prompt: n/a / score: none
- **fallback:** path fully drawn, all stamps filled, cards static and visible.

### Scene 3 — Night cargo | beat: PEAK | intensity: 9
- **purpose:** feel: awe + reassurance — the leap of faith (your pet in the sky) rendered calm and controlled / learn: live-animal manifest cargo, pressurized temperature-controlled hold, tracked the whole flight.
- **subject:** the electric plane crossing a dark route map, Karachi → London great-circle arc.
- **layout_family / motion_family:** pinned-canvas / pinned-stage
- **camera:** high-angle map view, slowly tracking with the plane.
- **lighting:** dusk→night — the page's ONE dark interior. Ink #111318 floods the viewport; the arc, city marks and plane are the only light (electric #2563EB + soft #93B4F5 glow).
- **motion:** section pins for 300vh. Beat 1: background inverts white→ink (letterbox completes). Beat 2: plane travels the arc, dashed path drawing behind it; KHI and LHR city dots pulse; three fact captions fade in/out sequenced to the plane's progress ("Manifest cargo, never excess baggage" → "Pressurized, temperature-controlled hold" → "Status updates at every handoff"). Beat 3: arc completes, ink lifts, page returns to white as the plane descends toward Scene 4.
- **transition_in / out:** letterbox (ink floods in) / reverse letterbox (white returns as plane lands).
- **scroll_len:** 300vh pinned
- **copy:** H: "The part you're scared of is the part we've done 200 times." / captions as above.
- **media:** type: element / route: hand-drawn SVG (route map dots for cities, great-circle arc, plane glyph) / frame prompt: n/a — geometry drawn in code, glow via CSS filter on the SVG stroke only / score: none
- **fallback:** static night panel: completed arc, plane at destination, all three captions visible. Reduced-motion shows this panel unpinned at 100vh.

### Scene 4 — Landing & proof | beat: proof | intensity: 5
- **purpose:** feel: it ends with a door opening, not a cargo warehouse / learn: customs cleared for you, delivered to your new home; real costs, real timelines, no surprises.
- **subject:** the path descending through the final 2 checkpoints into proof content.
- **layout_family / motion_family:** editorial-columns / scroll-scrub
- **camera:** eye-level, editorial — two-column magazine layout, path runs in the left margin.
- **lighting:** paper-flat, back to warm white.
- **motion:** path draws down the margin through "Customs clearance" and "Home delivery" stamps; in the columns, corridor price/timeline table and 2 short testimonials reveal per-block (30–60ms stagger). Numbers set in mono.
- **transition_in / out:** reverse letterbox from peak / cut.
- **scroll_len:** content
- **copy:** H: "Landed, cleared, delivered." / sub: "Transparent corridor pricing — see the real numbers before you commit." / table pulls live from lib/routes.ts.
- **media:** type: element / route: SVG path + existing corridor data / frame prompt: n/a / score: none
- **fallback:** everything visible statically.

### Scene 5 — Boarding pass | beat: door | intensity: 6
- **purpose:** feel: your pet's journey starts with this form / learn: quote in 24h via the BoardingPass form.
- **subject:** the existing BoardingPass quote form, restyled as an ink-and-electric boarding pass; the flight path terminates by plugging into it.
- **layout_family / motion_family:** full-bleed-media / entrance-reveal
- **camera:** macro — the pass fills the frame like a document on a counter.
- **lighting:** paper-flat with one electric edge (perforation line + barcode in electric).
- **motion:** the path's end draws into the pass's "flight line" field; pass rises 24px + opacity on entry; submit button is the page's strongest electric fill.
- **transition_in / out:** cut / n/a (end).
- **scroll_len:** content
- **copy:** H: "Book the seat." / sub: "Tell us the route and the pet — full quote within 24 hours, WhatsApp or email."
- **media:** type: element / route: existing component restyled / frame prompt: n/a / score: none
- **fallback:** form fully functional, statically visible (it already is — logic untouched).

## Gate 0 checklist
- [x] exactly one scene with intensity ≥8 (Scene 3, at ~50% depth)
- [x] no two adjacent scenes share layout family or motion family
- [x] ≤3 distinct motion families (entrance-reveal, scroll-scrub, pinned-stage)
- [x] every scene has real copy and a fallback
- [x] every media block filled — all type-led / hand-drawn SVG, no generation needed
- [ ] storyboard approved by user (pending — presented with hero mockup)
