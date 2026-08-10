import Reveal from '../components/Reveal.jsx'

export default function Process({ content }) {
  return (
    <section id="process" className="section-wrap scroll-mt-28">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="eyebrow-index">{content.index}</span>
            {content.eyebrow}
          </p>
          <h2 className="headline mt-6">{content.heading}</h2>
        </Reveal>

        <ol className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-3">
          {content.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="h-full">
              <div className="card-lift group relative h-full rounded-2xl border border-line bg-gradient-to-b from-surface-2 to-surface p-8 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.6)] transition-colors hover:border-accent/50 hover:shadow-[0_30px_70px_-28px_rgba(173,235,179,0.4)] sm:p-10">
                <span className="block text-7xl font-semibold tracking-tight text-accent/30 transition-colors group-hover:text-accent/50">
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
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}