// logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import "../css/EquipList.css";
import Equipment from "./Equipment.js";
import uuid from "react-uuid";

function EquipList(props) {
  const { equipments, addToCauldron } = props;
  return (
    <div className="equipment-list">
      {equipments.map((equipment) => (
        <Equipment
          key={uuid()}
          equipment={equipment}
          addToCauldron={addToCauldron}
        />
      ))}
    </div>
  );
}

export default EquipList;
