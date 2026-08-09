# Agency Website — Build Brief for Claude Code

> Source: Web Agency Code, Module 2 Extra — "Building Your Own Agency Website" Feel: clean, modern, premium and trustworthy — like a high-end creative studio. 

> Purpose: This is the storefront for the agency itself (not a client build). Goal: turn visitors into booked calls.



A landing page is a single focused page built to make the visitor do ONE thing. For my agency, 
that one thing is: book a call.

---

## Name, Logo & Brand — Keep It Simple for now

Here's the whole checklist.

✓ A simple name — My agency name

✓ A clean wordmark — My agency name set in one good font is a logo.

✓ One accent colour —  Use it for buttons and highlights only.

✓ One clean font — One fot everywhere. Consistency reads as ‘professional'.

✓ A favicon — The little browser-tab icon

## 1. Project Goal

**One thing only:** make a prospect trust the agency and book a call.

- This is a **single landing page**, not a multi-page site.
- No login, no dashboard, no database, no CMS.
- Every section on the page must push toward one action: **Book a free call.**

Do NOT build: About page, Portfolio page, Contact page, Blog. All of that lives as *sections* on one page.

---

## 2. Positioning Inputs (fill before building)

```
AGENCY_NAME:      [Lumen Web Studio]
NICHE:             Solar installation companies
OUTCOME_DELIVERED: [ e.g. "Websites that turn local searches into booked installs" but I want to go with "Websites that turn visitors into leads for your business]
BOOKING_LINK:      [ https://calendly.com/newmeharemail/30min ]
ACCENT_COLOR:      [ #ADEBB3 ]
FONT:              Inter
PROOF_ASSETS:      Ecogreen build screenshots in [Demo-Build-Ecogreen]
```

### Headline formula
```
[More Quote Enquires] + [Solar Installation Companies] + [live in a week (proof / speed)]
```
**Weak (about the agency):** "We build modern websites."
**Strong (about the client):** "Websites that turn local searches into booked installs — for solar companies, live in a week."

The headline is there to sell the outcome not "websites"

---

## 3. The 5 Questions the Page Must Answer

Every visitor silently asks these in the first few seconds. Every block below maps to one:

1. What do you do? → answered in **Hero**
2. Who's it for? → named explicitly in **Hero subheadline**
3. Can I trust you? → answered in **Proof** (this block closes the deal)
4. How does it work / what's the catch? → answered in **Process**
5. What do I do next? → answered by the **CTA**, repeated everywhere

---

## 4. Page Structure (block stack, top to bottom)

| # | Block | Job |
|---|-------|-----|
| 1 | **Header** | Logo left, one button right: "Book a call" |
| 2 | **Hero** | Outcome headline + one clear CTA |
| 3 | **Services** | 3 cards, plain-language offer |
| 4 | **Proof** | Demo builds — **the block that closes** |
| 5 | **Process** | 3-step "how it works" |
| 6 | **About** | Short, human, honest — builds trust |
| 7 | **Final CTA** | The whole point of the page — book a call |
| 8 | **Footer** | Name, contact, service area, repeat CTA link |

No extra blocks. No filler sections.

---

## 5. Section-by-Section Content Spec

### Header
- Logo/wordmark (text-based, one good font)
A clean wordmark in a good font is my logo for now
- Single button: "Book a call" → links to BOOKING_LINK

### Hero
- Headline: the outcome, using the formula above
- Subheadline: one line naming the niche + delivery speed
- One primary CTA button: **"Book a free call"**
- Big whitespace, nothing else in this block. Feel: premium, calm.

### Services (3 cards)
- Card 1: e.g. Website design & build
- Card 2: e.g. Get found on Google (SEO)
- Card 3: e.g. Ongoing updates & support
- Each card: one icon, short title, one benefit-focused line for the client.

### Proof
- Screenshots of real demo builds (e.g. Ecogreen) — this is the proof, no testimonials for now since there are no client reviews yet
- Testimonials can be added later once real client reviews come in — leave the section structured so a testimonial row can slot in without a redesign
- Feel: credible, calm (reference: airbnb.com)

### Process (3 numbered steps)
1. Book a free call — talk about the business and goals
2. We build the site — client reviews before anything goes live
3. Go live — new site starts bringing customers

### About
- 3–4 sentences max. Who you are, that you build for [NICHE], that you care about honest work that brings real results.
- Layout: photo placeholder on one side, text on the other.
- Tone: personal, not corporate.

### Final CTA
- Warm headline inviting a free, no-pressure call
- One line on what happens next
- One big primary button: "Book a free call" → BOOKING_LINK
- Email + phone shown as backup
- No database/backend — link only.

### Footer
- Agency name, email, phone, service area
- Repeat of "Book a free call" link
- Quiet, text-based — no graphics, no newsletter signup

---

## 6. Design System

- **Font:** one modern sans-serif everywhere (Inter, Geist, or Manrope)
- **Color:** one accent color + black/white/neutrals. Accent used only for buttons and highlights.
- **Spacing:** generous, consistent — one max content width across all sections
- **Buttons:** unified style; "Book a free call" should visually stand out everywhere it appears
- **Feel:** clean, modern, premium, trustworthy — like a high-end creative studio
- **Reference sources:** Pinterest/Awwwards search "web design agency landing page" or "creative studio website" — borrow layout/spacing/feel, not copy verbatim

---

## 7. CTA Rules (non-negotiable)

- Same exact words everywhere: **"Book a free call"**
- Use a booking link (Calendly-style), never a contact form
- Present in: Header, Hero, Final CTA — always within a thumb's reach on mobile
- Lower the stakes with language: "free," "no-pressure," "30 minutes"

---

## Make it Polished and perfect on Mobile

- Consistent spacing and one max width for every section
- Unify all button styles; make the 'Book a free call' button stand out everywhere it appears.
- One font, one accent colour, generous line-height.

(On Mobile)
- Stack every section into one
column, full-width CTA button, no overflow. Test at iPhone width.
- Don't change the desktop version — only fix mobile


## 8. Build Sequence (Claude Code should follow this order)

1. Scaffold: single page, no routing, no backend, no database
2. Hero (placeholder first, then real headline)
3. Services (3 cards)
4. Proof (grid + testimonials)
5. Process (3 steps)
6. About
7. Final CTA + contact
8. Footer
9. Polish pass: unify spacing, button styles, one font/one accent color, generous line-height
10. Mobile pass: single column stack, full-width CTA button, no overflow — test at iPhone width. Do not alter desktop layout during this pass.

---

## 9. Technical Constraints

- Single static page — no auth, no database, no CMS
- No multi-page routing
- Fully responsive — mobile-first review before desktop sign-off
- Booking link is external (Calendly or similar) — do not build a booking system
- Favicon: initial letter in accent color

---

## 10. Pre-Launch Checklist

- [ ] Headline sells the outcome, not "websites"
- [ ] All 8 blocks present, in order
- [ ] Proof section has real (not placeholder) demo builds/screenshots
- [ ] "Book a call" CTA appears in header, hero, and final section
- [ ] Mobile view: single column, no overflow, CTA full-width
- [ ] All links tested (booking link, email, phone)
- [ ] Published — custom domain connected once live

---

## 11. Mistakes to Avoid

- Building multiple pages when one converts better
- A vague headline about "beautiful websites" instead of a client outcome
- Skipping proof add demo builds even before there are paying clients
- A buried or missing CTA
- Polishing indefinitely instead of shipping a sharp version this week
