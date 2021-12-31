import { ajv } from 'consts'
import { GithubFeedSchema } from 'types/schemas/feeds/github'
import type { GithubFeed } from 'types/feed'

// type inference is not supported for JTDDataType yet
export const GithubFeedValidator = ajv.compile<GithubFeed>(GithubFeedSchema)

// serialize will only accept data compatible with GithubFeed
export const GithubFeedSerializer = ajv.compileSerializer<GithubFeed>(GithubFeedSchema)

// parse will return GithubFeed or undefined
export const GithubFeedParser = ajv.compileParser<GithubFeed>(GithubFeedSchema)
