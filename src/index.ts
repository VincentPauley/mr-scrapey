import 'dotenv/config'
import { load } from 'cheerio'

import Add from './add'
import FetchUrlData from './fetch-url-data'

import { Title } from './tag-parsers'

(async() => {
  const html = await FetchUrlData(process.env.TEST_URL as string)
  const $ = load(html as string)

  console.log('LOOK: ', Title($))
})()

console.log(Add(3,4))