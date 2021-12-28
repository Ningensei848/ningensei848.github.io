import Script from 'next/script'
import { Box } from '@mui/material'
import { NextLinkComposed } from 'components/Link'

interface TLProps {
  width: number
  height: number
  theme: 'light' | 'dark'
  username: string
}

export const TwitterTimeline = (props: TLProps) => {
  const { width, height, theme, username } = props
  return (
    <Box maxWidth={width} maxHeight={height}>
      <NextLinkComposed
        className='twitter-timeline'
        data-width={width}
        data-height={height}
        data-theme={theme}
        to={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
      />
      <Script strategy='lazyOnload' src='https://platform.twitter.com/widgets.js' charSet='utf-8' />
    </Box>
  )
}
