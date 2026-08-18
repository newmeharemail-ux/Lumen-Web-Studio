# Cloudflare Worker — Lumen Web Studio agent edge layer

Adds the agent-discovery surfaces GitHub Pages cannot serve. Fronts `lumensweb.com`
(origin = GitHub Pages), proxies everything through, and adds:

| Surface | Path | What it provides |
|---------|------|------------------|
| Link headers (RFC 8288) | every HTML response | `api-catalog`, `describedby`, `webmcp` relations |
| Markdown for Agents | `/` with `Accept: text/markdown` | `text/markdown` body + `x-markdown-tokens` |
| API catalog (RFC 9727) | `/.well-known/api-catalog` | `application/linkset+json` → `/mcp` |
| MCP Server Card (SEP-2127) | `/.well-known/mcp/server-card.json` | `serverInfo`, `remotes` endpoint, `capabilities` |
| MCP Streamable HTTP server | `/mcp` | real `book_free_call` tool (`initialize`, `tools/list`, `tools/call`) |
| OpenRPC service description | `/.well-known/mcp/openrpc.json` | `service-desc` target for the catalog |
| WebMCP tool catalogue | `/.well-known/webmcp` (+ `.json`, `/mcp.json`) | tool definitions, `rel="webmcp"` target |
| Health | `/health` | `status` rel target for the catalog |

## Prerequisites

- Zone **lumensweb.com** is managed on Cloudflare (DNS + domain already there).
- The `lumensweb.com` (and `www`) DNS records are **proxied** (orange-cloud ON) —
  Worker routes only fire for proxied records.
- Wrangler authenticated to the account that owns the zone: `npx wrangler login`.

## Deploy

```sh
npx wrangler deploy   # from this directory (cloudflare/)
```

Rerun after any change to `worker.js` or `site.md`. The Worker routes on
`lumensweb.com/*` and `www.lumensweb.com/*`, so it activates the moment
proxying is on. Nothing else on GitHub Pages changes.

## DNS-AID records (findings #2)

Once `/mcp` exists (above), publish the well-known entry point in Cloudflare
DNS → Add record → type **SVCB**:

```
Name:    _index._agents.lumensweb.com
TTL:     Auto
Service: 1
Target:  lumensweb.com
Params:  alpn="mcp,h2" port=443 well-known="/.well-known/mcp/server-card.json" mandatory=alpn,port
```

(`_a2a._agents` is intentionally **not** published — there is no Agent2Agent
endpoint; advertising one would be fabricated metadata.)

Then sign the discovery zone with **DNSSEC** (Cloudflare DNS → Settings →
DNSSEC → Enable; add the generated **DS** record at the registrar). DNS-AID
consumers validate via DNSSEC so records resolve as authenticated data.

## Verify (after proxy + worker are live)

```sh
curl -sI https://lumensweb.com/                                  # Link: headers present
curl -s -H "Accept: text/markdown" https://lumensweb.com/ -D -   # text/markdown + x-markdown-tokens
curl -s https://lumensweb.com/.well-known/api-catalog -D -       # application/linkset+json
curl -s https://lumensweb.com/.well-known/mcp/server-card.json   # serverInfo + remotes
curl -s -X POST https://lumensweb.com/mcp -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
curl -s https://cloudflare-dns.com/dns-query?name=_index._agents.lumensweb.com\&type=SVCB -H "accept: application/dns-json"
```

Then re-run the isitagentready scan (`POST https://isitagentready.com/api/scan` with `{"url": "https://lumensweb.com"}`).

## Local test

`worker.js` is pure JS (no Cloudflare-only APIs in the logic), so it runs in
plain Node:

```sh
node test.mjs
```

## Not implemented (and why)

- **OAuth/OIDC discovery, protected-resource, auth.md** — the site has no
  protected APIs and the `/mcp` server is public (no auth). Publishing
  auth metadata that points at non-existent endpoints would be fabricated.
- Revisit if a protected API or agent registration flow is ever added.