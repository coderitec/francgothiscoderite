import React from 'react'
import { LuCalendar, LuClock4 } from "react-icons/lu";


export default function SlideTwo() {
    return (
        <div className='bg-[url(/beach.jpg)] h-[130vh] bg-no-repeat bg-cover'>
            <div className='backdrop-brightness-75 h-[130vh]'>

                <div className='flex flex-col items-center justify-center py-32 space-y-4'>

                    <h1 className='font-sans font-bold uppercase text-[#f5f5f5da]'>Our special event</h1>
                    <p className='text-6xl font-bold text-white'>Wedding Events</p>
                </div>

                <div className='grid grid-cols-2 gap-32 px-44 text-white font-sans text-center'>
                    <div className='border-2 border-white rounded-md p-5'>
                        <div className='border-b-[1px] border-white mx-[10%] py-5'>

                            <h1 className='text-xl uppercase tracking-widest'>Wedding Mass</h1>
                        </div>
                        
                        <p className='py-3 text-xl tracking-wider'>St. Michael Catholic Church</p>

                        <div className='flex items-center justify-center space-x-8 pb-8'>
                            <div className='flex flex-col items-center justify-center space-y-2 tracking-wide'>
                                <LuClock4 className='text-xl'/>
                                <p>10:00 AM</p>
                            </div>
                            <div className='flex flex-col items-center justify-center space-y-2 tracking-wide'>
                                <LuCalendar className='text-xl'/>
                                <p>October 23rd, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}