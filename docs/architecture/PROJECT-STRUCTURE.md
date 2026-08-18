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
    og-image.png                 # share image (no hashing — stable URL) for Open Graph / Twitter cards
    robots.txt                   # crawler rules: AI search allowed, AI training disallowed + Content-Signal
    sitemap.xml                  # single canonical URL (https://lumensweb.com/), referenced by robots.txt
    .well-known/agent-skills/
      index.json                 # Agent Skills discovery index (RFC v0.2.0) → one skill: lumen-booking
      lumen-booking/SKILL.md     # skill artifact: how agents help visitors book the free call
  dist/                          # build output (git-ignored) → deploy this
  src/
    main.jsx                     # React root, imports index.css, mounts <App/>, registers WebMCP tools
    index.css                    # Tailwind v4: tokens + base + .container-site / .btn-primary helpers
    lib/
      webmcp.js                  # optional WebMCP tool (book_free_call → Calendly); feature-detected, no-op elsewhere
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
| 1 | `Header` | brand.name, global.cta — floating glass pill (`fixed`, inset) |
| 2 | `Hero` | hero (headlineBefore + highlight + suffix, subheadline, microTrust), global.cta |
| 3 | `Services` | services (3 cards: icon/title/benefit) |
| 4 | `Proof` | proof.screenshots (3, each with label + result line) + proof.testimonials (empty array); cards clickable → lightbox modal (React state, no deps) |
| 5 | `Process` | process.steps (3) |
| 6 | `About` | about.heading + paragraphs (photo placeholder in component) |
| 7 | `FinalCta` | finalCta.headline/subheading/lowStakes/riskReversal, contact (email/phone), global.cta |
| 8 | `Footer` | brand.name, contact (email/phone/serviceArea), global.cta |
| — | `App` | renders a mobile-only fixed bottom CTA bar (`sm:hidden`) with global.cta |

## Why this shape

- **One data file** → editing page text = editing `content.js` only; components never change.
- **One component per block** → the mobile pass and the reference-site revamp touch isolated files.
- **Proof holds a testimonials slot** (empty `testimonials`; placeholder cards shown until real reviews exist) → reviews can slot in without redesign (ADR/brief requirement). Screenshot cards open a **lightbox modal** (no live URL — assets are local).
- **Tokens in Tailwind's `@theme`** (`#ADEBB3`, Inter) in one place (`docs/design/DESIGN-TOKENS.md` → `index.css`).
- **Buttons are CSS classes** (`.btn-primary`, `.btn-primary-sm`) so the CTA looks consistent everywhere.

## Cloudflare edge layer (`cloudflare/`)

Agent-discovery surfaces that GitHub Pages cannot serve live as a Cloudflare
Worker in front of the origin (see `cloudflare/README.md` + `DEPLOYMENT.md`).

```
cloudflare/
  worker.js            # Worker: Link headers, markdown negotiation, /.well-known/api-catalog,
                       # MCP Streamable HTTP server (/mcp) + server card, WebMCP catalogue, /health
  site.md              # markdown representation of the page (env.SITE_MARKDOWN text-blob binding)
  wrangler.toml        # name/main/compatibility_date, routes (lumensweb.com/*), text_blobs
  test.mjs             # node test.mjs — 31 checks against the worker logic, no Cloudflare runtime
  README.md            # deploy + DNS-AID records + DNSSEC + verification commands
```