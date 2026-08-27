import Reveal from '../components/Reveal.jsx'

export default function FinalCta({ content, contact, cta }) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[480px] max-w-[900px] -translate-y-1/2"
        style={{
          background: 'radial-gradient(closest-side, rgba(173,235,179,0.28), transparent 70%)',
          filter: 'blur(6px)',
        }}
        aria-hidden="true"
      />
      <div className="container-site relative flex flex-col items-center py-32 text-center sm:py-40">
        <Reveal>
          <p className="eyebrow">Next step</p>
          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {content.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{content.subheading}</p>
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            className="btn mt-11 w-full text-base sm:w-auto sm:px-10 sm:py-4"
          >
            {cta.label}
          </a>
          {content.lowStakes && <p className="mt-6 text-sm text-ink-faint">{content.lowStakes}</p>}
          {content.riskReversal && (
            <p className="mt-2 text-sm font-medium text-ink-soft">{content.riskReversal}</p>
          )}
          {content.refrain && (
            <p className="mt-8 text-lg font-semibold text-accent">{content.refrain}</p>
          )}
          <p className="mt-9 text-sm text-ink-faint">
            Prefer email or phone?{' '}
            <a href={`mailto:${contact.email}`} className="link-quiet">
              {contact.email}
            </a>
            {' · '}
            <a href={`tel:${contact.phone}`} className="link-quiet">
              {contact.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}