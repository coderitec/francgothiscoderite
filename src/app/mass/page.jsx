import Communion from "./Communion";
import Dismissal from "./Dismissal";
import Entrance from "./Entrance";
import Offertory from "./Offertory";
import Readings from "./Readings";
import Santus from "./Santus";
import styles from './mass.module.css'

import { Pacifico } from "next/font/google";


const pac = Pacifico({ subsets: ["latin"], weight: "400" });

export default function WeddingMass() {
  return (
    <main className={`${styles.mass} ${pac.className}`}>
        <h1 className="text-center">Order of mass</h1>
        <Entrance/>
        {/* <Readings/> */}
        <Offertory/>
        <Santus/>
        <Communion/>
        <Dismissal/>
    </main>
  )
}