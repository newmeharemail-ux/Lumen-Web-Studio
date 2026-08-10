import Reveal from '../components/Reveal.jsx'
import headshot from '../assets/headshot.jpeg'

export default function About({ content }) {
  return (
    <section id="about" className="section-wrap scroll-mt-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[380px_1fr] lg:gap-24">
        <Reveal className="relative">
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background: 'radial-gradient(closest-side, rgba(173,235,179,0.24), transparent 75%)',
            }}
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface-2 to-surface">
            <img
              src={headshot}
              alt="Abdulrehman Saghir — founder of Lumen Web Studio"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
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
        </Reveal>
      </div>
    </section>
  )
}