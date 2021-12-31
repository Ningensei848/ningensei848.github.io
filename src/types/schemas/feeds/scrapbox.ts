export const ScrapboxContentMetaSchema = {
  additionalProperties: true,
  properties: {
    title: { type: 'string' },
    link: { type: 'string' },
    pubDate: { type: 'string' },
    content: { type: 'string' },
    contentSnippet: { type: 'string' },
    guid: { type: 'string' },
    isoDate: { type: 'timestamp' }
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
