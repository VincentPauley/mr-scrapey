import type { CheerioAPI } from 'cheerio'

const MetaContentType = ($: CheerioAPI) => {
  return $('meta[property="og:type"]').attr('content')
}

export default MetaContentType