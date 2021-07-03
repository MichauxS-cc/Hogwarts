import { useState } from "react";
import logo from "../pics/gsLogo.png";
import Nav from "./Nav.js";

function MobileNav() {
  const [hamburger, setHamburger] = useState(false);
  let isActive = "";
  if (hamburger) isActive = "active";

  function handleClick() {
    setHamburger(!hamburger);
  }

  return (
    <nav className={`nav-mobile ${isActive}`}>
      <div className="max-container nav-inner">
        <div className="logo-container">
          <a href="/index.html">
            <img src={logo} alt="logo" className="logo-img" />
          </a>
        </div>
        <Nav />

        <div className={`menu-icon ${isActive}`} onClick={handleClick}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
