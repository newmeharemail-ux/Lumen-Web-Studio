# CHANGE-RUNBOOK — How we change things

> Every change to this site is a **small spec first, then a build**. This runbook maps the three kinds of change onto the files we already own — no new tooling, no new ceremony. Pick a track, write the tiny spec, get the go-ahead, build, verify, log.

## Ground rules (all tracks)

- **End every change the same way:** `npm run build` clean → docs in sync → `CHANGELOG.md` updated.
- **No new dependencies, no new tooling.** Route through files that already exist.
- **A change that breaks a locked decision needs an ADR first.** Locked = accent `#ADEBB3`, font Inter, CTA `Book a free call`, the "live in a week" promise, the one-page-8-blocks order. See `docs/decisions/`.
- **Desktop wins, then a separate mobile re-check** (~390px, full-width CTAs, no overflow). Never change desktop during the mobile pass.
- **Docs can change as stuff changes** — the point of the sync step is that docs and code never disagree.

## Which track is this?

| If you want to… | Track |
|-----------------|-------|
| Change words, links, contacts, images | **C — Copy** |
| Change appearance: tokens, layout, atmosphere | **D — Design** |
| Add capability: testimonials, a new block, a component | **F — Feature** |
| Ship the next whole version | **V — Next version** |

---

## Track C — Change copy

The lightest track. Words, links, contact details, images that are content. This is the day-to-day 90% of changes.

**Spec (small):** one short paragraph of what/why, or a marked draft edit in `docs/content/PAGE-COPY.md`. No ADR unless the change conflicts with a locked decision (CTA wording, "live in a week").

```
Change: <what text/thing changes>
Where: <Header / Hero / Services / Proof / Process / About / Final CTA / Footer>
Why: <one line>
```

**Build:**
1. Edit the copy in `site/src/data/content.js` (this is what ships).
2. Mirror the change into `docs/content/PAGE-COPY.md` so the doc stays the source of truth.

**Verify:**
- Every "Book a free call" still says exactly `Book a free call` and links to Calendly.
- No `[PLACEHOLDER]` left on the page.
- `npm run build` clean; spot-check changed block on desktop + 390px.

**Log:** one line in `CHANGELOG.md`.

---

## Track D — Change design

Appearance only — tokens, layout, atmosphere, component styling. Copy is frozen unless the spec says otherwise.

**Spec (short brief):** cite which `docs/design/` docs the change touches, what's frozen, and whether it changes locked tokens.

```
Change: <e.g. make Service cards less tall / add a section glow>
Touches: <DESIGN-TOKENS / DESIGN-SYSTEM / UI-PATTERNS / QUALITY-BAR>
Frozen: <copy, accent #ADEBB3, Inter, CTAs — unless overridden here>
Token change? <yes/no — "yes" means an ADR first>
```

**Build:**
1. Apply in `site/src/index.css` (tokens/utilities) and `site/src/sections/` (layout).
2. Sync any value changes into `docs/design/DESIGN-TOKENS.md` / `DESIGN-SYSTEM.md`; update `UI-PATTERNS.md` if a recipe changed.
3. If locked tokens changed → write `ADR-000N-*.md` (record why), per `docs/decisions/`.

**Verify (per `docs/design/QUALITY-BAR.md`):**
- Body contrast ≥ 4.5:1 (secondary ≥ 3:1), no gray-on-gray.
- `prefers-reduced-motion` respected; hover transitions 150–300ms.
- Desktop first, then mobile pass at ~390px (single column, full-width CTA, no overflow).
- Atmosphere sits behind content (`z-index` below text, `pointer-events: none`, `aria-hidden`).

**Log:** one line in `CHANGELOG.md`.

---

## Track F — Add a feature / block

Anything new: testimonials row, a new section, a new component. This formalizes the old Phase 4 pattern. Full spec before building — always.

> Gate: the brief says **one page, 8 blocks, no extras**. Adding a block overrides that rule → it is an ADR-level decision and needs your explicit sign-off.

**Spec (full — a short doc or plain section in this runbook's style):**
1. **ADR-000N** — why we're adding it (`docs/decisions/`).
2. **`prd.md`** — scope + acceptance criteria updated (`§5`, `§10`).
3. **Copy** → `docs/content/PAGE-COPY.md`, then `site/src/data/content.js`.
4. **Component** — new file in `site/src/sections/` or extend an existing one (e.g. Proof's empty `testimonials` slot).
5. **Map** — update `docs/architecture/PROJECT-STRUCTURE.md` (file tree + component table).
6. **Status** — new row in `docs/ROADMAP.md` so progress is tracked.

**Verify:**
- Reuse existing data file + tokens; no new colors/fonts unless ADR'd.
- Full `QUALITY-BAR` pass: contrast, reduced motion, 390px mobile.
- Deploy check per `docs/architecture/DEPLOYMENT.md` (assets resolve, `base './'`).

**Log:** `CHANGELOG.md` — what, why, how.

---

## Track V — Next version (v2 / next site)

A next version is **not a new process** — it's an approved scope running many Track C/D/F specs in a defined order. Build the same files, phase by phase.

**Spec (one scope doc, like the existing phase briefs):** what the version is for, which tracks it owns, the order, and what stays frozen. Each owned change then gets its **own** C/D/F spec and is built + logged individually.

1. Write the v2 scope (goal, in/out, freeze list).
2. Break it into C/D/F specs; order them so copy/design/feature never fight (copy after structure, design after copy, mobile last).
3. Execute each spec through its track above — verify + log per track.
4. Close: final build, `ROADMAP.md` status, `CHANGELOG.md` entry under the version.