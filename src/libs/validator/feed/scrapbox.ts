import { ajv } from 'consts'
import { ScrapboxFeedSchema } from 'types/schemas/feeds/scrapbox'
import type { ScrapboxFeed } from 'types/feed'

// type inference is not supported for JTDDataType yet
export const ScrapboxFeedValidator = ajv.compile<ScrapboxFeed>(ScrapboxFeedSchema)

// serialize will only accept data compatible with ScrapboxFeed
export const ScrapboxFeedSerializer = ajv.compileSerializer<ScrapboxFeed>(ScrapboxFeedSchema)

// parse will return ScrapboxFeed or undefined
export const ScrapboxFeedParser = ajv.compileParser<ScrapboxFeed>(ScrapboxFeedSchema)
