import { Link } from "react-router-dom";

function Nav() {
    return (
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
    );
}

export default Nav;
