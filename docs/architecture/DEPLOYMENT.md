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
- [ ] Custom domain connects later — add a CNAME file + DNS record when ready.

## Classic alternative (no Actions, optional)
`npm run build` locally, commit `dist/` to a `gh-pages` branch via `gh-pages` package (`npm i -D gh-pages`), then `npm run deploy`. Keep this in `package.json` scripts.