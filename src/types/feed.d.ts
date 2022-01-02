import { ZennFeedSchema, ZennContentMetaSchema } from './schemas/feeds/zenn'
import { ScrapboxFeedSchema, ScrapboxContentMetaSchema } from './schemas/feeds/scrapbox'
import { GithubFeedSchema, GithubContentMetaSchema } from './schemas/feeds/github'
import { MyFeedItemSchema } from './schemas/feeds/common'

import type { JTDDataType } from 'ajv/dist/jtd'

type ZennFeed = JTDDataType<typeof ZennFeedSchema>
type ZennFeedItem = JTDDataType<typeof ZennContentMetaSchema>

type ScrapboxFeed = JTDDataType<typeof ScrapboxFeedSchema>
type ScrapboxFeedItem = JTDDataType<typeof ScrapboxContentMetaSchema>

type GithubFeed = JTDDataType<typeof GithubFeedSchema>
type GithubFeedItem = JTDDataType<typeof GithubContentMetaSchema>

type MyFeedItem = JTDDataType<typeof MyFeedItemSchema>
