import Reveal from '../components/Reveal.jsx'

export default function SolarWebDesign({ content, cta }) {
  return (
    <section id="solar-web-design" className="section-wrap scroll-mt-28">
      <div className="container-site">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="eyebrow-index">{content.index}</span>
            {content.eyebrow}
          </p>
          <h2 className="headline mt-6">{content.heading}</h2>
          {content.intro.map((p) => (
            <p key={p} className="mt-6 text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </Reveal>

        <div className="mt-16 space-y-14 sm:mt-20">
          {content.blocks.map((block, i) => (
            <Reveal key={block.heading} delay={Math.min(i * 40, 160)}>
              <article className="border-t border-line pt-8 sm:pt-10">
                <h3 className="max-w-2xl text-2xl font-semibold tracking-tight">{block.heading}</h3>
                <div className="mt-4 max-w-3xl space-y-4">
                  {block.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-ink-soft sm:text-[17px]">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <div className="border-t border-line pt-10 sm:pt-12">
              <a
                href={cta.href}
                target="_blank"
                rel="noreferrer"
                className="btn w-full text-base sm:w-auto sm:px-10 sm:py-4"
              >
                {cta.label}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
