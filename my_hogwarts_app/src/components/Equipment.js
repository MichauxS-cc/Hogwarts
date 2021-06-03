// logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import "../css/Equipment.css";

function Equipment(props) {
    const { equipment, addToCauldron } = props;
    return (
        <div className="equipment-container">
            <div className="equipment-wrapper">
                <img className="equip-img" src={equipment.img} alt={equipment.name}></img>
                <h3>{equipment.name}</h3>
                <div>${equipment.price}</div>
                <div>
                    <button className="equipment-btn" onClick={() => addToCauldron(equipment)}>
                        Add To Cauldron
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Equipment;
