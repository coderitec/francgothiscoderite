"use client"
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";



export default function Entrance() {
  const [open, setOpen] = useState(false)

  function handleClick(){
    setOpen(!open)
  }
  return (
    <div>
      <div className="flex items-center justify-around text-2xl capitalize">
        <h2>Entrance hymn</h2>
        <div>
          <FaCircleMinus className={`${open ? 'flex': 'hidden'}`} onClick={handleClick}/>
          <FaPlusCircle className={`${open ? 'hidden': 'flex'}`} onClick={handleClick}/>
        </div>

        </div>
        {open &&
        <div className="w-4/5 m-auto">
        <article>
            <h2 className="mt-4 bg-orange-400">Christ, Be Our Light</h2>
            <em>By Bernadette Farrell</em>
            
            <aside>

            <h2>Verse 1</h2>
            <p>Longing for light, we wait in darkness.<br/>
            Longing for truth, we turn to You.<br/>
            Make us Your own, Your holy people,<br/>
            Light for the world to see.</p>

            <h2>Chorus</h2>
            <p>Christ, be our light!<br/>
            Shine in our hearts,<br/>
            Shine through the darkness.<br/>
            Christ, be our light!<br/>
            Shine in Your church gathered today.</p>

            <h2>Verse 2</h2>
            <p>Longing for peace, our world is troubled.<br/>
            Longing for hope, many despair.<br/>
            Your word alone has power to save us.<br/>
            Make us Your living voice.</p>

            <h2>Chorus</h2>
            <p>Christ, be our light!<br/>
            Shine in our hearts,<br/>
            Shine through the darkness.<br/>
            Christ, be our light!<br/>
            Shine in Your church gathered today.</p>

            <h2>Verse 3</h2>
            <p>Longing for food, many are hungry.<br/>
            Longing for water, many still thirst.<br/>
            Make us Your bread, broken for others,<br/>
            Shared until all are fed.</p>

            <h2>Chorus</h2>
            <p>Christ, be our light!<br/>
            Shine in our hearts,<br/>
            Shine through the darkness.<br/>
            Christ, be our light!<br/>
            Shine in Your church gathered today.</p>

            <h2>Verse 4</h2>
            <p>Longing for shelter, many are homeless.<br/>
            Longing for warmth, many are cold.<br/>
            Make us Your building, sheltering others,<br/>
            Walls made of living stone.</p>

            <h2>Chorus</h2>
            <p>Christ, be our light!<br/>
            Shine in our hearts,<br/>
            Shine through the darkness.<br/>
            Christ, be our light!<br/>
            Shine in Your church gathered today.</p>

            <h2>Verse 5</h2>
            <p>Many the gifts, many the people,<br/>
            Many the hearts that yearn to belong.<br/>
            Let us be servants to one another,<br/>
            Making Your kingdom come.</p>

            <h2>Chorus</h2>
            <p>Christ, be our light!<br/>
            Shine in our hearts,<br/>
            Shine through the darkness.<br/>
            Christ, be our light!<br/>
            Shine in Your church gathered today.</p>
            </aside>
        </article>

        <article>
            <h2  className="mt-4 bg-orange-400">Chineke Onyeoma</h2>

            <h3>Chorus:</h3>
            <p>Kele Chineke jaa Ya mma<br/>
            <strong>(All)</strong><br/>
            Ekele, O di mma eee<br/>
            Onye kel&apos;uwa<br/>
            Onyeoma, Onyeoma, Onyeoma.</p>

            <p>(Sing chorus 2x)</p>

            <h3>Verses:</h3>

            <h4>Verse 1:</h4>
            <p>Sorom tobe Ya<br/>
            Tobenu Chineke<br/>
            Ekene diri Gi Nna<br/>
            Imeela.</p>

            <h4>Verse 2:</h4>
            <p>K&apos;anyi jaa ya mma<br/>
            Bunye Y&apos;onyinye<br/>
            Anyi ekele Gi Nna<br/>
            Imela.</p>

            <h4>Verse 3:</h4>
            <p>Anyi g&apos;eji gini kele Gi<br/>
            Ezebube k&apos;Ibu<br/>
            Otito na nsopuru diri Gi<br/>
            Eze dalu o!</p>

            <h4>Verse 4:</h4>
            <p>Ihunanya Chineke kasi akasi<br/>
            Olis&apos;ebuluwa Chineke dalu o!<br/>
            Imeka.</p>

            <h4>Verse 5:</h4>
            <p>Na-ra-Onyinye umu Gi n&apos;enye Gi<br/>
            Na-ra Aja anyi n&apos;achunyere Gi.</p>

            <h4>Verse 6:</h4>
            <p>Onyinye nwanyi ajadu<br/>
            ka&apos;nyi n&apos;ebunye Gi<br/>
            Na-ra-ya- ma gozie kwa&apos;nyi.</p>

        </article>
        </div>
  }
    </div>
  )
}