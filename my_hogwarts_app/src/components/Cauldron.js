function Cauldron(props) {
    const { cartItems, addToCauldron, removeFromCauldron } = props;
    const itemsPrice = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.qty, 0);
    const taxPrice = itemsPrice * 0.12;
    const shippingPrice = itemsPrice > 10000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside className="block col-1">
            <h2>My Cauldron</h2>
            <div>{cartItems.length === 0 && <div>Cauldron Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.name} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => addToCauldron(item)} className="add">
                            +
                        </button>
                        <button onClick={() => removeFromCauldron(item)} className="remove">
                            -
                        </button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x &{item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <strong>Total</strong> Price
                        </div>
                        <div className="col-1 text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <button onClick={() => alert("Order Resieved!")}>Checkout</button>
                    </div>
                </>
            )}
        </aside>
    );
}

export default Cauldron;
