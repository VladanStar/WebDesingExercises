import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactDetail from "./components/ContactDetail";




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
    setContacts(newContactList)
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
      <Router>

      <Header />
      <Switch>
      <Route path="/" 
      exact
       render={(props)=> (
      <ContactList  
      {...props}
      contacts={contacts} 
      getContactId={removeContactHandler} />
      )}
      />
      <Route path="/add" render={(props)=> (
      <AddContact 
      {...props}
      addContactHandler={addContactHandler} />
      )}  
      />

<Route  path="/contact/:id" component={ContactDetail} />
      
      </Switch>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList  contacts={contacts} getContactId={removeContactHandler}/> */}
      </Router>
     
    </div>
  );
}

export default App;
