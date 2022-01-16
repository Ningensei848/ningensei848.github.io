import { Typography } from '@mui/material'

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab'
import {
  GitHub as GitHubIcon,
  Backup as PushIcon,
  Merge as MergeIcon,
  AddCircle as AddCircleIcon,
  QuestionAnswer as IssueIcon,
  Stars as StarIcon,
  ForkRight as ForkIcon,
  DeleteForever as DeleteIcon,
  HelpOutline as HelpIcon
} from '@mui/icons-material'

import { GithubFeed, GithubFeedItem } from 'src/types/feed'
import Link from 'src/components/Link'

const pattern_user = /^Ningensei848\//

const getContent = (event: string, list: string[]): string => {
  if (event.match(/push/i)) {
    return list.length > 5
      ? `to ${list[3]} branch in ${list[5].replace(pattern_user, '')}`
      : list.join(' ')
  } else if (event.match(/create/i)) {
    if (list[3].match(/branch/i)) {
      return list.length > 4
        ? `${list[4]} branch in ${list[6].replace(pattern_user, '')}`
        : list.join(' ')
    } else if (list[3].match(/repository/i)) {
      return list.length > 4 ? `a repository ${list[4].replace(pattern_user, '')}` : list.join(' ')
    }
  } else if (event.match(/pull/i)) {
    return list.length > 6
      ? `merged in repository ${list[6].replace(pattern_user, '')}`
      : list.join(' ')
  } else if (event.match(/issue/i)) {
    return list.length > 5 ? `${list[1]} in ${list[5]}` : list.join(' ')
  } else if (event.match(/watch/i)) {
    return list.length > 2 ? list[2] : list.join(' ')
  } else if (event.match(/delete/i)) {
    return list.length > 2 ? list.slice(2).join(' ') : list.join(' ')
  } else if (event.match(/fork/i)) {
    return `from ${list.slice(-1)[0]}` // 順序を逆にした上で先頭を取得 → 末尾要素を取得と同義
  }
  // else ...
  // 未分類イベント
  return list.join(' ')
}

// GitHub event types - GitHub Docs
// cf. https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types
const EventDot = ({ event }: { event: string }) => {
  if (event.match(/push/i)) {
    return (
      <TimelineDot>
        <PushIcon />
      </TimelineDot>
    )
  } else if (event.match(/pull/i)) {
    return (
      <TimelineDot sx={{ bgcolor: '#9c27b0' }}>
        <MergeIcon />
      </TimelineDot>
    )
  } else if (event.match(/create/i)) {
    return (
      <TimelineDot color='success'>
        <AddCircleIcon />
      </TimelineDot>
    )
  } else if (event.match(/issue/i)) {
    return (
      <TimelineDot sx={{ bgcolor: '#7057ff' }}>
        <IssueIcon />
      </TimelineDot>
    )
  } else if (event.match(/watch/i)) {
    return (
      <TimelineDot sx={{ bgcolor: '#e8e82f' }}>
        <StarIcon />
      </TimelineDot>
    )
  } else if (event.match(/delete/i)) {
    return (
      <TimelineDot color='error'>
        <DeleteIcon />
      </TimelineDot>
    )
  } else if (event.match(/fork/i)) {
    return (
      <TimelineDot color='info'>
        <ForkIcon />
      </TimelineDot>
    )
  } else {
    return (
      <TimelineDot color='warning'>
        <HelpIcon />
      </TimelineDot>
    )
  }
}
const FeedFromGithub = ({ feed }: { feed: GithubFeed }) => {
  const { items } = feed // link, feedUrl, title, lastBuildDate
  //   link: string;
  //   feedUrl: string;
  //   title: string;
  //   lastBuildDate: string;

  //   items: ({
  //       title: string;
  //       link: string;
  //       content: string;
  //       contentSnippet: string;

  return (
    <>
      <Typography component='h3' variant='h4'>
        <GitHubIcon /> GitHub Event Logs
      </Typography>
      <Timeline>
        {items.slice(0, 9).map((item: GithubFeedItem) => {
          const m = item.id.match(/.+?:(\w+?)Event.+/i)
          const event = m ? m[1] : 'Unexpected Error'
          const content = getContent(event, item.title.split(' '))

          return (
            <TimelineItem key={item.id} position='right'>
              <TimelineOppositeContent style={{ flex: 0.1 }} color='text.secondary'>
                <Typography variant='caption'>
                  {new Date(Date.parse(item.pubDate)).toLocaleString()}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <EventDot event={event} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Link
                  href={item.link}
                  target='_blank'
                  rel='noreferer noopener'
                  underline='hover'
                  color='text.secondary'
                >
                  <Typography variant='body1'>
                    {event}: <br />
                    {content}
                  </Typography>
                </Link>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </>
  )
}

export default FeedFromGithub
