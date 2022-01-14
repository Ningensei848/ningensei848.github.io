import grayMatter from 'gray-matter';

import { mdxCompile, getMarkdownContent } from 'src/libs/markdown'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    content: string,
    meta: { [key: string]: unknown }
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
        const { slug } = req.query as { slug: string[] }
        const { content, data } = grayMatter(await getMarkdownContent(slug.join('/')));
        res.status(200).json({
            content: await mdxCompile(content || ''),
            meta: data
        })
    }
}

export default handler