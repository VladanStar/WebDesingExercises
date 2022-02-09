import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import CharacterTable from "./component/CharacterTable/CharacterTable";
import Search from "./component/Search/Search";
import axios from "axios";

function App() {
  const hash = "bd0722d5750b6362d5ba0212ca36726b";

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  //axios + `key kopitan iz developer.marvel.com authenitication for server side application copy http://...`

  useEffect(() => {
    const fetch = async () => {
      if (query === "") {
         // checking if favorites array is empty or does not exist
         if(localStorage.getItem('favorites')==='[]' || !localStorage.getItem('favorites')){
          localStorage.setItem('favorites', '[]')
        const result = await axios(
          `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
      } 
      else{
        let favorite = JSON.parse(localStorage.getItem('favorites'))
        setItems(favorite)
        setLoading(false)
      }
    }
      else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div className="App container">
      <Header />
      <Search search={(q) => setQuery(q)} />
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
