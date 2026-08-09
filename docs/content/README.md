# docs/content/ — The words on the page

This folder holds **the single source of copy** for every section of the site. Editing page text happens here first; code just renders it.

## Files

| File | What it is |
|------|-----------|
| `PAGE-COPY.md` | Every section's copy: headline, subheads, cards, CTA, footer. Placeholders are flagged clearly. |

## Rules
- **CTA wording is fixed:** `Book a free call`, identical everywhere. No variants, no abbreviations.
- All booking links point to the Calendly link (ADR-0002). Never a contact form.
- Copy must follow the voice in `docs/brand/BRAND.md`.
- When scaffolding, copy should live in **one data file** (see `docs/architecture/PROJECT-STRUCTURE.md`) so text edits never touch component code.