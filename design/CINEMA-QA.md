# CINEMA-QA — TailFares "The Journey" (revamp/ink-electric, 2026-08-14)

| Check | Verdict | Evidence |
|---|---|---|
| Storyboard: exactly one peak (S3, intensity 9, ~50% depth) | PASS | design/STORYBOARD.md arc table |
| Adjacent scenes differ in layout + motion family | PASS | arc table; 3 motion families total |
| Commit-sheet: 7 fields, non-default | PASS | design/COMMIT-SHEET.md |
| Style gate: user approval | PASS | approved with carried note (mobile path) |
| Carried note resolved: mobile path geometry | PASS | bp390-stop00 — right-edge path, clear of nav/text, plane in frame |
| slopscan on app/ + components/ | PASS | 0 fails, 3 warns (mono-label voice accepted per DESIGN.md; em-dash copy density inherited, noted) |
| Production build | PASS | next build clean, 14 pages |
| Desktop journey reviewed (1440, 7 stops) | PASS | design/shots-live/bp1440-stop00–06 |
| Tablet journey (768) | PASS | shots present, spot-checked |
| Mobile journey reviewed (390, 7 stops) | PASS | bp390 stops; city-label size fixed to 26px svg units |
| S3 arc/plane sync | PASS | dotted markup pattern removed so GSAP dash-draw owns the arc; arc+plane share one scrub window |
| S4 line fragment leaking into S3 | PASS | s4-line top offset -130px → 0 |
| Reduced-motion cut watchable end-to-end | PASS | rm probe: no-fx=true, pinned=false, h1 visible; reduced-motion-s3.png |
| No-JS readability | PASS | all markup server-rendered; animations are from-tweens/JS-set dash only |
| Console errors | PASS | none on load (dev) |
| Secondary pages restyled (routes/guides/pass) | PASS | shots-route/bp1440-stop00; S5 pass frame |
| FPS at DPR2 on production build (motionqa) | NOT RUN | dev-machine pass deferred; scenes are transform/opacity + 2 SVG dash tweens, one drop-shadow filter on a single path |

Residual notes:
- motionqa deferred — run `node <auteur>/scripts/motionqa.mjs` against a production serve before merging to master if jank is suspected.
- Browser-pane live scrub was verified via headless stops; a human hand-scroll on the Vercel preview is the last taste check before merge.
