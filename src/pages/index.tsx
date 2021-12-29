import Image from 'next/image'
import {
  Stack,
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
  // Timeline as TimelineIcon,
  // LocalLibrary as NoteIcon,  // for markdown
  AccountCircle as ProfileIcon,
  // RssFeed as RssFeedIcon,
  CollectionsBookmark as LinkIcon
} from '@mui/icons-material'
import { TwitterTimeline } from 'components/parts/Twitter'
import { NextLinkComposed } from 'components/Link'

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

const Item = ({ children, name }: { children: ReactNode; name: string }) => (
  <ListItem disablePadding>
    <ListItemButton component={NextLinkComposed} to={`/${name.toLowerCase()}`}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  </ListItem>
)

const Index = () => {
  const isViewportMedium = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <Container maxWidth='md'>
      <Box mt={2}>
        <Image
          src='/images/nono4rsibus.jpg'
          width={800}
          height={450}
          objectFit='contain'
          alt='hero image'
        />
      </Box>
      <List>
        {/* <Item name='Timeline'>
            <TimelineIcon />
          </Item> */}
        {/* for markdown pages */}
        {/* <Item name='Note'>
            <NoteIcon />
          </Item> */}
        <Item name='Profile'>
          <ProfileIcon />
        </Item>
        {/* <Item name='RSS'>
            <RssFeedIcon />
          </Item> */}
        <Item name='Link'>
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
