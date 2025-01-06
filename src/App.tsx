import React from 'react'
import Rating from './Questions/Star Rating/Rating'
import Pagination from './Questions/Pagination/Pagination'
// import Page from './Questions/DropDown Select/Page'
import Generate from './Questions/PasswordGenerator/Generate'
import UseMemExp from './hooks/UseMemExp'
import Page from './Questions/InfiniteScroll/Page'
import UseCallback from './hooks/UseCallback'
import HOC from './HigherOrderComponents/HOC'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import HOC2 from './HigherOrderComponents/HOC2'
import Parent from './HigherOrderComponents/HOC2'
import Profile from './ClassBased/ProfileClass'
// import Page from './Questions/AutoSuggestionSearch/Page'

const App = () => {
  return (
    // <Routes >
    //   {/* <Rating /> */}
    //   <Route path='/' element={<HOC  />}/>
    //   <Route path='/login' element={<Login  />}/>
    // </Routes>
    <Profile name={'aayush'}/>
  )
}

export default App