'use client'
import { data } from '../components/data'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';

export default function StoryPage() {
  return (
    <div className='bg-[whitesmoke] min-h-[100vh] py-32'>
      <div className='flex justify-center items-center flex-col space-y-8'>
        <h1 className='text-6xl font-bold text-yellow-300'>Our Story</h1>
        <p className='text-center font-sans w-1/2 text-lg text-[gray]'>It all started 9 years ago...boy met girl....boy had a crush on girl... A few years later...a good man realized he couldn&apos;t live without his beautiful kind angel.. And a new chapter began:</p>
      </div>

      <div>
        
      </div>
    </div>
  )
}
