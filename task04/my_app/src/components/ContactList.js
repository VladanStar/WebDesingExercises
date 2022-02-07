import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    {
      id: "1",
      name: "Dejan Kuzmanovic",
      email: "dejankuzmanovic@gmail.com",
    },
  ];

  const renderContactList = contacts.map((contact) => {
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
