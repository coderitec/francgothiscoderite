import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center justify-between py-12 px-24 text-white'>
        <h1 className='text-4xl font-bold'>Nassy & Franc</h1>

        <nav className='flex items-center justify-between space-x-5 font-semibold font-sans'>
            <Link href='/'>
                <ul>
                    <li>Matrimony</li>
                </ul>
            </Link>
            <Link href='/'>
                <ul>
                    <li>Our Story</li>
                </ul>
            </Link>
            <Link href='/'>
                <ul>
                    <li>Registry</li>
                </ul>
            </Link>
            <Link href='/'>
                <ul>
                    <li>Traditional</li>
                </ul>
            </Link>
            <Link href='/support-us'>
                <ul>
                    <li>Support Us</li>
                </ul>
            </Link>
        
        </nav>
    </div>
  )
}
