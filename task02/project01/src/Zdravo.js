import React from "react";

function Zdravo(){

const zdravo = ()=> {
    console.log("Zdravo")

  }
  return(
      <div>
    <h1>Prva React Aplikacija</h1>
    <button onClick={zdravo}>Zdravo</button>
    </div>
  )
}
export default Zdravo;