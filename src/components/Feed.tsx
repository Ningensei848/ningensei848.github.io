import {
  Box,
  Button,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material'
import { OpenInNew as OpenInNewIcon } from '@mui/icons-material'

import { zennFeedValidator as isValidZenn } from 'libs/validator/feed'
import type { ZennFeed } from 'types/feed'
import { NextLinkComposed } from './Link'

interface ZennFeedProps {
  title: string
  feed: ZennFeed
}

const FeedFromZenn = ({ title, feed }: ZennFeedProps) => {
  const { feedUrl, items, lastBuildDate } = feed

  const ZennArticles = () => (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {items
        .filter((item) => item.contentSnippet)
        .map((item) => (
          <Grid key={item.guid} item xs={4}>
            <Card>
              <CardContent>
                <Typography component='h3' variant='h5'>
                  {item.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  last update: {item.pubDate}
                </Typography>
                <Typography variant='body2'>{item.contentSnippet?.slice(0, 120)}...</Typography>
              </CardContent>
              <CardActions>
                {/* component={<NextLinkComposed to={item.link} />} */}
                <Button size='small'>
                  <NextLinkComposed to={item.link} target='_blank' rel='noreferer noopener'>
                    Learn More
                  </NextLinkComposed>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  )

  const ZennScraps = () => (
    <List>
      {items
        .filter((item) => !item.contentSnippet)
        .map((item) => (
          <ListItem
            key={item.guid}
            disablePadding
            secondaryAction={
              <IconButton>
                <NextLinkComposed to={item.link} target='_blank' rel='noreferer noopener'>
                  <OpenInNewIcon />
                </NextLinkComposed>
              </IconButton>
            }
          >
            <ListItemButton>
              <ListItemText primary={item.title} secondary={`last update: ${item.pubDate}`} />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  )

  return (
    <Box>
      <Typography component='h3' variant='h4'>
        {title}
      </Typography>
      <Box>
        <ZennArticles />
        <ZennScraps />
      </Box>
      <Typography component='div' variant='caption'>
        feed update at: {lastBuildDate}
      </Typography>
    </Box>
  )
}

interface RSSFeedProps {
  id: string
  title: string
  feed: { [key: string]: any }
}

const RSSFeed = (props: RSSFeedProps): JSX.Element => {
  const { id, title, feed } = props

  if (id === 'zenn' && isValidZenn(feed)) {
    return <FeedFromZenn title={title} feed={feed} />
  } else {
    return <></>
  }
}

export default RSSFeed
