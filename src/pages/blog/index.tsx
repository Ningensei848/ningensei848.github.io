/*
ファイル I/O はなるべく最小化する

必要なファイルを適宜生成する
- タイトルを日付順に並べた gen/pages.json を生成
- タグで逆引きする用の gen/tagmap.json を生成
- git log のコミットログから gen/*.history.json を生成

裏で重そうな処理が動く場合は，適宜それ専用の getStaticProps ページをつくって負荷分散する？

[id].tsx のページ負荷を如何に軽くできるか？にかかっている
→ 適宜コンテンツはファイルへ退避し，変更があったら再度コンパイルする流れで
（※読み出し負荷はサンクコスト）
ファイルの最終更新日時を取ってきて塩漬けしとくのがよさそう？
- fs.promise の stat で modify をとってくればよい
cf. https://qiita.com/reoring/items/275ae83dfaa65bac568c#access-modify-change-%E3%81%AE%E9%81%95%E3%81%84

Index page に必要なもの
- gen/pages.json からページ一覧を表示
- gen/tagmap.json からタグ一覧を表示
*/

import { Container, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { NextLinkComposed } from 'src/components/Link'
import { BLOG_BASEPATH, MARKDOWN_PAGE_PATH } from 'src/consts'
import { getAllBlogCommitLog } from 'src/libs/markdown'
import type { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  return {
    props: {
      // {[key: slug]: Array<commitLog>}
      commits: await getAllBlogCommitLog(BLOG_BASEPATH)
    }
  }
}

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { commits } = props
  const slugs = Object.keys(commits)
  const listItems = slugs.map((slug) => (
    <ListItem key={slug} disablePadding>
      <ListItemButton
        component={NextLinkComposed}
        to={`/${MARKDOWN_PAGE_PATH}/${slug}`}
        prefetch={false}
      >
        <ListItemText primary={slug} secondary={commits[slug][0]} />
      </ListItemButton>
    </ListItem>
  ))

  return (
    <Container maxWidth='md'>
      <List>{listItems}</List>
    </Container>
  )
}

export default Blog
