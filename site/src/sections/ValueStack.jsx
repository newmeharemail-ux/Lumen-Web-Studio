import Reveal from '../components/Reveal.jsx'

export default function ValueStack({ content }) {
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

        <div className="mt-16 rounded-2xl border border-line bg-surface/50 backdrop-blur-md sm:mt-20">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-line px-6 py-4 text-xs font-semibold uppercase tracking-widest text-ink-faint sm:px-8 sm:grid-cols-[1fr_auto_auto]">
            <span>What you get</span>
            <span className="hidden sm:block">Value</span>
            <span className="text-right">The pain it removes</span>
          </div>

          {/* Value rows */}
          {content.items.map((item, i) => (
            <Reveal key={item.what} delay={i * 40}>
              <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-line/50 px-6 py-5 sm:px-8 sm:grid-cols-[1fr_auto_auto] last:border-b-0">
                <span className="font-medium text-ink">{item.what}</span>
                <span className="hidden text-right text-sm font-medium text-accent sm:block sm:mr-8">
                  {item.value}
                </span>
                <span className="text-sm text-ink-soft text-right">
                  {item.pain}
                </span>
              </div>
            </Reveal>
          ))}

          {/* Total row */}
          <div className="border-t border-line px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Total value</span>
                <span className="ml-3 text-2xl font-bold text-ink">{content.totalValue}</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">Your price</span>
                <span className="ml-3 text-2xl font-bold text-accent">{content.yourPrice}</span>
              </div>
            </div>
          </div>
        </div>

        <Reveal>
          <p className="mt-8 text-center text-lg font-medium text-ink">
            {content.anchor}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
