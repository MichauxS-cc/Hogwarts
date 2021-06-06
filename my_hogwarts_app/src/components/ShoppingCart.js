import "../css/ShoppingCart.css";
import ShoopingCart from "../pics/cauldron.png";
import { useSelector } from "react-redux";

function ShoppingCart(props) {
    const cartItems = useSelector((state) => state.cartItems);
    function handleClick() {
        props.showModal();
    }
    return (
        <div className="shopping-cart" onClick={handleClick}>
            <img className="shopping-cart-img" src={ShoopingCart} alt="Shoping Cart" />
            <button className="counting-btn">{cartItems.length}</button>
        </div>
    );
}

export default ShoppingCart;
