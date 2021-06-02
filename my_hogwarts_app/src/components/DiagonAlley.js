import React, { useState, useRef, useEffect } from "react";
import "../css/DiagonAlley.css";
import Main from "./Main.js";
import Cauldron from "./Cauldron.js";
import ShoppingCart from "./ShoppingCart.js";
import equipmentDatabase from "./equipmentDatabase.js";

function DiagonAlley() {
    const { equipments } = equipmentDatabase;
    const [cartItems, setCartItems] = useState([]);
    //function accept the equip that needs to be added to the cart
    // exist is to try to find the item x, whose name === the equip.name that I need to add
    // if exist, increase the quantity of that equip
    const addToCauldron = (equip) => {
        const exist = cartItems.find((x) => x.name === equip.name);
        if (exist) {
            //loop through cartItems, only update the x that x => x.name === equip.name, return the not matching item otherwise
            setCartItems(cartItems.map((x) => (x.name === equip.name ? { ...exist, qty: exist.qty + 1 } : x)));
        } else {
            setCartItems([...cartItems, { ...equip, qty: 1 }]);
        }
    };

    const removeFromCauldron = (equip) => {
        const exist = cartItems.find((x) => x.name === equip.name);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.name !== equip.name));
        } else {
            setCartItems(cartItems.map((x) => (x.name === equip.name ? { ...exist, qty: exist.qty - 1 } : x)));
        }
    };

    return (
        <div>
            <ShoppingCart countEquipments={cartItems.length} />
            <div className="row">
                <Main addToCauldron={addToCauldron} equipments={equipments} />
                <Cauldron addToCauldron={addToCauldron} removeFromCauldron={removeFromCauldron} cartItems={cartItems} />
            </div>
        </div>
    );
}

export default DiagonAlley;
