// scrap には content がない

// {
//   "creator": "kiai",
//   "title": "dockerのメモ",
//   "link": "https://zenn.dev/ningensei848/scraps/22b312d5195979",
//   "pubDate": "Sun, 10 Jan 2021 07:34:53 GMT",
//   "enclosure": {
//     "url": "https://zenn.dev/images/logo-only-dark.png",
//     "length": "0",
//     "type": "image/png"
//   },
//   "dc:creator": "kiai",
//   "guid": "https://zenn.dev/ningensei848/scraps/22b312d5195979",
//   "isoDate": "2021-01-10T07:34:53.000Z"
// },

export const ZennContentMetaSchema = {
  additionalProperties: true,
  optionalProperties: { content: { type: 'string' }, contentSnippet: { type: 'string' } },
  properties: {
    title: { type: 'string' },
    link: { type: 'string' },
    isoDate: { type: 'timestamp' },
    // optional ? ----------------------
    enclosure: {
      additionalProperties: true,
      properties: {
        url: { type: 'string' }
        // length: { type: 'string' },
        // type: { type: 'string' }
      }
    },
    guid: { type: 'string' },
    pubDate: { type: 'string' }
    // creator: { type: 'string' },
    // 'dc:creator': { type: 'string' },
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
