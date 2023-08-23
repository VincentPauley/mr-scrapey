import type { CheerioAPI } from 'cheerio'

const MetaIndexing = ($: CheerioAPI) => {
  return $('meta[name="robots"]').attr('content') || 'N/A'
}

export default MetaIndexing
