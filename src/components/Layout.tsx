import { useMediaQuery, Box, Grid } from '@mui/material'

import Footer from './parts/Footer'
import { TwitterTimeline } from 'src/components/parts/Twitter'
import { SidebarAds } from 'src/components/parts/Google'

import type { ReactNode } from 'react'
import type { Theme } from '@mui/material'

const LeftSide = () => {
  const isViewportSmall = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))
  return (
    <Grid item sm={2} display={isViewportSmall ? undefined : 'none'}>
      <Box mx={2} mt={4}>
        {/* 広告枠 */}
        <SidebarAds />
      </Box>
    </Grid>
  )
}

const RightSide = () => {
  const isViewportMedium = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <Grid item md={3} display={isViewportMedium ? undefined : 'none'}>
      <Box mx={2} height='100%' minHeight='50vh'>
        <TwitterTimeline width='100%' height='100%' theme='light' username='Ningensei848' />
      </Box>
    </Grid>
  )
}

const MainContainer = ({ children }: { children: ReactNode }) => (
  <Grid container flex={1}>
    <LeftSide />
    {/* --------- main content ------------- */}
    <Grid item xs={12} sm={10} md={7}>
      <main>{children}</main>
    </Grid>
    {/* --------- end main content --------- */}
    <RightSide />
  </Grid>
)

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box display='flex' flexDirection='column' width='100vw' minHeight='100vh'>
      {/* <AppBar /> */}
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Box>
  )
}

export default Layout
