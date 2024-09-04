import React from "react";
import s from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={s.contactItem}>
      <p className={s.contactName}>{name}</p>
      <p className={s.contactNumber}>{number}</p>
    </div>
  );
};

export default Contact;
