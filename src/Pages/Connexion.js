import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageSwitcher from "./PageSwitcher";

class Connexion extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Aside" />
        <div className="App__Form">
          <PageSwitcher />

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
                <Link to="/inscription" className="FormField__Link">
                  Créer un Compte
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Connexion;
