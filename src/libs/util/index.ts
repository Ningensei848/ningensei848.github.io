export { url } from './url'
export { prettifyJSON } from './json'
export { default as typedFetcher } from './fetcher'

export const hasOwnProps = (obj: unknown, key: string): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
