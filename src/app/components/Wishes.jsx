'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { wishesData } from './data';
import Image from 'next/image';

export default function Wishes() {
    return (
        <div className='min-h-[100vh] bg-[whitesmoke]'>
            <h1 className='text-6xl font-bold text-center py-10 text-[#FFD700]'>Best Wishes</h1>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                onSlideChange={() => console.log('slide change')}
            >

                {wishesData.map((wish, index) => (
                    <div key={index} className='flex flex-col justify-center items-center gap-y-10'>
                        <SwiperSlide className='px-[20%] py-[1%]'>
                            <div className='grid md:grid-cols-[1fr_3fr] grid-cols-1'>
                                <div className=''>
                                    <Image className='w-[80%] h-[80%] rounded-full border-y-8 border-orange-700' src={wish.image} width={500} height={500} alt={wish.name} title={wish.name}/>
                                </div>

                                <div className=''>
                                    <p className='text-lg font-sans text-center'>&quot; {wish.wish} &quot;</p>
                                    <p className='font-sans py-4 text-center font-semibold'>- {wish.name}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}

            </Swiper>
        </div>
    );
}
