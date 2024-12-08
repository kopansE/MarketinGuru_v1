import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "2rem", background: "#e9e9e9", textAlign: "center" }}
    >
      <h4>Contact Us</h4>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        style={{ margin: "0.5rem", padding: "0.5rem" }}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        style={{ margin: "0.5rem", padding: "0.5rem" }}
      />
      <button
        type="submit"
        style={{ padding: "0.5rem 1rem", background: "#007BFF", color: "#fff" }}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
