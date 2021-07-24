import "./App.css";
import "./css/Nav.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar.js";
import MobileNav from "./components/MobileNav.js";
import DesktopNav from "./components/DesktopNav.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import StudyGroup from "./components/StudyGroup.js";
import Courses from "./components/Courses.js";
import DiagonAlley from "./components/DiagonAlley.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Topbar />
                <DesktopNav />
                <MobileNav />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/study-group" component={StudyGroup}></Route>
                    <Route path="/courses" component={Courses}></Route>
                    <Route path="/diagon-alley" component={DiagonAlley}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
