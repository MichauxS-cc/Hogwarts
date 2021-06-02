// import "../css/Main.css";
import Product from "./Product.js";

function Main(props) {
    const { equipments, addToCauldron } = props;
    return (
        <div className="block col-2">
            <h2>Equipments</h2>
            <div className="row">
                {equipments.map((equipment) => (
                    <Product key={equipment.name} equipment={equipment} addToCauldron={addToCauldron} />
                ))}
            </div>
        </div>
    );
}

export default Main;
