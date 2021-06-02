// logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import "../css/Main.css";
import Product from "./Product.js";

function Main(props) {
    const { equipments, addToCauldron } = props;
    return (
        <div>
            <div className="equipment-list">
                {equipments.map((equipment) => (
                    <Product key={equipment.name} equipment={equipment} addToCauldron={addToCauldron} />
                ))}
            </div>
        </div>
    );
}

export default Main;
