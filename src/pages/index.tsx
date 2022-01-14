import {
  useMediaQuery,
  Stack,
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
  LocalLibrary as NoteIcon, // for markdown
  AccountCircle as ProfileIcon,
  RssFeed as RssFeedIcon,
  CollectionsBookmark as LinkIcon
} from '@mui/icons-material'

import Nono4rsibus from 'src/components/Nono4risubs'
import { TwitterTimeline } from 'src/components/parts/Twitter'
import { NextLinkComposed } from 'src/components/Link'
import { ScrapboxIcon, ZennIcon } from 'src/components/parts/icons'
import type { ReactNode } from 'react'
import type { Theme } from '@mui/material'

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
      prefetch={false}
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
    <ListItemButton
      component={NextLinkComposed}
      to={url}
      prefetch={false}
      target='_blank'
      rel='noopener noreferrer'
    >
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
      <Box width='100%'>
        <Nono4rsibus />
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box width='100%'>
          <List>
            {/* <Item name='Timeline'>
            <TimelineIcon />
          </Item> */}
            <Item
              name='About'
              desc='brief introduction about me'
              isViewportMedium={isViewportMedium}
            >
              <ProfileIcon />
            </Item>
            <Item
              name='RSS Feeds'
              desc='my feeds in various services'
              isViewportMedium={isViewportMedium}
            >
              <RssFeedIcon />
            </Item>
            <Item name='My Works' desc='' isViewportMedium={isViewportMedium}>
              <LinkIcon />
            </Item>
          </List>
        </Box>
        <Box width='100%'>
          <List>
            <Item name='Blog' desc='my ideas and diary' isViewportMedium={isViewportMedium}>
              <NoteIcon />
            </Item>
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
          </List>
        </Box>
      </Stack>
      <Box display={isViewportMedium ? 'none' : undefined}>
        <TwitterTimeline width='100%' height={420} theme='light' username='Ningensei848' />
      </Box>
    </Container>
  )
}

export default Index
