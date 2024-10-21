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
        <div className='min-h-[80vh] bg-[whitesmoke]'>
            <h1 className='text-4xl sm:text-6xl font-bold text-center py-10 text-[#ffa500]'>Best Wishes</h1>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 15000, disableOnInteraction: false }}
                onSlideChange={() => console.log('slide change')}
            >

                {wishesData.map((wish, index) => (
                    <div key={index} className='flex flex-col justify-center items-center gap-y-10'>
                        <SwiperSlide className='px-[6%] md:px-[20%] py-[1%]'>
                            <div className='flex md:flex-row flex-col items-center justify-center gap-3'>
                        
                                    <Image className='w-[80%] h-[80%] rounded-full border-y-8 border-orange-700' src={wish.image} width={'200'} height={'200'} alt={wish.name} title={wish.name}/>
                            
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
