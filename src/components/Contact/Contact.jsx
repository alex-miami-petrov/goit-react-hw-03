import React from "react";
import "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className="contact-item">
      <p className="contact-name">{name}</p>
      <p className="contact-number">{number}</p>
    </div>
  );
};

export default Contact;
