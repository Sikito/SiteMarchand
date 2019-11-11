import React from "react";

function Header() {
  return (
    <div className="Header">
      <header>
        <img className="logo" src="./mylogo.svg" alt="logo" />

        <nav>
          <ul className="nav__links">
            <li className="nav__li">
              <button className="nav__button">Accueil</button>
            </li>
            <li className="nav__li">
              <button className="nav__button">Produits</button>
            </li>
            <li className="nav__li">
              <button className="nav__button">Espace Client</button>
            </li>
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
