import Ajv from 'ajv/dist/jtd'

export const ajv = new Ajv()

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Kiai de Nantoka'

export const NINJA_ADMAX_ID = process.env.NEXT_PUBLIC_NINJA_ADMAX_ID || 'XXXXXXXXX'

interface RSSFeed {
  id: string
  title: string
  url: string
}

export const FEEDS: RSSFeed[] = [
  {
    id: 'zenn',
    title: 'my zenn acitivity',
    url: 'https://zenn.dev/ningensei848/feed?include_scraps=1'
  }
]
