# UI-PATTERNS.md — building blocks, built the same way each time

> Recipes for every recurring piece. If a component you're styling matches one of these, follow the recipe — don't invent a variant. Values come from `DESIGN-TOKENS.md`.

## 1. Full-width glass navbar bar

- **Structure:** sticky bar flush to the top; brand left, `Book a free call` button right in a 72px row, bottom hairline.
- **Recipe:** `bg-bg/85` + `backdrop-filter: blur(12px)`; `border-b` with `--color-line`. 85% opaque bg makes blur a wash/enhancement, so no hard fallback needed. Z-index above all content.
- **Inside:** brand mark left, CTA button right. Nothing else. (Owner preference: the earlier floating glass *pill* was dropped — a flush full-width bar reads better.)
- **Do / Don't**
  - Do keep it sticky and quiet above content.
  - Don't float/inset it from the viewport edges.
  - Don't add a hamburger menu this phase — no routing, so nothing to navigate to.

## 2. Ambient background layer

- **Structure:** one dedicated decorative layer *behind* all content (`z-index` 1, `pointer-events: none`, every node `aria-hidden="true"`).
- **Recipe:** in order — flat page `bg`; large blurred blobs (accent + tonal variants, `blur(70–95px)`, off-canvas or section edges); Hero/Final-CTA radial glow (accent at 25–30%); faint dot texture at ~7%. Nothing here should ever be legible as a shape at a glance.
- **Do / Don't**
  - Do let glows bleed across section boundaries so hero → services → proof feel continuous.
  - Don't add an element you can't cross off the "intentional" list; every glint must aid depth or eye-flow.

## 3. Primary CTA button (`Book a free call`)

- **Structure:** mint-filled pill, dark text, soft mint glow shadow — identical words, style, and link everywhere (Header, Hero, Final CTA).
- **Recipe:** `rounded-full`; accent `#ADEBB3` fill; ink-dark text 600; hover = slight brighten + shadow deepen within 150–300ms. Add a quiet `link-quiet` variant (muted, hover → mint underline) for footer repeats.
- **Do / Don't**
  - Do keep it the single loudest interactive element on the page.
  - Don't restyle per section. Same words, same style.

## 4. Services cards

- **Structure:** an even horizontal row of identical cards — **icon + short title + one benefit line** — consistent size, generous padding, equal gaps.
- **Recipe:** surface card, `rounded-2xl`, hairline border `--color-line`, mint icon glyph (single icon family, consistent stroke), title `ink` 600, benefit line `ink-soft`. Hover: gentle lift (1.02) + shadow deepen.
- **Do / Don't**
  - Do keep all cards equal — no one card louder than another.
  - Don't mix icon styles (filled vs outline) at the same level.

## 5. Proof / demo-build cards

- **Structure:** 3-card grid (single column on mobile). Each card: **browser-frame screenshot + business type + one result line** underneath.
- **Recipe:** browser chrome (traffic dots + URL bar) around the screenshot → frame itself is a surface card, `rounded-2xl`, soft shadow. Caption: business type (`ink`, 500) + result line (`ink-soft`). Hover: scale 1.02–1.03 + shadow deepen. Testimonials slot, when filled, reuses this card recipe.
- **Do / Don't**
  - Do keep hover light — a lift, not a fanfare.
  - Don't attach real names/quotes until real testimonials exist (honesty rule in `BRAND.md`).

## 6. Footer

- **Structure:** calm, structured columns with clear vertical spacing: **brand mark · quick nav links · contact info · repeated "Book a call" quiet CTA** — closing on an optional quiet line like "Let's build something meaningful together."
- **Recipe:** `ink-faint` text, quiet `link-quiet` links, hairline divider above, no wall of text, no loud buttons.
- **Do / Don't**
  - Do repeat the CTA in quiet form (route to Calendly like every other CTA).
  - Don't add newsletter forms, social walls, or anything that breaks the single-page quiet.

## Cross-cutting rules

- **Icons:** vector SVG from one family, consistent stroke width and sizing tokens — no emoji as structure, no raster icons.
- **Focus states:** visible keyboard focus on every interactive element (accent ring/outline), matching visual order.
- **Decorative vs semantic:** every glow/blob layer → `aria-hidden="true"`; screenshots get meaningful alt text where they carry meaning.
- **Fallbacks:** glass, blur, and glow are progressive enhancements. Solid surfaces + stable text on every browser/device.