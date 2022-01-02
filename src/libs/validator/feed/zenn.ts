import { ajv } from 'consts'
import { ZennFeedSchema, ZennContentMetaSchema } from 'types/schemas/feeds/zenn'
import type { ZennFeed, ZennFeedItem } from 'types/feed'

// type inference is not supported for JTDDataType yet
export const zennFeedValidator = ajv.compile<ZennFeed>(ZennFeedSchema)
// serialize will only accept data compatible with ZennFeed
export const zennFeedSerializer = ajv.compileSerializer<ZennFeed>(ZennFeedSchema)
// parse will return ZennFeed or undefined
export const zennFeedParser = ajv.compileParser<ZennFeed>(ZennFeedSchema)

// type inference is not supported for JTDDataType yet
export const zennFeedItemValidator = ajv.compile<ZennFeedItem>(ZennContentMetaSchema)
// serialize will only accept data compatible with ZennFeedItem
export const zennFeedItemSerializer = ajv.compileSerializer<ZennFeedItem>(ZennContentMetaSchema)
// parse will return ZennFeedItem or undefined
export const zennFeedItemParser = ajv.compileParser<ZennFeedItem>(ZennContentMetaSchema)
