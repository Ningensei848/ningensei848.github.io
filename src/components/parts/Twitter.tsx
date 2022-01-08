import Script from 'next/script'
import { NextLinkComposed } from 'src/components/Link'

interface TLProps {
  width: number | string
  height: number | string
  theme: 'light' | 'dark'
  username: string
}

export const TwitterTimeline = (props: TLProps) => {
  const { width, height, theme, username } = props
  return (
    <>
      <NextLinkComposed
        className='twitter-timeline'
        data-width={width}
        data-height={height}
        data-theme={theme}
        data-chrome='noscrollbar noborders nofooter'
        to={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
      />
      <Script strategy='lazyOnload' src='https://platform.twitter.com/widgets.js' charSet='utf-8' />
    </>
  )
}
