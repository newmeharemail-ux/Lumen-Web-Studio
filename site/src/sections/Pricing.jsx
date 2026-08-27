import Reveal from '../components/Reveal.jsx'

export default function Pricing({ content, cta }) {
  return (
    <section className="section-wrap scroll-mt-28">
      <div className="container-site">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {content.eyebrow}
          </span>
          <h2 className="headline mt-8">{content.heading}</h2>
        </Reveal>

        {/* Price anchor comparison */}
        <Reveal>
          <div className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-surface/50 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Agencies</p>
              <p className="mt-3 text-2xl font-bold text-ink">{content.anchor.agencies}</p>
            </div>
            <div className="rounded-xl border border-line bg-surface/50 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Freelancers</p>
              <p className="mt-3 text-2xl font-bold text-ink">{content.anchor.freelancers}</p>
            </div>
            <div className="rounded-xl border border-line bg-surface/50 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Shared leads</p>
              <p className="mt-3 text-2xl font-bold text-ink">{content.anchor.sharedLeads}</p>
            </div>
          </div>
        </Reveal>

        {/* Main price card */}
        <Reveal>
          <div className="mt-10 rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/5 to-transparent p-8 text-center sm:p-12">
            <p className="text-sm font-medium text-ink-soft">Your price</p>
            <p className="mt-3 text-5xl font-bold text-accent">{content.price}</p>
            <p className="mt-1 text-sm text-ink-faint">{content.priceNote}</p>
            <p className="mt-4 text-lg text-ink">{content.oneLine}</p>

            {/* CTA */}
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="btn mt-8 inline-flex w-full text-base sm:w-auto sm:px-10 sm:py-4"
            >
              {cta.label}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </Reveal>

        {/* Included + Carve-outs */}
        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface/50 p-8">
              <h3 className="text-lg font-semibold text-ink">What's included</h3>
              <ul className="mt-5 space-y-3">
                {content.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-line bg-surface/50 p-8">
              <h3 className="text-lg font-semibold text-ink">What's not included</h3>
              <p className="mt-2 text-sm text-ink-faint">These are yours to own — no hidden fees.</p>
              <ul className="mt-5 space-y-3">
                {content.carveouts.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Risk reversal */}
        <Reveal>
          <div className="mt-10 rounded-xl border border-line bg-surface/50 px-6 py-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-soft">
              {content.riskReversal.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
