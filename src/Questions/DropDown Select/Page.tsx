import React, { useState } from 'react'

const Page = () => {
    const countries = [
        { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
        { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
        { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
    ];
    const [countryname, setContName] = useState(countries[0].name)
    const [city, setCity] = useState([countries[0].cities])

    // console.log(countries[0]['cities'][0]);

    return (
        <div>
            <div>
                country
                <br />
                <select onChange={(e) => {
                    setContName(e.target.value)
                    const count = countries.find((c) => c.name === e.target.value)
                    setCity(count['cities'])
                }} name="" id="" className='bg-gray-400'>
                    {countries?.map((count) => {
                        return <option value={count.name} >{count?.name}</option>
                    })}
                </select>
            </div>
            <div>
                city
                <br />
                <select name="" id="" className='bg-gray-400'>
                    {city?.map((city, idx) => {
                        return <option value="">{city}</option>

                    })}
                </select>
            </div>

        </div>
    )
}

export default Page