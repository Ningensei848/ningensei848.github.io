export const GithubContentMetaSchema = {
  additionalProperties: true,
  properties: {
    title: { type: 'string' },
    link: { type: 'string' },
    content: { type: 'string' },
    isoDate: { type: 'timestamp' },

    pubDate: { type: 'string' },
    author: { type: 'string' },
    contentSnippet: { type: 'string' },
    id: { type: 'string' }
  }
} as const

export const GithubFeedSchema = {
  additionalProperties: true,
  properties: {
    link: { type: 'string' },
    feedUrl: { type: 'string' },
    title: { type: 'string' },
    lastBuildDate: { type: 'string' },
    items: { elements: GithubContentMetaSchema }
  }
} as const
