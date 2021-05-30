import { Link } from "react-router-dom";
import logo from "../pics/gsLogo.png";
import "../css/Header.css";

function Header() {
    return (
        <nav>
            <div className="logo-container">
                <a href="/index.html"></a>
                <img src={logo} alt="logo" className="logo-img" />
            </div>
            <ul id="menu-list">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <a href="/About.html">About</a>
                </li>
                <li>
                    <Link to="/study-group">Study Group</Link>
                </li>
                <li>
                    <a href="/Course.html">Course</a>
                </li>
            </ul>

            <div className="menu-icon" id="menu-bar">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
        </nav>
    );
}

export default Header;
