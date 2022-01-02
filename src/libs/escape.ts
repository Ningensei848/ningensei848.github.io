type EscapeChar = '&' | "'" | '`' | '"' | '<' | '>'

const replaceChar = (match: string) => {
  if (match == '<') {
    return '&lt;'
  } else if (match == '>') {
    return '&gt;'
  } else if (match == "'") {
    return '&#x27;'
  } else if (match == '&') {
    return '&amp;'
  } else if (match == '"') {
    return '&quot;'
  } else if (match == '`') {
    return '&#x60;'
  } else {
    return match
  }
}

export const escapeHTML = (str: string) => {
  return str.replace(/[&'`"<>]/g, replaceChar)
}
