# PAGE-COPY.md — Every word on the page, in one place

> Rule: the **CTA wording is fixed** — `Book a free call` everywhere (Header, Hero, Final CTA, Footer repeat). All links → Calendly. Copy follows the voice in `docs/brand/BRAND.md`.
>
> `[PLACEHOLDER]` = needs a real value before launch. Drafts are working copy, not final.

## Booking link
`https://calendly.com/newmeharemail/30min` — every "Book a free call" button links here.

---

## 1. Header
- Wordmark: **Lumen Web Studio**
- Button: `Book a free call` → Calendly

## 2. Hero
- **Headline (draft, follows the formula — client outcome, not "websites"):**
  > *Websites that turn visitors into booked installs — for solar companies, live in a week.*
- **Subheadline (one line: niche + speed):**
  > *For solar installation companies. A professional website that turns visitors into leads — live in a week.*
- One primary CTA: **`Book a free call`** → Calendly
- Big whitespace, nothing else. Premium, calm.

## 3. Services (3 cards)
Each card: icon + short title + one benefit-focused line.

| Card | Title | Benefit line (draft) |
|------|-------|----------------------|
| 1 | Website design & build | A clean, fast site that makes your business look established and worth calling. |
| 2 | Get found on Google (SEO) | So local customers searching "solar installers near me" find you first. |
| 3 | Ongoing updates & support | Your site stays current, secure, and working — so you can focus on installs. |

## 4. Proof
- **Heading (draft):** *Real builds, not promises.*
- 3 real screenshots from `Demo-Build-Ecogreen/` — `Hero-section.png`, `Services-section.png`, `Gallery-section.png` (demo builds prove what we ship).
- **Future testimonials:** reserved row that slots under the screenshots without a redesign once real client reviews exist. Placeholder copy for now:
  > *[Client review goes here once real clients have used the site.]*
- Feel: credible, calm (Airbnb-style, not flashy).

## 5. Process (3 numbered steps)
1. **Book a free call** — we talk about your business and goals. No pressure, 30 minutes.
2. **We build the site** — you review it before anything goes live.
3. **Go live** — your new site starts bringing in enquiries and installs.

## 6. About
- **Photo:** `images/Headshot.jpeg` → wired into the About section (`site/src/assets/headshot.jpeg`).
- **Body (3–4 sentences, personal not corporate — draft):**
  > I'm Abdulrehman, and I run Lumen Web Studio. I build websites for solar installation companies — fast, honest work that turns visitors into leads. I care about results, not fluff. Working with solar industry because renewable energy protects the planet.

## 7. Final CTA
- **Headline (draft):** *Ready to turn your website into a lead machine?*
- **One line on what happens next:**
  > Book a free, no-pressure call. We'll talk about your business and goals — then you'll have a new site in a week.
- **Primary button:** **`Book a free call`** → Calendly
- **Backup contact:**
  - Email: `newmeharemail@gmail.com`
  - Phone: `+92 303 4721384` (dialable `+923034721384`)

## 8. Footer
- Name: **Lumen Web Studio**
- Email: `newmeharemail@gmail.com`
- Phone: `+92 303 4721384` (dialable `+923034721384`) from `content.js` `phoneDisplay` / `phone`.

> Service area line: `Serving solar installers worldwide` (owner works remotely/internationally). If he'd rather drop the line entirely, remove `contact.serviceArea` from `content.js` and the Footer build. Example alternatives: "Remote-first — based at home", "Available worldwide", or drop it.
- Quiet repeat link: **`Book a free call`** → Calendly
- Text-only, no graphics, no newsletter.

---

## Pre-launch copy checklist
- [ ] Replace every `[PLACEHOLDER]` above (name, photo, email, phone, service area).
- [ ] Headline sells the outcome and names solar companies.
- [ ] `Book a free call` present in Header, Hero, Final CTA, and Footer — identical wording.
- [ ] No form anywhere; all buttons → Calendly.