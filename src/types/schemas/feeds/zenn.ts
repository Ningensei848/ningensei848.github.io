export const ZennContentMetaSchema = {
  additionalProperties: true,
  optionalProperties: { content: { type: 'string' }, contentSnippet: { type: 'string' } },
  properties: {
    // creator: { type: 'string' },
    // 'dc:creator': { type: 'string' },
    enclosure: {
      additionalProperties: true,
      properties: {
        url: { type: 'string' }
        // length: { type: 'string' },
        // type: { type: 'string' }
      }
    },
    guid: { type: 'string' },
    isoDate: { type: 'timestamp' },
    link: { type: 'string' },
    pubDate: { type: 'string' },
    title: { type: 'string' }
  }
} as const

export const ZennFeedSchema = {
  additionalProperties: true,
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    link: { type: 'string' },
    image: {
      additionalProperties: true,
      properties: {
        url: { type: 'string' },
        title: { type: 'string' },
        link: { type: 'string' }
      }
    },
    generator: { type: 'string' },
    lastBuildDate: { type: 'string' },
    feedUrl: { type: 'string' }, // atom:link.href
    language: { type: 'string' },
    items: { elements: ZennContentMetaSchema }
  }
} as const
