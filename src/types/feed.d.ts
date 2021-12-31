import { JTDDataType } from 'ajv/dist/jtd'

import { ZennFeedSchema, ZennContentMetaSchema } from './schemas/feed'

type ZennFeed = JTDDataType<typeof ZennFeedSchema>
type ZennFeedItem = JTDDataType<typeof ZennContentMetaSchema>
