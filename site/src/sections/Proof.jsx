import Reveal from '../components/Reveal.jsx'

export default function Proof({ proof }) {
  return (
    <section id="proof" className="section-wrap scroll-mt-28">
      <div className="container-site">
        <Reveal className="flex flex-col gap-4">
          <p className="eyebrow">
            <span className="eyebrow-index">{proof.index}</span>
            {proof.eyebrow}
          </p>
          <h2 className="headline max-w-2xl">{proof.heading}</h2>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-soft">{proof.subheading}</p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:mt-20 md:grid-cols-3">
          {proof.screenshots.map((shot, i) => (
            <Reveal key={shot.label} delay={i * 80} className="h-full">
              <figure
                className="card-lift group h-full overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface-2 to-surface shadow-[0_16px_40px_-20px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_70px_-28px_rgba(173,235,179,0.4)]"
              >
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-faint" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-faint" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-faint" aria-hidden="true" />
                <span className="ml-3 flex-1 truncate rounded-md bg-bg px-3 py-1 text-[11px] text-ink-faint">
                  ecogreen-solar.com
                </span>
              </div>
              <div className="aspect-[7/6] overflow-hidden">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-medium text-ink-soft">{shot.label}</span>
                <span className="text-xs font-medium tracking-wide text-accent">Demo build</span>
              </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {proof.testimonials.length > 0 && (
          <div className="mt-16 border-t border-line pt-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
              What clients say
            </p>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {proof.testimonials.map((t) => (
                <blockquote key={t.name} className="rounded-2xl border border-line bg-surface p-7">
                  <p className="text-[15px] leading-relaxed text-ink-soft">"{t.quote}"</p>
                  <footer className="mt-4 text-sm font-semibold">— {t.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}