"use client"
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";



export default function Dismissal() {
    const [open, setOpen] = useState(false)

    function handleClick(){
      setOpen(!open)
    }
    
  return (
    <div>
          <div className="flex items-center justify-around text-2xl capitalize">
        <h2>Dismissal hymn</h2>
        <div>
          <FaCircleMinus className={`${open ? 'flex': 'hidden'}`} onClick={handleClick}/>
          <FaPlusCircle className={`${open ? 'hidden': 'flex'}`} onClick={handleClick}/>
        </div>

        </div>
        {open && 
        <div  className="w-4/5 m-auto">
          <aside>
        <h2>Salve Regina</h2>
            <p>
              Salve, Regina, mater misericordiae; <br />
              Vita, dulcedo et spes nostra salve. <br />
              Ad te clamamus, exsules filii Hevae. <br />
              Ad te suspiramus, gementes et flentes <br />
              in hac lacrimarum valle. <br />
              Eia ergo, advocata nostra, <br />
              illos tuos misericordes oculos ad nos converte. <br />
              Et Jesum, benedictum fructum ventris tui, <br />
              nobis post hoc exsilium ostende. <br />
              O clemens, o pia, o dulcis Virgo Maria. <br />
            </p>
          </aside>
          <aside>
            <h2>Kábíyèsí o, hòsánnà o</h2>
            <div>                              
                Kábíyèsí o, hòsánnà o <br/>
                Ẹ yin Jésù Kristì Ọba àìkú <br/>
                Kabiyesi o, hosanna o <br/>
                Ẹ yin Jésù Kristì Ọba àìkú <br/>

                Ègbè <br/>
                Ẹ gbé E ga, Ẹ yin Jésù o <br/>
                Ẹ yin Jésù Kristì Ọba àìkú <br/>
                [Repeat]

                Wá ká yin Jésù, ará mi ò <br/>
                Ọba mímọ́ Jésù, Ọba àìrí <br/>
                Wá júbà Jésù Olúwa ò <br/>
                Yin Elédùmarè Ọba àìkú <br/>

                Ègbè <br/>
 <br/>
                Ọbańgijì yé o, Olúwa ò <br/>
                Wá gbọpẹ́ wá gba ìyìn àwa ọmọ Rẹ <br/>
                Ángẹ́lì lọ́run ẹ bá wa yìn <br/>
                Ẹ yin Jésù Krístì Ọba àìkú <br/>

                Ègbè <br/>

                Alelúyà sí Ọ Olúwà o <br/>
                Ọpẹ́, ọlá, ìyìn sí Olùbùkún <br/>
                Ho-hosanna, alelúyà o <br/>
                Ẹ yin Jésù Krístì Ọba àìkú <br/>

                Ègbè <br/>
            </div>
          </aside>

            
       
       
        </div>
}
    </div>
  )
}