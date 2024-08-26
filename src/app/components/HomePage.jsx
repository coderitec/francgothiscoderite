import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] gap-y-3'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mix-blend-difference'>Nassy & Franc</h1>

        <div className='flex md:flex-row flex-col space-x-4'>

          <button className='bg-slate-950 text-white p-3 rounded-md md:text-3xl text-lg capitalize'><Link href={'/support-us'}>support us</Link></button>
          <button className='bg-slate-950 text-white p-3 rounded-md md:text-3xl text-lg capitalize'><Link href={'/prayer'}>pray with us</Link></button>
        </div>
    </div>
  )
}
