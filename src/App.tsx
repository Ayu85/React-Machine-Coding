import React from 'react'
import Rating from './Questions/Star Rating/Rating'
import Pagination from './Questions/Pagination/Pagination'
// import Page from './Questions/DropDown Select/Page'
import Generate from './Questions/PasswordGenerator/Generate'
import UseMemExp from './hooks/UseMemExp'
import Page from './Questions/AutoSuggestionSearch/Page'

const App = () => {
  return (
    <div className='bg-zinc-900 flex justify-center items-center w-screen h-screen text-white'>
      {/* <Rating /> */}
      <Page  />
    </div>
  )
}

export default App