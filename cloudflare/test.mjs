/**
 * Local test harness for worker.js — pure Node, no Cloudflare runtime needed.
 * Run: node test.mjs
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const SITE_MARKDOWN = readFileSync(join(here, 'site.md'), 'utf8')

const {
  makeLinkHeaders,
  buildMarkdownResponse,
  apiCatalogResponse,
  serverCardResponse,
  webmcpCatalogueResponse,
  healthResponse,
  handleJsonRpcMessage,
  mcpServerInfo,
  MCP_PROTOCOL_VERSIONS,
  TOOLS,
} = await import('./worker-core.js')

let failures = 0
function check(name, cond, extra = '') {
  if (cond) {
    console.log(`  PASS  ${name}`)
  } else {
    failures += 1
    console.error(`  FAIL  ${name}${extra ? ` — ${extra}` : ''}`)
  }
}

console.log('Link headers (RFC 8288)')
const links = makeLinkHeaders()
check('three Link header values', links.length === 3, JSON.stringify(links))
check('api-catalog rel present', links.some((l) => l.includes('rel="api-catalog"')))
check('describedby rel present', links.some((l) => l.includes('rel="describedby"')))
check('webmcp rel present', links.some((l) => l.includes('rel="webmcp"')))

console.log('Markdown for Agents')
const md = buildMarkdownResponse(SITE_MARKDOWN)
check('content-type text/markdown', md.headers.get('content-type').includes('text/markdown'), md.headers.get('content-type'))
check('x-markdown-tokens present', md.headers.get('x-markdown-tokens') > '0', md.headers.get('x-markdown-tokens'))
const mdBody = await md.text()
check('body has real copy', mdBody.includes('booked installs') && mdBody.includes('Book a free call'))
check('body has contact details', mdBody.includes('newmeharemail@gmail.com'))

console.log('API catalog (RFC 9727)')
const cat = await apiCatalogResponse()
check('content-type application/linkset+json', cat.headers.get('content-type').includes('application/linkset+json'), cat.headers.get('content-type'))
const catBody = await cat.json()
check('linkset array present', Array.isArray(catBody.linkset) && catBody.linkset.length === 1)
const entry = catBody.linkset[0]
check('anchor points at /mcp', entry.anchor === 'https://lumensweb.com/mcp', entry.anchor)
check('service-desc present', Array.isArray(entry['service-desc']))
check('service-doc present', Array.isArray(entry['service-doc']))
check('status present', Array.isArray(entry.status))

console.log('MCP server card (SEP-2127)')
const card = await serverCardResponse()
const cardBody = await card.json()
check('serverInfo.name', cardBody.serverInfo && cardBody.serverInfo.name === 'lumen-web-studio')
check('serverInfo.version', cardBody.serverInfo && cardBody.serverInfo.version === '1.0.0')
check('transport endpoint in remotes', cardBody.remotes && cardBody.remotes[0].url === 'https://lumensweb.com/mcp')
check('capabilities.tools', cardBody.capabilities && cardBody.capabilities.tools)
check('tools includes book_free_call', cardBody.tools.some((t) => t.name === 'book_free_call'))

console.log('WebMCP catalogue')
const wc = await webmcpCatalogueResponse()
const wcBody = await wc.json()
check('tools array', Array.isArray(wcBody.tools) && wcBody.tools[0].name === 'book_free_call')

console.log('Health')
const h = await healthResponse()
check('status ok', (await h.json()).status === 'ok')

console.log('MCP Streamable HTTP — JSON-RPC')
const info = mcpServerInfo()
check('serverInfo', info.name === 'lumen-web-studio' && info.version === '1.0.0')
check('protocol versions', MCP_PROTOCOL_VERSIONS.includes('2025-03-26'))

const init = handleJsonRpcMessage({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-03-26' } })
check('initialize result', init.result && init.result.serverInfo.name === 'lumen-web-studio' && init.result.protocolVersion === '2025-03-26')

const list = handleJsonRpcMessage({ jsonrpc: '2.0', id: 2, method: 'tools/list' })
check('tools/list returns tool', list.result && list.result.tools.length === TOOLS.length && list.result.tools[0].name === 'book_free_call')

const call = handleJsonRpcMessage({ jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'book_free_call', arguments: {} } })
check(
  'tools/call returns booking URL',
  call.result && call.result.content[0].text.includes('calendly.com/newmeharemail/30min'),
  JSON.stringify(call),
)

const notif = handleJsonRpcMessage({ jsonrpc: '2.0', method: 'notifications/initialized' })
check('notification returns null (202)', notif === null)

const bad = handleJsonRpcMessage({ jsonrpc: '2.0', id: 9, method: 'nope' })
check('unknown method -> -32601', bad.error && bad.error.code === -32601)

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)