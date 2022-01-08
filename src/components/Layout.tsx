import Script from 'next/script'

import { useMediaQuery, Box, Grid } from '@mui/material'

import { NINJA_ADMAX_ID } from 'src/consts'

// import AppBar from './parts/AppBar'
import Footer from './parts/Footer'
import { TwitterTimeline } from 'src/components/parts/Twitter'

import type { ReactNode } from 'react'
import type { Theme } from '@mui/material'

const Layout = ({ children }: { children: ReactNode }) => {
  const isViewportSmall = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))
  const isViewportMedium = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      {/* <AppBar /> */}
      <Grid container>
        <Grid item sm={2} display={isViewportSmall ? undefined : 'none'}>
          {/* 広告枠 */}
          <Script
            src={`https://adm.shinobi.jp/s/${NINJA_ADMAX_ID}`}
            strategy='lazyOnload'
            charSet='utf-8'
          />
        </Grid>
        <Grid item xs={12} sm={10} md={7}>
          <main>{children}</main>
        </Grid>
        <Grid item md={3} display={isViewportMedium ? undefined : 'none'}>
          <Box mx={2} height='100%'>
            <TwitterTimeline width='100%' height='100%' theme='light' username='Ningensei848' />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  )
}

export default Layout
