import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar.js";
import Header from "./components/Header.js";
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
                <Header />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/study-group">
                        <StudyGroup />
                    </Route>
                    <Route path="/courses">
                        <Courses />
                    </Route>
                    <Route path="/diagon-alley">
                        <DiagonAlley />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
