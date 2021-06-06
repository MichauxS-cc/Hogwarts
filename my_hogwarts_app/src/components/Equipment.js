// logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import "../css/Equipment.css";
import { useDispatch } from "react-redux";
import { addToCauldron } from "../actions/ShoppingCartAction.js";

function Equipment(props) {
    const { equipment } = props;
    const dispatch = useDispatch();

    return (
        <div className="equipment-container">
            <div className="equipment-wrapper">
                <div className="equip-img-wrapper">
                    <img className="equip-img" src={equipment.img} alt={equipment.name}></img>
                </div>
                <h3>{equipment.name}</h3>
                <div>${equipment.price}</div>
                <div>
                    <button className="equipment-btn" onClick={() => dispatch(addToCauldron(equipment))}>
                        Add To Cauldron
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Equipment;
