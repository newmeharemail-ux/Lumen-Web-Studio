# Lumen Web Studio — Product Requirements Document (PRD)

- **Version:** 0.3 (draft)
- **Date:** 2026-08-10
- **Status:** Draft — refines the source brief (`agency-website-brief.md`), the reference-site design upgrade brief (`agency-landing-page-design-upgrade.md`) and the Phase 3 technique brief (`agency-landing-page-implement-sauce.md`); the briefs win on any conflict unless an ADR overrides.
- **Where this feeds:** design → build (scaffold happens only when the owner says so).

---

## 1. Overview

A single-page landing site for **Lumen Web Studio** (freelance web studio, niche: **solar installation companies**). It is the studio's storefront and "proof." The page's entire job is to make a prospect trust the studio and **book a free call.**

Reference docs: `docs/content/PAGE-COPY.md` (copy), `docs/design/` (visuals — design system, tokens, patterns, quality bar), `agency-landing-page-design-upgrade.md` (the Phase 2 visual spec `docs/design/` distills into buildable rules), `agency-landing-page-implement-sauce.md` (the Phase 3 technique brief — six premium moves applied to the Phase 2 result), `docs/brand/BRAND.md` (voice), `docs/decisions/` (locked choices), `docs/architecture/` (code/deploy plan).

## 2. Goals & non-goals

**Goals**
1. Visitor can answer the 5 questions (what / who-for / trust / process / next step) within seconds of arriving.
2. Prospect books a free call from Header, Hero, or Final CTA.
3. Page looks clean, premium, trustworthy — like a high-end creative studio.
4. Visual language lands the Phase 2 upgrade: **premium + immersive** (floating glass navbar, ambient glows/texture, calm structured footer) so the page never feels like empty white space — while keeping copy, palette, and CTA rules untouched (per `agency-landing-page-design-upgrade.md`).
5. Page reads as **premium, not amateur**, by landing the Phase 3 "sauce" pass: generous whitespace, a disciplined palette (accent `#ADEBB3` + neutrals only), consistent glass/gradient atmosphere, one modern sans-serif with a clear type scale, gentle motion that supports the CTA, and real-imagery flags where stock icons overstay (per `agency-landing-page-implement-sauce.md`).
6. Page is fast, static, and cheap to host (GitHub Pages), so the studio can update it easily.

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
>
> **Visual treatment per block:** `docs/design/DESIGN-SYSTEM.md` (section-by-section) + `docs/design/UI-PATTERNS.md` (component recipes). Functional requirements below; pixels live in the design docs.

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

Visual system = `docs/design/` (Design system · Tokens · UI patterns · Quality bar), driven by the reference-upgrade spec `agency-landing-page-design-upgrade.md`. Non-negotiable returns subtracted here:

- **Tokens from `docs/design/DESIGN-TOKENS.md`:** accent `#ADEBB3` (buttons + highlights only), Inter, one max-width (~1160px), generous spacing/line-height, uniform radius, distinct primary button.
- **Visual language (Phase 2 intent):** full-width glass navbar bar; hero canvas filled with radial glow + dot texture; ambient blurred blobs bleeding between sections; services = even icon+title+line cards; Proof = 3-card browser-frame grid with light hover lift; calm structured footer with repeated quiet CTA.
- **Atmosphere stays behind content:** glows/blobs at `z-index` below text, `pointer-events: none`, `aria-hidden="true"`, tuned so headlines and CTAs keep contrast.
- **Guardrails (from `QUALITY-BAR.md`):** body text ≥ 4.5:1 (secondary ≥ 3:1), no gray-on-gray, glass navbar has a solid fallback where `backdrop-filter` is unsupported, hover micro-interactions 150–300ms, `prefers-reduced-motion` respected, texture via CSS gradients/SVG not heavy media.
- Favicon: "L" in accent.
- Desktop first, then a **separate mobile pass**: single column, full-width CTA, no overflow at ~390px; desktop frozen during that pass.

## 9. Technical requirements

- **Stack (ADR-0001):** React 18 + Vite + Tailwind, static single page, no router/backend/CMS.
- **Deploy (DEPLOYMENT.md):** build to `dist/`, GitHub Pages via GitHub Actions (or `gh-pages` branch).
- Single data file (`src/data/content.js`) so copy edits never touch other code.
- Images relative to homepage location; careful with Vite `base` path on Pages.
- Fast by default: one font, limited assets, no heavy libs.
- Atmosphere is CSS/SVG only (gradients, blurred shapes, small SVGs) — never heavy images or video for background texture.

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

