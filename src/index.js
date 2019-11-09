import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src="mylogo.svg" alt="logo" />

        <nav>
          <ul className="nav__links">
            <li>
              <button>Accueil</button>
            </li>
            <li>
              <button>Produits</button>
            </li>
            <li>
              <button>Espace Client</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
