import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import "../App.css" ;

export const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact, id) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
        <button className="ui button blue">ADD contact</button>
        </Link>
       
      </h2>

      <div className="iu celled list">{renderContactList}</div>
    </div>
  );
};
