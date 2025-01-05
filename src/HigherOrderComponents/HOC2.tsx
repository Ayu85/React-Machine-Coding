import React, { useState } from 'react'

const Parent = () => {
  return (
    <div>
      <h1>This is parent component</h1>
      <CounterRed component={Counter} />
      <CounterBlue component={Counter} />
    </div>
  )
}
const Counter = () => {
  const [count, setcount] = useState(0)
  return <button onClick={() => setcount(count + 1)}>count:{count}</button>
}
const CounterRed = props => {
  return (
    <div className='bg-red-400 w-20'>
      <props.component />
    </div>
  )
}
const CounterBlue = props => {
  return (
    <div className='bg-blue-400 w-20'>
      <props.component />
    </div>
  )
}

export default Parent
