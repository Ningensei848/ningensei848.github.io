import dynamic from 'next/dynamic'
import grayMatter from 'gray-matter'
import { Box, Container, Paper } from '@mui/material'

import { BLOG_BASEPATH, MARKDOWN_DIR } from 'src/consts'
import { getAllBlogCommitLog, getMarkdownContent, mdxCompile } from 'src/libs/markdown'
import { default as Backdrop } from 'src/components/parts/Backdrop'

import type { NextPage, GetStaticPaths, InferGetStaticPropsType, GetStaticPropsContext } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const commits = await getAllBlogCommitLog(BLOG_BASEPATH)
  return {
    paths: Object.keys(commits).map((slug) => ({ params: { slug: slug.split('/') } })),
    fallback: false
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string[] }>) => {
  const slug = params?.slug as string[]
  const { content, data } = grayMatter(
    await getMarkdownContent(`${MARKDOWN_DIR}/${slug.join('/')}`)
  )
  return {
    props: {
      slug,
      content: await mdxCompile(content || ''),
      meta: data
    }
  }
}

const MDXContent = dynamic(() => import('src/components/MDXContent'), {
  loading: () => <Backdrop flag={true} />
})

type Props = InferGetStaticPropsType<typeof getStaticProps>

const BlogPage: NextPage<Props> = (props) => {
  // const { slug, content, meta } = props
  // console.log(`${MARKDOWN_DIR}/${slug.join('/')}`)
  const { content } = props

  return (
    <Container maxWidth='md'>
      <Paper elevation={3}>
        <Box mx={2} my={2}>
          <MDXContent content={content} />
        </Box>
      </Paper>
    </Container>
  )
}

export default BlogPage

/*
Next.js の InferGetStaticPropsType が便利
cf. https://zenn.dev/catnose99/articles/7201a6c56d3c88
*/
