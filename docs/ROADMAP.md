# ROADMAP — Where we are and what's next

> The goal is one page that turns solar-installation prospects into booked calls. Rules live in `agency-website-brief.md`. Status lives here.

## Plan at a glance

1. **Phase 1 — Ship v1.** Build the landing page from the brief and get it live on GitHub Pages. No reference sites needed. This is the storefront that books calls *now*.
2. **Phase 2 — Beautify.** After v1 is up, bring in the 3 reference sites to level up the design (layout/spacing/feel). Refresh v1, don't rebuild it.
3. **Phase 3 — Extend.** Any future feature (testimonials, new sections, blog-lite, etc.) slots in via the "adding something new" pattern below — no redesign required.

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
| 10 | Mobile pass — single column, full-width CTA, no overflow at iPhone width | ⬜ | Do NOT alter desktop during this pass. |
| 11 | GitHub Pages deploy + pre-launch checklist | ⬜ | See `docs/architecture/DEPLOYMENT.md`. |

**Exit criteria for Phase 1:** fully live on GitHub Pages, all 8 blocks working, "Book a free call" everywhere, placeholders replaced if provided, mobile clean at 390px.

## Phase 2 — Reference beautification (after v1 is live)

1. Owner drops the **3 reference sites**.
2. We extract layout/spacing/feel (borrow, don't copy) and compare against `docs/brand/DESIGN-SYSTEM.md`.
3. Record a new ADR for any token/layout change (e.g. `ADR-0004-design-refresh`).
4. Apply changes block-by-block; re-run the desktop → mobile check.
5. Launch the refresh, update `CHANGELOG.md`.

> Rule: Phase 2 changes **style only**. Structure, copy, and CTA rules stay put.

## Phase 3 — Adding a future feature (the pattern)

Any new capability slots in without redesigning the page. Use this checklist every time:

1. Create a **new ADR** (why we're adding it) in `docs/decisions/`.
2. Updating **PRD** scope + acceptance criteria in `prd.md`.
3. **Add it as a new Phase 3 row below** so status is tracked.
4. If it needs copy → update `docs/content/PAGE-COPY.md`.
5. Implement in the component map (`docs/architecture/PROJECT-STRUCTURE.md`), reusing data file + tokens.
6. Re-run deploy + pre-launch checks; log in `CHANGELOG.md`.

### Candidate future features (idea held, add via pattern)
| Feature | Why | Fit with current structure |
|---------|-----|---------------------------|
| **Testimonials row** in Proof | Real client reviews will arrive | Reserved slot already in Proof component |
| **Case-study expansion** | Deeper proof | New block via pattern above |
| **Blog / resources** for SEO | More leads over time | Would become a 9th block or internal route (needs new ADR) |
| **Analytics** | Know what works | This is an external script — is an ADR only if it touches design |

## Blocked on (right now)

- Nothing is blocking Phase 1. References are Phase 2 and do not block building.

## Where to look when moving

- Heading into a build step → `docs/architecture/PROJECT-STRUCTURE.md` + `docs/content/PAGE-COPY.md`.
- Design questions → `prd.md` + `docs/brand/`.
- Before launching → `docs/architecture/DEPLOYMENT.md` + pre-launch checklist in the brief.