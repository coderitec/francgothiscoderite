'use client'
import React from 'react'
import ImageFiller from 'react-image-filler'
import { IoMdHeart } from "react-icons/io";


export default function SlideOne() {
  return (
    <div className='flex flex-col items-center justify-between py-28 min-h-[110vh] bg-[whitesmoke] overflow-x-hidden'>
      <div className='text-center space-y-3'>

        <h1 className='text-6xl text-yellow-300 font-bold'>We are honored to have you!</h1>
        <p className='text-[gray] font-serif'>join us for the celebration of our Holy Matrimony on</p>
        <p className='font-serif'>October 23rd, 2024</p>
        <p className='font-serif'>at St. Michael Catholic Church, Lafiaji, Lagos Island</p>
      </div>

      <div className='relative px-32 flex items-start justify-between overflow-x-hidden'>
        <div className='w-1/2 text-right flex '>
          <div className='max-w-[70%] space-y-5'>
            <h1 className='text-3xl font-extrabold py-2 text-transparent bg-gradient-to-b from-yellow-500 to-blue-600 bg-clip-text'>Nassy Bello</h1>
            <p className='font-serif text-[gray]'>Joining lives with my beloved is the most precious gift I could ever receive. I consider myself incredibly lucky to share this journey with such a wonderful partner. My hope is that our love and partnership bring endless joy, harmony, and prosperity to our lives</p>
          </div>
          <div className='px-3'>
            {/* placeholder image */}
            <ImageFiller width={1000} height={1000} background='#0000ff' className='rounded-full'/>   
          </div>
        </div>

        <div className='absolute left-[47.7%] top-[25%] bg-[whitesmoke] shadow-md rounded-full aspect-square p-5 flex justify-center items-center animate-bounce duration-300'>
          <IoMdHeart className='text-[#FFD700] text-2xl'/>
        </div>

        <div className='w-1/2 flex'>
          <div className='px-3'>
            {/* placeholder image */}
            <ImageFiller width={1200} height={1200} background='#0000ff' className='rounded-full'/>   
          </div>
          <div className='max-w-[70%] space-y-5'>
            <h1 className='text-3xl font-extrabold text-transparent bg-gradient-to-b from-yellow-500 to-blue-600 bg-clip-text'>Francis Enemuo</h1>
            <p className='font-serif text-[gray]'>I used to hear that when you find &apos;the one,&apos; you&apos;ll just know. It sounded like a myth, a fleeting dream. But now, I&apos;m a believer. You are the sunshine that brightens every day, and I&apos;m so grateful to have you by my side. Your name, Eseoghene, means &apos;gift from God,&apos; and that&apos;s exactly what you are - a precious gift.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
