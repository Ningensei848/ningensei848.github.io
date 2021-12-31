import { Container } from '@mui/material'
import { FEEDS } from 'consts'
import { getFeed } from 'libs/rssfeed'
import { zennFeedValidator as isValidZenn } from 'libs/validator/feed'
import { FeedFromZenn } from 'components/parts/feeds'

// Next.js の InferGetStaticPropsType が便利 @catnose99 | zenn.dev
// cf. https://zenn.dev/catnose99/articles/7201a6c56d3c88
import type { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  const promises = FEEDS.map(async (url) => {
    return { feed: await getFeed(url) }
  })

  return {
    props: { feedList: await Promise.all(promises) }
  }
}

const RSSFeeds = ({ feedList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const feeds = feedList.map((elem, idx) => {
    const { feed } = elem
    if (isValidZenn(feed)) {
      return <FeedFromZenn key={idx} feed={feed} />
    } else {
      throw new Error('failed to parsing feed')
    }
  })

  return <Container maxWidth='md'>{feeds}</Container>
}

export default RSSFeeds
