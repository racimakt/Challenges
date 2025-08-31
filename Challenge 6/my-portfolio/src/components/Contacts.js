import React from "react";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Your name" />
        <br />
        <input type="email" placeholder="Your email" />
        <br />
        <textarea placeholder="Your message"></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
