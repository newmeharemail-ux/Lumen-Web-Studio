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
| Agent Skills index | ✅ Live | `site/public/.well-known/agent-skills/` — one real skill (`lumen-booking`, sha256 digest in `index.json`). |
| Link headers (RFC 8288) | ⬜ Prepared | `cloudflare/worker.js` injects `Link` headers (api-catalog / describedby / webmcp). Deploy the worker + proxy DNS to activate. |
| Markdown for Agents | ⬜ Prepared | Worker serves `Accept: text/markdown` → `text/markdown` + `x-markdown-tokens`. Same deployment. |
| API catalog (RFC 9727) | ⬜ Prepared | Worker serves `/.well-known/api-catalog` (`application/linkset+json`) → real `/mcp` endpoint. |
| MCP Server Card (SEP-2127) | ⬜ Prepared | Worker serves `/.well-known/mcp/server-card.json` + a real MCP Streamable HTTP server at `/mcp` (`book_free_call`). |
| DNS-AID records | ⬜ Prepared | Add `_index._agents.lumensweb.com` SVCB record + enable DNSSEC in Cloudflare DNS (records documented below). |
| OAuth/OIDC, protected-resource, auth.md | ⬜ N/A | No protected APIs, no auth. `/mcp` is public. Publishing auth metadata would be fabricated. |

**How to activate:** the whole row of ⬜ Prepared items ships as one thing — the
Cloudflare Worker in `cloudflare/` (see `cloudflare/README.md`). Two prerequisite
steps, then deploy:

1. **Proxy the DNS records** — in Cloudflare, set `lumensweb.com` (and `www`) records
   to proxied (orange-cloud ON). Worker routes only fire for proxied records.
2. **Deploy the worker** — `npx wrangler deploy` from `cloudflare/` (after `npx wrangler login`).
   Routes: `lumensweb.com/*`, `www.lumensweb.com/*`.
3. **DNS-AID records** — Cloudflare DNS → Add record → type SVCB:
   ```
   _index._agents.lumensweb.com  SVCB  1  lumensweb.com  alpn="mcp,h2" port=443 well-known="/.well-known/mcp/server-card.json" mandatory=alpn,port
   ```
   Then DNS → Settings → **DNSSEC → Enable** and add the generated **DS** record at
   the registrar. (`_a2a._agents` intentionally not published — no A2A endpoint exists.)

Local verification of the worker logic (no Cloudflare runtime needed):
`node cloudflare/test.mjs` (31 checks). Live verification commands and the
isitagentready re-scan are in `cloudflare/README.md`.

## Classic alternative (no Actions, optional)

## Classic alternative (no Actions, optional)
`npm run build` locally, commit `dist/` to a `gh-pages` branch via `gh-pages` package (`npm i -D gh-pages`), then `npm run deploy`. Keep this in `package.json` scripts.