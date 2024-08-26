import React from 'react'
import { imageData } from '../components/data'
import Image from 'next/image'

const Page = () => {
    return (
        <div>
            <div className='h-[85vh] backdrop-brightness-75 flex justify-center items-center'>
                <h1 className='text-6xl font-bold text-white'>Pre-Wedding Photos</h1>
            </div>

            <div className='bg-white min-h-[100vh] grid grid-cols-3 px-28 gap-4 py-14'>
                {
                    imageData.map((item, index) => (
                        <div key={index} className='w-[100%] h-[20%]'>
                            <Image
                                className='object-cover rounded-lg w-full'
                                src={item}
                                width={400}
                                height={100}
                                alt={item.title}
                            />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Page
