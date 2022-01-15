import { Box } from '@mui/material'

import { mdxCompile } from 'src/libs/markdown'
import MDXContent from 'src/components/MDXContent'

import type { InferGetStaticPropsType } from 'next'

// README と同期をとる： cf. https://github.com/Ningensei848/Ningensei848/blob/main/README.md
const getGitHubContent = async (
  owner: string,
  repo: string,
  filepath: string,
  branchName = 'main'
) => {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filepath}?ref=${branchName}`
  const res = await fetch(url)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const json: { content: string } = await res.json()
  return Buffer.from(json.content, 'base64').toString()
}

// const owner = 'Ningensei848'
// const repo = 'Ningensei848'
// const filepath = 'README.md'
// const branchName = 'main'
// const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filepath}?ref=${branchName}`

export const getStaticProps = async () => {
  const file = await getGitHubContent('Ningensei848', 'Ningensei848', 'README.md')
  const text = file.replaceAll(/<!--[\s\S]*?-->/g, '')

  const mdxContent = await mdxCompile(text || '')

  return {
    props: {
      content: mdxContent
    }
  }
}

const MyProfile = ({ content }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <Box
      component='article'
      className='markdown-body'
      // cf. https://github.com/sindresorhus/github-markdown-css#usage
      boxSizing='border-box'
      minWidth='200px'
      maxWidth='980px'
      padding={{ xs: 1 }}
      marginX={{ xs: 2, md: 3 }}
      marginY={{ xs: 3, md: 4 }}
    >
      <MDXContent content={content} />
    </Box>
  )
}

export default MyProfile
