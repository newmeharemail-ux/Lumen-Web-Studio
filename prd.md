# Lumen Web Studio — Product Requirements Document (PRD)

- **Version:** 0.1 (draft)
- **Date:** 2026-08-08
- **Status:** Draft — refines the source brief (`agency-website-brief.md`); the brief wins on any conflict unless an ADR overrides.
- **Where this feeds:** design → build (scaffold happens only when the owner says so).

---

## 1. Overview

A single-page landing site for **Lumen Web Studio** (freelance web studio, niche: **solar installation companies**). It is the studio's storefront and "proof." The page's entire job is to make a prospect trust the studio and **book a free call.**

Reference docs: `docs/content/PAGE-COPY.md` (copy), `docs/brand/DESIGN-SYSTEM.md` (visuals), `docs/brand/BRAND.md` (voice), `docs/decisions/` (locked choices), `docs/architecture/` (code/deploy plan).

## 2. Goals & non-goals

**Goals**
1. Visitor can answer the 5 questions (what / who-for / trust / process / next step) within seconds of arriving.
2. Prospect books a free call from Header, Hero, or Final CTA.
3. Page looks clean, premium, trustworthy — like a high-end creative studio.
4. Page is fast, static, and cheap to host (GitHub Pages), so the studio can update it easily.

**Non-goals (do NOT creep into this build)**
- Multiple pages / routing, blog, portfolio page, contact page.
- Login, dashboard, database, CMS, contact forms.
- Invented testimonials or fake social proof.
- Newsletter signup, cookie banners, analytics that slow the page.

## 3. Primary user & {journey}

**Who:** owner or marketing lead of a local **solar installation company**, mid-2026, browsing on a phone or laptop, fed up with a slow/dated website and wondering if a new one pays for itself.

**Silent questions on arrival (map to blocks):**

| Visitor asks | Answered by |
|---|---|
| "What do you do?" | Hero |
| "Is it for businesses like mine?" | Hero subheadline (names the niche) |
| "Can I trust you?" | Proof (deal-closer) |
| "How does it work, what's the catch?" | Process |
| "What do I do next?" | CTA, repeated |

**Happy path:** Prospect lands → reads outcome headline in one glance → scans services → sees 3 real build screenshots → skims the 3-step process → clicks "Book a free call" → books a Calendly slot.

## 4. Success metrics

- **Primary:** Booking rate via the `Book a free call` button (Calendly).
- **Secondary:** engaged scroll to Process/Proof; time on page; mobile no-overflow at 390px.
- **Guardrail:** the page must still be honest — demo builds, not fake reviews.

## 5. Scope

**In scope — 8 blocks, in this order (no extras):**
Header · Hero · Services · Proof · Process · About · Final CTA · Footer.

**Out of scope for v1**, designed in but not built: testimonial row in Proof (real reviews don't exist yet), reference-site redesigns (future polish, ADR'd later).

## 6. Per-block functional requirements

> Copy text lives in `docs/content/PAGE-COPY.md` (all `[PLACEHOLDER]` values flagged). Every CTA = **"Book a free call"** → `https://calendly.com/newmeharemail/30min`. No forms anywhere.

