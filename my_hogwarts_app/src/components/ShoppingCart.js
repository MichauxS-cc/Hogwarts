import "../css/ShoppingCart.css";
import ShoopingCart from "../pics/cauldron.png";

function ShoppingCart(props) {
    const { countEquipments } = props;
    function handleClick() {
        props.showModal();
    }
    return (
        <div className="shopping-cart flex right" onClick={handleClick}>
            <img className="shopping-cart-img" src={ShoopingCart} alt="Shoping Cart" />
            <button className="counting-btn">{countEquipments ? countEquipments : "0"}</button>
        </div>
    );
}

export default ShoppingCart;
