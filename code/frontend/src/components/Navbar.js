import React from "react";

// Button component
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#007FFF",
        color: "#fff",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
        marginLeft: "auto", // Align the button to the right
      }}
    >
      {children}
    </button>
  );
}

// Navbar component
const Navbar = () => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      background: "#A2EC82",
      color: "black",
    }}
  >
    <h1 style={{ margin: 0 }}>My Landing Page</h1>
    <Button onClick={() => alert("Sign In button clicked!")}>Sign In</Button>
  </nav>
);

export default Navbar;
