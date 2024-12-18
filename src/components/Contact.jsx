// src/pages/Contact.jsx
import React from "react";
import "../styles/contact.css"; // Link to your CSS file for consistent styling

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or need support, feel free to contact us:</p>
      <div className="contact-details">
        <p>Email: support@lightworldfurniture.com</p>
        <p>Phone: +250 788 000 111</p>
        <p>Address: Kigali, Rwanda</p>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your message" required></textarea>

        <button type="submit" className="button-86">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
