const singleBlankSpace = ' '

export const prettifyJSON = (obj: unknown, num = 2) => {
  if (typeof obj === 'object') {
    return JSON.stringify(obj, null, singleBlankSpace.repeat(num))
  } else {
    throw Error('[prettifyJSON] Argument is not Object')
  }
}
