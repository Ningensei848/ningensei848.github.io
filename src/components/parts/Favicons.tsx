import { siteName } from 'src/consts'

const Favicons = (): JSX.Element => {
  return (
    <>
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#199604' />
      <meta name='apple-mobile-web-app-title' content={siteName} />
      <meta name='application-name' content={siteName} />
      <meta name='msapplication-TileColor' content='#199604' />
      <meta name='theme-color' content='#199604' />
    </>
  )
}

export default Favicons
