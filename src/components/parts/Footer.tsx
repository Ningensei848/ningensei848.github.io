import { Box, Container, Typography } from '@mui/material'

import Link from 'src/components/Link'

const Copyright = () => {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link color='inherit' href='/'>
        Ningensei848
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
      }}
    >
      <Container maxWidth='lg'>
        <Typography variant='body1'>built with Next.js + Mui</Typography>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
