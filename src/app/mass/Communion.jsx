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
        <h2 onClick={handleClick}>Communion hymn</h2>
        <div>
          <FaCircleMinus className={`${open ? 'flex': 'hidden'}`} onClick={handleClick}/>
          <FaPlusCircle className={`${open ? 'hidden': 'flex'}`} onClick={handleClick}/>
        </div>

        </div>
        {open && 
        <div>
        
          <h3 className="mt-4 bg-orange-400">Abum Achicha</h3> 
          <p>
          
            Kristi ekwugo ya wee si <br />
            Beere so m'iriri <br />
            Ahu na obara nwa nke m madu nkwa obara ya <br />
            Beere so m'iriri ya nwannem <br />
            Iriri ahu mo <br />
            Beere so m'inuru obara muo <br />
            Obara di oke onu <br />
            I gaghi enwe ndu ni me gi <br />
 <br />
            Abum Achicha din du  <br />
            Dinweum na-ekwu <br />
            Abum Achicha din du  <br />
            Si n'eluigwe bia <br />
            Abum Achicha din du  <br />
            Nri na-enye ndu n'ezie <br />
            Abum Achicha din du  <br />
            Si n'eluigwe bia <br />
 <br />
            Onye riri ahu muo ahu muo <br />
            Onye nuru obara muo <br />
            G'adi ndu n'ezie  <br />
            Onye riri ahu muo ahu muo <br />
            Onye nuru obara muo <br />
            G'adi ndu opu <br />
 <br />

          </p>
          <h3 className="mt-4 bg-orange-400">As the Deer</h3>
          <p>
          
          As the deer panteth for the water <br />
          So my soul longeth after Thee <br />
          You alone are my heart’s desire <br />
          And I long to worship Thee <br />
          You alone are my Strength, my Shield <br />
          To You alone may my spirit yield <br />
          You alone are my heart’s desire <br />
          And I long to worship Thee. <br />
 <br />
          You’re my Friend and You are my Brother <br />
          Even though You are a King <br />
          I love You more than any other <br />
          So much more than anything <br />
          You alone are my Strength, my Shield <br />
          To You alone may my spirit yield <br />
          You alone are my heart’s desire <br />
          And I long to worship Thee. <br />
 <br />
          I want You more than gold or silver <br />
          Only You can satisfy <br />
          You alone are the real joy-giver <br />
          And the apple of my eye <br />
          You alone are my Strength, my Shield <br />
          To You alone may my spirit yield <br />
          You alone are my heart’s desire <br />
          And I long to worship Thee. <br />
 <br />

          </p>

          <h3 className="mt-4 bg-orange-400">Take me deeper</h3>
          <p>
          

        Take me deeper in love with you <br />
        Jesus, o deeper in love <br />
        Hold me closer in love with you <br />
        Jesus o closer in love with you <br />
 <br />
        Lord there is a longing only you can fill <br />
        A ranging tempest only you can still <br />
        My soul is thirsting for you, o my God <br />
        Lord quench my thirst <br />
        Lord feed my soul <br />
 <br />
        Take me deeper in love with you <br />
        Jesus, o deeper in love <br />
        Hold me closer in love with you <br />
        Jesus o closer in love with you <br />
 <br />
        Yes from sunrise to sunrise I seek your face <br />
        From day to day I long for your touch <br />
        To hold my hand Lord lest I fall <br />
        To draw me nearer closer to thee <br />
        Take me deeper in love with you <br />
        Jesus, o deeper in love <br />
        Hold me closer in love with you <br />
        Jesus o closer in love with you <br />
          </p>
          </div>
}
    </div>
  )
}