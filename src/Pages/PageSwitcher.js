import React from "react";
import { NavLink } from "react-router-dom";

const PageSwitcher = () => (
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
      to="/inscription"
      activeClassName="PageSwitcher__Item--Active"
      className="PageSwitcher__Item"
    >
      Inscription
    </NavLink>
  </div>
);

export default PageSwitcher;
