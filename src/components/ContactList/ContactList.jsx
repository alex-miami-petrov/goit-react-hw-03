import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.contactList}>
    {contacts.map((contact) => (
      <li key={contact.id} className={s.contactItem}>
        <Contact name={contact.name} number={contact.number} />
        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
