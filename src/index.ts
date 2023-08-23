import 'dotenv/config'
import { load } from 'cheerio'

import FetchUrlData from './fetch-url-data'
import { MetaContentType, MetaIndexing, Title } from './tag-parsers'

(async() => {
  const html = await FetchUrlData(process.env.TEST_URL as string)
  const $ = load(html as string)

  console.log(`Visited: ${process.env.TEST_URL} @: ${new Date().toLocaleDateString()}`)
  console.log('Title: ', Title($))
  console.log(`\n-Meta Tags-`)
  console.log('Meta - "ContentType": ', MetaContentType($))
  console.log('Meta - "Indexing": ', MetaIndexing($))
})()
