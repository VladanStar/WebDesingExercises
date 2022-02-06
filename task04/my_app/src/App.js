import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const[contacts, setContacts] = useState([]);

  const addContactHandler = (contact)=>{
    console.log(contact);
    setContacts([...contacts, contact])
  };

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;

    })
  }

  useEffect(()=>{

   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList  contacts={contacts}/>
    </div>
  );
}

export default App;
