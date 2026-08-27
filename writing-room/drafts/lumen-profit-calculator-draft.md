# Lumen Web Studio — Profit Calculator Spec

**Date:** August 2026
**Type:** LOSS-DRIVEN
**Leak variable:** Website not converting visitors to leads (brochure site)
**Built from:** `niche-research-solar-installers.md` HANDOFF CONTRACT

---

## The Calculator

### Headline
**What is your brochure site costing you every month?**

### Subhead
Most solar company websites convert at 1–2% of visitors. A conversion-focused site converts at 3–5%. The gap is real money. Run your numbers.

---

## Inputs (4 fields, clamped)

| Input | Label | Min | Max | Default | Why this default |
|-------|-------|-----|-----|---------|------------------|
| Monthly website visitors | How many people visit your site each month? | 200 | 5,000 | 1,000 | Small installer baseline (modeled from 100–300 visitors/mo for sub-$500K companies) |
| Current conversion rate | What % fill out your form or call you? | 0.5% | 5% | 1.5% | Industry average for brochure sites (Squareko 2026: "most treat their websites as digital brochures") |
| Average job value | What's a typical residential install worth? | $15,000 | $50,000 | $27,000 | NREL 2024 benchmark: 7.2 kW at $3.25/W = $23,400; with battery attach = $28K–$38K |
| Gross margin | What's your gross margin on an install? | 10% | 35% | 20% | CFMA 2024 median for $1M–$5M residential solar |

### Input validation
- Visitors: integer, 200–5,000
- Conversion rate: decimal, 0.005–0.05
- Job value: integer, $15,000–$50,000
- Gross margin: decimal, 0.10–0.35

---

## Constants (sourced, on-page disclaimer)

| Constant | Value | Source |
|----------|-------|--------|
| Target conversion rate | 4.0% | Industry benchmark for conversion-focused home services sites (Rocket Media 2026, Main Street ROI 2026) |
| Months | 12 | Annualized for impact |

---

## Formula

```
current_leads    = visitors × current_conversion_rate
target_leads     = visitors × target_conversion_rate
extra_leads      = target_leads - current_leads
extra_jobs       = extra_leads × target_conversion_rate  (20% close rate on new leads)
monthly_loss     = extra_jobs × avg_job_value × gross_margin
annual_loss      = monthly_loss × 12
```

**Close rate assumption:** 20% (industry average for organic/web leads — SurgePV 2026, Wood Mackenzie). Stated in disclaimer.

---

## Output

### Bad News (red)

**Your brochure site is costing you $[X] every month.**

At [visitors] visitors/month with a [current_rate]% conversion rate, you're getting [current_leads] leads. A conversion-focused site at 4% would bring [target_leads] leads — that's [extra_leads] more leads per month.

At a 20% close rate and $[job_value] per install, those missed leads represent **$[monthly_loss] in lost gross profit every month.**

Over 12 months, that's **$[annual_loss] left on the table.**

### Good News (green)

**A conversion-focused website captures $[monthly_loss] back in your pocket — every month.**

For a one-time $900 investment, the website pays for itself with **one-fifth of one install**. One extra job per quarter puts $21,600 back in your pocket every year.

---

## Break-even display

```
Break-even: $900 ÷ ($[job_value] × [gross_margin] × 0.20) = [X] jobs
= one-fifth of one install
= [X] days at your current pace
```

---

## CTA

**[Book a free call]** → Calendly
Microcopy: Free 30-min call · No pressure · See real solar demos

---

## On-page disclaimer (small text under calculator)

> **Assumptions:** Target conversion rate (4%) is an industry benchmark for conversion-focused home services websites. Close rate (20%) is the average for organic/web leads in solar (SurgePV 2026, Wood Mackenzie). Your actual results depend on lead quality, follow-up speed, and sales process. The calculator shows potential — not a guarantee. Run by Lumen Web Studio.

---

## Mobile behavior

- Stack inputs vertically
- Full-width sliders or number inputs
- Output appears instantly below the CTA on mobile (no scroll required)
- Break-even line is bold, large, centered

---

## Implementation notes

- Pure client-side (React state, no backend)
- Animate number transitions for dramatic effect
- Shareable: URL encodes inputs (`/r?v=1000&c=1.5&j=27000&m=0.20`)
- CTA fires `gtag('event', 'calculator_cta_click')` on click
