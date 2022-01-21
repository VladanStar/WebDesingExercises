import React, { useState } from "react";
import Objava from "./Objava";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { ime: "Bogdan Palezevic", pozicija: "desni half", brojDresa: 4 },
    { ime: "Cedomir Tomcic", pozicija: "centar half", brojDresa: 5 },
    { ime: "boris Jovkovic", pozicija: "levi half", brojDresa: 6 },
    { ime: "Steva Stasic", pozicija: "centralni vezni", brojDresa: 8 },
    { ime: "Boris Krstic", pozicija: "centarfor", brojDresa: 9 },
  ]);
  return (
    <div className="app">
      {users.map(user => {
        <Objava
          ime={user.ime}
          pozicija={user.pozicija}
          brojdresa={user.brojDresa}
        />;
      })}
    </div>
  );
}

export default App;
