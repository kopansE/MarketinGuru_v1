import React from "react";

const HeroSection = () => (
  <section
    style={{ padding: "4rem 2rem", background: "#f4f4f4", textAlign: "center" }}
  >
    <h2>Welcome to Our Landing Page</h2>
    <p>Your journey to awesome starts here!</p>
    <button
      onClick={() => alert("to receive a demo submit you name and email below")}
      style={{
        padding: "0.5rem 1rem",
        background: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Get Started
    </button>
  </section>
);

export default HeroSection;
