import 'dotenv/config'
import { load } from 'cheerio'
import Table from 'cli-table'
import cfonts from 'cfonts'

import FetchUrlData from './fetch-url-data'
import { MetaContentType, MetaIndexing, MetaIndexingGoogle, MetaDescription, Title } from './tag-parsers'

const MetaTagTableDefinition = () => {
  return new Table({
    head: ['Meta Tag/Propery', 'Setting']
  })
}

const MrScrape = async (url: string) => {
  const html = await FetchUrlData(url as string)
  const $ = load(html as string)

  console.log(`Visited: ${url} @: ${new Date().toLocaleDateString()}`)
  console.log('Title: ', Title($))
  console.log(`\n-Meta Tags-`)

  const metaTagTable = MetaTagTableDefinition()

  metaTagTable.push(['ContentType', MetaContentType($)])
  metaTagTable.push(['Description', MetaDescription($)])
  metaTagTable.push(['Indexing', MetaIndexing($)])
  metaTagTable.push(['Google Indexing', MetaIndexingGoogle($)])

  console.log(metaTagTable.toString())
}
cfonts.say('Mr Scrapey Go!', {
  // colors: ['yellow']
  gradient: ['yellow', '#55ff55']
})

setTimeout(() => {
  process.env.TEST_URL?.split('|').forEach(url => {  
    MrScrape(url)
  })
}, 2000)

