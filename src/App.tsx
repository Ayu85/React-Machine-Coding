import React from 'react'
import Rating from './Questions/Star Rating/Rating'
import Pagination from './Questions/Pagination/Pagination'

const App = () => {
  return (
    <div className='bg-zinc-900 flex justify-center items-center w-screen h-screen text-white'>
      {/* <Rating /> */}
      <Pagination />
    </div>
  )
}

export default App