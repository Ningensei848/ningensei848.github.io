/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import RSSparser from 'rss-parser'

const parser: RSSparser = new RSSparser()

export const getFeed = async (feedUrl: string) => {
  const feed = await parser.parseURL(feedUrl)

  return feed
}

// ----------------------------------------------------------------------------
export { zennFeedSerializer, zennFeedParser } from './validator/feed'
