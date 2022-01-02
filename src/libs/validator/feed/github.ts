import { ajv } from 'consts'
import { GithubFeedSchema, GithubContentMetaSchema } from 'types/schemas/feeds/github'
import type { GithubFeed, GithubFeedItem } from 'types/feed'

// type inference is not supported for JTDDataType yet
export const GithubFeedValidator = ajv.compile<GithubFeed>(GithubFeedSchema)
// serialize will only accept data compatible with GithubFeed
export const GithubFeedSerializer = ajv.compileSerializer<GithubFeed>(GithubFeedSchema)
// parse will return GithubFeed or undefined
export const GithubFeedParser = ajv.compileParser<GithubFeed>(GithubFeedSchema)

// type inference is not supported for JTDDataType yet
export const GithubFeedItemValidator = ajv.compile<GithubFeedItem>(GithubContentMetaSchema)
// serialize will only accept data compatible with GithubFeedItem
export const GithubFeedItemSerializer =
  ajv.compileSerializer<GithubFeedItem>(GithubContentMetaSchema)
// parse will return GithubFeedItem or undefined
export const GithubFeedItemParser = ajv.compileParser<GithubFeedItem>(GithubContentMetaSchema)
