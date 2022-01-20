import React from "react";


function Objava({ime, objava, brojPregleda}){
    return (
        <div className="objava">
        <h4>{ime}</h4>
        <p>{objava}</p>
        <h4>{brojPregleda}</h4>
        </div>
    )
}
export default Objava;
