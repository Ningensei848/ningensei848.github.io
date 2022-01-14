import * as runtime from 'react/jsx-runtime.js'
import { Fragment, useEffect, useState } from 'react'
import { run } from '@mdx-js/mdx'
import { CircularProgress } from '@mui/material'

import type { MDXModule } from 'mdx/types'

// cf. https://mdxjs.com/guides/mdx-on-demand/#nextjs-example

const MDXContent = (props: { content: string }) => {
  const { content } = props
  const [mdxModule, setMdxModule] = useState<MDXModule>()
  const Content = mdxModule ? mdxModule.default : Fragment

  useEffect(() => {
    void (async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call
      setMdxModule(await run(content, runtime))
    })()
  }, [content])

  if (!mdxModule) {
    return <CircularProgress color='primary' />
  } else {
    return <Content />
  }
}

export default MDXContent
