'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoClose, IoMenu } from "react-icons/io5";
import MobileNav from './MobileNav';

export default function Header() {
    const [hamburger, setHamburger] = useState(false)

    function switchHamburger() {
        setHamburger(!hamburger)
    }

  return (
    <div className='relative flex items-center justify-between py-5 sm:py-12 px-5 sm:px-24 text-white'>
        <h1 className='text-2xl sm:text-4xl font-bold'>Nassy & Franc</h1>

        <nav className='hidden lg:flex items-center justify-between space-x-5 font-semibold font-sans'>
            <Link href='/'>
                <ul>
                    <li>Matrimony</li>
                </ul>
            </Link>
            <Link href='/our-story'>
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

        <div className='flex lg:hidden cursor-pointer' onClick={() => switchHamburger()}>
            <IoMenu className={`${hamburger ? 'hidden' : "text-3xl" }`}/>
            <IoClose className={`${!hamburger ? 'hidden' : "text-3xl" }`}/>

        </div>

        {
            hamburger && 
            <div className='absolute top-[80%] right-[15%]'>

                <MobileNav />
            </div>
        }
    </div>
  )
}
