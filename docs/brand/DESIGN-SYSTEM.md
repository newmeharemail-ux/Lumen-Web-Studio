# DESIGN-SYSTEM.md — Lumen Web Studio visual system

> Feel: dark, modern, warm, and boldly editorial — a high-end creative studio showing its craft (see `docs/decisions/ADR-0004-design-direction.md`). One accent color, one font, generous space. When in doubt, subtract.

## Tokens (mapped to Tailwind `@theme` in `site/src/index.css`)

| Token | Value | Rules |
|-------|-------|-------|
| `bg` | warm near-black `#0B0A08` | Page background (dark theme). |
| `surface` / `surface-2` | `#14120D` / `#1B1813` | Cards, chrome frames, raised panels. |
| `ink` | warm off-white `#F2EFE9` | Headlines + primary text. |
| `ink-soft` / `ink-faint` | `#B6B0A3` / `#6F6A5F` | Secondary text / captions & footers. |
| `accent` | **#ADEBB3** (soft mint) | **Buttons + highlights only.** Never body text, never large fills. |
| `line` | `rgba(242,239,233,0.09)` | Hairlines, card borders, dividers. |
| `font` | **Inter** (sans-serif) | One font. Weights ~400 body, 600–700 headings/buttons. |
| `max-width` | one content width for all sections (1160px) | No section gets its own width. |
| `radius` | `rounded-2xl` cards, `rounded-full` CTAs | Friendly, consistent. |

## Buttons
- **Primary ("Book a free call"):** mint-filled (`#ADEBB3`), dark text, pill-shaped, soft mint glow shadow — must **stand out** everywhere (Header/Hero/Final CTA).
- **Secondary:** quiet text links (`link-quiet`) — muted, hover → mint underline (Footer repeat).
- Same words, same style, every occurrence.

## Type rhythm (bold-editorial)
- H1 (Hero): huge, tight tracking (`~text-7xl`), semibold; the outcome phrase can sit in **accent**.
- Section titles (`headline`): `~3.4rem`, leading `1.08`.
- Editorial markers: numbered mint badges (`01–04`) + uppercase tracked eyebrow labels.
- Body: generous line-height (~1.65), `ink-soft` on dark.
- No decorative fonts, no ALL-CAPS walls — one muted uppercase pill/label per section max.

## Texture & imagery
- Soft mint radial gradients glow behind Hero and Final CTA (subtle, blurred, `rgba(74,235,179,0.16)`) — a highlight, not a fill.
- Proof screenshots sit in **browser-chrome frames** (traffic dots + URL bar) for a calm, credible demo feel.
- About photo placeholder: rounded 4:5 surface card with a mint "L" monogram until a real photo lands.
- Favicon: "L" in accent on dark rounded square (`site/public/favicon.svg`).

## Mobile rules (polish pass only — never during desktop build)
- One column, everything stacks.
- CTA buttons become full-width, within thumb's reach.
- No horizontal overflow at iPhone width (≈390px).
- Desktop layout is frozen once done; the mobile pass only fixes stacking.