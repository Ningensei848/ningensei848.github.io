export const MyFeedItemSchema = {
  additionalProperties: true,
  properties: {
    id: { type: 'string' },
    provider: { type: 'string' },
    title: { type: 'string' },
    link: { type: 'string' },
    content: { type: 'string' },
    isoDate: { type: 'timestamp' }
  }
} as const
