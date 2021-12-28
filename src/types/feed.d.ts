import { JTDDataType } from 'ajv/dist/jtd'

import { ZennFeedSchema } from './schemas/feed'

type ZennFeed = JTDDataType<typeof ZennFeedSchema>
