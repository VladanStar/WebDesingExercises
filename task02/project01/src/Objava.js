import React from "react";


function Objava({ime, objava, brojPregleda}){
    return (
        <div className="objava">
        <h4>{ime}</h4>
        <p>Pozicija u timu: {objava}</p>
        <h4>Broj dresa: {brojPregleda}</h4>
        </div>
    )
}
export default Objava;

