import { Container, Grid } from '@mui/material'
import { FEEDS } from 'consts'
import { getFeed } from 'libs/rssfeed'
import {
  zennFeedValidator as isValidZenn,
  ScrapboxFeedValidator as isValidScraobox,
  GithubFeedValidator as isValidGithub
} from 'libs/validator/feed'

import { FeedFromScrapbox, FeedFromGithub, ZennArticles, ZennScraps } from 'components/parts/feeds'

// Next.js の InferGetStaticPropsType が便利 @catnose99 | zenn.dev
// cf. https://zenn.dev/catnose99/articles/7201a6c56d3c88
import type { InferGetStaticPropsType } from 'next'
import type { ZennFeedItem } from 'types/feed'

export const getStaticProps = async () => {
  const promises = FEEDS.map(async (url) => {
    return { feed: await getFeed(url) }
  })

  return {
    props: { feedList: await Promise.all(promises) }
  }
}

// getStaticProps はビルド時にsitemap.xml を作成するために使う
// ページ内の RSSFeed は swr で適宜取得する（キャッシュできるといいね）
const RSSFeeds = ({ feedList }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
    <Container maxWidth='md'>
      <Grid container my={1} spacing={1}>
        {feeds.map((feed, idx) => (
          <Grid key={idx} item xs={12} md={6}>
            {feed}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default RSSFeeds
