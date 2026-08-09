# docs/decisions/ — Architecture Decision Records (ADRs)

## What this folder is for
Every time we **lock a decision** — "why is it like this?" — we record it here as an ADR. They exist so future-you (or a future session) can rebuild or change things without guessing.

## Files

| File | Decision |
|------|----------|
| `ADR-0001-stack.md` | Stack: React + Vite + Tailwind, single static page, no backend. |
| `ADR-0002-brand-facts.md` | Locked identity: name, accent color, font, booking link, niche. |
| `ADR-0003-headline-promise.md` | Keep the "live in a week" claim in the headline. |
| `ADR-0004-design-direction.md` | Visual direction: dark + warm + bold-editorial system (v1 redesign). |

## Rules
- **Brief wins over all docs.** An ADR is the only thing allowed to override it — and then the brief's intent still stands as the reason.
- Any future locked choice (mobile approach, testimonial layout, new section) gets its own `ADR-000N-*.md` numbered file.
- Keep them short, plain-English, dated.