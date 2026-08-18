/**
 * Lumen Web Studio — Cloudflare Worker core logic (pure, Node-testable)
 *
 * Every exported function here uses only standard Web APIs, so this file runs
 * unchanged in plain Node (`node test.mjs`). The deployable Worker shell
 * (`worker.js`) imports this + the `site.md` text module and wires the router.
 */

export const CALENDLY = 'https://calendly.com/newmeharemail/30min'
export const SITE_URL = 'https://lumensweb.com'
export const SERVER_NAME = 'lumen-web-studio'
export const SERVER_VERSION = '1.0.0'
export const MCP_PROTOCOL_VERSIONS = ['2025-03-26', '2025-06-18']

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

export function corsHeaders() {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type, accept, mcp-session-id, authorization',
  }
}

export function json(data, status = 200, contentType = 'application/json', cache = 'public, max-age=3600') {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': `${contentType}; charset=utf-8`,
      'cache-control': cache,
      ...corsHeaders(),
    },
  })
}

export function corsPreflight() {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

export function tokenCount(text) {
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

export function buildMarkdownResponse(markdown) {
  return new Response(markdown, {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokenCount(markdown)),
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

export async function handleMcpHttp(request) {
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