### 1. Header
- Left: wordmark **Lumen Web Studio** (text, one good font).
- Right: single highlight button — **Book a free call** → Calendly.
- Sticky and quiet; the button must always be visible (thumb's reach on mobile).

### 2. Hero
- H1: outcome-first headline [copy in PAGE-COPY.md].
- Subheadline: one line naming niche (solar installation companies) + "live in a week."
- One primary CTA **Book a free call**.
- Big whitespace, nothing else in this block. Premium, calm.

### 3. Services (3 cards)
- Card 1: Website design & build
- Card 2: Get found on Google (SEO)
- Card 3: Ongoing updates & support
- Each card: icon + short title + one benefit-focused line (client outcome, not tech words).

### 4. Proof (the trust-closer)
- 3 real screenshots from `Demo-Build-Ecogreen/` (grid, calm frame, Airbnb feel).
- **Reserved testimonial row** below the grid (empty state now) so real reviews can slot in later *without a redesign*.
- No invented reviews.

### 5. Process (3 numbered steps)
1. Book a free call → 2. We build the site → 3. Go live.
- Reuses low-stakes language: free, no-pressure, 30 minutes.

### 6. About
- Photo placeholder on one side, 3–4 honest sentences on the other.
- Personal, not corporate.

### 7. Final CTA
- Warm headline, one line on what happens next.
- Big primary **Book a free call** → Calendly.
- Backup email + phone (placeholders).
- No form, no database.

### 8. Footer
- Name, email, phone, service area (placeholders), repeat **Book a free call** link.
- Quiet text-only. No graphics, no newsletter.

## 7. Content rules

- **CTA wording fixed:** "Book a free call" — identical everywhere; no variants.
- Voice per `docs/brand/BRAND.md` — plain English, outcome-first, no hype.
- All `[PLACEHOLDER]`s in `PAGE-COPY.md` must be replaced before launch.

## 8. Design & responsiveness

- Tokens from `docs/brand/DESIGN-SYSTEM.md`: accent #ADEBB3 (buttons+highlights), Inter, one max-width (~1120px), generous spacing/line-height, uniform radius, distinct primary button.
- Favicon: "L" in accent.
- Desktop first, then a **separate mobile pass**: single column, full-width CTA, no overflow at ~390px; desktop frozen during that pass.

## 9. Technical requirements

- **Stack (ADR-0001):** React 18 + Vite + Tailwind, static single page, no router/backend/CMS.
- **Deploy (DEPLOYMENT.md):** build to `dist/`, GitHub Pages via GitHub Actions (or `gh-pages` branch).
- Single data file (`src/data/content.js`) so copy edits never touch other code.
- Images relative to homepage location; careful with Vite `base` path on Pages.
- Fast by default: one font, limited assets, no heavy libs.

## 10. Acceptance criteria (v1 "done")

- [ ] All 8 blocks, in order, present.
- [ ] Headline sells the outcome and names solar companies (not "websites").
- [ ] "Book a free call" visible in Header, Hero, Final CTA (+ Footer) — identical text, links to Calendly.
- [ ] Proof shows the 3 real Ecogreen screenshots, with a reserved testimonial slot.
- [ ] Page renders `[PLACEHOLDER]` values replaced (name, photo, email, phone, service area).
- [ ] No form, no backend, no routing.
- [ ] Desktop: unified spacing/buttons/one accent, generous line-height.
- [ ] Mobile: single column, full-width CTA, zero horizontal overflow at ~390px — desktop unchanged.
- [ ] Static build deploys to GitHub Pages (all image/asset links resolve).

## 11. Milestones (from `docs/ROADMAP.md`)

| M | Milestone | Exit |
|---|-----------|------|
| 1 | Review 3 reference sites + lock design direction | Design notes + ADR for any token changes |
| 2 | Scaffold Vite + React + Tailwind, 8-section skeleton | ✅ v1 shell builds (`site/dist/`) joins pages after deploy |
| 3 | Build blocks in order: Hero→Services→Proof→Process→About→Final CTA→Footer | Full page, real copy/placeholders |
| 4 | Polish pass (desktop): spacing, buttons, one accent | Consistent, premium desktop |
| 5 | Mobile pass (iPhone-width check) | Single column, no overflow |
| 6 | Copy/links finalize + replace placeholders | Pre-launch checklist done, Pages live |

## 12. Future additions (design-in only, no build yet)

- **Testimonial row** below Proof screenshots (structured in Proof component now).
- **Reference-site redesign** — after this version is live, the 3 reference sites come in and we raise the design quality per their ADR.
- **Custom domain** once live → CNAME + DNS in DEPLOYMENT.md.

## 13. Open questions (tracked → ADRs when locked)

1. Real contact email / phone / name / photo (owner to provide before launch).
2. Service area wording for the Footer.
3. Project Home for `github.io/<repo>` name (affects Vite `base`).