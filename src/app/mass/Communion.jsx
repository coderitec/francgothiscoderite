"use client"
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";



export default function Communion() {
    const [open, setOpen] = useState(false)

    function handleClick(){
      setOpen(!open)
    }
    
  return (
    <div>
          <div className="flex items-center justify-around text-2xl capitalize">
        <h2>Communion hymn</h2>
        <div>
          <FaCircleMinus className={`${open ? 'flex': 'hidden'}`} onClick={handleClick}/>
          <FaPlusCircle className={`${open ? 'hidden': 'flex'}`} onClick={handleClick}/>
        </div>

        </div>
        {open && 
        <div  className="w-4/5 m-auto">
        <h1>So Otu Ihe Kam N&apos;ario N&apos;aka Dinwenu</h1>

            <h3>Chorus:</h3>
            <p>So otu ihe kam n&apos;ario n&apos;aka Dinwenu,<br/>
            Ka m biri ka m biri n&apos;ulo nke Dinwenu,<br/>
            Na mbosi ndu m nile,<br/>
            Ka m na-ahu ih&apos;iru Ya,<br/>
            Ka m na-ekiri ulo Ya,<br/>
            Ka m biri n&apos;ulo Dinwenu,<br/>
            Na mbosi ndu m nile.</p>

            <h3>Verse 1:</h3>
            <p>Dinwenu bu ihe na nzoputa m; Onye kam ga atu egwu?<br/>
            Dinwenu bu ebe mgbaba m, onye g’eyi m egwu?</p>

            <h3>Chorus:</h3>
            <p>So otu ihe kam n&apos;ario n&apos;aka Dinwenu,<br/>
            Ka m biri ka m biri n&apos;ulo nke Dinwenu,<br/>
            Na mbosi ndu m nile,<br/>
            Ka m na-ahu ih&apos;iru Ya,<br/>
            Ka m na-ekiri ulo Ya,<br/>
            Ka m biri n&apos;ulo Dinwenu,<br/>
            Na mbosi ndu m nile.</p>

            <h3>Verse 2:</h3>
            <p>O ga-ezobe m ebe obibi Ya mbosi ogba aghara:::<br/>
            O ga ezo bem n’ime mkpu-kpu Ya;<br/>
            Kwubasie m ike na nkpume.</p>

            <h3>Chorus:</h3>
            <p>So otu ihe kam n&apos;ario n&apos;aka Dinwenu,<br/>
            Ka m biri ka m biri n&apos;ulo nke Dinwenu,<br/>
            Na mbosi ndu m nile,<br/>
            Ka m na-ahu ih&apos;iru Ya,<br/>
            Ka m na-ekiri ulo Ya,<br/>
            Ka m biri n&apos;ulo Dinwenu,<br/>
            Na mbosi ndu m nile.</p>

            <h3>Verse 3:</h3>
            <p>Aga m ewere obi anuri na-achu aja n’ulo Dinwenu.<br/>
            Agam ekwe ukwe anuri nye Dinwenu.</p>

            <h3>Chorus:</h3>
            <p>So otu ihe kam n&apos;ario n&apos;aka Dinwenu,<br/>
            Ka m biri ka m biri n&apos;ulo nke Dinwenu,<br/>
            Na mbosi ndu m nile,<br/>
            Ka m na-ahu ih&apos;iru Ya,<br/>
            Ka m na-ekiri ulo Ya,<br/>
            Ka m biri n&apos;ulo Dinwenu,<br/>
            Na mbosi ndu m nile.</p>

            <h3>Verse 4:</h3>
            <p>Otito diri Nna na Nwa na Mmuo Nso n’uwatuwa nile.</p>

            <h3>Chorus:</h3>
            <p>So otu ihe kam n&apos;ario n&apos;aka Dinwenu,<br/>
            Ka m biri ka m biri n&apos;ulo nke Dinwenu,<br/>
            Na mbosi ndu m nile,<br/>
            Ka m na-ahu ih&apos;iru Ya,<br/>
            Ka m na-ekiri ulo Ya,<br/>
            Ka m biri n&apos;ulo Dinwenu,<br/>
            Na mbosi ndu m nile.</p>
        </div>
}
    </div>
  )
}