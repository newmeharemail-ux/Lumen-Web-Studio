export default function About({ content }) {
  return (
    <section className="section-wrap">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background: 'radial-gradient(closest-side, rgba(173,235,179,0.14), transparent 75%)',
            }}
            aria-hidden="true"
          />
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-accent/10 text-4xl font-semibold text-accent">
              L
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">
            <span className="eyebrow-index">{content.index}</span>
            {content.eyebrow}
          </p>
          <h2 className="headline mt-6 max-w-xl">{content.heading}</h2>
          {content.paragraphs.map((p) => (
            <p key={p} className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}