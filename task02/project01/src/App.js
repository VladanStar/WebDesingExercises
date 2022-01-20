import React from "react";
// import Zdravo from "./Zdravo";
import Objava from "./Objava";
import './App.css';

function App() {
  
  return (
    <div className="app">
      {/* <Zdravo/> */}
      <Objava ime="Ranko Stajic" objava= "Golman" brojPregleda="1"/>
      <Objava ime="Stefan Kostov" objava="Desni Bek" brojPregleda ="2" />
      <Objava ime="Dragan Ikanovic" objava= "Levi Bek" brojPregleda = "3"/>
      <Objava ime="Bogdan Palezevic" objava="Desni Half" brojPregleda = "4"/>
  
    </div>
  );
}

export default App;
