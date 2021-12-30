import {
  useMediaQuery,
  Container,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton
} from '@mui/material'

import {
  CallMade as ExternalLinkIcon,
  East as InternalLinkIcon,
  // Timeline as TimelineIcon,
  // LocalLibrary as NoteIcon,  // for markdown
  AccountCircle as ProfileIcon,
  // RssFeed as RssFeedIcon,
  CollectionsBookmark as LinkIcon
} from '@mui/icons-material'

import { TwitterTimeline } from 'components/parts/Twitter'
import { NextLinkComposed } from 'components/Link'
import { ScrapboxIcon, ZennIcon } from 'components/parts/icons'

import type { ReactNode } from 'react'
import type { Theme } from '@mui/material'

// Next.js の InferGetStaticPropsType が便利 @catnose99 | zenn.dev
// cf. https://zenn.dev/catnose99/articles/7201a6c56d3c88
// import type { InferGetStaticPropsType } from 'next'

// export const getStaticProps = async () => {
//   const promises = FEEDS.map(async (feed) => {
//     const { id, title, url } = feed
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     const detailedFeed = await getFeed(url)
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     return { id, title, feed: detailedFeed }
//   })

//   return {
//     props: { feeds: await Promise.all(promises) }
//   }
// }

// const Index = ({ feeds }: InferGetStaticPropsType<typeof getStaticProps>) => {
// const Feeds = feeds.map((feed) => <RSSFeed key={feed.id} {...feed} />)

// const isExternal = (name: string) => name.indexOf('http') === 0 || name.indexOf('mailto:') === 0

const Item = ({
  children,
  name,
  desc,
  isViewportMedium
}: {
  children: ReactNode
  name: string
  desc: string
  isViewportMedium: boolean
}) => (
  <ListItem disablePadding>
    <ListItemButton
      component={NextLinkComposed}
      to={`/${name.replaceAll(/\s/g, '-').toLowerCase()}`}
    >
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={name} secondary={desc} />

      {isViewportMedium || (
        <ListItemIcon>
          <InternalLinkIcon />
        </ListItemIcon>
      )}
    </ListItemButton>
  </ListItem>
)

const ExternalItem = ({
  children,
  name,
  url,
  desc,
  isViewportMedium
}: {
  children: ReactNode
  name: string
  url: string
  desc: string
  isViewportMedium: boolean
}) => (
  <ListItem disablePadding>
    <ListItemButton component={NextLinkComposed} to={url} target='_blank' rel='noopener noreferrer'>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={name} secondary={desc} />
      {isViewportMedium || (
        <ListItemIcon>
          <ExternalLinkIcon />
        </ListItemIcon>
      )}
    </ListItemButton>
  </ListItem>
)

const Index = () => {
  const isViewportMedium = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <Container maxWidth='md'>
      <img src='/images/nono4rsibus.jpg' width='100%' height='auto' alt='hero' />
      <List>
        {/* <Item name='Timeline'>
            <TimelineIcon />
          </Item> */}
        {/* for markdown pages */}
        {/* <Item name='Note'>
            <NoteIcon />
          </Item> */}
        <Item name='About' desc='brief introduction about me' isViewportMedium={isViewportMedium}>
          <ProfileIcon />
        </Item>
        {/* <Item name='RSS'>
            <RssFeedIcon />
          </Item> */}

        <ExternalItem
          name='Zenn.dev'
          url='https://zenn.dev/ningensei848'
          desc='tech blog'
          isViewportMedium={isViewportMedium}
        >
          <ZennIcon fontSize='small' />
        </ExternalItem>
        <ExternalItem
          name='Scrapbox'
          url='https://scrapbox.io/Ningensei848'
          desc='idea connection pool in my mind'
          isViewportMedium={isViewportMedium}
        >
          <ScrapboxIcon fontSize='small' />
        </ExternalItem>
        <Item name='My Works' desc='' isViewportMedium={isViewportMedium}>
          <LinkIcon />
        </Item>
      </List>
      <Box display={isViewportMedium ? 'none' : undefined}>
        <TwitterTimeline width={900} height={420} theme='light' username='Ningensei848' />
      </Box>
    </Container>
  )
}

export default Index
