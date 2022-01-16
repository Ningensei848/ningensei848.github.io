import dynamic from 'next/dynamic'
import { Container, Box, Typography, IconButton, Divider } from '@mui/material'
import { RssFeed as RssFeedIcon } from '@mui/icons-material'
import RSSparser from 'rss-parser'

import { FEEDS, FILENAME_ATOMFEED } from 'src/consts'

import { url } from 'src/libs/util'
import Link, { NextLinkComposed } from 'src/components/Link'
import { default as Backdrop } from 'src/components/parts/Backdrop'

// Next.js の InferGetStaticPropsType が便利 @catnose99 | zenn.dev
// cf. https://zenn.dev/catnose99/articles/7201a6c56d3c88
import type { InferGetStaticPropsType } from 'next'
import { generateRSSFile } from 'src/libs'

export const getStaticProps = async () => {
  const rssParser: RSSparser = new RSSparser()

  const promises = FEEDS.map(async (url) => {
    return { feed: await rssParser.parseURL(url) }
  })

  const feedList = await Promise.all(promises)

  await generateRSSFile(feedList)

  return {
    props: { feedList }
  }
}

const RSSFeeds = dynamic(() => import('src/components/RSSFeed'), {
  loading: () => <Backdrop flag={true} />
})

// getStaticProps はビルド時にsitemap.xml を作成するために使う
// ページ内の RSSFeed は swr で適宜取得する（キャッシュできるといいね）
const RSSPagePortal = ({ feedList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container maxWidth='md'>
      <Box mt={3} width='100%'>
        <Typography component='h1' variant='h4' ml={-1}>
          <IconButton
            aria-label='atom-feed'
            component={NextLinkComposed}
            to={url(`/${FILENAME_ATOMFEED}`)}
            prefetch={false}
            target='_blank'
            rel='noopener noreferrer'
          >
            <RssFeedIcon />
          </IconButton>
          RSS Feeds from My Activity
        </Typography>
        <Typography component='p' variant='body1' ml={5} my={3}>
          <Link
            href={url(`/${FILENAME_ATOMFEED}`)}
            prefetch={false}
            target='_blank'
            rel='noopener noreferrer'
          >
            Subscribe
          </Link>{' '}
          for more great contents.
        </Typography>
      </Box>
      <Divider />
      <RSSFeeds feedList={feedList} />
    </Container>
  )
}

export default RSSPagePortal
