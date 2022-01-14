import useSWR from 'swr'

import { BLOG_BASEPATH, MARKDOWN_DIR } from 'src/consts'
import { prettifyJSON, typedFetcher } from 'src/libs/util'
import { getAllBlogCommitLog } from 'src/libs/markdown'
import { default as Backdrop } from 'src/components/parts/Backdrop'

import type { NextPage, GetStaticPaths, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import MDXContent from 'src/components/MDXContent'

export const getStaticPaths: GetStaticPaths = async () => {
  const commits = await getAllBlogCommitLog(BLOG_BASEPATH)
  return {
    paths: Object.keys(commits).map((slug) => ({ params: { slug: slug.split('/') } })),
    fallback: false
  }
}

export const getStaticProps = ({ params }: GetStaticPropsContext<{ slug: string[] }>) => {
  const slug = params?.slug || []
  return { props: { slug } }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

type mdxContent = {
  content: string
  meta: { [key: string]: unknown }
}

const port = process.env.NEXT_PUBLIC_PORT_SERVER || 3000
const fetcher = async (id: string) => {
  const data = await typedFetcher<mdxContent>(`http://localhost:${port}/api/${MARKDOWN_DIR}/${id}`)
  return data
}

const useMarkdownContent = (slug: string[]) => {
  const { data, error } = useSWR<mdxContent, Error>(slug.join('/'), fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

const BlogPage: NextPage<Props> = (props) => {
  const { slug } = props
  const { data, isLoading, isError } = useMarkdownContent(slug)

  if (isLoading) return <Backdrop flag={isLoading} />
  if (isError || !data) return <div>Error!</div>
  const { content, meta } = data

  return <MDXContent content={content} />
}

export default BlogPage

/*
Next.js の InferGetStaticPropsType が便利
cf. https://zenn.dev/catnose99/articles/7201a6c56d3c88
*/
