import { useState, useMemo } from 'react'
import Reveal from './Reveal.jsx'

const DEFAULTS = {
  visitors: 1000,
  conversionRate: 1.5,
  jobValue: 27000,
  grossMargin: 20,
}

const TARGET_CONVERSION = 4.0
const CLOSE_RATE = 0.20

function formatCurrency(n) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)
}

function formatNumber(n) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)
}

export default function ProfitCalculator({ cta }) {
  const [visitors, setVisitors] = useState(DEFAULTS.visitors)
  const [conversionRate, setConversionRate] = useState(DEFAULTS.conversionRate)
  const [jobValue, setJobValue] = useState(DEFAULTS.jobValue)
  const [grossMargin, setGrossMargin] = useState(DEFAULTS.grossMargin)

  const results = useMemo(() => {
    const currentLeads = visitors * (conversionRate / 100)
    const targetLeads = visitors * (TARGET_CONVERSION / 100)
    const extraLeads = targetLeads - currentLeads
    const extraJobs = extraLeads * CLOSE_RATE
    const monthlyLoss = extraJobs * jobValue * (grossMargin / 100)
    const annualLoss = monthlyLoss * 12
    const breakEvenJobs = 900 / (jobValue * (grossMargin / 100) * CLOSE_RATE)

    return {
      currentLeads: Math.round(currentLeads),
      targetLeads: Math.round(targetLeads),
      extraLeads: Math.round(extraLeads),
      extraJobs: extraJobs.toFixed(1),
      monthlyLoss: Math.round(monthlyLoss),
      annualLoss: Math.round(annualLoss),
      breakEvenJobs: breakEvenJobs.toFixed(2),
    }
  }, [visitors, conversionRate, jobValue, grossMargin])

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-xs font-medium text-ink-soft backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Run your numbers
            </span>

            <h2 className="mt-9 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What is your brochure site{' '}
              <span className="text-accent">costing you</span> every month?
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Most solar company websites convert at 1–2% of visitors. A conversion-focused site
              converts at 3–5%. The gap is real money. Run your numbers.
            </p>

            {/* Calculator inputs */}
            <div className="mt-12 grid gap-6 rounded-2xl border border-line bg-surface/50 p-6 backdrop-blur-md sm:p-8">
              {/* Visitors */}
              <div>
                <label className="flex items-baseline justify-between text-sm font-medium text-ink">
                  <span>Monthly website visitors</span>
                  <span className="text-accent">{formatNumber(visitors)}</span>
                </label>
                <input
                  type="range"
                  min={200}
                  max={5000}
                  step={50}
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="mt-3 w-full accent-[#ADEBB3]"
                />
                <div className="mt-1 flex justify-between text-xs text-ink-faint">
                  <span>200</span>
                  <span>5,000</span>
                </div>
              </div>

              {/* Conversion rate */}
              <div>
                <label className="flex items-baseline justify-between text-sm font-medium text-ink">
                  <span>Current conversion rate</span>
                  <span className="text-accent">{conversionRate}%</span>
                </label>
                <input
                  type="range"
                  min={0.5}
                  max={5}
                  step={0.1}
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="mt-3 w-full accent-[#ADEBB3]"
                />
                <div className="mt-1 flex justify-between text-xs text-ink-faint">
                  <span>0.5%</span>
                  <span>5%</span>
                </div>
              </div>

              {/* Job value */}
              <div>
                <label className="flex items-baseline justify-between text-sm font-medium text-ink">
                  <span>Average job value</span>
                  <span className="text-accent">{formatCurrency(jobValue)}</span>
                </label>
                <input
                  type="range"
                  min={15000}
                  max={50000}
                  step={1000}
                  value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  className="mt-3 w-full accent-[#ADEBB3]"
                />
                <div className="mt-1 flex justify-between text-xs text-ink-faint">
                  <span>$15,000</span>
                  <span>$50,000</span>
                </div>
              </div>

              {/* Gross margin */}
              <div>
                <label className="flex items-baseline justify-between text-sm font-medium text-ink">
                  <span>Gross margin</span>
                  <span className="text-accent">{grossMargin}%</span>
                </label>
                <input
                  type="range"
                  min={10}
                  max={35}
                  step={1}
                  value={grossMargin}
                  onChange={(e) => setGrossMargin(Number(e.target.value))}
                  className="mt-3 w-full accent-[#ADEBB3]"
                />
                <div className="mt-1 flex justify-between text-xs text-ink-faint">
                  <span>10%</span>
                  <span>35%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-10 rounded-2xl border border-line bg-surface/50 p-6 backdrop-blur-md sm:p-8">
              {/* Bad news */}
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                <p className="text-sm font-medium text-red-400">The Bad News</p>
                <p className="mt-2 text-2xl font-bold text-ink">
                  Your brochure site is costing you{' '}
                  <span className="text-red-400">{formatCurrency(results.monthlyLoss)}</span> every
                  month.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  At {formatNumber(visitors)} visitors/month with a {conversionRate}% conversion rate,
                  you&apos;re getting {results.currentLeads} leads. A conversion-focused site at 4% would
                  bring {results.targetLeads} leads — that&apos;s {results.extraLeads} more leads per month.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  At a 20% close rate and {formatCurrency(jobValue)} per install, those missed leads
                  represent <strong className="text-ink">{formatCurrency(results.monthlyLoss)}</strong> in
                  lost gross profit every month.
                </p>
                <p className="mt-2 text-sm font-medium text-red-400">
                  Over 12 months, that&apos;s {formatCurrency(results.annualLoss)} left on the table.
                </p>
              </div>

              {/* Good news */}
              <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-6">
                <p className="text-sm font-medium text-accent">The Good News</p>
                <p className="mt-2 text-2xl font-bold text-ink">
                  A conversion-focused website captures{' '}
                  <span className="text-accent">{formatCurrency(results.monthlyLoss)}</span> back in
                  your pocket — every month.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  For a one-time $900 investment, the website pays for itself with{' '}
                  <strong className="text-ink">one-fifth of one install</strong>. One extra job per quarter
                  puts $21,600 back in your pocket every year.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn inline-flex w-full items-center justify-center text-base sm:w-auto sm:px-9 sm:py-4"
                >
                  {cta.label}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
                <p className="mt-4 text-sm text-ink-faint">
                  Free 30-min call · No pressure · See real solar demos
                </p>
              </div>
            </div>

            {/* Transition line */}
            <p className="mt-8 text-center text-lg text-ink-soft">
              The math is clear. But how does a website actually do this?{' '}
              <span className="font-medium text-ink">Let me show you.</span>
            </p>

            {/* Disclaimer */}
            <p className="mt-4 text-center text-xs text-ink-faint">
              Assumptions: Target conversion rate (4%) is an industry benchmark for conversion-focused
              home services websites. Close rate (20%) is the average for organic/web leads in solar.
              Your actual results depend on lead quality, follow-up speed, and sales process.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
