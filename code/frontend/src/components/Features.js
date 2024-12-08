import React from "react";
import img1 from "../assets/images/image1.jpg";
const Features = () => (
  <section style={{ padding: "2rem", background: "#fff" }}>
    <h3>Features</h3>
    <ul>
      <li>Fast and reliable</li>
      <li>User-friendly</li>
      <li>Customizable</li>
    </ul>
    <Picture></Picture>
  </section>
);

function Picture() {
  return (
    <div style={{ display: "inline" }}>
      <div
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        <img src={img1} alt="just a template" />
      </div>
    </div>
  );
}

export default Features;
