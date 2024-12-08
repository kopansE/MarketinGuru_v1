import React from "react";

// Component to render a single client
function Client({ id }) {
  return (
    <a
      href="#"
      style={{ margin: "0 1rem", color: "#fff", textDecoration: "none" }}
      alt={`Client ${id}`}
    >
      Client {id}
      {"\t"}
      {"\t"}
      {"\t"}
      {"\t"}
    </a>
  );
}

// Component to render all clients
function Clients() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {Array.from({ length: 3 }, (_, i) => (
        <Client key={`client1-${i + 1}`} id={i + 1} />
      ))}
      <br />
      {Array.from({ length: 3 }, (_, i) => (
        <Client key={`client2-${i + 4}`} id={i + 4} />
      ))}
    </div>
  );
}

// Footer component
const Footer = () => (
  <footer
    style={{
      padding: "1rem",
      background: "#007FFF",
      color: "#fff",
      marginTop: "2rem",
      textAlign: "center",
    }}
  >
    <Clients />
    <p>&copy; 2024 My Company. All Rights Reserved.</p>
  </footer>
);

export default Footer;
