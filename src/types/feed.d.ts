import { JTDDataType } from 'ajv/dist/jtd'

import { ZennFeedSchema, ZennContentMetaSchema } from './schemas/feeds/zenn'
import { ScrapboxFeedSchema, ScrapboxContentMetaSchema } from './schemas/feeds/scrapbox'
import { GithubFeedSchema, GithubContentMetaSchema } from './schemas/feeds/github'

type ZennFeed = JTDDataType<typeof ZennFeedSchema>
type ZennFeedItem = JTDDataType<typeof ZennContentMetaSchema>

type ScrapboxFeed = JTDDataType<typeof ScrapboxFeedSchema>
type ScrapboxFeedItem = JTDDataType<typeof ScrapboxContentMetaSchema>

type GithubFeed = JTDDataType<typeof GithubFeedSchema>
type GithubFeedItem = JTDDataType<typeof GithubContentMetaSchema>
