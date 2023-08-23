import 'dotenv/config'
import { load } from 'cheerio'
import Table from 'cli-table'

import FetchUrlData from './fetch-url-data'
import { MetaContentType, MetaIndexing, MetaIndexingGoogle, Title } from './tag-parsers'

const MetaTagTableDefinition = () => {
  return new Table({
    head: ['Meta Tag/Propery', 'Setting']
  })
}

(async() => {
  const html = await FetchUrlData(process.env.TEST_URL as string)
  const $ = load(html as string)

  console.log(`Visited: ${process.env.TEST_URL} @: ${new Date().toLocaleDateString()}`)
  console.log('Title: ', Title($))
  console.log(`\n-Meta Tags-`)

  const metaTagTable = MetaTagTableDefinition()

  metaTagTable.push(['ContentType', MetaContentType($) as string])
  metaTagTable.push(['Indexing', MetaIndexing($)])
  metaTagTable.push(['Google Indexing', MetaIndexingGoogle($)])

  console.log(metaTagTable.toString())
})()

const table = new Table({
  head: ['Property', 'Value']
})

// table.push(['Blackhawks', 'Win'])
// table.push(['Blues', 'Lose'])

// console.log(table.toString())

