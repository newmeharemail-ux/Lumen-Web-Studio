import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={Math.min(index * 40, 160)}>
      <div className="border-b border-line last:border-b-0">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
          aria-expanded={open}
        >
          <span className="text-base font-medium text-ink">{item.q}</span>
          <span className="shrink-0 text-ink-faint transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-300 ease-out"
          style={{ maxHeight: open ? '400px' : '0', opacity: open ? 1 : 0 }}
        >
          <p className="pb-5 text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
        </div>
      </div>
    </Reveal>
  )
}

export default function FAQ({ content }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <section id="faq" className="section-wrap scroll-mt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-site">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {content.eyebrow}
          </span>
          <h2 className="headline mt-8">{content.heading}</h2>
        </Reveal>

        <div className="mt-16 max-w-3xl sm:mt-20">
          {content.items.map((item, i) => (
            <FaqItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
