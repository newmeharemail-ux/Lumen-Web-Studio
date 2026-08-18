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
 *
 * Deploy: npx wrangler deploy   (see wrangler.toml + README.md)
 */

export const CALENDLY = 'https://calendly.com/newmeharemail/30min'
export const SITE_URL = 'https://lumensweb.com'
export const SERVER_NAME = 'lumen-web-studio'
export const SERVER_VERSION = '1.0.0'
export const MCP_PROTOCOL_VERSIONS = ['2025-03-26', '2025-06-18']

const ORIGIN = 'https://newmeharemail-ux.github.io'
const BASE = '/Lumen-Web-Studio'

export const TOOLS = [
  {
    name: 'book_free_call',
    description:
      'Open the booking page so the visitor can schedule a free, no-pressure 30-minute call with Lumen Web Studio. Returns the booking URL on success.',
    inputSchema: { type: 'object', properties: {} },
  },
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function corsHeaders() {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type, accept, mcp-session-id, authorization',
  }
}

function json(data, status = 200, contentType = 'application/json', cache = 'public, max-age=3600') {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': `${contentType}; charset=utf-8`,
      'cache-control': cache,
      ...corsHeaders(),
    },
  })
}

function corsPreflight() {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

function tokenCount(text) {
  return text.split(/\s+/).filter(Boolean).length
}

/* ------------------------------------------------------------------ */
/*  Link headers (RFC 8288)                                            */
/* ------------------------------------------------------------------ */

export function makeLinkHeaders() {
  return [
    '</.well-known/api-catalog>; rel="api-catalog"',
    '</.well-known/agent-skills/>; rel="describedby"',
    '</.well-known/webmcp>; rel="webmcp"',
  ]
}

const LINK_TAGS = [
  '<link rel="api-catalog" href="/.well-known/api-catalog">',
  '<link rel="describedby" href="/.well-known/agent-skills/">',
  '<link rel="webmcp" href="/.well-known/webmcp">',
].join('\n    ')

/* ------------------------------------------------------------------ */
/*  Well-known endpoints                                               */
/* ------------------------------------------------------------------ */

export function apiCatalogResponse() {
  return json(
    {
      linkset: [
        {
          anchor: `${SITE_URL}/mcp`,
          'service-desc': [`${SITE_URL}/.well-known/mcp/openrpc.json`],
          'service-doc': ['https://modelcontextprotocol.io/'],
          status: [`${SITE_URL}/health`],
        },
      ],
    },
    200,
    'application/linkset+json',
  )
}

export function serverCardResponse() {
  const card = {
    name: 'com.lumenwebstudio.booking',
    title: 'Lumen Web Studio Booking',
    description:
      'Book a free 30-minute call with Lumen Web Studio — websites for solar installation companies, live in a week.',
    version: SERVER_VERSION,
    serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
    supportedProtocolVersions: MCP_PROTOCOL_VERSIONS,
    remotes: [
      {
        url: `${SITE_URL}/mcp`,
        protocolVersion: MCP_PROTOCOL_VERSIONS[0],
        transport: 'streamable-http',
      },
    ],
    capabilities: {
      tools: { listChanged: false },
      resources: {},
      prompts: {},
    },
    tools: TOOLS,
  }
  return json(card, 200, 'application/json', 'public, max-age=300')
}

export function openRpcResponse() {
  const openrpc = {
    openrpc: '1.2.6',
    info: {
      title: 'Lumen Web Studio Booking API',
      version: SERVER_VERSION,
      description: 'MCP Streamable HTTP server exposing the book_free_call tool.',
    },
    servers: [{ name: 'production', url: `${SITE_URL}/mcp` }],
    methods: [
      {
        name: 'book_free_call',
        summary: 'Schedule a free, no-pressure 30-minute call with Lumen Web Studio.',
        params: [],
        result: {
          name: 'callResult',
          schema: { type: 'object', properties: {} },
        },
      },
    ],
  }
  return json(openrpc)
}

export function webmcpCatalogueResponse() {
  return json({
    version: '0.2.0',
    tools: TOOLS,
  })
}

export function healthResponse() {
  return json({ status: 'ok', service: SERVER_NAME, version: SERVER_VERSION }, 200, 'application/json', 'no-store')
}

/* ------------------------------------------------------------------ */
/*  Markdown for Agents (Accept: text/markdown)                        */
/* ------------------------------------------------------------------ */

export function buildMarkdownResponse(env) {
  const text = env.SITE_MARKDOWN
  return new Response(text, {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokenCount(text)),
      'cache-control': 'public, max-age=3600',
      ...corsHeaders(),
    },
  })
}

