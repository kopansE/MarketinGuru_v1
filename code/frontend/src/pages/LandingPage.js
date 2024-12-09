// src/pages/LandingPage.js
import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { withEditMode } from "../hoc/withEditMode";
import ComponentSidebar from "../utils/ComponentSidebar";
import { useVersionContext } from "../contexts/VersionContext";
import "../styles/globals.css";

const LandingPage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const { versionId } = useParams();
  const { saveVersion, getVersion } = useVersionContext();

  const componentRefs = {
    navbar: useRef(null),
    hero: useRef(null),
    features: useRef(null),
    contactForm: useRef(null),
    footer: useRef(null),
  };

  // Load version data if viewing a specific version
  React.useEffect(() => {
    if (versionId) {
      const versionData = getVersion(versionId);
      if (versionData) {
        // Apply version data to components
        Object.entries(versionData.components).forEach(([key, value]) => {
          if (componentRefs[key]?.current?.setState) {
            componentRefs[key].current.setState(value);
          }
        });
      }
    }
  }, [versionId]);

  const handleSave = () => {
    const currentState = {
      navbar: componentRefs.navbar.current?.getState(),
      hero: componentRefs.hero.current?.getState(),
      features: componentRefs.features.current?.getState(),
      contactForm: componentRefs.contactForm.current?.getState(),
      footer: componentRefs.footer.current?.getState(),
    };

    const newVersion = saveVersion(currentState);
    navigate(newVersion.url);
  };

  // Create editable components with refs
  const EditableNavbar = withEditMode(Navbar, "NAVBAR", componentRefs.navbar);
  const EditableHeroSection = withEditMode(
    HeroSection,
    "HERO",
    componentRefs.hero
  );
  const EditableFeatures = withEditMode(
    Features,
    "FEATURES",
    componentRefs.features
  );
  const EditableContactForm = withEditMode(
    ContactForm,
    "CONTACT_FORM",
    componentRefs.contactForm
  );
  const EditableFooter = withEditMode(Footer, "FOOTER", componentRefs.footer);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 1000,
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={() => setIsEditMode(!isEditMode)}
          style={{
            padding: "10px",
            background: isEditMode ? "#4CAF50" : "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {isEditMode ? "Exit Edit Mode" : "Enter Edit Mode"}
        </button>

        {isEditMode && (
          <button
            onClick={handleSave}
            style={{
              padding: "10px",
              background: "#FF9800",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Save Version
          </button>
        )}
      </div>

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
