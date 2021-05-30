import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import StudyGroup from "./components/StudyGroup.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/study-group">
                        <StudyGroup />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
