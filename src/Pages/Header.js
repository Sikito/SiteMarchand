import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <header>
        <img className="logo" src={require("./mylogo.svg")} alt="logo" />

        <nav>
          <ul className="nav__links">
            <Link to="/">
              <li className="nav__li">
                <button className="nav__button">Accueil</button>
              </li>
            </Link>
            <li className="nav__li">
              <button className="nav__button">Produits</button>
            </li>
            <Link to="/connexion">
              <li className="nav__li">
                <button className="nav__button">Espace Client</button>
              </li>
            </Link>
            <li className="nav__li">
              <button className="nav__button">Contact</button>
            </li>

            <li className="nav__li">
              <button className="nav__button">Blog</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
