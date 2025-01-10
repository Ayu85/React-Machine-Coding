import React, { useState } from 'react'

const Page = () => {
  const indianFoodItems = [
    'Biryani',
    'Butter Chicken',
    'Paneer Tikka',
    'Chicken Tikka',
    'Palak Paneer',
    'Aloo Gobi',
    'Chole Bhature',
    'Samosa',
    'Pani Puri',
    'Dhokla',
    'Vada Pav',
    'Pav Bhaji',
    'Aloo Paratha',
    'Methi Thepla',
    'Masoor Dal',
    'Toor Dal',
    'Moong Dal',
    'Lentil Soup',
    'Chana Masala',
    'Baingan Bharta',
    'Malai Kofta',
    'Tandoori Chicken',
    'Rogan Josh',
    'Korma',
    'Vindaloo',
    'Gulab Jamun',
    'Jalebi',
    'Raita',
    'Kachori',
    'Pani Puri',
    'Bhel Puri',
    'Rajma',
    'Pulao',
    'Tandoori Naan',
    'Garlic Naan',
    'Butter Naan',
    'Paneer Butter Masala',
    'Shahi Paneer',
    'Dum Aloo',
    'Dosa',
    'Idli',
    'Sambar',
    'Uttapam',
    'Pongal',
    'Appam',
    'Hyderabadi Haleem',
    'Mutton Korma',
    'Chicken Korma',
    'Keema Pav',
    'Gobi Manchurian',
    'Vegetable Pakora',
    'Aloo Matar',
    'Kadhi Pakora',
    'Sarson Da Saag',
    'Makki Di Roti',
    'Bhindi Masala',
    'Methi Aloo',
    'Daal Makhani',
    'Lassi',
    'Sweet Lassi',
    'Chaas',
    'Masala Chaas',
    'Chana Chaat',
    'Sev Puri',
    'Aloo Tikki',
    'Pav Bhaji',
    'Pesarattu',
    'Kebabs',
    'Seekh Kebab',
    'Shami Kebab',
    'Mutton Seekh',
    'Tandoori Fish',
    'Goan Fish Curry',
    'Kerala Sadya',
    'Fish Amritsari',
    'Chicken Chettinad',
    'Mutton Biryani',
    'Hyderabadi Biryani',
    'Vegetable Biryani',
    'Methi Paratha',
    'Pesarattu',
    'Mutton Kadhai',
    'Mutter Pulao',
    'Thali',
    'Mysore Masala Dosa',
    'Khichdi',
    'Pitha',
    'Mango Lassi',
    'Gajar Halwa',
    'Rasgulla',
    'Kheer',
    'Kunda',
    'Mysore Pak',
    'Bundi Ladoo',
    'Laddu',
    'Chikki',
    'Naan',
    'Sundal',
    'Dhokla',
    'Nimki',
    'Fried Rice',
    'Chapati',
    'Roti',
    'Paratha',
    'Pulao',
    'Beggani Ka Bharta',
    'Raita',
    'Kachumber Salad',
    'Palak Chaat',
    'Pineapple Sheera'
  ]
  const [value, setVal] = useState(null)
  const [suggestion, setSugg] = useState([])
  const handleSuggestion = value => {
    if (value == '') setSugg([])
    else {
      const data = indianFoodItems.filter(item => item.toLowerCase().includes(value))
      setSugg(data)
    }
  }
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <div className='w-96'>
        <input
          onChange={e => {
            handleSuggestion(e.target.value)
          }}
          type='text'
          className=' bg-zinc-700 w-full text-white p-3'
        />
      </div>
      <div className='bg-zinc-700 w-96'>
        {suggestion?.map(item => {
          return <h1>{item}</h1>
        })}
      </div>
    </div>
  )
}

export default Page
