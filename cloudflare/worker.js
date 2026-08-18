/**
 * Lumen Web Studio — Cloudflare Worker (edge agent layer)
 *
 * Sits in front of the GitHub Pages origin (lumensweb.com) and adds the
 * agent-discovery surfaces that a raw static host cannot:
 *
 *   - Link response headers (RFC 8288) on HTML responses
 *   - Markdown negotiation: `Accept: text/markdown` -> text/markdown
 *   - /.well-known/api-catalog        (RFC 9727, application/linkset+json)
 *   - /.well-known/mcp/server-card.json (SEP-2127 server card)
 *   - /mcp                            (real MCP Streamable HTTP server, book_free_call)
 *   - /.well-known/webmcp             (WebMCP tool catalogue)
 *   - /health                         (health endpoint for the catalog "status" rel)
 *
 * Everything else is proxied through to the GitHub Pages origin unchanged.
 * All endpoint logic lives in worker-core.js (pure, Node-testable); this file
 * is the thin router + origin proxy + the site.md text-module import.
 *
 * Deploy: npx wrangler deploy   (see wrangler.toml + README.md)
 */

import siteMarkdown from './site.md'

import {
  makeLinkHeaders,
  apiCatalogResponse,
  serverCardResponse,
  openRpcResponse,
  webmcpCatalogueResponse,
  healthResponse,
  buildMarkdownResponse,
  handleMcpHttp,
  corsPreflight,
} from './worker-core.js'

const ORIGIN = 'https://newmeharemail-ux.github.io'
const BASE = '/Lumen-Web-Studio'

const LINK_TAGS = [
  '<link rel="api-catalog" href="/.well-known/api-catalog">',
  '<link rel="describedby" href="/.well-known/agent-skills/">',
  '<link rel="webmcp" href="/.well-known/webmcp">',
].join('\n    ')

/* ------------------------------------------------------------------ */
/*  Origin proxy (GitHub Pages) + HTML enhancement                     */
/* ------------------------------------------------------------------ */

function originUrl(request) {
  const url = new URL(request.url)
  return new URL(BASE + url.pathname + url.search, ORIGIN).toString()
}

async function fetchOrigin(request) {
  const headers = new Headers(request.headers)
  headers.set('host', new URL(ORIGIN).host)
  headers.delete('referer')

  const init = { method: request.method, headers, redirect: 'follow' }
  if (request.method !== 'GET' && request.method !== 'HEAD') init.body = request.body
  return fetch(originUrl(request), init)
}

async function enhanceHtmlResponse(response) {
  const contentType = response.headers.get('content-type') || ''
  const isHtml = response.status >= 200 && response.status < 300 && contentType.includes('text/html')

  if (!isHtml) return response

  const headers = new Headers(response.headers)
  for (const link of makeLinkHeaders()) headers.append('Link', link)

  if (response.body) {
    const html = await response.text()
    const injected = html.includes('</head>')
      ? html.replace('</head>', `    ${LINK_TAGS}\n  </head>`)
      : html
    return new Response(injected, { status: response.status, headers })
  }
  return new Response(response.body, { status: response.status, headers })
}

/* ------------------------------------------------------------------ */
/*  Router                                                             */
/* ------------------------------------------------------------------ */

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname

    if (request.method === 'OPTIONS') return corsPreflight()

    if (path === '/.well-known/api-catalog' || path === '/.well-known/api-catalog.json') {
      return apiCatalogResponse()
    }
    if (
      path === '/.well-known/webmcp' ||
      path === '/.well-known/webmcp.json' ||
      path === '/.well-known/mcp.json'
    ) {
      return webmcpCatalogueResponse()
    }
    if (path === '/.well-known/mcp/server-card.json' || path === '/.well-known/mcp/server-cards.json') {
      return serverCardResponse()
    }
    if (path === '/.well-known/mcp/openrpc.json') {
      return openRpcResponse()
    }
    if (path === '/health' || path === '/healthz') {
      return healthResponse()
    }
    if (path === '/mcp' || path === '/mcp/') {
      return handleMcpHttp(request)
    }

    const accept = request.headers.get('accept') || ''
    const wantsMarkdown = accept.includes('text/markdown')
    if (wantsMarkdown && (path === '/' || path === '/index.html')) {
      return buildMarkdownResponse(siteMarkdown)
    }

    const response = await fetchOrigin(request)
    return enhanceHtmlResponse(response)
  },
}