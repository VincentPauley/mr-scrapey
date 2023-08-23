import type { CheerioAPI } from 'cheerio'

const MetaIndexing = ($: CheerioAPI) => {
  return $('meta[name="robots"]').attr('content') || 'None Detected'
}

export default MetaIndexing
