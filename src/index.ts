import 'dotenv/config'
import { load } from 'cheerio'

import FetchUrlData from './fetch-url-data'

import { MetaContentType, Title } from './tag-parsers'

(async() => {
  const html = await FetchUrlData(process.env.TEST_URL as string)
  const $ = load(html as string)

  console.log('Title: ', Title($))
  console.log('Meta - "ContentType": ', MetaContentType($))
})()

console.log(Add(3,4))