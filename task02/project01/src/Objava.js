import React from "react";


function Objava(props){
    return (
        <div className="objava">
        <h4>{props.ime}</h4>
        <p>{props.objava}</p>
        <h4>Broj pregleda objave</h4>
        </div>
    )
}
export default Objava;
