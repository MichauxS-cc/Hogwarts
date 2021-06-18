// addToCauldron() and removeFromCauldron() logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import React, { useState, useEffect } from "react";
import "../css/DiagonAlley.css";
import EquipList from "./EquipList.js";
import Summery from "./Summery.js";
import ShoppingCart from "./ShoppingCart.js";
// import equipmentDatabase from "./equipmentDatabase.js";
import HarryPotterFontImg from "../pics/harry-potter-font-img.png";

import axios from "axios";

function DiagonAlley() {
  //   const { equipments } = equipmentDatabase;
  const [equipments, setEquipments] = useState([]);
  const equipmentDataURL = "http://localhost:3000/equipDb";

  const [cartItems, setCartItems] = useState([]);
  const [modal, setModal] = useState({ visible: false });

  const getEquipmentData = async () => {
    const response = await axios
      .get(equipmentDataURL)
      .catch((err) => console.log("Error *** first load: ", err));

    if (response && response.data) setEquipments(response.data);
  };
  useEffect(() => {
    getEquipmentData();
  }, []);

  // accept the equip that needs to be added to the cart
  // exist is to try to find the item x, whose name === the equip.name that I need to add
  // if exist, increase the quantity of that equip
  const addToCauldron = (equip) => {
    const exist = cartItems.find((x) => x.name === equip.name);
    if (exist) {
      //loop through cartItems, only update the x that x => x.name === equip.name, return the not matching item otherwise
      setCartItems(
        cartItems.map((x) =>
          x.name === equip.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...equip, qty: 1 }]);
    }
  };

  const removeFromCauldron = (equip) => {
    const exist = cartItems.find((x) => x.name === equip.name);
    if (exist.qty === 1) {
      setCartItems([...cartItems].filter((x) => x.name !== equip.name));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.name === equip.name ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
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

  function resetCart() {
    alert("Order Received!");
    setCartItems([]);
  }

  function sortByPriceHL() {
    const sortedData = async () => {
      const response = await axios
        .get(equipmentDataURL + "/sortHtoL")
        .catch((err) => console.log("Error *** sort data H to L: ", err));

      if (response && response.data) setEquipments(response.data);
    };
    sortedData();
  }

  return (
    <div>
      <div className="max-container">
        <h1>
          <div>
            <img
              className="header-img"
              src={HarryPotterFontImg}
              alt="Harry Potter fonts"
            ></img>
          </div>
        </h1>
        <div className="overlay-black">
          <button
            onClick={() => sortByPriceHL()}
            className="btn "
            type="button"
          >
            {" "}
            Price High to Low{" "}
          </button>
          <ShoppingCart
            countEquipments={cartItems.length}
            showModal={showSummery}
          />

          <EquipList addToCauldron={addToCauldron} equipments={equipments} />
        </div>
        <Summery
          modal={modal}
          closeModal={closeModal}
          addToCauldron={addToCauldron}
          removeFromCauldron={removeFromCauldron}
          cartItems={cartItems}
          resetCart={resetCart}
        />
      </div>
    </div>
  );
}

export default DiagonAlley;
