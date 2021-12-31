export const ZennContentMetaSchema = {
  additionalProperties: true,
  optionalProperties: { content: { type: 'string' }, contentSnippet: { type: 'string' } },
  properties: {
    creator: { type: 'string' },
    'dc:creator': { type: 'string' },
    enclosure: {
      additionalProperties: true,
      properties: {
        url: { type: 'string' },
        length: { type: 'string' },
        type: { type: 'string' }
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
    description: { type: 'string' },
    feedUrl: { type: 'string' },
    generator: { type: 'string' },
    image: {
      additionalProperties: true,
      properties: {
        link: { type: 'string' },
        url: { type: 'string' },
        title: { type: 'string' }
      }
    },
    items: { elements: ZennContentMetaSchema },
    language: { type: 'string' },
    lastBuildDate: { type: 'string' },
    link: { type: 'string' },
    paginationLinks: {
      additionalProperties: true,
      properties: {
        self: { type: 'string' }
      }
    },
    title: { type: 'string' }
  }
} as const
