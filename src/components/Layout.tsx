import dynamic from 'next/dynamic'
import { useMediaQuery, Box, Grid, CircularProgress } from '@mui/material'

import Footer from 'src/components/parts/Footer'

import type { ReactNode } from 'react'
import type { Theme } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/ban-types
const SidebarAds = dynamic<{ display: boolean }>(
  () => import('src/components/parts/Google').then((mod) => mod.SidebarAds),
  { loading: () => <CircularProgress color='primary' /> }
)

const LeftSide = (): JSX.Element => {
  const isViewportSmall = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  return (
    <Grid item sm={2} display={isViewportSmall ? undefined : 'none'}>
      <Box mx={2} mt={4} width='100%'>
        {/* 広告枠 */}
        <SidebarAds display={isViewportSmall} />
      </Box>
    </Grid>
  )
}

const TwitterTimeline = dynamic(() => import('src/components/parts/Twitter'), {
  loading: () => <CircularProgress color='primary' />
})

const RightSide = (): JSX.Element => {
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
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      {/* <AppBar /> */}
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Box>
  )
}

export default Layout
