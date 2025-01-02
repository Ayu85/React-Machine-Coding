import React, { useEffect, useState } from 'react'

const Page = () => {
  const [count, setCount] = useState(50)
  useEffect(() => {
    document.getElementById('box')?.addEventListener('scroll', handleScroll)

  }, [count])
  const handleScroll = () => {
    const box = document.getElementById('box')
    if (!box) return

    const scrollPosition = box.scrollTop
    const scrollHeight = box.scrollHeight
    const clientHeight = box.clientHeight

    // Check if the user is near the bottom of the box
    if (scrollHeight - scrollPosition <= clientHeight + 50) {
      console.log('Scroll is about to reach the bottom!')
      setCount(c => c + 10)
      // You can perform some action here, like loading more content
    }
  }
  return (
    <div id='box' className=' overflow-scroll h-96 bg-zinc-600 w-20'>
      {Array.from({ length: count }).map((item, idx) => {
        return <h1>{idx + 1}</h1>
      })}
    </div>
  )
}

export default Page
