import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import blogData from '../data/blog-data.json'

export default function BlogList({ cta }) {
  return (
    <section className="min-h-screen py-28">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="eyebrow">Blog</p>
          <h1 className="headline mt-6">Solar website tips, math, and strategy.</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Practical guides for solar installation companies that want their website
            to generate booked installs — not just look good.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {blogData.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i * 40, 160)}>
              <Link
                to={`/blog/${post.slug}`}
                className="block border-t border-line pt-6 transition-opacity hover:opacity-80"
              >
                <time className="text-sm text-ink-faint">{post.date}</time>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">{post.title}</h2>
                <p className="mt-2 leading-relaxed text-ink-soft">{post.description}</p>
                <span className="link-quiet mt-3 inline-block text-sm">Read more →</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 border-t border-line pt-10">
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
    </section>
  )
}
