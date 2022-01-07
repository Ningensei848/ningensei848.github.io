import path from 'path'
import remarkGfm from 'remark-gfm' // Tables, footnotes, strikethrough, task lists, literal URLs.

import type { CompileOptions } from '@mdx-js/mdx'

export const MARKDOWN_DIR = !process.env.MARKDOWN_DIR
  ? 'blogs'
  : process.env.MARKDOWN_DIR.replaceAll(/\//, '')
export const MARKDOWN_PAGE_PATH = !process.env.MARKDOWN_PAGE_PATH
  ? 'blog'
  : process.env.MARKDOWN_PAGE_PATH.replaceAll(/\//, '')

export const MDXCompileOptions: CompileOptions = {
  useDynamicImport: true,
  // list-of-plugins
  // cf. https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
  remarkPlugins: [remarkGfm]
}

export const BLOG_BASEPATH = [process.cwd(), MARKDOWN_DIR].join(path.sep)
