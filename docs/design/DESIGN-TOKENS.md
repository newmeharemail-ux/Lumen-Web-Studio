# DESIGN-TOKENS.md — the exact values

> Every token maps to Tailwind's `@theme` in `site/src/index.css`. Change a value here first, then in code. Tune the accent once via the CSS variable and every gradient/glow follows.

## Color

| Token | Value | Rules |
|-------|-------|-------|
| `--color-bg` | warm dark charcoal `#171410` | Page background. Dark — not black. "Less dark" per owner revision. |
| `--color-surface` | `#201b14` | Cards, chrome frames, raised panels. |
| `--color-surface-2` | `#2a241b` | Nested / hover surfaces. |
| `--color-ink` | warm off-white `#F2EFE9` | Headlines + primary text. |
| `--color-ink-soft` | `#C8C1B3` | Secondary text. |
| `--color-ink-faint` | `#8B8476` | Captions, footers, metadata. |
| `--color-accent` | **`#ADEBB3`** = `rgba(173,235,179,…)` | **Buttons + highlights only.** All glows derive from this one variable. |
| `--color-line` | `rgba(242,239,233,0.12)` | Hairlines, card borders, dividers. Never solid grey. |

**Contrast floor:** `ink` on `bg` is comfortable; `ink-soft` is for secondary lines only; `ink-faint` never carries essential info. See `QUALITY-BAR.md`.

## Typography

| Token | Value | Rules |
|-------|-------|-------|
| `--font-sans` | Inter | One family, everywhere. |
| Weights | 400 body · 500 links/labels · 600–700 headings & buttons | No weight below 400 for text. |
| H1 (Hero) | ~`text-7xl`, **bold**, tight tracking | Anchor of the page — clearly the biggest, boldest element. |
| Section titles | ~3.4rem, leading 1.1 | Editorial scale. |
| Small labels | uppercase, tracked, muted — one per section max | Numbered section markers `01–04` in mint badges. |
| Body | leading ~1.625–1.75 | Airy, generous. |

## Spacing & layout

| Token | Value |
|-------|-------|
| `--space-*` rhythm | 4/8 base; section padding generous (112–144px desktop, 64px mobile) |
| `--max-w-content` | 1160px for **every** section — no per-section widths |
| Card gap | even, consistent within a row |
| Section breaks | soft transitions (atmosphere bleeds), not hard bars |

## Radius

| Token | Value |
|-------|-------|
| Cards | `rounded-2xl` |
| CTAs | `rounded-full` (pill) |
| Breadcrumbs/Pills | `rounded-full` |
| Glass navbar | 16–24px |

## Effects

| Effect | Value | Rules |
|--------|-------|-------|
| Navbar | full-width sticky **glass bar** — `bg-bg/85` + `backdrop-filter: blur(12px)` + bottom hairline | 85% opaque bg needs no solid fallback. |
| Radial glow (Hero, Final CTA) | `radial-gradient` from accent at **25–30%** opacity fading to transparent, light blur | A visible aura, never a fill. |
| Ambient blob | accent + 1–2 tonal variants, `filter: blur(70–95px)`, opacity **~0.16–0.24** | Reads as ambient light, not shapes; `pointer-events: none`. |
| Background texture | dot grid at **~7%** opacity behind hero content | So canvas is never flat-empty. |
| Hero accents | two floating fragments (mini browser window + UI card, `surface/70`, border-white/20), top corners, hidden below `lg` | **Hero only.** `aria-hidden`, `pointer-events: none`. |
| Shadow | soft, low-contrast, warm-tinted | `shadow` on cards + glass; depth not harshness. |

## Motion

| Token | Value |
|-------|-------|
| Hover (cards, links) | 150–300ms, smooth ease-out |
| Card hover lift | scale 1.02–1.03 + shadow deepen — no jarring animation |
| Scroll reveal | fade + 16px slide-up, 700ms ease-out, stagger ~80ms per card — refuses on `prefers-reduced-motion` |
| Smooth scrolling | `scroll-behavior: smooth` on `html` (in-page anchors) |
| Reduced motion | respect `prefers-reduced-motion`: freeze glows/lifts/transitions, keep static contrast |

## Breakpoints (inspect at these)

| Width | Behavior |
|-------|----------|
| 1440px | Design reference — desktop canvas |
| 1024px | Tablet/desktop crossover |
| 768px | Collapse point → single column |
| 390px | Mobile baseline — no horizontal overflow, full-width CTAs |

## z-index layering

| Layer | Contents |
|-------|----------|
| 0 | page background (flat) |
| 1 | ambient atmosphere (glows, blobs, texture) |
| 2 | content / cards |
| 3 | navbar (full-width glass bar) |
| (never above 3) | — anything interactive stays in reach |

Layers 0–1 are decorative: `pointer-events: none`, `aria-hidden="true"`.