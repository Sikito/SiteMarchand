import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Inscription from "./Pages/Inscription";
import Connexion from "./Pages/Connexion";

import "./styles.css";

function App() {
  return (
    <div className="Wrapper">
      <Router basename="/">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/inscription" component={Inscription} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
