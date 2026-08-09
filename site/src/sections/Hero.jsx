export default function Hero({ content, cta }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-[520px] max-w-[900px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(173,235,179,0.16), transparent 70%)',
          filter: 'blur(8px)',
        }}
        aria-hidden="true"
      />
      <div className="container-site relative flex flex-col items-center pb-28 pt-24 text-center sm:pb-36 sm:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {content.eyebrow}
        </span>
        <h1 className="mt-9 max-w-4xl text-[2.7rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {content.headlineBefore}{' '}
          <span className="relative whitespace-nowrap text-accent">
            {content.headlineHighlight}
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{content.subheadline}</p>
        <a
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          className="btn mt-11 w-full text-base sm:w-auto sm:px-9 sm:py-4"
        >
          {cta.label}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  )
}