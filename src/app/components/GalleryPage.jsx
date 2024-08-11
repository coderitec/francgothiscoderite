import React from 'react'
import { galleryData } from "./data"
import Link from 'next/link'

export default function GalleryPage() {
  return (
    <div className='flex items-center justify-center flex-col min-h-[100vh] backdrop-blur-sm backdrop-brightness-[.4] py-14 space-y-8'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-xs md:text-sm font-sans font-bold uppercase text-[#f5f5f5]'>our memories</p>
            <h1 className='text-4xl md:text-6xl font-bold text-[#ffa500] py-4'>Wedding Gallery</h1>
            <p className='font-sans text-[#f5f5f5] text-lg w-[85%] md:w-[50%] text-center'>For everyone who holds a special place in our hearts, even if they couldn’t be physically present, their spirit was with us. We hope these pictures evoke the feeling of being there and allow you to share in our joy.❤️</p>
        </div>

        <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 py-10'>
            {galleryData.map((item, index) => {
                return (
                    <Link href='/' key={index} className='min-h-[50vh] md:min-w-[24vw] bg-[#ffa500] rounded-md'>
                        <div className='size-full flex flex-col justify-end hover:bg-transparent hover:backdrop-brightness-[.7] duration-300 rounded-md'>
                        <h1 className='font-sans p-8 text-white text-xl font-semibold'>{item.title}</h1>
                        </div>
                    </Link>
                )
            })

            }
        </div>
    </div>
  )
}
