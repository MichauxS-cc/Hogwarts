// addToCauldron() and removeFromCauldron() logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import React, { useEffect, useRef } from "react";
import "../css/DiagonAlley.css";
import EquipList from "./EquipList.js";

import { useDispatch } from "react-redux";
import { setEquipmentList } from "../actions";

import axios from "axios";

function DiagonAlley() {
  // const equipmentList = useSelector((state) => state.equipmentList);
  const dispatch = useDispatch();
  const equipmentDataURL = "/db/equipment";
  const yearSelect = useRef();
  const catSelect = useRef();

  useEffect(() => {
    async function getEquipmentData() {
      const response = await axios
        .get(equipmentDataURL)
        .catch((err) => console.log("Error *** first load: ", err));

      if (response?.data) {
        dispatch(setEquipmentList(response.data));
      }
    }
    getEquipmentData();
  }, [dispatch]);

  function getProducts() {
    let year = yearSelect.current.value;
    let cat = catSelect.current.value;

    const sortByYearAndCat = async () => {
      const response = await axios.get(
        equipmentDataURL + "/sortByYear/" + year + "/filterCat/" + cat
      );

      if (response?.data) {
        dispatch(setEquipmentList(response.data));
      }
    };
    sortByYearAndCat();
  }

  function sortByPriceHL() {
    const sortHtoL = async () => {
      const response = await axios.get(equipmentDataURL + "/sortHtoL");

      if (response?.data) {
        dispatch(setEquipmentList(response.data));
      }
    };
    sortHtoL();
  }

  function sortByPriceLH() {
    const sortLtoH = async () => {
      const response = await axios.get(equipmentDataURL + "/sortLtoH");

      if (response?.data) {
        dispatch(setEquipmentList(response.data));
      }
    };
    sortLtoH();
  }

  return (
    <div>
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

      <button onClick={() => sortByPriceHL()} className="btn " type="button">
        {" "}
        Price High to Low{" "}
      </button>
      <button onClick={() => sortByPriceLH()} className="btn " type="button">
        {" "}
        Price Low to High{" "}
      </button>

      <EquipList />
    </div>
  );
}

export default DiagonAlley;
