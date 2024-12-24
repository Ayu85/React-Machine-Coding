import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        const getData = async () => {
            const d = await fetch('https://dummyjson.com/products?limit=100')
            const json = await d.json()
            setData(json?.products)
            console.log(json.products);

        }
        getData()
    }, [])
    return (
        <div className='flex flex-col justify-center items-center flex-wrap gap-10'>
            <div className='flex gap-6 flex-wrap justify-center  items-center'>
                {
                    data?.slice(page * 10 - 10, page * 10)?.map((item) => {
                        return <div className='bg-slate-500 px-2 py-2'>
                            {/* <img src={item.images[0]} alt="" className='w-32' /> */}
                            <h1 className='text-white'>{item.title}</h1>
                        </div>
                    })
                }
            </div>
            <div className='flex gap-1'>
                {data.slice(0, 10).map((item, idx) => {
                    return <h1 onClick={() => setPage(idx + 1)} key={idx + 1}
                        className={`text-xl bg-gray-400
                         px-2 py-2 rounded-lg cursor-pointer
                          hover:bg-black ${page === idx + 1 && "bg-black"}`}>{idx + 1}</h1>;
                })
                }
            </div>
        </div>
    )
}

export default Pagination