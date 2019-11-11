import React from "react";
import ReactDOM from "react-dom";
import Header from "./Pages/Header";

import "./styles.css";

function App() {
  return <Header />;
}

const rootElement = document.getElementById("header");
ReactDOM.render(<App />, rootElement);
