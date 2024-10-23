'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import MobileNav from './MobileNav';

export default function Header() {
  const [hamburger, setHamburger] = useState(false);

  function switchHamburger() {
    setHamburger(!hamburger);
  }

  // Use effect to toggle 'overflow-hidden' on the body when the mobile nav is open
  useEffect(() => {
    if (hamburger) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    // Cleanup when the component unmounts or hamburger is false
    return () => document.body.classList.remove('overflow-hidden');
  }, [hamburger]);

  function handleLinkClick() {
    setHamburger(false);
  }

  return (
    <div className='relative flex items-center justify-between py-5 sm:py-5 px-5 sm:px-24 text-white'>
      <h1 className='text-2xl sm:text-4xl font-bold'>
        <Link href='/'>Nassy & Franc</Link>
      </h1>

      <nav className='hidden lg:flex items-center justify-between space-x-5 font-semibold font-sans'>
      <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/our-story'>Our Story</Link>
        </li>
        <li>
          <Link href='/support-us'>Support Us</Link>
        </li>
        <li>
          <Link href='/prayer'>Pray with Us</Link>
        </li>
        <li>
          <Link href='/order-of-mass'>Order of Mass</Link>
        </li>
        <li>
          <Link href='/mass'>Songs</Link>
        </li>
      </nav>

      <div className='flex lg:hidden cursor-pointer' onClick={switchHamburger}>
        <IoMenu className={`${hamburger ? 'hidden' : 'text-3xl'}`} />
        <IoClose className={`${!hamburger ? 'hidden' : 'text-3xl'}`} />
      </div>

      {hamburger && (
        <div className='absolute top-[100%] left-0 w-full h-[calc(100vh-80px)] bg-black/80 z-50'>
          <MobileNav onLinkClick={handleLinkClick} />
        </div>
      )}
    </div>
  );
}
