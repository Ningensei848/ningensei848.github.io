import { writeFile } from 'fs/promises'
import RSSparser from 'rss-parser'

import {
  TIMESTAMP,
  siteAuthor,
  siteName,
  origin,
  GENERATE_ATOMFEED,
  FILENAME_ATOMFEED,
  FILEPATH_ATOMFEED
} from 'src/consts'

import { escapeHTML } from './escape'
import {
  zennFeedItemValidator as isValidZennFeed,
  ScrapboxFeedItemValidator as isValidScraoboxFeed,
  GithubFeedItemValidator as isValidGithubFeed
} from './validator'

import type { MyFeedItem } from 'src/types/feed'

type ParsedFeedItem = {
  [key: string]: unknown
} & RSSparser.Output<{
  [key: string]: unknown
}>

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
  if (GENERATE_ATOMFEED) {
    await writeFile(FILEPATH_ATOMFEED, atomTemplate(entries.join('\n')))
  }
}

/*
  静的サイトでも自前で RSS (Atom) フィードを配信する - Neo's World
  cf. https://neos21.net/blog/2020/11/30-01.html
*/
