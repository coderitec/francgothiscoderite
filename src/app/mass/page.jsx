import Communion from "./Communion";
import Dismissal from "./Dismissal";
import Entrance from "./Entrance";
import Offertory from "./Offertory";
import Santus from "./Santus";

export default function WeddingMass() {
  return (
    <main>
        <h1>Order of mass</h1>
        <Entrance/>
        <Offertory/>
        <Santus/>
        <Communion/>
        <Dismissal/>
    </main>
  )
}