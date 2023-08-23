import type { CheerioAPI } from 'cheerio'

class MetaTagScraper {
  $: CheerioAPI;
  filterAttribute: string;
  filterValue: string;

  constructor($: CheerioAPI, filterAttribute: string, filterValue: string) {
    this.filterAttribute = filterAttribute;
    this.filterValue = filterValue;
    this.$ = $
  }

  scrape() {
    return this.$(`meta[${this.filterAttribute}="${this.filterValue}"]`).attr('content') || 'N/A'
  }
}

export default MetaTagScraper