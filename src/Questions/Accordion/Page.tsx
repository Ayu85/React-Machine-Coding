import React, { useState } from 'react'

const Page = () => {
  const data = [
    {
      question: 'How many bones does a cat have?',
      answer: 'A cat has 230 bones - 6 more than a human'
    },
    {
      question: 'How much do cats sleep?',
      answer: 'The average cat sleeps 12-16 hours per day'
    },
    {
      question: 'How long do cats live',
      answer:
        'Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.'
    }
  ]
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-3xl'>Accordion</h1>
      <Accordion data={data} />
    </div>
  )
}

const Accordion = ({ data }) => {
  const [idx, setIdx] = useState(null)
  return (
    <div className='space-y-2 mt-10'>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setIdx(index)
              console.log(index)
            }}
            className='cursor-pointer w-96  transition-all'
          >
            <h1 className='text-xl'>
              {idx == index ? '👇' : '👉'}
              {item?.question}
            </h1>
            {idx == index && <h2>{item?.answer}</h2>}
          </div>
        )
      })}
    </div>
  )
}
export default Page
