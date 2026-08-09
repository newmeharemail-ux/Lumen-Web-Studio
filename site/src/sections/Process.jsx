export default function Process({ content }) {
  return (
    <section className="section-wrap">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <span className="eyebrow-index">{content.index}</span>
            {content.eyebrow}
          </p>
          <h2 className="headline mt-6">{content.heading}</h2>
        </div>

        <ol className="mt-16 grid gap-3 md:grid-cols-3">
          {content.steps.map((step, i) => (
            <li key={step.title} className="group relative rounded-2xl border border-line bg-surface p-8">
              <span className="block text-6xl font-semibold tracking-tight text-accent/25 transition-colors group-hover:text-accent/45">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
              {i < content.steps.length - 1 && (
                <span
                  className="absolute right-[-14px] top-1/2 hidden h-px w-[28px] bg-line md:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}