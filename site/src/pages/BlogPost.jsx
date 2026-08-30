import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import blogData from '../data/blog-data.json'

export default function BlogPost({ cta }) {
  const { slug } = useParams()
  const post = blogData.find(p => p.slug === slug)

  if (!post) {
    return (
      <section className="min-h-screen py-28">
        <div className="container-site max-w-3xl text-center">
          <h1 className="headline">Post not found</h1>
          <p className="mt-6 text-lg text-ink-soft">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="link-quiet mt-6 inline-block">
            ← Back to blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen py-28">
      <div className="container-site max-w-3xl">
        <Reveal>
          <Link to="/blog" className="link-quiet text-sm">
            ← All posts
          </Link>
          <time className="mt-4 block text-sm text-ink-faint">{post.date}</time>
          <h1 className="headline mt-4">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{post.description}</p>
        </Reveal>

        <div
          className="blog-content mt-12"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <Reveal>
          <div className="mt-16 border-t border-line pt-10">
            <p className="mb-6 text-lg leading-relaxed text-ink-soft">
              Your website should be generating leads, not collecting dust. Let's fix that.
            </p>
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="btn w-full text-base sm:w-auto sm:px-10 sm:py-4"
            >
              {cta.label}
            </a>
            <p className="mt-3 text-center text-sm text-ink-faint">Free · No pressure · 30 minutes</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
