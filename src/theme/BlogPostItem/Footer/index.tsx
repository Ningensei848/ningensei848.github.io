import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'
import { ThemeClassNames } from '@docusaurus/theme-common'
import EditMetaRow from '@theme/EditMetaRow'
import TagsListInline from '@theme/TagsListInline'
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink'

import styles from './styles.module.css'

import EditThisPage from '@site/src/components/EditThisPage'
import NextShare from '@site/src/components/NextShareButtons'

export default function BlogPostItemFooter(): ReactNode {
    const { metadata, isBlogPostPage } = useBlogPost()
    const { tags, title, editUrl, hasTruncateMarker, lastUpdatedBy, lastUpdatedAt } = metadata

    // A post is truncated if it's in the "list view" and it has a truncate marker
    const truncatedPost = !isBlogPostPage && hasTruncateMarker

    const tagsExists = tags.length > 0

    const renderFooter = tagsExists || truncatedPost || editUrl

    if (!renderFooter) {
        return null
    }

    // BlogPost footer - details view
    if (isBlogPostPage) {
        const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy)

        return (
            <footer className='docusaurus-mt-lg'>
                {tagsExists && (
                    <div className={clsx('row', 'margin-top--sm', ThemeClassNames.blog.blogFooterEditMetaRow)}>
                        <div className='col'>
                            <TagsListInline tags={tags} />
                        </div>
                    </div>
                )}
                {/* ----------------------------------------------------------------- */}
                {/* SNS 等のシェアボタンを設置 */}
                {isBlogPostPage && editUrl && (
                    <div className='col col--12'>
                        <div className={clsx('row', styles.blogPostFooter)}>
                            <div className='col col--8 margin-vert--sm'>
                                <NextShare />
                            </div>
                            <div className={clsx('col', 'col--4', 'margin-vert--sm', styles.editThisPage)}>
                                <EditThisPage editUrl={editUrl} text='編集をリクエスト' />
                            </div>
                        </div>
                    </div>
                )}
                {/* ----------------------------------------------------------------- */}
                {canDisplayEditMetaRow && (
                    <EditMetaRow
                        className={clsx('margin-top--sm', ThemeClassNames.blog.blogFooterEditMetaRow)}
                        editUrl={editUrl}
                        lastUpdatedAt={lastUpdatedAt}
                        lastUpdatedBy={lastUpdatedBy}
                    />
                )}
            </footer>
        )
    }
    // BlogPost footer - list view
    else {
        return (
            <footer className='row docusaurus-mt-lg'>
                {tagsExists && (
                    <div className={clsx('col', { 'col--9': truncatedPost })}>
                        <TagsListInline tags={tags} />
                    </div>
                )}
                {truncatedPost && (
                    <div
                        className={clsx('col text--right', {
                            'col--3': tagsExists,
                        })}
                    >
                        <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
                    </div>
                )}
            </footer>
        )
    }
}
