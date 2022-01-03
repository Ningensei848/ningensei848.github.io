import { Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import { OpenInNew as OpenInNewIcon, Update as UpdateIcon } from '@mui/icons-material'

import { ScrapboxFeed, ScrapboxFeedItem } from 'types/feed'
import { NextLinkComposed } from 'components/Link'
import { ScrapboxIcon } from 'components/parts/icons'

export const FeedFromScrapbox = ({ feed }: { feed: ScrapboxFeed }) => {
  const { items } = feed // feedUrl, lastBuildDate

  // title: string;
  // link: string;
  // pubDate: string;
  // content: string;
  // contentSnippet: string;
  // guid: string;
  // isoDate:

  return (
    <>
      <Typography component='h3' variant='h4'>
        <ScrapboxIcon fontSize='small' /> Scrapbox Ideas
      </Typography>
      <List>
        {items.slice(0, 9).map((item: ScrapboxFeedItem) => (
          <ListItem key={item.guid} disablePadding>
            <ListItemButton
              component={NextLinkComposed}
              to={item.link}
              target='_blank'
              rel='noreferer noopener'
            >
              <ListItemText
                primary={item.title ? item.title.replace(/\s-\s気合でなんとか.*/i, '') : 'untitled'}
                primaryTypographyProps={{ color: 'secondary' }}
                secondary={
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ verticalAlign: 'middle', display: 'inline-flex' }}
                  >
                    {item.pubDate} <UpdateIcon fontSize='small' />
                  </Typography>
                }
              />
              <OpenInNewIcon fontSize='small' color='action' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}
