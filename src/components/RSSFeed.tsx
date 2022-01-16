import dynamic from 'next/dynamic'
import { Box } from '@mui/material'
import RSSparser from 'rss-parser'

import {
  zennFeedValidator as isValidZenn,
  ScrapboxFeedValidator as isValidScraobox,
  GithubFeedValidator as isValidGithub
} from 'src/libs/validator'

import type { ZennFeedItem } from 'src/types/feed'

type RSSFeedProps = {
  feedList: {
    feed: {
      [key: string]: unknown
    } & RSSparser.Output<{
      [key: string]: unknown
    }>
  }[]
}

const ZennArticles = dynamic(() => import('src/components/parts/feeds/ZennArticles'))
const ZennScraps = dynamic(() => import('src/components/parts/feeds/ZennScraps'))
const FeedFromScrapbox = dynamic(() => import('src/components/parts/feeds/ScrapboxFeeds'))
const FeedFromGithub = dynamic(() => import('src/components/parts/feeds/GithubFeeds'))

const RSSFeed = ({ feedList }: RSSFeedProps) => {
  const feeds = feedList
    .map((elem) => {
      const { feed } = elem
      if (isValidZenn(feed)) {
        const articleItems = feed.items.filter((item: ZennFeedItem) => item.contentSnippet)
        const scrapItems = feed.items.filter((item: ZennFeedItem) => !item.contentSnippet)
        return [
          <ZennArticles key='feed-zenn-article' items={articleItems} />,
          <ZennScraps key='feed-zenn-scrap' items={scrapItems} />
        ]
      } else if (isValidScraobox(feed)) {
        return <FeedFromScrapbox key='feed-scrapbox' feed={feed} />
      } else if (isValidGithub(feed)) {
        return <FeedFromGithub key='feed-github' feed={feed} />
      } else {
        // console.log(Object.keys(feed))
        // feed.items.map((item) => console.log(Object.keys(item)))
        throw new Error('failed to parsing feed')
      }
    })
    .flat()

  return (
    <>
      {feeds.map((feed, idx) => (
        <Box key={idx} mt={2} width='100%'>
          {feed}
        </Box>
      ))}
    </>
  )
}

export default RSSFeed
