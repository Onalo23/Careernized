// Contact.js
import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <section>
        <h2>Reach Out to Us</h2>
        <p>Have a question, feedback, or just want to say hello? Feel free to contact us using the form below or through our email and phone number.</p>
      </section>

      {/* Contact form */}
      <section>
        <h3>Contact Form</h3>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required /><br />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required /><br />

          <label htmlFor="message">Your Message:</label><br />
          <textarea id="message" name="message" rows="4" required></textarea><br />

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Contact information */}
      <section>
        <h3>Contact Information</h3>
        <p>Email: info@careernized.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        {/* Add more contact information as needed */}
      </section>
    </div>
  );
}

export default Contact;
