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
    <div className="absolute  bg-gray-300/60 min-w-full text-center py-4">
      <ul className='md:min-h-[50px] min-h-[200px] flex md:flex-row flex-col md:items-center items-start  md:justify-evenly justify-start pl-4 font-bold md:text-2xl text-lg'>
        <li className='flex flex-col items-center'> 
          <span>{timeLeft.days}</span>
          <span>Days</span>
         </li>
        <li className='flex flex-col items-center mb-4'> 
          <span>{timeLeft.hours} </span>
          <span>Hours</span>
         
         </li>
        <li className='flex flex-col items-center mb-4'> 
          <span>{timeLeft.minutes} </span>
          <span>Minutes</span>
         
         </li>
        <li className='flex flex-col items-center mb-4'> 
          <span>{timeLeft.seconds} </span>
          <span>Seconds</span>
         </li>
      </ul>
    </div>
  );
}
