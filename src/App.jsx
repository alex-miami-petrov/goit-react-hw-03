import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import ContactForm from "./ContactForm";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    if (savedContacts.length === 0) {
      localStorage.setItem("contacts", JSON.stringify(initialContacts));
      setContacts(initialContacts);
    } else {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleContactDelete = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Contacts</h1>
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactForm onAddContact={handleAddContact} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleContactDelete}
      />
    </div>
  );
};

export default App;
