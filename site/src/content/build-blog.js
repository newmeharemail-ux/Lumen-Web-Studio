import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const BLOG_DIR = path.resolve('src/content/blog')
const DATA_DIR = path.resolve('src/data')
const DIST_DIR = path.resolve('dist')

function generateBlogData() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))

  const posts = files.map(file => {
    const slug = file.replace('.md', '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
    const { data, content } = matter(raw)

    const processed = remark().use(html).processSync(content)
    const contentHtml = processed.toString()

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      keywords: data.keywords || '',
      author: data.author || '',
      contentHtml,
    }
  })

  posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  fs.writeFileSync(
    path.join(DATA_DIR, 'blog-data.json'),
    JSON.stringify(posts, null, 2)
  )

  console.log(`[blog] Generated blog-data.json with ${posts.length} post(s)`)
  return posts
}

function prerenderPosts(posts) {
  const indexHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8')

  const blogDir = path.join(DIST_DIR, 'blog')
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true })
  }

  const blogListHtml = injectHead(indexHtml, {
    title: 'Blog — Lumen Web Studio',
    description: 'Practical guides for solar installation companies on website design, SEO, and lead generation.',
    canonical: 'https://lumensweb.com/blog',
  })
  fs.writeFileSync(path.join(blogDir, 'index.html'), blogListHtml)

  for (const post of posts) {
    const postDir = path.join(blogDir, post.slug)
    if (!fs.existsSync(postDir)) {
      fs.mkdirSync(postDir, { recursive: true })
    }
    const postHtml = injectHead(indexHtml, {
      title: `${post.title} — Lumen Web Studio`,
      description: post.description,
      canonical: `https://lumensweb.com/blog/${post.slug}`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: {
          '@type': 'Person',
          name: post.author || 'Abdulrehman Saghir',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Lumen Web Studio',
        },
      },
    })
    fs.writeFileSync(path.join(postDir, 'index.html'), postHtml)
  }

  console.log(`[blog] Pre-rendered ${posts.length} post(s) + listing page`)
}

function injectHead(shell, { title, description, canonical, jsonLd }) {
  let html = shell

  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/gs, '')
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?\s*>/gs, '')
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?\s*>/gs, '')
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?\s*>/gs, '')
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?\s*>/gs, '')
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?\s*>/gs, '')
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?\s*>/gs, '')

  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)

  const metaTags = `
    <meta name="description" content="${escapeHtml(description)}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${canonical}">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${canonical}">`

  html = html.replace('</head>', `${metaTags}\n</head>`)

  if (jsonLd) {
    const script = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    html = html.replace('</head>', `${script}\n</head>`)
  }

  return html
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const posts = generateBlogData()

if (fs.existsSync(DIST_DIR)) {
  prerenderPosts(posts)
} else {
  console.log('[blog] dist/ not found — skipping pre-render (run vite build first)')
}
