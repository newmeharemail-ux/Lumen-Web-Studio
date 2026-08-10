import Reveal from '../components/Reveal.jsx'

function Icon({ name }) {
  const common = {
    className: 'h-6 w-6',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  switch (name) {
    case 'design':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <path d="M7 14h6" />
          <path d="M7 17h9" />
        </svg>
      )
    case 'seo':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
          <path d="M8 12h6" />
        </svg>
      )
    case 'support':
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 3v5h-5" />
        </svg>
      )
    default:
      return null
  }
}

export default function Services({ content }) {
  return (
    <section id="services" className="section-wrap scroll-mt-28">
      <div className="container-site">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="eyebrow-index">{content.index}</span>
              {content.eyebrow}
            </p>
            <h2 className="headline mt-6">{content.title}</h2>
          </div>
          <p className="max-w-xs text-base leading-relaxed text-ink-soft md:pb-2 md:text-right">
            {content.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:mt-20 md:grid-cols-3">
          {content.items.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} className="h-full">
              <article
                className="card-lift group h-full rounded-2xl border border-line bg-gradient-to-b from-surface-2 to-surface p-8 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.6)] transition-colors hover:border-accent/50 hover:shadow-[0_30px_70px_-28px_rgba(173,235,179,0.4)] sm:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Icon name={service.icon} />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{service.benefit}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}