import React from "react";
import ReactDOM from "react-dom";
import Header from "./Pages/Header";
import Inscription from "./Pages/Inscription";

import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Inscription />
    </div>
  );
}

const rootElement = document.getElementById("header");
ReactDOM.render(<App />, rootElement);
