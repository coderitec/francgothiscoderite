import Link from 'next/link'
import React from 'react'

export default function ShortStory() {
  return (
    <div className='bg-[whitesmoke] py-16 md:px-16'>
    <div className='flex justify-center items-center flex-col space-y-8'>
      <h1 className='text-4xl sm:text-6xl font-bold text-[orange]'>A Story of Love</h1>
    <section>
        <p className='text-xl font-sans text-center m-auto md:w-3/5 w-5/6'>Franc and Nassy&apos;s journey from a serendipitous meeting at a MyLamp event to a deep connection, marked by shared values and contrasting tastes, culminated in a heartfelt proposal on Nassy&apos;s birthday. Their love story, enriched by their triumphs and trials, is set to blossom further as they prepare for their wedding in October 2024. <Link href='/our-story' className='hover:border-b-orange-400 hover:border-b-4 hover:bg-slate-500 duration-300 bg-slate-800 p-2 text-white inline-flex'>Read our full story</Link></p>

    </section>

    </div>
    </div>
  )
}
