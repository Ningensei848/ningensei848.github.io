export const ScrapboxContentMetaSchema = {
  additionalProperties: true,
  properties: {
    title: { type: 'string' },
    link: { type: 'string' },
    content: { type: 'string' },
    isoDate: { type: 'timestamp' },
    // optional ? --------------------
    pubDate: { type: 'string' },
    contentSnippet: { type: 'string' },
    guid: { type: 'string' }
  }
} as const

export const ScrapboxFeedSchema = {
  additionalProperties: true,
  properties: {
    title: { type: 'string' },
    link: { type: 'string' },
    description: { type: 'string' },
    lastBuildDate: { type: 'string' },
    docs: { type: 'string' },
    generator: { type: 'string' },
    items: { elements: ScrapboxContentMetaSchema }
  }
} as const
