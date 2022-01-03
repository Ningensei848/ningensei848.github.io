// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { writeFile } from 'fs/promises'
import { Container, Box, Typography, IconButton, Divider } from '@mui/material'
import { RssFeed as RssFeedIcon } from '@mui/icons-material'
import RSSparser from 'rss-parser'

import {
  FEEDS,
  TIMESTAMP,
  siteAuthor,
  siteName,
  origin,
  FILENAME_ATOMFEED,
  FILEPATH_ATOMFEED
} from 'consts'

import {
  zennFeedValidator as isValidZenn,
  zennFeedItemValidator as isValidZennFeed,
  ScrapboxFeedValidator as isValidScraobox,
  ScrapboxFeedItemValidator as isValidScraoboxFeed,
  GithubFeedValidator as isValidGithub,
  GithubFeedItemValidator as isValidGithubFeed
} from 'libs/validator'
import { escapeHTML } from 'libs/escape'
import { url } from 'libs/util'
import Link, { NextLinkComposed } from 'components/Link'
import { FeedFromScrapbox, FeedFromGithub, ZennArticles, ZennScraps } from 'components/parts/feeds'

// Next.js の InferGetStaticPropsType が便利 @catnose99 | zenn.dev
// cf. https://zenn.dev/catnose99/articles/7201a6c56d3c88
import type { InferGetStaticPropsType } from 'next'
import type { MyFeedItem, ZennFeedItem } from 'types/feed'

/*
  静的サイトでも自前で RSS (Atom) フィードを配信する - Neo's World
  cf. https://neos21.net/blog/2020/11/30-01.html
*/
const atomTemplate = (entries: string) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom" xml:lang="ja">
    <title>${siteName}</title>
    <id>${origin}</id>
    <author>
      <name>${siteAuthor}</name>
    </author>
    <link rel="alternate" type="text/html" href="${origin}/"/>
    <link rel="self" type="application/atom+xml" href="${origin}/${FILENAME_ATOMFEED}"/>
    <updated>${TIMESTAMP.split('.')[0] + 'Z'}</updated>
    ${entries}
  </feed>
  `
}

type ParsedFeedItem = {
  [key: string]: unknown
} & RSSparser.Output<{
  [key: string]: unknown
}>

export const generateRSSFile = async (feedList: Array<{ feed: ParsedFeedItem }>) => {
  // 書き込む内容を準備
  const items = feedList.map((elem) => {
    return elem.feed.items.map((item) => {
      if (isValidZennFeed(item)) {
        const { title, link, content, isoDate } = item
        return {
          provider: 'zenn',
          id: item.guid,
          title,
          link,
          content: content || `${title} | scrap from Zenn.dev`,
          isoDate
        } as MyFeedItem
      } else if (isValidScraoboxFeed(item)) {
        const { title, link, content, isoDate } = item
        return {
          provider: 'scrapbox',
          id: item.guid,
          title,
          link,
          content,
          isoDate
        } as MyFeedItem
      } else if (isValidGithubFeed(item)) {
        const { title, link, content, isoDate } = item
        return {
          provider: 'github',
          id: item.id + '/',
          title,
          link,
          content,
          isoDate
        } as MyFeedItem
      } else {
        console.log(Object.keys(item))
        throw new Error('[generateRSSFile] failed to parsing feed')
      }
    })
  })

  const sortedItems = items.flat().sort((a, b) => (a.isoDate > b.isoDate ? -1 : 1))

  const entries = sortedItems.map((item: MyFeedItem) => {
    const { provider, id, title, link, content, isoDate } = item
    const updateAt = isoDate.toString().split('.')[0] + 'Z'

    if (provider == 'zenn') {
      return `
      <entry>
        <title type="html">${title}</title>
        <id>${id}</id>
        <link rel="alternate" type="text/html" href="${link}"/>
        <updated>${updateAt}</updated>
        <content type="text">${content}</content>
      </entry>`
    } else {
      return `
      <entry>
        <title type="html">${title}</title>
        <id>${id}</id>
        <link rel="alternate" type="text/html" href="${link}"/>
        <updated>${updateAt}</updated>
        <content type="html">${escapeHTML(content)}</content>
      </entry>`
    }
  })

  // ファイルに書き込んで保存
  await writeFile(FILEPATH_ATOMFEED, atomTemplate(entries.join('\n')))
}

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
      <Box mt={3} width='100%'>
        <Typography component='h1' variant='h4' ml={-1}>
          <IconButton
            aria-label='atom-feed'
            component={NextLinkComposed}
            to={url(`/${FILENAME_ATOMFEED}`)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <RssFeedIcon />
          </IconButton>
          RSS Feeds from My Activity
        </Typography>
        <Typography component='p' variant='body1' ml={5} my={3}>
          <Link href={url(`/${FILENAME_ATOMFEED}`)} target='_blank' rel='noopener noreferrer'>
            Subscribe
          </Link>{' '}
          for more great contents.
        </Typography>
      </Box>
      <Divider />
      {feeds.map((feed, idx) => (
        <Box key={idx} mt={2} width='100%'>
          {feed}
        </Box>
      ))}
    </Container>
  )
}

export default RSSFeeds
