import React from 'react'


export default function Filter() {
    const categories = [
        {
            name: "Gaon",
            num: 3529
        }, {
            name: "Kurti",
            num: 2677
        }
    ]

    const brands = [
        {
            name: "Roadster",
            num: 3529
        }, {
            name: "Friskers",
            num: 2677
        }, {
            name: "WROGN",
            num: 2350
        }, {
            name: "Tommy Hilfiger",
            num: 2342
        }, {
            name: "HRX",
            num: 2300
        }, {
            name: "Jack & Jones",
            num: 2644
        }, {
            name: "U.S. Polo Assn.",
            num: 2345
        }, {
            name: "VIMAL JONNEY",
            num: 2104
        }
    ]

    const prices = [
        {
            range: "Rs. 314 to Rs. 736",
            num: 1877
        }, {
            range: "Rs. 736 to Rs. 1158",
            num: 445
        }, {
            range: "Rs. 1158 to Rs. 1580",
            num: 50
        }, {
            range: "Rs. 1580 to Rs. 2002",
            num: 21
        }
    ]

    return (
        <div className='px-10 flex  gap-10 py-8 flex-col bg-white shadow-xl'>
            <div>
                <h1 className='font-bold'>FILTERS</h1>

                <h2 className='text-[#282c3f] font-bold  uppercase my-4 text-sm'>CATEGORIES</h2>
                <ul>
                    {
                        categories.map((data, i) => {
                            return (
                                <li className='flex mb-2 gap-2'>
                                    <input type='checkbox' />
                                    <span>{data.name}</span>
                                    <span >({data.num})</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <h2 className='text-[#282c3f] uppercase font-bold my-4  text-sm'>BRAND</h2>
                <ul>
                    {
                        brands.map((data, i) => {
                            return (
                                <li className='flex mb-2 gap-2'>
                                    <input type='checkbox' />
                                    <span>{data.name}</span>
                                    <span >({data.num})</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <h2 className='text-[#282c3f] uppercase my-4  text-sm font-bold'>PRICE</h2>
                <ul>
                    {
                        prices.map((data, i) => {
                            return (
                                <li className='flex mb-2 gap-2'>
                                    <input type='checkbox' />
                                    <span>{data.range}</span>
                                    <span >({data.num})</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
