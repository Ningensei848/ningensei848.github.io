import { useMediaQuery, Box, Grid } from '@mui/material'

import Footer from './parts/Footer'
import { TwitterTimeline } from 'src/components/parts/Twitter'
import { SidebarAds } from 'src/components/parts/Google'

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
          <Box width='100%' minHeight='70vh'>
            {/* 広告枠 */}
            <SidebarAds />
          </Box>
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
