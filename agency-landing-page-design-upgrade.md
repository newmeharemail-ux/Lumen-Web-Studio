# Agency Landing Page — Design Upgrade Brief

## Objective
Take the existing agency landing page from "clean but empty" to "premium and immersive" — visually. This is a **design and layout upgrade only**. Do not touch existing brand copy (headlines, body text, CTAs) or the existing color palette. We are borrowing *feel, texture, and structure* from three reference sites, not their colors or wording.

---

## Global Rules (read first, apply everywhere)

1. **Keep all existing copy exactly as-is.** No rewriting headlines, subheadlines, service descriptions, or CTA text.
2. **Keep the existing accent color and neutrals.** Do not introduce the purple/pink/orange gradients from the references — recreate the *technique* (glass, gradients, glow) using our own brand color as the accent.
3. **Every visual addition must feel intentional, not decorative for its own sake.** If a background element doesn't add depth or guide the eye toward a CTA, don't add it.
4. **Mobile-first check at the end.** Every new background/glass/gradient effect must degrade gracefully on mobile — no overflow, no unreadable text over busy backgrounds.
5. **Performance matters.** Prefer CSS gradients, blurred shapes, and SVG over heavy images or video for background texture.

---

## Reference 1 — "Web3 Design Agency" site
**What to borrow:** Navigation bar treatment + a "full," designed background instead of empty space.

- **Navbar:** Convert the current navbar into a floating glass/frosted pill — background: semi-transparent (rgba of our neutral dark or light, ~70–85% opacity) with `backdrop-filter: blur(12–16px)`, subtle 1px border in a low-opacity white/black, soft drop shadow, and rounded corners (16–24px). It should feel like it's floating slightly above the page, not flush with the top edge — add a small margin/inset from the viewport edges.
- **Background (hero + full page):** Right now our background is flat/empty. Add:
  - A soft radial gradient glow in the corner(s) of the hero section, using our accent color at low opacity (10–20%) fading into transparent — this replaces their pink/orange glow, but in our color.
  - Subtle background texture: either a faint grid pattern, dot pattern, or noise texture at very low opacity (3–6%) behind the hero content, so the background never looks like flat empty space.
  - If we have any product screenshots, icons, or abstract shapes related to web design (browser windows, code snippets, UI mockup fragments), scatter 2–3 of them subtly in the hero background at low opacity/blur, similar to how their reference scatters a 3D head + label chips. This gives the hero visual "fullness" without competing with the headline.
- **Do not copy:** their specific illustration (the 3D head), their pink/purple palette, or their stat-card layout unless we already have similar stats to show.

---

## Reference 2 — "Opticore" site
**What to borrow:** Overall background atmosphere, gradient mesh feel, and depth.

- **Background gradient mesh:** Add large, soft, blurred "blob" shapes (like fluid gradient orbs) positioned off-canvas or at section edges, using our accent color plus 1–2 tonal variations of it. Use `filter: blur(80–120px)` on large positioned divs/SVGs so they read as ambient light, not shapes.
- **Section transitions:** Their sections don't feel like flat white/dark blocks stacked on top of each other — there's continuous atmosphere (gradients bleeding from one section into the next). Apply this by letting background glows overlap slightly between hero → services → proof sections instead of hard section breaks.
- **Depth cue:** Their about/hero content sits *on top of* the gradient background, not beside it. Make sure text and cards have enough contrast (dark overlay behind text, or a subtle card background) so readability isn't sacrificed for atmosphere.
- **Do not copy:** the neon purple/blue color grading — reinterpret this technique with our own accent color, kept subtle rather than saturated (this is a professional web design agency, not a nightlife brand).

---

## Reference 3 — "Liva" site
**What to borrow:** How they present demo/portfolio work, the services layout, and the footer structure.

- **Proof / Demo builds section:**
  - Present demo builds as a **3-card grid** (or carousel on mobile), each card showing a screenshot/mockup with a subtle browser-frame or device-frame treatment (rounded corners, soft shadow, slight hover lift/scale).
  - Under each card: project/business type + one short result line (e.g., "Solar company — new site, live in 5 days"), matching the tone of their "Nekora / Mindful / Roamia" cards but with our copy.
  - Keep hover interaction light: slight scale-up (1.02–1.03) + shadow deepen on hover, no jarring animation.
- **Services section:** Their services block uses icon + short label + one-line description in a clean horizontal row. Apply the same structure to our existing services section: icon, title, single benefit line — evenly spaced, consistent card sizing, generous padding.
- **Footer:** Their footer is calm and structured — logo/name, nav links, contact, and a closing CTA line ("Let's build something meaningful together"), not cluttered. Restructure our footer into: brand mark, quick nav links, contact info, and a repeated "Book a call" CTA — all in a clean, quiet layout with clear vertical spacing, not a wall of text.
- **Do not copy:** their testimonial carousel design exactly if we don't have real testimonials yet — leave placeholder-safe structure (2 cards) as outlined in the original build prompts, just styled with this section's card treatment.

---

## Section-by-Section Build Order for Claude Code

Go through these one at a time, review after each, don't batch them:

1. **Navbar** → glass/floating pill treatment (Ref 1)
2. **Hero background** → gradient glow + texture + optional scattered design elements (Ref 1 + Ref 2)
3. **Global background atmosphere** → gradient mesh blobs bleeding between sections (Ref 2)
4. **Services section** → icon + title + line layout, consistent cards (Ref 3)
5. **Proof/demo builds section** → 3-card grid with device-frame treatment (Ref 3)
6. **Footer** → calm, structured, CTA-repeated (Ref 3)
7. **Final pass** → check contrast/readability everywhere a background effect sits behind text, then test full page on mobile width

---

## Technical Notes for Implementation

- Use CSS custom properties for the accent color so all new gradients/glows reference one variable — easy to tune later.
- Background blobs/glows: absolutely positioned divs or SVGs, `pointer-events: none`, placed behind content (`z-index` below main content), blurred heavily.
- Glass navbar: `backdrop-filter: blur()` + fallback solid background color for browsers that don't support it.
- Keep all new decorative elements `aria-hidden="true"` since they're purely visual.
- Test dark-mode contrast specifically — glow effects can wash out text if opacity is too high.

---

## What NOT to Change
- No new copy, no rewritten headlines or CTAs
- No new color palette — accent color stays what it is
- No adding pages — this stays a single landing page
- No removing the existing booking CTA structure — just restyle it to fit the new visual language
