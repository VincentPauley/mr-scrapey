import axios from 'axios'

const FetchUrlData = (url: string) => {
  return new Promise(async(resolve, reject) => {
    try {
      const { data } = await axios.get(url)

      resolve(data)
    } catch (e: unknown) {
      throw new Error(e as string)
    }
  })
}

export default FetchUrlData