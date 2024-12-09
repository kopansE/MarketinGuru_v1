import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { withEditMode } from "../hoc/withEditMode";
import ComponentSidebar from "../utils/ComponentSidebar";
import "../styles/globals.css";

const LandingPage = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  // Wrap components with edit mode HOC
  const EditableHeroSection = withEditMode(HeroSection);
  const EditableNavbar = withEditMode(Navbar);
  const EditableFeatures = withEditMode(Features);
  const EditableContactForm = withEditMode(ContactForm);
  const EditableFooter = withEditMode(Footer);

  return (
    <div>
      <button
        onClick={() => setIsEditMode(!isEditMode)}
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 1000,
          padding: "10px",
          background: isEditMode ? "#4CAF50" : "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isEditMode ? "Exit Edit Mode" : "Enter Edit Mode"}
      </button>

      {isEditMode && <ComponentSidebar />}

      <EditableNavbar />
      <EditableHeroSection />
      <EditableFeatures />
      <EditableContactForm />
      <EditableFooter />
    </div>
  );
};

export default LandingPage;
