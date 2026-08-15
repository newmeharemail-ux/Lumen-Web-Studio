# DEPLOYMENT.md — Publishing to GitHub Pages

Deploy target: **GitHub Pages** (owner confirmed; the site is a single static page built by Vite).

> The app lives in **`site/`**. All npm commands below run with `site/` as the working directory. Everything we publish is the `site/dist/` output.

## Prereqs (once we scaffold)
- The repo is initialized on GitHub and pages are enabled.
- Node/npm available (Node 24, npm 11 confirmed).

## Flow (Vite + GitHub Actions)

1. **Init repo** in the project root, push to GitHub.
2. **Vite `base: './'` already set** in `site/vite.config.js` — assets resolve from relative paths, so the site works on `https://<user>.github.io/<repo>/` project pages.
3. **Commit a workflow** in `.github/workflows/deploy.yml` that on push to `main` runs (from `site/`):
   - `npm ci`
   - `npm run build` → produces `site/dist/`
   - Deploy `dist/` via `actions/upload-pages-artifact` + `actions/deploy-pages` (or push `dist` to a `gh-pages` branch — the classic approach).
4. **Enable Pages** in GitHub repo Settings → Pages → source **GitHub Actions**.
5. Site is live at `https://<user>.github.io/<repo>/`.

## Post-deploy checks (brief §10)
- [ ] All 8 blocks render in order.
- [ ] `Book a free call` works from Header, Hero, Final CTA (+ Footer) → Calendly.
- [ ] Email/phone links point to real values (replace `site/src/data/content.js` placeholders first).
- [ ] Images load (screenshots are bundled by Vite, favicon via `./favicon.svg`).
- [ ] Mobile: single column, no overflow at iPhone width.
- [ ] Custom domain is live — `CNAME` file (`lumensweb.com`) + DNS (A records → GitHub Pages IPs / `www` CNAME → `<user>.github.io`). Verify `https://lumensweb.com/` returns 200.
- [ ] Agent readiness — `https://lumensweb.com/robots.txt` and `sitemap.xml` return 200 as plain text/xml; sitemap referenced from robots.txt; canonical URLs use `https://lumensweb.com/`.

## Agent-readiness status

| Item | Status | Notes |
|------|--------|-------|
| `robots.txt` + AI rules + Content Signals | ✅ Live | `site/public/robots.txt` — AI search allowed, AI training disallowed. |
| `sitemap.xml` | ✅ Live | `site/public/sitemap.xml` — single canonical URL. |
| WebMCP tool | ✅ Live | `site/src/lib/webmcp.js` — `book_free_call` exposed; feature-detected. |
| Link headers (RFC 8288) | ⬜ Blocked | GitHub Pages cannot set custom response headers. Requires Cloudflare Pages / Netlify / edge worker. |
| Markdown for Agents | ⬜ Blocked | `Accept: text/markdown` negotiation needs server logic. Same host upgrade. |
| DNS-AID records | ⬜ Deferred | Needs DNS control + DNSSEC on a registered domain. Revisit at DNS/registrar setup. |
| API catalog / OAuth-OIDC / protected-resource / auth.md / MCP card | ⬜ N/A | No APIs exist — publishing fabricated discovery metadata would be wrong. |

## Classic alternative (no Actions, optional)

## Classic alternative (no Actions, optional)
`npm run build` locally, commit `dist/` to a `gh-pages` branch via `gh-pages` package (`npm i -D gh-pages`), then `npm run deploy`. Keep this in `package.json` scripts.