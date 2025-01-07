import { useEffect, useState } from 'react'

const useFetch = url => {
  console.log(url)

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  async function fetched (url) {
    const data = await fetch(url)
    const jsonData = await data.json()
    setData(jsonData)
    setLoading(false)
  }
  useEffect(() => {
    fetched(url)
  }, [url])
  return { data,loading }
}
export default useFetch
