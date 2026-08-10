# CHANGELOG

Record of what changed and when. Update after every work session, before stopping.

## 2026-08-11 — Owner details + new demo shots wired in; polish pass
- **Real contact data** in `site/src/data/content.js` (placeholders gone): email `newmeharemail@gmail.com`, phone `+92 303 4721384` (dialable `+923034721384`, new `phoneDisplay` field for readable text in Footer + Final CTA), About name → `Abdulrehman Saghir`. The only remaining placeholder line was `serviceArea` — now `Serving solar installers worldwide` (owner is remote/international; footer can drop the line entirely if preferred).
- **New demo builds** from `Demo-Build-Ecogreen/` (Hero/Services/Gallery sections) copied over `site/src/assets/proof-1/2/3.png`; Proof labels + alts updated to match.
- **About headshot:** owner portrait `images/Headshot.jpeg` → `site/src/assets/headshot.jpeg`; the `L` monogram box in `About.jsx` replaced with the real photo (4:5, object-cover).
- **Proof cards a little bigger:** image ratio `4/3 → 7/6`, grid gap `gap-6 → gap-8`.
- **Final CTA centering:** headline + subheadline given `mx-auto` so the sub line is centered under the button (was left-shifted via max-width box).
- **Docs synced:** `docs/content/PAGE-COPY.md` — real email/phone, headshot noted, demo filenames listed, service-area note + alternatives; `npm run build` clean.

## 2026-08-10 — Phase 3 "sauce" brief wired into routing + PRD (docs only, no code yet)
- Owner delivered **`agency-landing-page-implement-sauce.md`** — the six-move premium-technique pass (whitespace, colour audit, glass/gradient consistency, typography, subtle animation, imagery flags; one-pass version + ship discipline). Applied on the post-Phase 2 page; **not implemented — awaiting go-ahead.**
- **`claude.md`** — new routing row for the sauce brief; "Build status" updated (Phase 1 ✅ + Phase 2 ✅, Phase 3 delivered/awaiting go-ahead); "Where to look first" now points to the sauce brief as next.
- **`docs/ROADMAP.md`** — Plan at a glance renumbered (Phase 3 = Sauce, Phase 4 = Extend); new **Phase 3 table** (six moves with ⬜ status, brief link, "technique only" rule); old "Phase 3 — future feature" section renumbered to Phase 4; "Blocked on" now says Phase 3 waits on go-ahead.
- **`prd.md`** — v0.2 → **v0.3**; status + reference docs list the sauce brief; new goal #5 (premium-rather-than-amateur via the six moves); **Phase 3 acceptance checklist** added; Milestones refreshed (M7 Phase 2 ✅ applied, new M8 = sauce pass ⬜); `§12` marks Phase 2 applied + lists Phase 3 as next.
- **`README.md`** + **`docs/README.md`** — stale "code not scaffolded yet" notes replaced with current status; both route to the sauce brief.
- No code changed — docs/routing only.

## 2026-08-10 — Phase 3 "sauce" pass applied (six premium technique moves)
- Owner go-ahead given; ran the one-pass version of `agency-landing-page-implement-sauce.md`. Technique only — no new colors, no copy rewrites, no new sections. `npm run build` clean (CSS 30.6 kB, JS 212.5 kB).
  - **1 · Whitespace:** `section-wrap` padding up to `py-28 sm:py-36`; Hero `pt-28 pb-36 sm:pt-36 sm:pb-44`; card padding `p-8 → sm:p-10`; grid top margins `sm:mt-20`; About/Final CTA gaps widened.
  - **2 · Colour audit:** clean. Only locked base/accent/neutrals on the page. Fixed one stray: `::selection` now uses `#171410` (was legacy `#0b0a08`). No new hues introduced — audit only, as the brief demands.
  - **3 · Glass/gradient consistency:** hero eyebrow pill blur unified to navbar (12px). Ambient glows already tonal variants of accent; card gradient treatment identical across Services/Proof/Process.
  - **4 · Typography:** H1 hero bumped to `font-bold` (clearest anchor on the page); section headlines + Final CTA `leading-[1.1]`; Inter scale unchanged.
  - **5 · Motion:** new `site/src/components/Reveal.jsx` — one-time fade + 16px rise (700ms) per section with ~80ms card stagger via `IntersectionObserver`; refuses to hide when `prefers-reduced-motion` matches. Hover lift retained; `scroll-behavior: smooth` in place.
  - **6 · Imagery:** About `L` monogram box => the real-photo slot (owner portrait, flagged not inserted — no licensing yet). Hero arrow stroke normalized to 1.8 to match the services icon set (one family, one stroke, uniform size).
