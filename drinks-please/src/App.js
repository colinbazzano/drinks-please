import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// local imports
import Home from "./components/Home";
import Drinks from "./components/Drinks";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
