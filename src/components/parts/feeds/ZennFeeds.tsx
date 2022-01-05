import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material'
import {
  OpenInNew as OpenInNewIcon,
  ExpandMore as ExpandMoreIcon,
  CallMade as ExternalLinkIcon
} from '@mui/icons-material'

import { NextLinkComposed } from 'components/Link'
import { ZennIcon } from 'components/parts/icons'

import type { ZennFeedItem } from 'types/feed'

export const ZennArticles = ({ items }: { items: ZennFeedItem[] }) => {
  const [expanded, setExpanded] = useState<string | false>(items[0].guid)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      <Typography component='h3' variant='h4'>
        <ZennIcon fontSize='small' /> Zenn Articles
      </Typography>
      <Box mt={2}>
        {items.map((item) => {
          const linkProps = {
            component: NextLinkComposed,
            to: item.link,
            target: '_blank',
            rel: 'noreferer noopener'
          }

          return (
            <Accordion
              key={item.guid}
              expanded={expanded === item.guid}
              onChange={handleChange(item.guid)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color='action' />}
                aria-controls={`content-${item.guid}`}
                id={`panel-${item.guid}`}
              >
                {expanded === item.guid || <Typography color='primary'>{item.title}</Typography>}
              </AccordionSummary>
              <AccordionDetails>
                <Card elevation={0} sx={{ width: '100%' }}>
                  <CardActionArea {...linkProps}>
                    <CardMedia
                      component='img'
                      loading='lazy'
                      image={item.enclosure.url}
                      alt={item.title}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography component='p' variant='body2' color='text.secondary'>
                      {item.contentSnippet}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button {...linkProps} fullWidth endIcon={<ExternalLinkIcon />}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </>
  )
}

export const ZennScraps = ({ items }: { items: ZennFeedItem[] }) => (
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