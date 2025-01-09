import React, { useState } from 'react'
const CHECKOUT_STEPS = [
  {
    name: 'Customer Info',
    Component: () => <div>Provide your contact details.</div>
  },
  {
    name: 'Shipping Info',
    Component: () => <div>Enter your shipping address.</div>
  },
  {
    name: 'Payment',
    Component: () => <div>Complete payment for your order.</div>
  },
  {
    name: 'Delivered',
    Component: () => <div> Your order has been delivered.</div>
  }
]
const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {/* <h1>Start</h1> */}
      <Stepper steps={CHECKOUT_STEPS} />
    </div>
  )
}
const Stepper = ({ steps }) => {
  const [currentStep, setStep] = useState(1)
  return (
    <div className='flex flex-col justify-center items-center text-center text-xl'>
      <div className='flex items-center gap-6 py-7'>
        {Array.from({ length: steps.length }).map((_, idx) => {
          return (
            <h1
              className={`bg-zinc-600 ${
                currentStep >= idx && 'bg-green-400'
              } p-4 rounded-full aspect-square cursor-pointer`}
              key={idx}
            >
              {idx + 1}
            </h1>
          )
        })}
      </div>
      {steps?.map((step, idx) => {
        return (
          <div>
            {currentStep === idx && (
              <div>
                <h1>{step?.name}</h1>
                <h1>{<step.Component />}</h1>
              </div>
            )}
          </div>
        )
      })}
      <button
        onClick={() => {
          currentStep === 3 ? setStep(0) : setStep(step => step + 1)
        }}
        className='bg-blue-700 p-2 cursor-pointer m-4'
      >
        Next
      </button>
    </div>
  )
}
export default Page
