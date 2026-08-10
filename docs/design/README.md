# docs/design/ — How we look, and why

This folder is the **single home for Lumen's visual system.** It grew out of `docs/brand/` (which now holds *voice* only) and the reference-site upgrade brief (`agency-landing-page-design-upgrade.md`). If a pixel question comes up, the answer lives here.

> Rule of hierarchy: the brief and ADRs still win. `docs/decisions/ADR-0002` locks the identity, `ADR-0004` locks the dark/editorial direction; anything these pages say must sit inside those walls.

## Files

| File | Answers | Use it when |
|------|---------|-------------|
| `DESIGN-SYSTEM.md` | What does the page *feel* and look like, section by section? | Styling any section, judging a design decision, or onboarding. |
| `DESIGN-TOKENS.md` | What are the exact values? Colors, type, spacing, effects, breakpoints. | Writing CSS / Tailwind `@theme`, adding a new element that must match. |
| `UI-PATTERNS.md` | How do recurring pieces get built (glass navbar bar, ambient glows, cards, footer)? | Implementing or restyling a known component. |
| `QUALITY-BAR.md` | What must hold true before it ships (contrast, mobile, performance, reduced motion)? | The final pass on any section or "is it done?" checks. |

## Relationship to the rest of the repo

- `docs/brand/BRAND.md` owns **what we say and how we sound** (voice). `docs/design/` owns **how it looks.** Copy questions → `docs/brand/`; pixel questions → `docs/design/`.
- The upgrade brief `agency-landing-page-design-upgrade.md` is the **spec for the reference-driven polish (Phase 2).** `DESIGN-SYSTEM.md` is its distilled, buildable form. Structure, copy, and CTA rules stay untouched — this is style only.
- Tokens here map 1:1 to Tailwind's `@theme` in `site/src/index.css`. If a token changes, change it here first, then in code.

## How to use

1. Open `DESIGN-SYSTEM.md` for the overall intent of a section.
2. Pull exact values from `DESIGN-TOKENS.md`.
3. Follow the recipe in `UI-PATTERNS.md` for anything that's a known pattern.
4. Close out against `QUALITY-BAR.md` before calling it done.