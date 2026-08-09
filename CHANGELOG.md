# CHANGELOG

Record of what changed and when. Update after every work session, before stopping.

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