import "../css/ShoppingCart.css";
import ShoppingCartImgURL from "../pics/cauldron.png";

import { useSelector, useDispatch } from "react-redux";
import { showSummary } from "../actions";

function ShoppingCart(props) {
  const cartItems = useSelector((state) => state.cartItems);
  //   const summary = useSelector((state) => state.summary);
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart" onClick={() => dispatch(showSummary())}>
      <img
        className="shopping-cart-img"
        src={ShoppingCartImgURL}
        alt="Shopping Cart"
      />
      <button className="counting-btn">{cartItems.length}</button>
    </div>
  );
}

export default ShoppingCart;
