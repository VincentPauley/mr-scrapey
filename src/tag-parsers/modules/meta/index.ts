class MetaTagScraper {
  filterAttribute: string;
  filterValue: string;

  constructor(filterAttribute: string, filterValue: string) {
    this.filterAttribute = filterAttribute;
    this.filterValue = filterValue;
  }
}