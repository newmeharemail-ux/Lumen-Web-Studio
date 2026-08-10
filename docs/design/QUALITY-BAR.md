# QUALITY-BAR.md — done means it passes these

> Run this against every section before calling it finished. If a new background/glass/gradient effect is added, this is the gate it must clear.

## Contrast & readability

- **Body text:** ≥ 4.5:1 against its background. `ink-soft` is secondary text only; never essential info below 3:1.
- **Secondary / large text:** ≥ 3:1.
- **No gray-on-gray** — `ink-soft` on `surface` is fine; `ink-soft` on a glow is not. Anything sitting over atmosphere gets a surface card or scrim behind it.
- **Glow washout check:** after placing a glow/glare, confirm headline and CTA contrast still passes — especially in the Hero and Final CTA corners.
- **Color is never the only signal.** Active/hover/focus states also change shadow, border, or underline, not just hue.

## Mobile-first degradation (every effect)

- **390px baseline:** no horizontal overflow, no clipped content, single column.
- CTA buttons full-width and within thumb reach.
- Effects degrade, not break: blurred blobs may be reduced or repositioned, the navbar is 85% opaque on its own (blur is optional), text always sits on enough contrast.
- Check 390 / 768 / 1024 / 1440.

## Performance

- Prefer CSS gradients, blurred shapes, SVG — **not** heavy images or video — for background texture.
- Blur has a budget: apply generous `blur(80–120px)` to ambient blobs, but keep their count small; avoid blurring large text/nav areas beyond the single navbar.
- Decorative layers use `pointer-events: none`; `aria-hidden` where purely visual.

## Motion

- Hover/micro-interactions: **150–300ms**, smooth ease-out. No instant snaps, no >500ms delays.
- Card hover: light lift (scale 1.02–1.03) + shadow deepen only — no jarring animation.
- Scroll reveal: one-time fade + slight rise (700ms), staggered ~80ms — only when a section enters the viewport; nothing re-triggers.
- **`prefers-reduced-motion`:** freeze glows, lifts, scroll-reveal, and transitions; keep all static contrast and layout intact.

## Accessibility & semantics

- Vector SVG icons from one family — no emojis as icons, no raster.
- Meaningful screenshots get descriptive alt text; decorative artifacts are `aria-hidden="true"`.
- Visible keyboard focus on every interactive element; focus order matches visual order.
- `cursor-pointer` on all clickable elements.
- Every interactive target comfortably ≥ 44px (tap/click) — especially full-width mobile CTAs.

## Pre-delivery checklist (full page)

- [ ] All 8 blocks styled per `DESIGN-SYSTEM.md`; no off-recipe variants.
- [ ] Copy untouched — headlines, services, CTA wording identical to `docs/content/PAGE-COPY.md`.
- [ ] One accent `#ADEBB3` and one font (Inter) everywhere; glows reference the accent variable.
- [ ] Atmosphere behind content (`z-index` 1), never competing with text.
- [ ] Contrast passes on every glow/blur placement (Hero, Final CTA check).
- [ ] Tested at 390 / 768 / 1024 / 1440; no overflow; CTAs full-width on mobile.
- [ ] `prefers-reduced-motion` produces a calm but identical layout.
- [ ] Desktop layout not degraded by the mobile pass.