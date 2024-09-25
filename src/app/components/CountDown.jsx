"use client"
import { useState, useEffect } from 'react';

export default function CountDown() {
  // Define state variables for days, hours, minutes, and seconds
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate the time difference
    const calculateTimeLeft = () => {
      const currentTime = new Date().getTime();
      const eventDate = new Date("2024-10-24").getTime();
      const diffTime = eventDate - currentTime;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const remainderAfterDays = diffTime % (1000 * 60 * 60 * 24);
      const hours = Math.floor(remainderAfterDays / (1000 * 60 * 60));
      const remainderAfterHours = remainderAfterDays % (1000 * 60 * 60);
      const minutes = Math.floor(remainderAfterHours / (1000 * 60));
      const remainderAfterMinutes = remainderAfterHours % (1000 * 60);
      const seconds = Math.floor(remainderAfterMinutes / 1000);

      // Update the state with the calculated values
      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Run the calculation immediately and then every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute h-screen  md:bg-[url(/gallery/us.jpg)] bg-[url(/gallery/mine.jpg)] bg-cover min-w-full text-center py-4">
      <div className=' bg-gray-200/80 md:w-3/5 m-auto md:shadow-[0_0_30px] rounded-md '>
      <h2 className='pt-6 text-6xl'>We are almost there!</h2>
      <ul className='flex md:flex-row flex-col md:items-center items-center pb-5 gap-x-2 md:justify-evenly justify-start pl-4 font-bold md:text-2xl text-lg   md:h-[60vh] h-screen'>
        <li className='flex flex-col items-center mb-4 bg-slate-950/95 w-[200px] py-10 text-slate-100 text-3xl rounded-md'> 
          <span>{timeLeft.days}</span>
          <span className='text-lg text-slate-400 uppercase'>Days</span>
         </li>
        <li className='flex flex-col items-center mb-4 bg-slate-950/95 w-[200px] py-10 text-slate-100 text-3xl rounded-md'> 
          <span>{timeLeft.hours} </span>
          <span className='text-lg text-slate-400 uppercase'>Hours</span>
         
         </li>
        <li className='flex flex-col items-center mb-4 bg-slate-950/95 w-[200px] py-10 text-slate-100 text-3xl rounded-md'> 
          <span>{timeLeft.minutes} </span>
          <span className='text-lg text-slate-400 uppercase'>Minutes</span>
         
         </li>
        <li className='flex flex-col items-center mb-4 bg-slate-950/95 w-[200px] py-10 text-slate-100 text-3xl rounded-md'> 
          <span>{timeLeft.seconds} </span>
          <span className='text-lg text-slate-400 uppercase'>Seconds</span>
         </li>
      </ul>
      </div>
    </div>
  );
}
