import React, { Component } from "react";

class Inscription extends Component {
  formfield(type, identifiant, texte) {
    return (
      <div className="FormField">
        <label className="FormField__Label" htmlFor={identifiant}>
          {texte}
        </label>
        <input
          type={type}
          id={identifiant}
          className="FormField__Input"
          placeholder={texte}
          name={identifiant}
          value=""
          onChange=""
        />
      </div>
    );
  }

  render() {
    return (
      <div className="FormCenter">{this.formfield("text", "name", "Nom")}</div>
    );
  }
}

export default Inscription;
