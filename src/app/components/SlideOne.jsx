'use client'
import React from 'react'
import ImageFiller from 'react-image-filler'
import { IoMdHeart } from "react-icons/io";


export default function SlideOne() {
  return (
    <div className='flex flex-col items-center justify-between py-28 min-h-screen bg-[whitesmoke] overflow-x-hidden'>
      <div className='text-center space-y-3 font-serif'>

        <h1 className='text-3xl font-serif'>We are honored to have you!</h1>
        <p>join us for the celebration of our Holy Matrimony on</p>
        <p>October 23rd, 2024</p>
        <p>at St. Michael Catholic Church, Lafiaji, Lagos Island</p>
      </div>

      <div className='relative px-32 flex items-start justify-between overflow-x-hidden'>
        <div className='w-1/2 text-right flex '>
          <div className='max-w-[70%]'>
            <h1 className='text-2xl font-semibold font-serif'>Nassy Bello</h1>
            <p>Joining lives with my beloved is the most precious gift I could ever receive. I consider myself incredibly lucky to share this journey with such a wonderful partner. My hope is that our love and partnership bring endless joy, harmony, and prosperity to our lives</p>
          </div>
          <div className='px-2'>
            {/* placeholder image */}
            <ImageFiller width={1000} height={1000} background='#0000ff' className='rounded-full'/>   
          </div>
        </div>

        <div className='absolute left-[48%] top-[25%] bg-[whitesmoke] shadow-md p-[1.5%] rounded-full animate-bounce duration-300'>
          <IoMdHeart />
        </div>

        <div className='w-1/2 flex'>
          <div className='px-2'>
            {/* placeholder image */}
            <ImageFiller width={1200} height={1200} background='#0000ff' className='rounded-full'/>   
          </div>
          <div className='max-w-[70%]'>
            <h1 className='text-2xl font-semibold font-serif'>Francis Enemuo</h1>
            <p>I used to hear that when you find &apos;the one,&apos; you&apos;ll just know. It sounded like a myth, a fleeting dream. But now, I&apos;m a believer. You are the sunshine that brightens every day, and I&apos;m so grateful to have you by my side. Your name, Eseoghene, means &apos;gift from God,&apos; and that&apos;s exactly what you are - a precious gift.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
