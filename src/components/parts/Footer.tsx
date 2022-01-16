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
      paddingX={3}
      paddingY={2}
      sx={{
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
