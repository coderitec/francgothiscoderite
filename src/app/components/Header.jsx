import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center justify-between py-12 px-24 text-white'>
        <h1 className='text-3xl font-bold font-serif'>Nassy & Franc</h1>

        <nav className='flex items-center justify-between space-x-5 font-semibold'>
            <Link href='/'>
                <ul>
                    <li>Home</li>
                </ul>
            </Link>
            <Link href='/'>
                <ul>
                    <li>Our Story</li>
                </ul>
            </Link>
            <Link href='/'>
                <ul>
                    <li>Gallery</li>
                </ul>
            </Link>
            <Link href='/'>
                <ul>
                    <li>Portfolio</li>
                </ul>
            </Link>
        
        </nav>
    </div>
  )
}
