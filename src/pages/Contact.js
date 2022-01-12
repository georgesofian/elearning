import React from "react";
import PizzaLeft from "../assets/feaaa.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contactati-ne</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nume</label>
          <input name="name" placeholder="Introduceti numele dvs" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Introduceti email-ul dvs" type="email" />
          <label htmlFor="message">Mesaj</label>
          <textarea
            rows="6"
            placeholder="Scrieti..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Trimite mesaj</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
