import type { CheerioAPI } from 'cheerio'

const MetaIndexingGoogle = ($: CheerioAPI) => {
  return $('meta[name="googlebot"]').attr('content') || 'N/A'
}

export default MetaIndexingGoogle
