import { ajv } from 'consts'
import { ZennFeedSchema } from 'types/schemas/feeds/zenn'
import type { ZennFeed } from 'types/feed'

// type inference is not supported for JTDDataType yet
export const zennFeedValidator = ajv.compile<ZennFeed>(ZennFeedSchema)

// serialize will only accept data compatible with ZennFeed
export const zennFeedSerializer = ajv.compileSerializer<ZennFeed>(ZennFeedSchema)

// parse will return ZennFeed or undefined
export const zennFeedParser = ajv.compileParser<ZennFeed>(ZennFeedSchema)
