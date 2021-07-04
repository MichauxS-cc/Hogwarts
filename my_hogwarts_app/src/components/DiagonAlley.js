// addToCauldron() and removeFromCauldron() logic were borrow from https://www.youtube.com/watch?v=AmIdY1Eb8tY

import React, { useState, useEffect, useRef } from "react";
import "../css/DiagonAlley.css";
import EquipList from "./EquipList.js";

import HarryPotterFontImg from "../pics/harry-potter-font-img.png";

import { useSelector, useDispatch } from "react-redux";
import { setEquipmentList } from "../actions";

import axios from "axios";

function DiagonAlley() {
  const equipmentList = useSelector((state) => state.equipmentList);
  const dispatch = useDispatch();
  const equipmentDataURL = "http://localhost:3000/db/equipment";
  const yearSelect = useRef();
  const catSelect = useRef();

  const getEquipmentData = async () => {
    console.log(">>>>I'm getEquipmentData()<<<<<<<");

    const response = await axios
      .get(equipmentDataURL)
      .catch((err) => console.log("Error *** first load: ", err));

    if (response?.data) {
      dispatch(setEquipmentList(response.data));
    }
  };

  useEffect(() => {
    console.log(">>>>I'm useEffect()<<<<<<<");
    getEquipmentData();
  }, []);

  return (
    <div>
      <EquipList />
    </div>
  );
}

export default DiagonAlley;
