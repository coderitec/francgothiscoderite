import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className='text-slate-900 capitalize md:text-3xl text-xl font-mono'>Sorry, the page you are looking for does not exist. <span><Link href={`/`} className='hover:border-b-4 hover:border-b-green-700'>Back to home page</Link></span></h1>
    </div>
  )
}
