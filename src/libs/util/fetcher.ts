/*
  Fetch APIで取得したjsonを任意の型で取得する - Qiita
  cf. https://qiita.com/markey/items/62f08105ae98139e731f
 */

// Tはレスポンスのjsonの型を指定する
const wrap = <T>(task: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    task
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((json) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              resolve(json) // jsonが取得できた場合だけresolve
            })
            .catch((error) => {
              reject(error)
            })
        } else {
          reject(response)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const typedFetcher = <T = unknown>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  return wrap<T>(fetch(input, init))
}

export default typedFetcher
