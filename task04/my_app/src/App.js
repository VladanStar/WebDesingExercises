import React from 'react';
import Header from './components/Header';
import { AddContact } from './components/AddContact';
import { ContactList } from './components/ContactList';
import './App.css';

function App() {
  return (
    <div className="App">
   <Header />
   <AddContact />
   <ContactList />
    </div>
  );
}

export default App;
