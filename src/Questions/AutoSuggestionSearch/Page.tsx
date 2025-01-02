import React, { useEffect, useRef, useState } from 'react'

const Page = () => {
  const mock = ['aayush', 'anjali', 'pratima', 'kyle', 'new']
  const [filteredSuggestions, setFilter] = useState([])
  const [suggestion, showSuggestion] = useState(false)

  const handleSuggestion = input => {
    if (input == '') {
      setFilter([])
      return
    }
    const fil = mock.filter(item => {
      return item.includes(input)
    })
    setFilter(fil)
  }
  console.log(filteredSuggestions)

  return (
    <div>
      <div>
        <input
          type='text'
          onFocus={() => showSuggestion(true)}
          onBlur={() => showSuggestion(false)}
          onChange={e => {
            handleSuggestion(e.target.value)
          }}
          className='bg-zinc-700 text-white pl-3 py-2'
          placeholder='search here'
          name=''
          id=''
        />
      </div>
      {suggestion && (
        <div className='w-full bg-zinc-600 min-h-10'>
          {filteredSuggestions?.map(item => {
            return <h1>{item}</h1>
          })}
        </div>
      )}{' '}
    </div>
  )
}

export default Page
