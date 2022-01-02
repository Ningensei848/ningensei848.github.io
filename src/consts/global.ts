import Ajv from 'ajv/dist/jtd'

export const ajv = new Ajv()

export const TIMESTAMP = new Date().toISOString()

export const siteAuthor =
  process.env.NEXT_PUBLIC_SITE_AUTHOR || 'K.Kubokawa (@Ningensei848) a.k.a. Kiai'
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Kiai de Nantoka'
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ningensei848.github.io'

export const FILENAME_ATOMFEED = 'atom.xml'
export const FILEPATH_ATOMFEED = `${process.cwd()}/public/${FILENAME_ATOMFEED}`
export const URL_ATOM = siteUrl.replace(/\/$/, '') + '/' + FILENAME_ATOMFEED

export const NINJA_ADMAX_ID = process.env.NEXT_PUBLIC_NINJA_ADMAX_ID || 'XXXXXXXXX'

export const FEEDS: string[] = [
  'https://github.com/Ningensei848.atom', // GitHub
  'https://scrapbox.io/api/feed/Ningensei848', // scrapbox
  'https://zenn.dev/ningensei848/feed?include_scraps=1' // zenn.dev
]
