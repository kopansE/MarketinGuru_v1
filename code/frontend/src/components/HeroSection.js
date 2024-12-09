import React from "react";

const HeroSection = ({
  title = "Welcome to Our Landing Page",
  description = "Your journey to awesome starts here !",
}) => (
  <section
    style={{ padding: "4rem 2rem", background: "#f4f4f4", textAlign: "center" }}
  >
    <h2>{title}</h2>
    <p>{description}</p>
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