- Docs synced: `DESIGN-TOKENS.md` (spacing, H1 weight, scroll-reveal + motion rows), `DESIGN-SYSTEM.md` (global rule #5: motion supports, never distracts), `QUALITY-BAR.md` (scroll-reveal row), `ROADMAP.md` Phase 3 moves marked ✅, `prd.md` M8 ✅ + §12. Follow-up flagged in ROADMAP/prd: owner photo for About.

## 2026-08-10 — Design docs restructure + reference-site upgrade spec
- Owner delivered the reference-site design brief: **`agency-landing-page-design-upgrade.md`** (3 reference sites → one visual spec for Phase 2: glass navbar, ambient atmosphere, card treatments, calm footer; style-only, copy/palette untouched).
- **New `docs/design/` folder** (visual system's new home, built from the upgrade brief + skill-informed rules):
  - `README.md` — index + how it relates to `docs/brand/`, `docs/content/`, and the upgrade brief.
  - `DESIGN-SYSTEM.md` — overall feel, global rules, and the section-by-section treatment for all 8 blocks.
  - `DESIGN-TOKENS.md` — exact values: colors, typography, spacing, radius, effects (glass/blur/glow opacities), motion, breakpoints, z-layering.
  - `UI-PATTERNS.md` — component recipes (glass navbar, ambient layer, CTA, services/proof cards, footer) with do/don't.
  - `QUALITY-BAR.md` — contrast, mobile degradation, performance, reduced-motion, and a pre-delivery checklist.
- **Routing updated** to one source of truth: `docs/brand/` is now **voice only** (`BRAND.md`); `docs/brand/DESIGN-SYSTEM.md` removed and merged into `docs/design/`. Updated `claude.md`, `docs/README.md`, `prd.md`, `docs/ROADMAP.md` (Phase 2 + "reference brief delivered"), `ADR-0004` consequence note, `PROJECT-STRUCTURE.md` token note.
- No code changed — docs only. Phase 1 steps 9–11 still ahead.

### Same session — `prd.md` updated to v0.2 (design upgrade integrated, ui-ux skill-informed)
- Bumped to **v0.2** (2026-08-10); PRD now refines both the source brief and `agency-landing-page-design-upgrade.md`.
- Added goal #4 (premium + immersive visual language) and a Phase 2 acceptance checklist (glass navbar, atmosphere, cards, footer; copy/CTA byte-identical).
- `§8 Design & responsiveness` rewritten to route through `docs/design/` with skill-informed guardrails (contrast floors, atmosphere behind content, glass fallback, reduced-motion, CSS/SVG-only texture); `§9` notes CSS/SVG-only background texture.
- `§11 Milestones` refreshed to current status: M1–M3 ✅ (spec delivered + v1 built), M4–M6 ⬜, new M7 = Phase 2 refresh; `§12` future additions updated (refresh spec delivered, applies after launch).

## 2026-08-10 — Phase 2 visual refresh applied (design to the next level)
- Went desktop-first through the reference build order in `site/src/`. Copy, accent `#ADEBB3`, Inter, and all `Book a free call` CTAs untouched. `npm run build` clean.
  - **Header** — sticky floating **glass pill** (`.glass`: surface at 72% + `backdrop-filter: blur(16px)`, 1px low-opacity border, soft shadow, 18px radius, inset from edges, solid-surface fallback).
  - **Hero** — full canvas: corner radial glow layers, faint dot-grid texture (`.texture-dots` at 4%), and two blurred designerly artifacts (mini browser window + compact UI card), all `aria-hidden`/`pointer-events-none`.
  - **Global atmosphere** — App.jsx root decorative layer (4 blurred blobs in accent variations bleeding across sections), `overflow-x-clip` to prevent mobile scrollbar; content overlays it.
  - **Services / Proof** — `card-lift` (gentle -translate-y on hover + tuned mint shadow deepen); Proof keeps browser-frame cards.
  - **Footer** — rebuilt dark/quiet 3-column structure (brand · sections nav · contact) with repeated `link-quiet` `Book a free call`; replaced leftover light "paper" hardcoded greys.
  - **Nav anchors** — sections got `id`s + `scroll-mt-28` for the footer's in-page nav (no routing, single page).
  - **Accessibility/motion** — `prefers-reduced-motion` reduces animations/transitions; decorative layers non-interactive.
- Docs kept in sync: `docs/ROADMAP.md` Phase 2 marked applied (mobile re-check + possible ADR-0005 still pending).

### Mobile pass — Phase 1 step 10 ✅ (desktop untouched)
- Removed the hero highlight's `whitespace-nowrap` below 640px (`sm:whitespace-nowrap`) so "booked installs." can never overflow at 375–390px; desktop ≥640px renders identically.
- Hero headline base size nudged to `2.4rem` (only <640px) for a tighter above-the-fold fit; `sm:text-6xl lg:text-7xl` unchanged.
- Confirmed below `sm:`, all grids already collapse to a single column; Hero/Final CTA buttons are full-width; atmosphere layers are clipped (`overflow-hidden` + root `overflow-x-clip`) so no horizontal scrollbar. `npm run build` clean.

### Iteration — atmosphere amplified (owner: "design is not changed much")
- Owner feedback: the first-pass effects (blobs ~5–13%, texture 4%) were too subtle on dark. Pushed them up while keeping accent `#ADEBB3` + copy untouched:
  - **Global blobs** (`App.jsx`): alphas up to **0.16–0.24**, bigger (600–780px), tighter blur (70–95px), added a top-left mint blob so the aura reads clearly across sections.
  - **Hero**: center aura → **0.30** alpha (blur 4px), corner glows → 0.20–0.22; dot texture → **7%**; design artifacts now crisp (no blur) at 90% opacity with brighter borders.
  - **Glass navbar**: blur 20px, border → `rgba(242,239,233,0.16)`, inset top highlight, deeper floating shadow; bg 78%.
  - **Cards** (Services/Proof/Process): `surface-2 → surface` gradient, deeper base shadow, stronger mint hover glow; Process ghost numbers bumped to `text-7xl` at 30% accent.
  - **CTA glow** hardened (`.btn`); Final CTA aura → 0.28; About panel glow → 0.24.
- `docs/design/DESIGN-TOKENS.md` effect table synced to the new values. `npm run build` clean.

### Iteration — owner feedback round 2 (navbar, brightness, artifacts)
- **Navbar reverted** to the classic flat sticky **glass bar** (full-width, `bg-bg/85` + `blur(12px)` + bottom hairline, 72px row) — owner: "the nav bar looked better before." Floating-pill `.glass` utility removed.
- **Less dark:** palette lifted from near-black to warm charcoal — `bg #0B0A08→#171410`, `surface→#201B14`, `surface-2→#2A241B`, `ink-soft→#C8C1B3`, `ink-faint→#8B8476`, `line→rgba(242,239,233,0.12)`.
- **Artifacts everywhere:** new reusable `site/src/components/Deco.jsx` (BrowserFrame, UiCard, CodeLines, StatPill). Hero refactored onto it; Services, Proof, and Process each got 1–2 fragments tucked at section edges (`relative overflow-hidden`, `aria-hidden`, hidden below `lg`).
- Docs synced: `DESIGN-TOKENS.md`, `DESIGN-SYSTEM.md`, `UI-PATTERNS.md`, `prd.md`, `QUALITY-BAR.md`, `ROADMAP.md`, `PROJECT-STRUCTURE.md`, plus an owner-revision note on `ADR-0004`. `npm run build` clean.

### Iteration — polish round 3 (artifacts removed, kept navbar + brighter palette)
- **Artifacts reverted** (owner: "undo the artifact change"). Removed `components/Deco.jsx` and all BrowserFrame/UiCard/CodeLines/StatPill placements from Hero, Services, Proof, and Process; sections back to clean `section-wrap scroll-mt-28`. Kept: the full-width glass navbar **bar** and the **lighter, less-dark** palette.
- **Mobile/consistency polish:**
  - Header now safe at 320px and up: brand `text-base` + tighter gap on mobile, CTA `px-4` with `whitespace-nowrap`, container `px-4 sm:px-6` — all `sm:`-overridden so desktop is unchanged.
  - Process card markup re-indented (was mangled in an earlier edit).
  - About monogram panel now uses the same `surface-2 → surface` gradient as Services/Proof/Process cards for a unified card language.
- Docs cleaned of artifact references (`ROADMAP.md`, `DESIGN-SYSTEM.md`, `DESIGN-TOKENS.md`, `UI-PATTERNS.md`, `PROJECT-STRUCTURE.md`, `prd.md`). `npm run build` clean — CSS 28.2 kB, JS 210 kB (Deco removal shaved ~2 kB).

### Iteration — polish round 3b (hero artifacts kept)
- Owner: "don't remove the hero ones." Re-added the two **Hero-only** floating fragments (mini browser window + UI card, 90% opacity, `border-white/20`, `hidden` below `lg`, `aria-hidden`). Services/Proof/Process stay artifact-free. Docs + `DESIGN-SYSTEM.md`/`DESIGN-TOKENS.md` updated to scope accents to the Hero. `npm run build` clean.

## 2026-08-08
- **Initial project documentation** — built the repo map and docs structure described in the brief. No code written yet.
  - `claude.md` — routing/map file for the repo.
  - `docs/README.md` + `docs/ROADMAP.md` — purpose of docs, build phases, current status (at: review 3 reference sites).
  - `docs/brand/` — `BRAND.md` (voice, positioning) and `DESIGN-SYSTEM.md` (tokens, buttons, typography, mobile rules).
  - `docs/content/PAGE-COPY.md` — the single copy source for all 8 blocks, with `[PLACEHOLDER]` flags for name/photo/email/phone/service area.
  - `docs/decisions/` — ADRs `0001` (React + Vite + Tailwind), `0002` (brand facts: Lumen Web Studio, #ADEBB3, Inter, Calendly link, solar niche), `0003` (keep "live in a week" headline).
  - `docs/architecture/` — `PROJECT-STRUCTURE.md` (planned src layout, component → block map) and `DEPLOYMENT.md` (GitHub Pages via GitHub Actions).
  - `README.md` — public one-liner for the repo.
- **`prd.md`** — Product Requirements Document (goals, scope, per-block specs, acceptance criteria, milestones). Wired into `claude.md` routing.
- **`docs/ROADMAP.md`** — reorganized into 3 phases: Phase 1 ship v1 (build now, no refs needed), Phase 2 reference beautification (after launch), Phase 3 future-feature pattern (ADR → PRD → copy → component, no redesign).

## 2026-08-08 — Build v1 of the landing site (Phase 1, steps 1–8)
- **New `site/` folder** — React + Vite + Tailwind v4 app scaffolding the single landing page:
  - `package.json` (React 19, Vite 7, Tailwind 4, `@vitejs/plugin-react`, `@tailwindcss/vite`), `vite.config.js` with `base: './'` for GitHub Pages, `index.html` (Inter font + favicon), `public/favicon.svg` ("L" in accent on dark).
  - `src/index.css` — design tokens (`#ADEBB3` accent, ink, paper), `.container-site`, `.btn-primary`, `.btn-primary-sm`.
  - `src/data/content.js` — single copy source (hero, services, proof with reserved testimonials `[]`, process, about, final CTA, contact placeholders).
  - `src/sections/` — all 8 blocks as components: Header, Hero, Services, Proof, Process, About, FinalCta, Footer.
  - Ecogreen screenshots copied into `src/assets/` and wired into Proof.
- **Verified:** `npm install` (0 vulnerabilities), `npm run build` clean, `vite preview` serves page + JS (200).
- Docs updated to match: `claude.md` routing row for `site/`, `PROJECT-STRUCTURE.md` marked implemented with real tree/component map, `DEPLOYMENT.md` paths, `ROADMAP.md` statuses (scaffold + blocks ✅).

## 2026-08-08 — v1 design v2: dark · warm · bold-editorial (ADR-0004)
- Owner rejected the neutral light design as "nonsense" → chose the dark + warm + bold-editorial blend.
- Rewrote the visual system in `site/src/index.css` — near-black `#0B0A08` warm canvas, warm off-white text, mint accent only on buttons/highlights, pill CTAs with soft mint glow, numbered editorial sections, hairline `line` borders.
- Rebuilt all 8 sections to match: `Header` (mint-dot logo), `Hero` (giant type + mint-highlight + arrow CTA + radial glow), `Services` (index badges + hover cards), `Proof` (browser-chrome frames + reserved testimonial slot), `Process` (ghost numbers + connectors), `About` (monogram 4:5 panel), `FinalCta` (glow + big pill CTA), `Footer` (quiet `link-quiet`).
- Extended `content.js` with section indexes/eyebrows (copy unchanged, still the single source); `services`/`proof`/`process`/`about` now objects.
- `npm run build` clean; CSS grew 21.7 kB (4.7 kB gzip) — no other weight added.
- Docs: **`ADR-0004-design-direction.md`** (style-only change; structure/copy/CTA rules untouched), `DESIGN-SYSTEM.md` rewritten to the dark system, `decisions/README.md` index updated.