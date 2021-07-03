import logo from "../pics/gsLogo.png";
import Nav from "./Nav.js";

function DesktopNav() {
  return (
    <nav className="nav-desktop">
      <div className="max-container nav-inner">
        <div className="logo-container">
          <a href="/index.html">
            <img src={logo} alt="logo" className="logo-img" />
          </a>
        </div>
        <Nav />
      </div>
    </nav>
  );
}

export default DesktopNav;
