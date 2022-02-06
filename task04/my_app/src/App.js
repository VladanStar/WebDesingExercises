import React from "react";
import Header from "./components/Header";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";
import "./App.css";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Ranko Stajic",
      email: "rankostajic@gmail.com",
    },
    {
      id: "2",
      name: "Stefan Kostov",
      email: "stefankostov@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList  contacts={contacts}/>
    </div>
  );
}

export default App;
