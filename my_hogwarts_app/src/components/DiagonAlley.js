// addToCauldron() and removeFromCauldron() logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import React, { useState, useEffect, useRef } from "react";
import "../css/DiagonAlley.css";
import EquipList from "./EquipList.js";
import Summery from "./Summery.js";
import ShoppingCart from "./ShoppingCart.js";
import HarryPotterFontImg from "../pics/harry-potter-font-img.png";

import axios from "axios";

function DiagonAlley() {
  const [equipments, setEquipments] = useState([]);
  const equipmentDataURL = "http://localhost:3000/equipDb";

  const yearSelect = useRef();
  const catSelect = useRef();

  const [cartItems, setCartItems] = useState([]);
  const [modal, setModal] = useState({ visible: false });

  const getEquipmentData = async () => {
    console.log(">>>>I'm getEquipmentData()<<<<<<<");

    const response = await axios
      .get(equipmentDataURL)
      .catch((err) => console.log("Error *** first load: ", err));

    if (response && response.data) {
      setEquipments(response.data);
    }
  };
  useEffect(() => {
    console.log(">>>>I'm useEffect()<<<<<<<");
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
    const newEquips = [...equipments];
    newEquips.sort((a, b) => {
      return b.price - a.price;
    });
    setEquipments(newEquips);
  }

  function sortByPriceLH() {
    // const sortedData = async () => {
    //   const response = await axios
    //     .get(equipmentDataURL + "/sortLtoH")
    //     // .catch((err) => console.log("Error *** sort data L to H: ", err));
    //   if (response && response.data) setEquipments(response.data);
    // };
    // sortedData();
    const newEquips = [...equipments];
    newEquips.sort((a, b) => {
      return a.price - b.price;
    });
    setEquipments(newEquips);
  }

  function getProducts() {
    let year = yearSelect.current.value;
    let cat = catSelect.current.value;

    const sortByYear = async () => {
      const response = await axios.get(
        equipmentDataURL + "/sortByYear/" + year + "/filterCat/" + cat
      );

      if (response?.data) {
        setEquipments(response.data);
      }
    };
    sortByYear();
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
          <button className="btn " type="button">
            {" "}
            Sort by year stand{" "}
          </button>
          <select id="yearSelect" ref={yearSelect} onChange={getProducts}>
            <option value="0">All year </option>
            <option value="1">1st year</option>
            <option value="2">2nd year</option>
            <option value="3">3rd year</option>
            <option value="4">4th year</option>
          </select>

          <select id="catSelect" ref={catSelect} onChange={getProducts}>
            <option value="all">All categories </option>
            <option value="book">Book </option>
            <option value="gear">Gear</option>
            <option value="powder">Powder</option>
            <option value="uncategorised">Uncategorised</option>
          </select>

          <button
            onClick={() => sortByPriceHL()}
            className="btn "
            type="button"
          >
            {" "}
            Price High to Low{" "}
          </button>
          <button
            onClick={() => sortByPriceLH()}
            className="btn "
            type="button"
          >
            {" "}
            Price Low to High{" "}
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
