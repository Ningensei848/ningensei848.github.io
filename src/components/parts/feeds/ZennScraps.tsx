import { Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import { OpenInNew as OpenInNewIcon } from '@mui/icons-material'

import { NextLinkComposed } from 'src/components/Link'
import { ZennIcon } from 'src/components/parts/icons'

import type { ZennFeedItem } from 'src/types/feed'

const ZennScraps = ({ items }: { items: ZennFeedItem[] }) => (
  <>
    <Typography component='h3' variant='h4'>
      <ZennIcon fontSize='small' /> Zenn Scraps
    </Typography>
    <List>
      {items.map((item) => (
        <ListItem key={item.guid} disablePadding>
          <ListItemButton
            component={NextLinkComposed}
            to={item.link}
            target='_blank'
            rel='noreferer noopener'
          >
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{ color: 'secondary' }}
              secondary={`update at: ${item.pubDate}`}
            />
            <OpenInNewIcon fontSize='small' color='action' />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </>
)

export default ZennScraps
