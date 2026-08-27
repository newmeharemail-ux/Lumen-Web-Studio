import Reveal from '../components/Reveal.jsx'

function Icon({ name }) {
  if (name === 'trust') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
  if (name === 'conversion') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }
  if (name === 'seo') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  return null
}

export default function Mechanism({ content }) {
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

        <div className="mt-16 grid gap-5 sm:mt-20 md:grid-cols-3">
          {content.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="h-full">
              <article className="card-lift group h-full rounded-2xl border border-line bg-gradient-to-b from-surface-2 to-surface p-8 shadow-[0_2px_24px_-6px_rgba(0,0,0,0.5)] transition-colors hover:border-accent/50 hover:shadow-[0_2px_32px_-6px_rgba(173,235,179,0.25)] sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Icon name={card.icon} />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {content.transition && (
          <Reveal>
            <p className="mx-auto mt-16 max-w-2xl text-center text-lg leading-relaxed text-ink-soft">
              {content.transition}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
