import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  IconButton,
  Button,
  Box,
  Grid
} from '@mui/material'
import { GitHub as GitHubIcon } from '@mui/icons-material'

import { NextLinkComposed } from 'components/Link'

const JTDV = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      action={
        <IconButton
          aria-label='github'
          component={NextLinkComposed}
          to='https://github.com/Ningensei848/jtd-validator'
        >
          <GitHubIcon />
        </IconButton>
      }
      title='jtd-validator'
      subheader='Novembar 11, 2021'
    />
    {/* <CardMedia
        component='img'
        height='140'
        image='/static/images/cards/contemplative-reptile.jpg'
        alt='green iguana'
      /> */}
    <CardContent>
      <Typography variant='body2' color='text.secondary'>
        Online Validator for JSON Typed Definition built with Next.js + TypeScript
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small' component={NextLinkComposed} to='/jtd-validator'>
        Learn More
      </Button>
    </CardActions>
  </Card>
)

const Eyjatto = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      action={
        <IconButton
          aria-label='github'
          component={NextLinkComposed}
          to='https://github.com/Ningensei848/Eyjatto'
        >
          <GitHubIcon />
        </IconButton>
      }
      title='Eyjatto'
      subheader='December 16, 2021'
    />
    {/* <CardMedia
        component='img'
        height='140'
        image='/static/images/cards/contemplative-reptile.jpg'
        alt='green iguana'
      /> */}
    <CardContent>
      <Typography variant='body2' color='text.secondary'>
        Repository server for SPARQL / No your own server, No RDB, No SSR, but Static Generation
        with Vercel.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small' component={NextLinkComposed} to='/Eyjatto'>
        Learn More
      </Button>
    </CardActions>
  </Card>
)

const Links = () => {
  return (
    <Box m={2}>
      <Typography variant='h1' component='h1'>
        Links
      </Typography>
      <Grid container mt={2} spacing={2}>
        <Grid item xs={12} md={6}>
          <JTDV />
        </Grid>
        <Grid item xs={12} md={6}>
          <Eyjatto />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Links
