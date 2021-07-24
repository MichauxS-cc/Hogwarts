// import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart.js";
import Summary from "./Summary.js";
import { useSelector } from "react-redux";

function Nav() {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <>
      <select id="userSelect">
        <option value="paul">Paul </option>
        <option value="michaux">Michaux</option>
        <option value="john-doe">John Doe</option>
      </select>
      <ul>
        <li>
          <Link to="/" className="header-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="header-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/study-group" className="header-links">
            Study Group
          </Link>
        </li>
        <li>
          <Link to="/courses" className="header-links">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/diagon-alley" className="header-links">
            Diagon Alley
          </Link>
        </li>
      </ul>
      <ShoppingCart countEquipments={cartItems.length} />
      <Summary />
    </>
  );
}

export default Nav;
