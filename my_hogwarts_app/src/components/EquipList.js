// logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import "../css/EquipList.css";
import Equipment from "./Equipment.js";
// import { v4 as uuidv4 } from "uuid";

function EquipList(props) {
  const { equipments, addToCauldron } = props;
  return (
    <div className="equipment-list">
      {equipments.map((equipment) => (
        <Equipment
          key={equipment._id}
          equipment={equipment}
          addToCauldron={addToCauldron}
        />
      ))}
    </div>
  );
}

export default EquipList;
