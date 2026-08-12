# DESIGN-SYSTEM.md — Lumen Web Studio visual system

> Feel: **dark, warm, premium, bold-editorial — and now immersive.** Where v1 was clean-near-empty, the reference upgrade fills the page with atmosphere (glass, soft glow, ambient depth) while keeping one accent color, one font, and all copy untouched. When in doubt, subtract.

Supersedes the visual sections that used to live in `docs/brand/DESIGN-SYSTEM.md` (now a voice-only folder). Exacts live in `DESIGN-TOKENS.md`, recipes in `UI-PATTERNS.md`, gates in `QUALITY-BAR.md`.

## Non-negotiables (from brief + ADRs, never touched)

- One accent `#ADEBB3` — **buttons and highlights only.** Never body text, never large fills.
- One font: **Inter.** One content width for every section (~1160px).
- Copy is owner-approved via `docs/content/PAGE-COPY.md`. **CTA wording is fixed — "Book a free call" identical everywhere**, never rewrites.
- We **borrow technique, not palette.** The pink/purple/orange of the reference sites becomes our mint, kept subtle. Professional web studio, not a nightlife brand.

## Global rules (apply everywhere)

1. **Intentional, not decorative.** A background element earns its place only if it adds depth or steers the eye toward a CTA. Otherwise cut it.
2. **Every addition must degrade gracefully.** No overflow, no unreadable text over busy backgrounds — mobile included.
3. **Performance first.** CSS gradients, blurred shapes, and SVG beat heavy images or video for texture. Blur has a budget; don't blur everything.
4. **Atmosphere bleeds between sections** — hero → services → proof share the ambient depth instead of hard flat scene-changes.
5. **Motion supports, never distracts.** Sections enter with a one-time fade + slight rise (700ms); cards lift gently on hover. Nothing delays or competes with the CTA, and everything freezes under `prefers-reduced-motion`.
6. **Thumb-reach conversion (mobile).** A `fixed` bottom CTA bar (mobile-only, `sm:hidden`, full-width button) keeps "Book a free call" one thumb-tap away at every scroll depth; desktop is unaffected.

## Section by section

| Block | Treatment | Borrowed from |
|-------|-----------|---------------|
| **Header** | **Floating glass pill** — `fixed` (inset 12–16px from edges + top), `rounded-full`, `bg-bg/75` + `backdrop-blur(12px)` + soft shadow + hairline, brand + "Book a free call" in a 56px row. Stays visible on scroll; CTA always within thumb reach on mobile. | conversion pass 2026-08-13 (owner preference; restored after brief full-width-bar revert) |
| **Hero** | **Full background, not empty space:** soft radial accent glow in a corner (25–30% opacity fading to transparent), faint dot texture at ~7% behind content, plus two designerly fragments (mini browser window + UI card) floating in the top corners — Hero only; other sections stay clean. H1 = outcome headline (highlight in accent + niche/speed suffix in ink), full-size anchor scale (`text-[2.4rem] → lg:text-7xl`). One micro-trust line under the CTA ("Free 30-min call · No pressure · Live in a week."). | Ref 1 + Ref 2 |
| **Global atmosphere** | **Gradient mesh:** large blurred "blobs" (`blur(70–95px)`) in accent + 1–2 tonal variants at 16–24% opacity, positioned off-canvas or at section edges, reading as ambient light not shapes. Quiet — this is a professional studio. | Ref 2 |
| **Services** | Clean horizontal row of identical cards: **icon + title + one benefit line**, even spacing, consistent card size, generous padding, `surface-2 → surface` gradient depth. | Ref 3 (Liva) |
| **Proof / demo builds** | **3-card grid** (mobile: single column), each screenshot in a subtle browser/device frame — rounded corners, soft shadow, light hover lift/scale (1.02–1.03) + deeper shadow. Under each card: build label + one short result line. **Cards are clickable → lightbox modal** (backdrop blur, Esc/backdrop close, scroll-lock, focus on close). **Testimonial slot hidden until real reviews arrive** — `testimonials` empty → no row rendered; filling the array renders "What clients say" cards with the same treatment, zero redesign. | Ref 3 + conversion pass 2026-08-13 |
| **Process** | Keep the 3-numbered-step editorial marker treatment; ghost numbers at `text-7xl` / 25–30% accent. | existing |
| **About** | Content sits *on top of* the ambient background with enough contrast (subtle card surface behind text) — atmosphere never eats readability. | Ref 2 |
| **Final CTA** | Hero-sized radial mint glow behind, oversized primary button, quiet email/phone links. Microcopy under the button: low-stakes line ("Free · No pressure · 30 minutes.") + risk-reversal ("You review everything before it goes live."). | existing + conversion pass 2026-08-13 |
| **Footer** | **Calm and structured,** not a wall of text: brand mark · quick nav · contact · repeated "Book a call" quiet CTA. Clear vertical spacing, quiet text-link styling. On mobile, extra bottom padding so it clears the fixed bottom CTA bar. | Ref 3 |

## Depth & readability rule

Glow and blur are atmosphere; text and cards are foreground. Where an effect sits behind copy: text must keep its contrast (surface cards or scrim behind it), and the glow opacity stays low. Check every section in `QUALITY-BAR.md`.

## What NOT to change (guardrails)

- No new color palette — accent stays `#ADEBB3`; neutrals stay warm black/white.
- No new pages — single landing page, 8 blocks.
- No removing the booking CTA structure — restyle only, same words, same links.
- Copy only changes through `PAGE-COPY.md` (owner-approved); CTA wording never rewrites.