# PROJECT-STRUCTURE.md — React app layout

> Status: **implemented.** The app lives in `site/` (built 2026-08-08, v1 working). This doc is the map — keeps in sync with any change.

## One-page mental model
`site/index.html` → `site/src/main.jsx` mounts `App` → `App` renders the 8 sections in order → every section reads its copy from `site/src/data/content.js`. No routing.

## File tree (actual)

```
site/                            # the app (Vite root)
  package.json                   # scripts: dev / build / preview
  vite.config.js                 # base './' (GitHub Pages-safe), react + tailwind plugins
  index.html                     # Vite entry, <title>, favicon, Google Fonts (Inter)
  .gitignore
  public/
    favicon.svg                  # letter "L" on dark, in accent #ADEBB3
  dist/                          # build output (git-ignored) → deploy this
  src/
    main.jsx                     # React root, imports index.css, mounts <App/>
    index.css                    # Tailwind v4: tokens + base + .container-site / .btn-primary helpers
    data/
      content.js                 # SINGLE SOURCE of all copy + contact placeholders
    assets/                      # Ecogreen screenshots (copied proof-1/2/3.png)
    sections/
      Header.jsx   Hero.jsx   Services.jsx   Proof.jsx
      Process.jsx  About.jsx  FinalCta.jsx  Footer.jsx
```

## Component map — one file, one block (from brief §4)

| Block # | Component | Props passed (from `content.js`) |
|---------|-----------|------------------------------|
| 1 | `Header` | brand.name, global.cta |
| 2 | `Hero` | hero (headlineBefore + highlight + subheadline), global.cta |
| 3 | `Services` | services (3 cards: icon/title/benefit) |
| 4 | `Proof` | proof.screenshots (3) + proof.testimonials (empty array) |
| 5 | `Process` | process.steps (3) |
| 6 | `About` | about.heading + paragraphs (photo placeholder in component) |
| 7 | `FinalCta` | finalCta.headline/subheading, contact (email/phone), global.cta |
| 8 | `Footer` | brand.name, contact (email/phone/serviceArea), global.cta |

## Why this shape

- **One data file** → editing page text = editing `content.js` only; components never change.
- **One component per block** → the mobile pass and the reference-site revamp touch isolated files.
- **Proof holds a testimonials slot** (empty array by default) → reviews can slot in without redesign (ADR/brief requirement).
- **Tokens in Tailwind's `@theme`** (`#ADEBB3`, Inter) in one place (`docs/design/DESIGN-TOKENS.md` → `index.css`).
- **Buttons are CSS classes** (`.btn-primary`, `.btn-primary-sm`) so the CTA looks consistent everywhere.