// addToCauldron() and removeFromCauldron() logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import React, { useState, useRef, useEffect } from "react";
import "../css/DiagonAlley.css";
import EquipList from "./EquipList.js";
import Cauldron from "./Cauldron.js";
import ShoppingCart from "./ShoppingCart.js";
import equipmentDatabase from "./equipmentDatabase.js";

function DiagonAlley() {
    const { equipments } = equipmentDatabase;
    const [cartItems, setCartItems] = useState([]);
    const [modal, setModal] = useState({ visible: false });
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

    function showSummery() {
        let newModal = { ...modal };
        newModal.visible = true;
        setModal(newModal);
    }

    function closeModal() {
        let newModal = { ...modal };
        newModal.visible = false;
        setModal(newModal);
    }

    return (
        <div>
            <div className="max-container">
                <h1>
                    <img
                        src="https://see.fontimg.com/api/renderfont4/MVZ6w/eyJyIjoiZnMiLCJoIjo3NiwidyI6MTAwMCwiZnMiOjc2LCJmZ2MiOiIjRDBBQjIyIiwiYmdjIjoiI0YzMTkxOSIsInQiOjF9/R2V0IFlvdXIgRXNzZW50aWFscyBBdCBEaWFnb24gQWxsZXk/harry-p.png"
                        alt="Harry Potter fonts"
                    ></img>
                    <ShoppingCart countEquipments={cartItems.length} showModal={showSummery} />
                </h1>
                <div>
                    <EquipList addToCauldron={addToCauldron} equipments={equipments} />
                </div>
                <Cauldron
                    modal={modal}
                    closeModal={closeModal}
                    addToCauldron={addToCauldron}
                    removeFromCauldron={removeFromCauldron}
                    cartItems={cartItems}
                />
            </div>
        </div>
    );
}

export default DiagonAlley;
