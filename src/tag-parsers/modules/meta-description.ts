import type { CheerioAPI } from 'cheerio'

import MetaTagScraper from './meta'

const MetaDescription = ($: CheerioAPI) => {
  // TODO: I do not like how this is called - doesn't make semantic sense
  const metaScraper = new MetaTagScraper($, 'name', 'description')

  return metaScraper.scrape()
}

export default MetaDescription