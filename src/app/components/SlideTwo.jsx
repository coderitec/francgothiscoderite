import React from 'react'
import { LuCalendar, LuClock4 } from "react-icons/lu";


export default function SlideTwo() {
    return (
        <div className='bg-[url(/beach.jpg)] bg-no-repeat bg-cover'>
            <div className='backdrop-brightness-75 min-h-[130vh] pb-8'>

                <div className='flex flex-col items-center justify-center py-16 space-y-4'>

                    {/* <h1 className='font-sans font-bold uppercase text-[#f5f5f5da]'>Our special event</h1> */}
                    <p className='text-4xl sm:text-6xl font-bold text-white text-center'>Wedding Events</p>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-4 md:px-44 px-4 text-white font-sans text-center'>
                    <div className='border-2 border-white rounded-md p-5'>
                        <div className='border-b-[1px] border-white mx-[10%] py-5'>

                            <h1 className='text-xl uppercase tracking-widest'>Registry</h1>
                        </div>
                        
                        <p className='py-3 text-xl tracking-wider'>Private Event</p>

                        <div className='flex items-center justify-center space-x-8 pb-8'>
                            <div className='flex flex-col items-center justify-center space-y-2 tracking-wide'>
                                <LuClock4 className='text-xl'/>
                                <p><time dateTime="11:00:00">9:00 AM</time></p>
                            </div>
                            <div className='flex flex-col items-center justify-center space-y-2 tracking-wide'>
                                <LuCalendar className='text-xl'/>
                                <p><time dateTime="2024-10-24">October 9th, 2024</time></p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-white rounded-md p-5'>
                        <div className='border-b-[1px] border-white mx-[10%] py-5'>

                            <h1 className='text-xl uppercase tracking-widest'>Traditional marriage</h1>
                        </div>
                        
                        <p className='py-3 text-xl tracking-wider'>Private Event</p>

                        <div className='flex items-center justify-center space-x-8 pb-8'>
                            <div className='flex flex-col items-center justify-center space-y-2 tracking-wide'>
                                <LuClock4 className='text-xl'/>
                                <p><time dateTime="11:00:00">11:00 AM</time></p>
                            </div>
                            <div className='flex flex-col items-center justify-center space-y-2 tracking-wide'>
                                <LuCalendar className='text-xl'/>
                                <p><time dateTime="2024-10-24">October 19th, 2024</time></p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-white rounded-md p-5'>
                        <div className='border-b-[1px] border-white mx-[10%] py-5'>

                            <h1 className='text-xl uppercase tracking-widest'>Wedding Mass</h1>
                        </div>
                        
                        <p className='py-3 text-xl tracking-wider'>St. Michael Catholic Church</p>

                        <div className='flex items-center justify-center space-x-8 pb-8'>
                            <div className='flex flex-col items-center justify-center space-y-2 tracking-wide'>
                                <LuClock4 className='text-xl'/>
                                <p><time dateTime="11:00:00">11:00 AM</time></p>
                            </div>
                            <div className='flex flex-col items-center justify-center space-y-2 tracking-wide'>
                                <LuCalendar className='text-xl'/>
                                <p><time dateTime="2024-10-24">October 24th, 2024</time></p>
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
