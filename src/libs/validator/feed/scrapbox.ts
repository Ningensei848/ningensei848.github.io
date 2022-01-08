import { ajv } from 'src/consts'
import { ScrapboxFeedSchema, ScrapboxContentMetaSchema } from 'src/types/schemas/feeds/scrapbox'
import type { ScrapboxFeed, ScrapboxFeedItem } from 'src/types/feed'

// type inference is not supported for JTDDataType yet
export const ScrapboxFeedValidator = ajv.compile<ScrapboxFeed>(ScrapboxFeedSchema)
// serialize will only accept data compatible with ScrapboxFeed
export const ScrapboxFeedSerializer = ajv.compileSerializer<ScrapboxFeed>(ScrapboxFeedSchema)
// parse will return ScrapboxFeed or undefined
export const ScrapboxFeedParser = ajv.compileParser<ScrapboxFeed>(ScrapboxFeedSchema)

// type inference is not supported for JTDDataType yet
export const ScrapboxFeedItemValidator = ajv.compile<ScrapboxFeedItem>(ScrapboxContentMetaSchema)
// serialize will only accept data compatible with ScrapboxFeedItem
export const ScrapboxFeedItemSerializer =
  ajv.compileSerializer<ScrapboxFeedItem>(ScrapboxContentMetaSchema)
// parse will return ScrapboxFeedItem or undefined
export const ScrapboxFeedItemParser = ajv.compileParser<ScrapboxFeedItem>(ScrapboxContentMetaSchema)
