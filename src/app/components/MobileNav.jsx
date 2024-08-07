import Link from 'next/link'
import React from 'react'

export default function MobileNav() {
  return (
    <nav className='relative flex flex-col items-center justify-evenly space-y-5 shadow-md px-10 py-5 rounded-md font-semibold font-sans bg-orange-600/70 rounded-b-full w-[300px] h-[50vh] '>
            <Link href='/'>
                <ul>
                    <li>Home</li>
                </ul>
            </Link>
            <Link href='/our-story'>
                <ul>
                    <li>Our Story</li>
                </ul>
            </Link>
            {/* <Link href='/'>
                <ul>
                    <li>Registry</li>
                </ul>
            </Link> */}
            <Link href='/support-us'>
                <ul>
                    <li>Support Us</li>
                </ul>
            </Link>
            <Link href='/prayer'>
                <ul>
                    <li>Pray with us</li>
                </ul>
            </Link>
        
        </nav>
  )
}
