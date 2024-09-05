import React from "react";
import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={s.contactItem}>
      <p className={s.contactName}>{name}</p>
      <p className={s.contactNumber}>{number}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Contact;
