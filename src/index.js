import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Header from "./Pages/Header";
import Inscription from "./Pages/Inscription";
import Connexion from "./Pages/Connexion";

import "./styles.css";

function App() {
  return (
    <div className="Wrapper">
      <Header />

      <Router basename="/SiteMarchand/">
        <div className="App">
          <div className="App__Aside" />
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/connexion"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Connexion
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Inscription
              </NavLink>
            </div>
            <div className="FormTitle">
              <NavLink
                to="/connexion"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Connexion
              </NavLink>{" "}
              ou{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Inscription
              </NavLink>
            </div>

            <Route exact path="/" component={Inscription} />
            <Route path="/sign-in" component={Connexion} />
          </div>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
