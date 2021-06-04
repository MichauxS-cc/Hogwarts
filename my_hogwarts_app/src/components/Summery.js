// layout and logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY
import "../css/Summery.css";

function Summery(props) {
    const { cartItems, addToCauldron, removeFromCauldron } = props;
    const itemsPrice = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.qty, 0);
    const taxPrice = itemsPrice * 0.12;
    const shippingPrice = itemsPrice > 10000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    let visible = "hidden";
    if (props.modal.visible) visible = "visible";

    function handleClick() {
        props.closeModal();
    }

    return (
        <div className={`modal-container ${visible}`}>
            <button onClick={handleClick} className="modal-close">
                +
            </button>
            <div className="block col-1">
                <h2>My Cauldron</h2>
                <div>{cartItems.length === 0 && <div>Cauldron Is Empty</div>}</div>
                {cartItems.map((item) => (
                    <div key={item.name} className="flex">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button className="add-btn" onClick={() => addToCauldron(item)}>
                                +
                            </button>
                            <button className="remove-btn" onClick={() => removeFromCauldron(item)}>
                                -
                            </button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} x &{item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {cartItems.length !== 0 && (
                    <div className="calculation">
                        <hr></hr>
                        <div className="flex">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="flex">
                            <div className="col-2">Tax Price (12%)</div>
                            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="flex">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="flex">
                            <div className="col-2">
                                <strong>Total</strong> Price
                            </div>
                            <div className="col-1 text-right">
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="flex">
                            <button className="checkout-btn" onClick={() => alert("Order Resieved!")}>
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Summery;