/* ------------------------------------------------------------------ */
/*  MCP Streamable HTTP server (/mcp)                                  */
/* ------------------------------------------------------------------ */

export function mcpServerInfo() {
  return { name: SERVER_NAME, version: SERVER_VERSION }
}

export function mcpInitializeResult(protocolVersion) {
  return {
    protocolVersion,
    capabilities: { tools: { listChanged: false } },
    serverInfo: mcpServerInfo(),
  }
}

function jsonRpcError(id, code, message) {
  return { jsonrpc: '2.0', id: id ?? null, error: { code, message } }
}

function pickProtocol(requested) {
  if (requested && MCP_PROTOCOL_VERSIONS.includes(requested)) return requested
  return MCP_PROTOCOL_VERSIONS[0]
}

export function handleJsonRpcMessage(message) {
  if (!message || message.jsonrpc !== '2.0' || typeof message.method !== 'string') {
    return jsonRpcError(message && message.id, -32600, 'Invalid Request')
  }
  const { id, method, params } = message

  switch (method) {
    case 'initialize':
      return { jsonrpc: '2.0', id, result: mcpInitializeResult(pickProtocol(params && params.protocolVersion)) }
    case 'ping':
      return { jsonrpc: '2.0', id, result: {} }
    case 'tools/list':
      return { jsonrpc: '2.0', id, result: { tools: TOOLS } }
    case 'tools/call': {
      if (!params || params.name !== 'book_free_call') {
        return jsonRpcError(id, -32602, 'Unknown tool. Available tools: book_free_call')
      }
      return {
        jsonrpc: '2.0',
        id,
        result: {
          content: [
            {
              type: 'text',
              text: `Book your free 30-minute, no-pressure call with Lumen Web Studio here: ${CALENDLY}`,
            },
          ],
          isError: false,
        },
      }
    }
    case 'notifications/initialized':
    case 'notifications/cancelled':
      return null
    default:
      return jsonRpcError(id, -32601, `Method not found: ${method}`)
  }
}

async function handleMcpHttp(request) {
  if (request.method === 'OPTIONS') return corsPreflight()

  if (request.method === 'GET') {
    return json({
      ...mcpInitializeResult(MCP_PROTOCOL_VERSIONS[0]),
      instructions: `Connect to this MCP server via ${SITE_URL}/mcp. Server card: ${SITE_URL}/.well-known/mcp/server-card.json`,
    })
  }

  if (request.method === 'POST') {
    let body
    try {
      body = await request.json()
    } catch {
      return json(jsonRpcError(null, -32700, 'Parse error'), 400)
    }

    const batch = Array.isArray(body) ? body : [body]
    const results = []
    for (const message of batch) {
      const result = handleJsonRpcMessage(message)
      if (result !== null) results.push(result)
    }

    if (results.length === 0) {
      return new Response(null, { status: 202, headers: corsHeaders() })
    }
    const single = !Array.isArray(body) && results.length === 1
    return json(single ? results[0] : results)
  }

  return new Response('Method Not Allowed', { status: 405, headers: corsHeaders() })
}

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
  async fetch(request, env) {
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
      return buildMarkdownResponse(env)
    }

    const response = await fetchOrigin(request)
    return enhanceHtmlResponse(response)
  },
}