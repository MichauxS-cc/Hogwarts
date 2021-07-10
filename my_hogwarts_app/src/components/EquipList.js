// logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import "../css/EquipList.css";
import Equipment from "./Equipment.js";
import { useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";

function EquipList() {
  const equipmentList = useSelector((state) => state.equipmentList);

  return (
    <div className="equipment-list">
      {equipmentList.map((equipment) => (
        <Equipment key={equipment._id} equipment={equipment} />
      ))}
    </div>
  );
}

export default EquipList;
