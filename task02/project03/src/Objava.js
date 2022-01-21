import React from "react";

function Objava({ ime, pozicija, brojDresa }) {
  return (
    <div className="objava">
      <h4>{ime}</h4>
      <p>Pozicija u timu: {pozicija}</p>
      <h4>Broj dresa: {brojDresa}</h4>
    </div>
  );
}
export default Objava;
