import Reveal from '../components/Reveal.jsx'

export default function Hero({ content, cta }) {
  return (
    <section className="relative overflow-hidden md:min-h-[calc(100vh_-_72px)]">
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[560px] max-w-[1000px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(173,235,179,0.3), transparent 70%)',
          filter: 'blur(4px)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-16 h-[480px] w-[480px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(173,235,179,0.22), transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-40 h-[520px] w-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(134,214,148,0.2), transparent 70%)',
          filter: 'blur(70px)',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 texture-dots opacity-[0.07]" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[4%] top-28 hidden w-44 rounded-[14px] border border-white/20 bg-surface/70 p-3 opacity-90 lg:block"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-faint" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink-faint" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
        <div className="mt-4 space-y-2">
          <span className="block h-1.5 w-3/4 rounded bg-ink-soft/50" />
          <span className="block h-1.5 w-1/2 rounded bg-ink-soft/35" />
          <span className="block h-1.5 w-2/3 rounded bg-ink-soft/45" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-44 hidden w-36 rounded-2xl border border-white/20 bg-surface/70 p-4 opacity-90 lg:block"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-accent">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h6v6" />
            <path d="M9 21H3v-6" />
            <path d="M21 3l-7 7" />
            <path d="M3 21l7-7" />
          </svg>
        </div>
        <span className="mt-4 block h-1.5 w-2/3 rounded bg-ink-soft/50" />
        <span className="mt-2 block h-1.5 w-1/3 rounded bg-accent/60" />
      </div>

      <Reveal className="container-site relative flex flex-col items-center pb-36 pt-28 text-center sm:pb-44 sm:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-xs font-medium text-ink-soft backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {content.eyebrow}
        </span>
        <h1 className="mt-9 max-w-4xl text-[2.4rem] font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          {content.headlineBefore}{' '}
          <span className="relative text-accent sm:whitespace-nowrap">
            {content.headlineHighlight}
          </span>
          {content.headlineSuffix && <span className="text-ink-soft"> {content.headlineSuffix}</span>}
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{content.subheadline}</p>
        <a
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          className="btn mt-11 w-full text-base sm:w-auto sm:px-9 sm:py-4"
        >
          {cta.label}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>
        {content.microTrust && (
          <p className="mt-6 text-sm font-medium tracking-wide text-ink-faint">{content.microTrust}</p>
        )}
      </Reveal>
    </section>
  )
}