### Phase 2 acceptance — design refresh (per `agency-landing-page-design-upgrade.md`)
- [ ] Header → full-width glass bar (`bg-bg/85` + blur + bottom hairline), brand + CTA in a 72px row; no floating pill.
- [ ] Hero → full canvas: low-opacity radial accent glow + continuous atmosphere (blobs blurring across section edges), never a flat backdrop.
- [ ] Services → even icon + title + single-line cards; Proof → 3-card browser-frame grid with light hover lift (1.02–1.03).
- [ ] Footer → calm structured columns (brand · nav · contact · repeated quiet CTA), no wall of text.
- [ ] Contrast passes wherever atmosphere sits behind text (Hero, Final CTA); mobile degrades gracefully, no overflow.
- [ ] Copy, accent `#ADEBB3`, Inter, and every `Book a free call` CTA are byte-identical to before — refresh is style only.

### Phase 3 acceptance — the "sauce" technique pass (per `agency-landing-page-implement-sauce.md`)
- [ ] Whitespace: no section or card feels crowded; hero headline + CTA have clear air around them; padding grows where tight, never shrinks.
- [ ] Colour audit: only the locked base + accent `#ADEBB3` + neutrals render anywhere (icons, hovers, borders); any stray hue is flagged, not silently recolored. All glows/gradients stay within tonal variants of the accent.
- [ ] Glass/gradient consistency: every blur/glass surface shares the same radius + opacity range; glows read as ambient light, never a loud background.
- [ ] Typography: one sans-serif (Inter) site-wide, body line-height ~1.6, H1 clearly the biggest/boldest anchor, consistent scale through H2/H3/body.
- [ ] Motion: fade + slight slide-in on scroll for each section; hover lift on Services/Proof cards; smooth in-page scroll; transitions short (150–300ms), `prefers-reduced-motion` respected, motion never delays or distracts from the CTA.
- [ ] Imagery: real-photo spots flagged (About, Proof) with a note of the needed image; icons that remain are one set, one stroke weight, one size.
- [ ] Boundaries held: no new colors, no copy rewrites, no new sections/components, no over-animation. Stop at the natural end (Ship Discipline) — leftover niggles become follow-ups, not an endless loop.

## 11. Milestones (from `docs/ROADMAP.md`)

| M | Milestone | Exit |
|---|-----------|------|
| 1 | Review reference sites + lock design direction | ✅ Reference spec delivered: `agency-landing-page-design-upgrade.md` → distilled into `docs/design/` (2026-08-10) |
| 2 | Scaffold Vite + React + Tailwind, 8-section skeleton | ✅ v1 shell builds |
| 3 | Build blocks in order: Hero→Services→Proof→Process→About→Final CTA→Footer | ✅ Full page, real copy/placeholders |
| 4 | Polish pass (desktop): spacing, buttons, one accent | ⬜ Consistent, premium desktop |
| 5 | Mobile pass (iPhone-width check) | ⬜ Single column, no overflow |
| 6 | Copy/links finalize + replace placeholders | ⬜ Pre-launch checklist done, Pages live |
| 7 | Phase 2 refresh — glass navbar, atmosphere, cards, footer | ✅ | Applied (2026-08-10); style only, copy/CTA untouched |
| 8 | Phase 3 "sauce" pass — whitespace, colour audit, glass consistency, typography, motion, imagery flags | ✅ | Applied (2026-08-10), one-pass version of `agency-landing-page-implement-sauce.md`; technique only, copy/CTA untouched |

## 12. Future additions (design-in only, no build yet)

- **Testimonial row** below Proof screenshots (structured in Proof component now).
- **Phase 2 design refresh** — reference-site spec already delivered (`agency-landing-page-design-upgrade.md`, distilled into `docs/design/`). **Applied 2026-08-10** — style only, copy/CTA untouched.
- **Phase 3 "sauce" technique pass** — brief delivered (`agency-landing-page-implement-sauce.md`). **Applied 2026-08-10** — six moves on the Phase 2 result; no new colors/copy/sections. Follow-up flagged: About `L` monogram → real owner portrait once provided.
- **Custom domain** once live → CNAME + DNS in DEPLOYMENT.md.

## 13. Open questions (tracked → ADRs when locked)

1. Real contact email / phone / name / photo (owner to provide before launch).
2. Service area wording for the Footer.
3. Project Home for `github.io/<repo>` name (affects Vite `base`).