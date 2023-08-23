import type { CheerioAPI } from 'cheerio'

const Title = ($: CheerioAPI) => {
  return $('meta[property="og:title"]').attr('contents') || $('title').text() || 'N/A'
}

export default Title
