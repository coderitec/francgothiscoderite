"use client"
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";



export default function Readings() {
    const [open, setOpen] = useState(false)

    function handleClick(){
      setOpen(!open)
    }
    
  return (
    <div>
          <div className="flex items-center justify-around text-2xl capitalize">
        <h2 onClick={handleClick}>Mass Readings</h2>
        <div>
          <FaCircleMinus className={`${open ? 'flex': 'hidden'}`} onClick={handleClick}/>
          <FaPlusCircle className={`${open ? 'hidden': 'flex'}`} onClick={handleClick}/>
        </div>

        </div>
        {open && 
        <div  className="w-4/5 m-auto">
        <object data="/mass.pdf" type="application/pdf" width="100%" height="700"></object>

            
       
       
        </div>
}
    </div>
  )
}