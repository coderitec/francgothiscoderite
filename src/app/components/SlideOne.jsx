'use client'
import React from 'react'
import ImageFiller from 'react-image-filler'
import { IoMdHeart } from "react-icons/io";
import Image from 'next/image';


export default function SlideOne() {
  return (
    <div className='flex flex-col items-center justify-between py-28 min-h-[110vh] bg-[whitesmoke] space-y-4 overflow-x-hidden'>
      <div className='text-center space-y-3 overflow-x-hidden'>

        <h1 className='text-4xl sm:text-6xl text-yellow-300 font-bold'>We are honored to have you!</h1>
        <p className='text-[gray] font-serif'>join us for the celebration of our Holy Matrimony on</p>
        <p className='font-serif'><time dateTime="2024-10-24">October 24th, 2024</time></p>
        <p className='font-serif'>at St. Michael Catholic Church, Lafiaji, Lagos Island.</p>
      </div>

      <div className='relative px-10 lg:px-32 flex sm:flex-row flex-col-reverse items-start justify-between overflow-x-hidden gap-4 sm:gap-0'>
        <div className='sm:w-1/2 text-center sm:text-right flex flex-col-reverse sm:flex-row'>
          <div className='sm:max-w-[70%] space-y-5'>
            <h1 className='text-3xl font-extrabold py-2 text-transparent bg-gradient-to-b from-yellow-500 to-blue-600 bg-clip-text'>Nassy Bello</h1>
            <p className='font-serif text-[gray]'>In hindsight, I am filled with gratitude for the days I implored Our Lady Mother of Fairest Love to guide me to a soul who loves God with all his heart. You are the divine response to my heartfelt pleas. Joining our lives, my love, is a blessing that surpasses my wildest dreams. I am proud to walk hand in hand with you, and I pray that our love will be a sanctuary of joy, a beacon of faith, a fortress of support, and a gateway to a bright and prosperous future.</p>
          </div>
          <div className='sm:pl-3'>
            {/* placeholder image */}
            <Image className='rounded-t-xl rounded-bl-xl sm:rounded-t-full sm:rounded-bl-[1150rem]' src='/her.jpg' width={1320} height={1320} alt='Nassy Bello' title='Nassy Bello' />   
          </div>
        </div>

        <div className='absolute sm:left-[47%] sm:top-[7%] md:left-[47%] top-[10%] lg:left-[47.7%] lg:top-[25%] bg-[whitesmoke] shadow-md rounded-full aspect-square p-3 lg:p-5 hidden sm:flex justify-center items-center animate-bounce duration-300'>
          <IoMdHeart className='text-[#FFD700] sm:text-xl md:text-2xl'/>
        </div>

        <div className='sm:w-1/2 flex sm:flex-row flex-col text-center sm:text-left'>
          <div className='sm:pr-3'>
            {/* placeholder image */}
            <Image className='rounded-t-xl rounded-br-xl sm:rounded-t-full sm:rounded-br-[1150rem]' src='/him.jpg' width={1025} height={1025} alt='Francis Enemuo' title='Francis Enemuo' />   
          </div>
          <div className='sm:max-w-[70%] space-y-5'>
            <h1 className='text-3xl font-extrabold text-transparent bg-gradient-to-b from-yellow-500 to-blue-600 bg-clip-text py-2'>Francis Enemuo</h1>
            <p className='font-serif text-[gray]'>The woman of my dreams, now a radiant reality! You are the living embodiment of the Proverbs 31 woman, bringing balance and beauty to my life. As we unite in holy matrimony, my cherished bride, I am filled with gratitude and awe. You are the missing piece that makes me whole, and I am forever thankful to call you mine. May our love be a boundless ocean of joy, a symphony of harmony, and a garden of lasting success, flourishing with each passing day. Cheers to forever Asa&apos;m.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
