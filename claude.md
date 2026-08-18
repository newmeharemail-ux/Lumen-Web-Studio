# Lumen Web Studio — Project Map (read me first)

> One clean landing page that makes a solar-installation prospect trust the agency and **book a free call**. That is the whole job. Everything in this repo serves that.

## Rules of the road (from the brief, non-negotiable)

- **One page, 8 blocks.** Header · Hero · Services · Proof · Process · About · Final CTA · Footer. No extra sections. No routing, no backend, no database, no login, no CMS.
- **Sell the outcome, not "websites."** Headline is about the client's business, not about us.
- **CTA wording is fixed:** `Book a free call` — identical everywhere (Header, Hero, Final CTA). Booking link only (Calendly-style), never a contact form.
- **One accent color** `#ADEBB3` for buttons/highlights only. One font (Inter). Everything else black / white / neutrals.
- **Proof before testimonials.** Demo builds (Ecogreen screenshots) are the proof for now. Testimonial row slots in later — the Proof section must be structured so it can be added without redesign.
- **Mobile is a separate polish pass.** Desktop wins first, then a single-column, full-width-CTA mobile pass. Never change desktop during the mobile pass.

## Where everything lives

| Path | What it is | Read when |
|------|-----------|-----------|
| `agency-website-brief.md` | The source brief — the spec. If a doc below disagrees with this, the brief wins unless an ADR says otherwise. | Before any build task |
| `agency-landing-page-design-upgrade.md` | The reference-site design upgrade brief (3 sites → one spec: glass navbar, ambient atmosphere, card treatments, footer). Phase 2's input. | Styling or judging the visual upgrade |
| `agency-landing-page-implement-sauce.md` | The Phase 3 "sauce" technique brief — six premium moves (whitespace, colour audit, glass/gradient consistency, typography, subtle animation, imagery flags). One-pass version included. | The refinement pass once Phase 2 is in |
| `prd.md` | Product Requirements Document — goals, scope, per-block specs, acceptance criteria. The "what to build" contract. | Planning/design work; keep in sync with the docs below |
| `docs/CHANGE-RUNBOOK.md` | The "how we change things" runbook — Track C (copy), D (design), F (feature), V (next version). Small spec first, then build. | Any change to the site, or planning the next version |
| `claude.md` | This file — routing and rules. | Start of every session |
| `docs/brand/` | Brand voice — name, positioning, tone. Voice only. | Writing copy |
| `docs/design/` | The visual system — design system, tokens, UI patterns, quality bar. | Styling anything, adding visuals |
| `docs/content/` | The single source of copy for every section, plus CTA rules and placeholders to fill in. | Editing page text |
| `docs/decisions/` | ADRs — locked decisions and the reasoning ("why we chose X"). | Asking "why is it like this?" |
| `docs/architecture/` | How the code is structured and how we deploy to GitHub Pages. | Scaffolding or deploying |
| `docs/ROADMAP.md` | Build phases, current status, pre-launch checklist. | Figuring out what's next |
| `CHANGELOG.md` | Record of what changed and when. | After finishing any change |
| `Demo-Build-Ecogreen/` | The 3 real proof screenshots used in the Proof section. | Building the Proof section |
| `site/` | The actual React + Vite + Tailwind app (single page). `npm run build` → `dist/`. | Every build/code task |
| `cloudflare/` | Cloudflare Worker edge layer (Link headers, markdown negotiation, API catalog, MCP server + card, DNS-AID records). Deploy to activate; not yet live. | Agent-readiness / anything blocked on GitHub Pages headers |

> **Build status:** Phase 1 v1 built + Phase 2 design upgrade + Phase 3 "sauce" technique pass applied (whitespace, colour audit, glass consistency, typography, scroll-reveal motion, imagery flags — copy/CTA untouched). Mobile passes done. Custom domain live (`lumensweb.com`). Agent-readiness pass done: `robots.txt` + `sitemap.xml` + WebMCP tool + agent-skills index (`lumen-booking`). Cloudflare edge layer **prepared** in `cloudflare/` (worker: Link headers, markdown negotiation, API catalog, MCP server + card; DNS-AID records) — activate by proxying DNS + `npx wrangler deploy`; status in `docs/architecture/DEPLOYMENT.md`. Follow-up flagged: real owner portrait in About. Copy in `site/src/data/content.js`; `docs/architecture/PROJECT-STRUCTURE.md` is the map; `site/` is the territory.

## Where to look first (today)

1. `docs/decisions/ADR-0002-brand-facts.md` — locked identity facts.
2. `docs/brand/BRAND.md` — the voice every word must match.
3. `docs/design/DESIGN-SYSTEM.md` — the visual system (plus the upgrade brief `agency-landing-page-design-upgrade.md`).
4. `agency-landing-page-implement-sauce.md` — the Phase 3 "sauce" pass spec (the next thing to run).
5. `docs/content/PAGE-COPY.md` — the actual headline/copy to use (draft placeholders marked clearly).
6. `docs/CHANGE-RUNBOOK.md` — how we make any change (small spec first, then build).
7. `docs/ROADMAP.md` — the phase we're in.

## End-of-session habit

Every time work closes out, update `CHANGELOG.md` **before we stop.**