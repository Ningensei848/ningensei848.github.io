import Ajv from 'ajv/dist/jtd'

export const ajv = new Ajv()

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Kiai de Nantoka'

export const NINJA_ADMAX_ID = process.env.NEXT_PUBLIC_NINJA_ADMAX_ID || 'XXXXXXXXX'

export const FEEDS: string[] = ['https://zenn.dev/ningensei848/feed?include_scraps=1']
