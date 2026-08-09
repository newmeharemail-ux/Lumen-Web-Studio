# ADR-0001 — Stack: React + Vite + Tailwind, static single page

- **Date:** 2026-08-08
- **Status:** Accepted

## Context
The brief demands a single landing page: no routing, no backend, no database, no CMS — deployable to free GitHub Pages. Future work includes a design revamp driven by 3 reference sites, so maintainability and easy restyling matter as much as simplicity.

## Decision
- **React 18 + Vite** for the app shell — one static page, components per section.
- **Tailwind CSS** for styling — design tokens in one place (accent `#ADEBB3`, Inter), rapid consistent restyling.
- **No router, no state library, no backend, no CMS.**
- Build output is pure static files (Vite → `dist/`) served by GitHub Pages.

## Consequences
- A build step is required (`npm run build`) before deployment — handled by a GitHub Actions workflow (see `docs/architecture/DEPLOYMENT.md`).
- Copy must live in a single data file so text edits never require touching components.
- Base path must be set for GitHub Pages (see deployment doc) — Vite `base: './'` or repo-name base.