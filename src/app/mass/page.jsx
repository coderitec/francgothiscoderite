import Communion from "./Communion";
import Dismissal from "./Dismissal";
import Entrance from "./Entrance";
import Offertory from "./Offertory";
import Santus from "./Santus";
import styles from './mass.module.css'

export default function WeddingMass() {
  return (
    <main className={`${styles.mass}`}>
        <h1>Order of mass</h1>
        <Entrance/>
        <Offertory/>
        <Santus/>
        <Communion/>
        <Dismissal/>
    </main>
  )
}