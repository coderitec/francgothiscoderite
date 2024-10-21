"use client"
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";



export default function Offertory() {
    const [open, setOpen] = useState(false)

    function handleClick(){
      setOpen(!open)
    }
    
  return (
    <div>
          <div className="flex items-center justify-around text-2xl capitalize">
        <h2 onClick={handleClick}>Offertory hymn</h2>
        <div>
          <FaCircleMinus className={`${open ? 'flex': 'hidden'}`} onClick={handleClick}/>
          <FaPlusCircle className={`${open ? 'hidden': 'flex'}`} onClick={handleClick}/>
        </div>

        </div>
        {open && 
        <div  className="w-4/5 m-auto">
        <h2 className="mt-4 bg-orange-400">So Otu Ihe Kam N&apos;ario N&apos;aka Dinwenu</h2>

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

        <div>
            <h2 className="mt-4 bg-orange-400">yamba yamba, yamba yahwe</h2>
            <div>
                yamba, yamba, yamba yahwe... <br />
                yahwe, yamba, yamba yahwe... <br />
                yamba, yamba,  yahwe...DC <br />

                <h3>verse 1</h3>
                yamba, yamba yamba mambana beto...yahwe <br />
                yamba, yamba,  yahwe...(DS) <br />
                yamba, yamba,  yahwe... <br />

                <h3>verse 2</h3>
                yamba, yamba yamba vinu na beto...yahwe <br />
                yamba, yamba,  yahwe...(DS) <br />
                yamba, yamba,  yahwe... <br />

                <h3>verse 3</h3>
                yamba, yamba yamba kissa beto...yahwe <br />
                yamba, yamba,  yahwe...(DS) <br />
                yamba, yamba,  yahwe... <br />
            </div>
        </div>
        </div>
}
    </div>
  )
}