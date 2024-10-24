"use client"
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";



export default function Santus() {
    const [open, setOpen] = useState(false)

    function handleClick(){
      setOpen(!open)
    }
    
  return (
    <div>
          <div className="flex items-center justify-around text-2xl capitalize">
        <h2 onClick={handleClick}>Holy Holy Holy</h2>
        <div>
          <FaCircleMinus className={`${open ? 'flex': 'hidden'}`} onClick={handleClick}/>
          <FaPlusCircle className={`${open ? 'hidden': 'flex'}`} onClick={handleClick}/>
        </div>

        </div>
        {open && 
        <div  className="w-4/5 m-auto">
        <h2 className="mt-4 bg-orange-400">Mimo l&apos;Olodumare</h2>
          <p>
            Mimo l&apos;Olodumare <br />
            Mimo mimo mimo <br />
            Mimo ooo Oluwa X2 <br />
 <br />
            Orun oun aye n yin o logo o  <br />
            Mimo mimo mimo <br />
            Mimo ooo Oluwa X2 <br />
 <br />
            Ibunkun ni f&apos;eni to n bo wa l&apos;oruko Oluwa o <br />
            Mimo mimo mimo <br />
            Mimo ooo Oluwa X2 <br />
 <br />
            Hossana l&apos;oke orun o X2 <br />
          </p>
            
       
       
        </div>
}
    </div>
  )
}