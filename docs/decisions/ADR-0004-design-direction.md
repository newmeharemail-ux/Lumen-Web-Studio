# ADR-0004 — Visual direction: dark, warm, bold-editorial

- **Date:** 2026-08-08
- **Status:** Accepted (applied to v1 build)

## Context
The owner rejected the initial light, neutral v1 as "nonsense" and wanted something genuinely beautiful. They then specified a blend of three vibes: **dark & modern**, **warm & friendly**, and **bold & editorial** (no skill file exists to defer to — direction was chosen directly).

## Decision
Rebuild the visual system around a **near-black warm canvas** with **mint contrast**, oversized editorial type, and friendly rounded cards:

| Token | Value |
|-------|-------|
| Background | warm near-black `#0B0A08` |
| Surfaces | warm dark `#14120D` / `#1B1813` (cards, modals) |
| Text (ink) | warm off-white `#F2EFE9`; muted `#B6B0A3`; faint `#6F6A5F` |
| Accent | unchanged — `#ADEBB3` (buttons/highlights only) |
| Borders | white at ~9% (`rgba(242,239,233,0.09)`) |
| Radii | friendly `rounded-2xl` cards, `rounded-full` buttons |
| Type | Inter 600/700, tight tracking, large sizes (up to `7xl`), numbered editorial section markers (`01–04`) |
| Texture | soft mint radial glows behind Hero / Final CTA; browser-chrome frames on Proof screenshots |

## Rationale
- Dark = premium studio feel; warm greys keep it friendly rather than cold/techy; big type + numbered sections deliver the editorial boldness the owner wants.
- The brief's hard rules are preserved: one accent (buttons/highlights only), one font (Inter), 8 blocks, "Book a free call" wording, proof-before-testimonials.

## Consequences
- Nothing about structure, copy, CTA rules, or the component map changes — this is a **style-only** layer (`index.css` tokens + section classes).
- The reference-site redesign (Phase 2) refines this direction further; any new token/layout shift gets its own ADR.
- `Docs/brand/DESIGN-SYSTEM.md` updated to reflect these rules for future work.