import React, { Component } from "react";
import { Link } from "react-router-dom";

class Connexion extends Component {
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Entrez votre Email"
              name="email"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Mot de Passe
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Entrez votre mot de Passe"
              name="password"
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Connexion</button>{" "}
            <Link to="/" className="FormField__Link">
              Créer un Compte
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Connexion;
