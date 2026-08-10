# Agency Landing Page — Implement The Sauce

## Objective
This brief covers one thing: applying the six moves that make a site read as premium instead of amateur. No new references needed for this pass — this is about *technique*, applied to the page as it already exists (post design-upgrade). Keep all existing brand copy and the existing accent color untouched unless a rule below says otherwise.

Go through the six moves in order below. Review after each one — don't batch them into a single giant change.

---

## 1. Generous Whitespace

Crowded reads cheap. Spacious reads premium.

- Audit every section for padding — increase vertical padding between sections and internal padding within cards/blocks if anything feels tight or stacked close together.
- Give the hero headline and CTA extra breathing room above and below — don't let content touch the section edges.
- If in doubt, add more space, not less. This is the single fastest fix if the page currently feels "busy."

---

## 2. Colour Discipline — Max 2–3 Colours

We already have our accent color locked in from the earlier briefs — this step is an **audit**, not a redesign.

- Confirm the page uses: one dark/light base, one accent color, and neutrals (grays/whites) — nothing else.
- Flag (don't silently fix) any place a stray color has crept in — icons, hover states, borders, etc. that don't match the locked palette.
- This rule applies to backgrounds too — any gradient or glow introduced in the design pass should stay within tonal variations of the single accent, not add new hues.

---

## 3. Glass & Gradients

If the earlier design brief (navbar glass, background gradient mesh) has already been applied, treat this step as a **consistency check**, not a rebuild:

- Confirm glass/blur effects are used consistently — same blur radius, same opacity range — anywhere they appear (navbar, cards, overlays), not one strong and another barely visible.
- Confirm gradient glows are subtle — they should feel like ambient light, never a loud colored background. If any gradient looks too saturated or too sharp-edged, soften it (increase blur, lower opacity).
- If this hasn't been applied yet, apply light versions now: soft gradient glow behind the hero, subtle glass effect on the navbar and/or the proof section cards.

---

## 4. Modern Typography

The fastest premium upgrade on the whole page.

- Confirm exactly **one** sans-serif font family is used site-wide (Inter, Geist, Manrope, Satoshi, or Sora are all safe choices if a change is needed — otherwise keep whatever is currently in use if it's already one of these).
- Set body line-height to ~1.6, heading line-height to ~1.1–1.2.
- Make H1 (hero headline) noticeably bold and large relative to everything else on the page — it should be the clear visual anchor.
- Confirm a consistent type scale down through H2/H3/body — no one-off font sizes.

---

## 5. Subtle Animation

Never flashy. The goal is smoothness, not spectacle.

Apply all of the following, site-wide:
- **Fade + slight slide-in on scroll** for each major section as it enters the viewport.
- **Hover lift** on all cards (services, proof/demo builds) — small upward translate + soft shadow deepen on hover.
- **Smooth scrolling** site-wide (for anchor links / in-page navigation if any exist).
- Optional, only if it fits naturally: a slow, subtle count-up animation on any stat numbers, or a slow-moving logo/partner marquee if we have client logos to show.

Keep every transition short and easy — nothing should feel like it's making the visitor wait. Motion should support the content, never distract from the CTA.

---

## 6. Real Imagery

- Wherever the page currently uses a generic stock icon or placeholder graphic where a real photo would work better (about section, proof/demo section), flag it and note what kind of real image should replace it — don't insert an actual stock photo automatically, since we don't have licensing sourced yet.
- Icons that remain (services section, process steps) should stay simple and consistent — one icon set, one stroke weight, sized uniformly.

---

## One-Prompt Version (if applying all six in a single pass)

If a lighter, single-pass version is preferred instead of doing all six steps separately, this single instruction captures the intent:

```
Apply the six-move "sauce" pass to the whole page: increase whitespace
between and within sections, audit and lock the palette to our existing
accent color plus neutrals only, keep glass/gradient effects subtle and
consistent, confirm one modern sans-serif font with generous line-height
throughout, add fade-in-on-scroll and hover-lift animation site-wide, and
flag any spots where a stock icon should become a real photo. Don't
rewrite copy or introduce new colors.
```

---

## Ship Discipline (read this before starting, not after)

This pass has a natural stopping point. Once all six moves are applied and consistent, **stop**. Don't chase pixel-level polish past that point — a live site with all six moves applied beats an endlessly-tweaked one that never ships. If something still feels unfinished after this pass, note it as a follow-up item rather than looping on it now.

---

## What NOT to Do in This Pass
- Don't introduce new colors outside the locked palette
- Don't rewrite any copy
- Don't add new sections, pages, or components
- Don't over-animate — if any motion feels like it's showing off rather than supporting the page, remove it
