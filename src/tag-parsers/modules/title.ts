import type { CheerioAPI } from 'cheerio'

const Title = ($: CheerioAPI) => {
  return $('title').text()
}

export default Title