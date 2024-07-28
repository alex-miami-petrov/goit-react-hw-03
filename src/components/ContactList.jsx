import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
