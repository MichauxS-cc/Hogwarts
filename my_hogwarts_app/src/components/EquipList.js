// logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import "../css/EquipList.css";
import Equipment from "./Equipment.js";

function EquipList(props) {
    const { equipments, addToCauldron } = props;
    return (
        <div className="equipment-list">
            {equipments.map((equipment) => (
                <Equipment key={equipment.name} equipment={equipment} addToCauldron={addToCauldron} />
            ))}
        </div>
    );
}

export default EquipList;
