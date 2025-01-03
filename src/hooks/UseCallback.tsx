import React, { useState } from 'react'
import Header from '../components/Header'

const UseCallback = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState('none')

  return (
    <div>
      <Header user={user} />
      <button onClick={()=>setUser('aayush')}>setuser</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click ++</button>
    </div>
  )
}

export default UseCallback
