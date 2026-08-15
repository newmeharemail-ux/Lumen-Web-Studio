# ROADMAP — Where we are and what's next

> The goal is one page that turns solar-installation prospects into booked calls. Rules live in `agency-website-brief.md`. Status lives here.

## Recent work (2026-08-15) — Agent-readiness pass
- **Custom domain live**: `CNAME` (`lumensweb.com`) + DNS verified (A → GitHub Pages IPs, `www` → `<user>.github.io`). Canonical URLs now use `https://lumensweb.com/`.
- **`robots.txt`** (`site/public/`): allow-all for search; AI search/chat agents allowed (GPTBot, OAI-SearchBot, ChatGPT-User, Claude-Web, ClaudeBot, PerplexityBot); AI training/mining blocked (Google-Extended, anthropic-ai, CCBot, Amazonbot, Bytespider, cohere-ai); `Content-Signal: ai-train=no, search=yes, ai-input=yes`; `Sitemap:` reference.
- **`sitemap.xml`** (`site/public/`): single canonical URL, referenced from robots.txt.
- **WebMCP** (`site/src/lib/webmcp.js` + `main.jsx`): optional `book_free_call` tool exposed via `navigator.modelContext`; feature-detected, no-op elsewhere.
- **Agent Skills discovery** (`site/public/.well-known/agent-skills/`): real `lumen-booking` skill artifact (SKILL.md) + `index.json` (RFC v0.2.0) with sha256 digest. Gives Link headers an honest target if proxying is ever enabled.
- **Blocked/deferred documented** in `DEPLOYMENT.md`: Link headers + Markdown-for-Agents (GitHub Pages can't set headers; proxy declined), DNS-AID (zone on Cloudflare DNS but no `_agents` endpoints), API catalog/OAuth/auth.md/MCP card (N/A — no APIs, deliberately not invented).
- Full detail in `CHANGELOG.md`. No ADR needed (no accent/font/CTA-wording/8-block changes).

## Recent work (2026-08-13) — Conversion & trust pass, recs 1–10
- Recs 1–5 **applied**: Proof → "Real builds. Not mockups." + result lines + lightbox; Hero micro-trust + "visitors" headline + above-the-fold H1; floating-pill header; Final CTA risk-reversal/low-stakes; mobile bottom CTA bar.
- Recs 6–8 **applied**: Services verified at spec (consistent icons/copy — no change), Process steps sharpened (speed + control language), About gained the renewable-energy "why" paragraph.
- Rec 9 already in place (Phase 3 technique pass) — no change.
- Rec 10 **SEO/metadata** → OG + Twitter Card tags in `index.html` (`og-image.png` in `public/`); **analytics → Calendly-only** (no script; bookings read from Calendly dashboard). Mobile-friction + service-area line already in place.
- Full detail in `CHANGELOG.md`. No ADR needed (no accent/font/CTA-wording/8-block changes).

## Plan at a glance

1. **Phase 1 — Ship v1.** Build the landing page from the brief and get it live on GitHub Pages. No reference sites needed. This is the storefront that books calls *now*.
2. **Phase 2 — Beautify.** After v1 is up, bring in the 3 reference sites to level up the design (layout/spacing/feel). Refresh v1, don't rebuild it.
3. **Phase 3 — Sauce (premium technique).** Run the six-move refinement pass from `agency-landing-page-implement-sauce.md` (whitespace, colour audit, glass/gradient consistency, typography, subtle motion, imagery flags) on the Phase 2 design. Technique only — no new colors/copy/sections.
4. **Phase 4 — Extend.** Any future feature (testimonials, new sections, blog-lite, etc.) slots in via the "adding something new" pattern below — no redesign required.

---

## Phase 1 — Build & ship v1 (current)

| # | Step | Status | Notes |
|---|------|--------|-------|
| 1 | Scaffold React + Vite + Tailwind, single page | ✅ | `site/` workspace, all 8 blocks in `site/src/sections/`. |
| 2 | Hero (real headline from `docs/content/PAGE-COPY.md`) | ✅ | Outcome-first headline, one CTA. |
| 3 | Services (3 cards) | ✅ | Plain-language offer, one benefit line per card. |
| 4 | Proof (Ecogreen screenshots grid, testimonial slot reserved) | ✅ | Grid + empty testimonials array ready for later. |
| 5 | Process (3 numbered steps) | ✅ | Book call → We build → Go live. |
| 6 | About (human, short, honest) | ✅ | Photo placeholder side + text side. |
| 7 | Final CTA + contact (email/phone placeholders) | ✅ | Repeat the button, email+phone backup. |
| 8 | Footer | ✅ | Quiet, text-only. Contact = placeholders until real ones are provided. |
| 9 | Polish pass (unify spacing, buttons, one font/one accent, generous line-height) | ⬜ Next | Desktop only. |
| 10 | Mobile pass — single column, full-width CTA, no overflow at iPhone width | ✅ | Desktop untouched. |
| 11 | GitHub Pages deploy + pre-launch checklist | ⬜ | See `docs/architecture/DEPLOYMENT.md`. |

**Exit criteria for Phase 1:** fully live on GitHub Pages, all 8 blocks working, "Book a free call" everywhere, placeholders replaced if provided, mobile clean at 390px.

# Phase 2 — Reference beautification (after v1 is live)
1. Reference brief delivered → `agency-landing-page-design-upgrade.md` (3 reference sites distilled to one spec).
2. We extract layout/spacing/feel (borrow, don't copy) and compare against `docs/design/DESIGN-SYSTEM.md`.
3. Record a new ADR for any token/layout change (e.g. `ADR-0005-design-refresh`).
4. Apply changes block-by-block; re-run the desktop → mobile check.
5. Launch the refresh, update `CHANGELOG.md`.

**Status (2026-08-10):** applied. Glass navbar bar, hero canvas (glows + dot texture), global ambient blobs, card lifts, structured footer. Palette lightened (dark charcoal, not near-black) per owner. Mobile pass done (single column, full-width CTAs, no overflow at 390px). Pending: ADR-0005 only if further token changes surface. Desktop-first; copy/CTA untouched.

> Rule: Phase 2 changes **style only**. Structure, copy, and CTA rules stay put.

## Phase 3 — The "sauce" technique pass (refine the Phase 2 design)

Brief: `agency-landing-page-implement-sauce.md` (six premium moves, one-pass version included). Applied on the page **as it exists post-Phase 2** — don't rebuild, don't wait for new references.

| # | Move | What it means | Status |
|---|------|---------------|--------|
| 1 | Generous whitespace | Increase padding between/within sections where tight; hero headline + CTA get extra air | ✅ |
| 2 | Colour discipline | Audit only — day's palette stays accent `#ADEBB3` + neutrals; flag stray hues, don't fix silently | ✅ |
| 3 | Glass & gradients | Consistency check — same blur/opacity everywhere; glows read as ambient light, never loud wallpaper | ✅ |
| 4 | Modern typography | One sans-serif (Inter), body ~1.6 line-height, H1 bold + clearly dominant, consistent scale | ✅ |
| 5 | Subtle animation | Fade + slight slide-in on scroll per section; hover lift on cards; smooth scrolling; short, easy transitions, `prefers-reduced-motion` respected | ✅ |
| 6 | Real imagery | Flag spots where a stock icon/placeholder should become a real photo (no licensing yet — flag only); icons stay one set/stroke/size | ✅ |

**Status (2026-08-10):** applied — one-pass version of `agency-landing-page-implement-sauce.md`. Whitespace raised (112–144px sections, airier hero/CTA), palette audited clean, navbar/pill blur unified to 12px, H1 made bold anchor, `Reveal.jsx` scroll fade + card lift added, hero arrow stroke normalized. Follow-ups flagged, not chased: About `L` monogram box is the real-photo slot (owner portrait); icons are one family/stroke, sized uniformly.

> Rule: Phase 3 changes **technique only**. No new colors, no copy rewrites, no new sections/components, no over-animation.

## Phase 4 — Extend (adding a future feature)

Any new capability slots in without redesigning the page. This is now **Track F** in `docs/CHANGE-RUNBOOK.md` (small spec → ADR → PRD → copy → component → verify → log). The old 6-step checklist below lives on as the runbook's Feature track.

Candidate future features:

| Feature | Why | Fit with current structure |
|---------|-----|---------------------------|
| **Testimonials row** in Proof | Real client reviews will arrive | Reserved slot already in Proof component |
| **Case-study expansion** | Deeper proof | New block via Track F (needs ADR, 8-block rule) |
| **Blog / resources** for SEO | More leads over time | 9th block or internal route (needs new ADR) |
| **Analytics** | Know what works | External script — ADR only if it touches design |

## Blocked on (right now)

- Phase 3 (the "sauce" move) is **ready and waiting** on owner go-ahead — brief: `agency-landing-page-implement-sauce.md`. Nothing else is blocking.

## Where to look when moving

- Making any change → `docs/CHANGE-RUNBOOK.md` (the track, then the small spec).
- Heading into a build step → `docs/architecture/PROJECT-STRUCTURE.md` + `docs/content/PAGE-COPY.md`.
- Design questions → `prd.md` + `docs/design/`.
- Before launching → `docs/architecture/DEPLOYMENT.md` + pre-launch checklist in the brief.