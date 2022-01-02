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
  Backup as BackupIcon,
  AddCircle as AddCircleIcon,
  QuestionAnswer as IssueIcon,
  Stars as StarIcon
} from '@mui/icons-material'

import { GithubFeed, GithubFeedItem } from 'types/feed'
import Link from 'components/Link'

const getContent = (event: string, list: string[]): string => {
  if (event.match(/create/i)) {
    if (list[3].match(/branch/i)) {
      return `${list[4]} branch in ${list[6].replace(/^Ningensei848\//, '')}`
    } else if (list[3].match(/repository/i)) {
      return `a repository ${list[4].replace(/^Ningensei848\//, '')}`
    }
  } else if (event.match(/issue/i)) {
    return `${list[1]} in ${list[5]}`
  } else if (event.match(/watch/i)) {
    return list[2]
  }

  return `to ${list[3]} branch in ${list[5].replace(/^Ningensei848\//, '')}`
}

const EventDot = ({ event }: { event: string }) => {
  if (event.match(/create/i)) {
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
  } else {
    // push
    return (
      <TimelineDot>
        <BackupIcon />
      </TimelineDot>
    )
  }
}
export const FeedFromGithub = ({ feed }: { feed: GithubFeed }) => {
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
