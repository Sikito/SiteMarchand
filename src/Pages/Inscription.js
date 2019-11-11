import React, { Component } from "react";

class Inscription extends Component {
  formfield(type, identifiant, label, placeholder) {
    return (
      <div className="FormField">
        <label className="FormField__Label" htmlFor={identifiant}>
          {label}
        </label>
        <input
          type={type}
          id={identifiant}
          className="FormField__Input"
          placeholder={placeholder}
          name={identifiant}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Wrapper__Form">
        <div className="Aside" />
        <div className="Inscription__Form">
          <div className="FormCenter">
            {this.formfield("text", "name", "Nom", "Entrez votre Nom")}
            {this.formfield("text", "surname", "Prénom", "Entrez votre Prénom")}
            {this.formfield("email", "email", "Email", "Entrez votre Email")}
            {this.formfield(
              "password",
              "password",
              "Mot de Passe",
              "Entrez votre Mot de passe"
            )}
            {this.formfield(
              "text",
              "adress",
              "Adresse",
              "Entrez votre Adresse"
            )}
            {this.formfield(
              "text",
              "zipcode",
              "Code postal",
              "Entrez votre Code Postal"
            )}
            {this.formfield("text", "city", "Ville", "Entrez votre Ville")}

            <div className="FormField">
              <button className="FormField__Button mr-20">Inscription</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inscription;
