import Link from 'next/link';
import React from 'react';

export default function MobileNav({ onLinkClick }) {
  return (
    <nav className='fixed top-[72px] left-0 right-0 bottom-0 bg-orange-600/90 flex flex-col items-center justify-center text-white z-50'>
      <ul className='flex flex-col space-y-8 text-xl font-semibold'>
        <li onClick={onLinkClick}>
          <Link href='/'>Home</Link>
        </li>
        <li onClick={onLinkClick}>
          <Link href='/our-story'>Our Story</Link>
        </li>
        <li onClick={onLinkClick}>
          <Link href='/support-us'>Support Us</Link>
        </li>
        <li onClick={onLinkClick}>
          <Link href='/prayer'>Pray with Us</Link>
        </li>
        <li onClick={onLinkClick}>
          <Link href='/order-of-mass'>order of Mass</Link>
        </li>
        <li onClick={onLinkClick}>
          <Link href='/mass'>songs</Link>
        </li>
      </ul>
    </nav>
  );
}
