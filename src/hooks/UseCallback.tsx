import React, { useCallback, useState } from 'react'
import Header from '../components/Header'

const UseCallback = () => {
  const [count, setCount] = useState(0)
  const setUser = useCallback(() => {
    return 'aayush'
  },[])
  return (
    <div>
      <Header setUser={setUser} />
      <button>setuser</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click ++</button>
    </div>
  )
}

export default UseCallback
