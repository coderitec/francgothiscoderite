import React from 'react'
import { wedData } from '../components/data'
import Image from 'next/image'
import GratitudeSlide from '../components/GratitudeSlide'
import Footer from '../components/Footer'
import styles from '../traditional-marriage/trad.module.css'

const WedPage = () => {
    return (
        <div>
            <div className='h-[85vh] backdrop-brightness-75 flex justify-center items-center'>
                <h1 className='text-4xl sm:text-6xl font-bold text-white'>wedding  Photos</h1>
            </div>

            <div className={`bg-white min-h-[100vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-28 gap-4 py-14 ${styles.trad}`}>
                {
                    wedData.map((item, index) => (
                        <div key={index} className={`w-[100%]`}>
                            <Image
                                className='rounded-lg w-full'
                                src={item}
                                width={400}
                                height={100}
                                alt={item}
                            />
                        </div>
                    ))
                }
            </div>

            <GratitudeSlide />

            <Footer />

        </div>
    )
}

export default WedPage
