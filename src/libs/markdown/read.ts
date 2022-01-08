/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/require-await */

import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'
import { readdir, readFile, writeFile } from 'fs/promises'

import { MARKDOWN_DIR, PROJECT_ROOT } from 'consts'
import { prettifyJSON } from 'libs/util'

import type { Dirent } from 'fs'

const pattern_markdowns = /\.mdx?$/
const sep = path.sep
const isMarkdownFile = (filename: string) => pattern_markdowns.test(filename)
// const asyncFilter = async <T>(array: T[], asyncCallback: (args: T) => Promise<boolean>) => {
//   const bits = await Promise.all(array.map(asyncCallback))
//   return array.filter((_, i) => bits[i])
// }

// caution: ネストが深くなりすぎると辛い（が，Blog 用途ならそこまで深くはならないはず）
const exploreSlugRecursive = async (basePath: string): Promise<string[]> => {
  const entries = await readdir(basePath, { withFileTypes: true })

  const promisedEntries = entries.map(async (dirent) => {
    if (dirent.isDirectory()) {
      return await exploreSlugRecursive([basePath, dirent.name].join(sep))
    } else {
      if (isMarkdownFile(dirent.name)) {
        const filepath = [basePath, dirent.name].join(sep)
        // Note: MARKDOWN_DIR 以下に MARKDOWN_DIR と同名のディレクトリを作ってはいけない
        const slug = filepath.split(sep + MARKDOWN_DIR + sep).pop() as string
        return slug.replace(pattern_markdowns, '').replace(sep, '/')
      } else {
        return ''
      }
    }
  })

  const nestedList = await Promise.all(promisedEntries)
  return nestedList.flat()
}

export const getAllSlugsAsync = async (basePath: string): Promise<string[]> => {
  const results = await exploreSlugRecursive(basePath)
  // TODO: implement sync filtering
  // return await asyncFilter(results, async (f: string) => f.length > 0)
  return results.filter((f: string) => f.length > 0)
}

export const getMarkdownContent = async (slug: string): Promise<string> => {
  // 大文字小文字の区別はなくしたい→正規表現で埋める
  // opendir してから，正規表現に一致するファイルを探して開く
  const { dir: basePath, name } = path.parse(slug)
  // flags_in_constructor || RegExp - JavaScript | MDN
  // cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#flags_in_constructor
  const pattern_filepath = new RegExp(`${name}\\.mdx?`, 'i')
  const entries = await readdir(basePath, { withFileTypes: true })
  // Array.prototype.find() - JavaScript | MDN
  // cf.https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const { name: filename } = entries.find((dirent) => pattern_filepath.test(dirent.name)) as Dirent

  return await readFile([basePath, filename].join(path.sep), 'utf8')
}
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

export const isSameFilepaths = (elderArray: string[], newerArray: string[]) => {
  // ※どちらもユニークなはずなのでソートは不要
  // 前提として総数が違えば一致しないのでエラー
  if (elderArray.length !== newerArray.length) return false
  // 配列を探索して存在しなかったら Exception
  try {
    // TODO: implement sync filtering
    elderArray.map((elem) => {
      if (!newerArray.includes(elem)) {
        throw new Error('[isSameFilepathList] Different arrays detected')
      }
    })
    return true
  } catch {
    // 必要なのは一致判断だけで，エラー内容はどうでもいいので引き起こさない
    return false
  }
}

const JSON_FILEPATH_LIST = `${PROJECT_ROOT}/.next/commitLog.json`
const promisedExec = promisify(exec)
const gitLog = (slug: string, ext: string) => {
  const filepath = [MARKDOWN_DIR, `${slug}.${ext.replaceAll(/\./g, '')}`].join(sep)
  return `git log --pretty=oneline --pretty=format:"[%H] %ad (%ar) || %s" ${filepath}`
}

/* blogs/ 以下を再帰的に走査し，md および mdx のファイルパス一覧を得る
もしあれば，.next/commitLog.json を読み込む，なければ作る
ファイル内のリストと 現在の filepathList を比較して，
- 異なっていれば，新たに .next/commitLog.json を作り直し，その結果を返す
- 一致していれば，.next/commitLog.json から読み取った結果を返す
 */
export const getAllBlogCommitLog = async (
  basePath: string
): Promise<{ [key: string]: string[] }> => {
  const slugs = await getAllSlugsAsync(basePath)

  try {
    const pairs = JSON.parse(await readFile(JSON_FILEPATH_LIST, 'utf8')) as {
      [key: string]: string[]
    }

    if (isSameFilepaths(Object.keys(pairs), slugs)) {
      return pairs
    } else {
      throw new Error('[getAllBlogCommitLog] Different arrays detected')
    }
  } catch (e) {
    // { '<filepath>': string } // value-string is commit log
    const pairs: { [key: string]: string[] } = {}

    await Promise.all(
      slugs.map(async (slug) => {
        try {
          const { stdout } = await promisedExec(gitLog(slug, 'mdx'))
          pairs[slug] = stdout.split('\n')
        } catch (e: unknown) {
          if (e instanceof Error) {
            // console.error(e.message) // stderr ==> "Command failed: git log **.mdx"
            const { stdout } = await promisedExec(gitLog(slug, 'md'))
            pairs[slug] = stdout.split('\n')
          } else {
            throw e
          }
        }
      })
    )
    // ファイルへの書き込み処理
    await writeFile(JSON_FILEPATH_LIST, prettifyJSON(pairs, 2))

    return pairs
  }
}
