export function registerWebMCPTools(cta) {
  const webmcp = globalThis.navigator?.modelContext
  if (!webmcp || typeof webmcp.provideContext !== 'function') return

  const tools = [
    {
      name: 'book_free_call',
      description:
        "Open the booking page so the visitor can schedule a free, no-pressure 30-minute call with Lumen Web Studio. Returns the booking URL on success.",
      inputSchema: {
        type: 'object',
        properties: {},
      },
      async execute() {
        return { success: true, bookingUrl: cta.href }
      },
    },
  ]

  try {
    webmcp.provideContext({ tools })
  } catch {
    /* WebMCP is experimental — never let a failure touch the page */
  }
}
