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
import { versionService } from "../services/versionService";
import { useVersionContext } from "../contexts/VersionContext";
import { allTemplates } from "../templates/templateLibrary";
import "../styles/globals.css";

const LandingPage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const navigate = useNavigate();
  const { versionId } = useParams() || "14";

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
      const loadVersionData = async () => {
        try {
          const response = await fetch(`/api/versions/${versionId}`);
          if (!response.ok) throw new Error("Failed to load version");

          const version = await response.json();
          console.log("Loading version data:", version);

          if (version.components) {
            Object.entries(version.components).forEach(
              ([key, componentData]) => {
                if (componentRefs[key]?.current?.setState) {
                  // Get the full template data from your template library
                  let template = null;
                  if (componentData.template) {
                    const componentTemplates =
                      allTemplates[componentData.type]?.templates || [];
                    template = componentTemplates.find(
                      (t) => t.label === componentData.template.label
                    );
                  }

                  componentRefs[key].current.setState({
                    template: template
                      ? {
                          label: template.label,
                          type: componentData.type,
                          component: template.component,
                        }
                      : null,
                    text: componentData.text,
                    type: componentData.type,
                  });
                }
              }
            );
          }
        } catch (error) {
          console.error("Error loading version:", error);
        }
      };

      loadVersionData();
    }
  }, [versionId]);

  const handleSave = async () => {
    // 1. Block UI or show loading state
    setIsSaving(true);

    // Force collect ALL components, even if they don't have templates
    const components = {
      navbar: {
        template: componentRefs.navbar.current?.getState()?.template || null,
        text: componentRefs.navbar.current?.getState()?.text || {
          title: "",
          description: "",
        },
        type: "NAVBAR",
      },
      hero: {
        template: componentRefs.hero.current?.getState()?.template || null,
        text: componentRefs.hero.current?.getState()?.text || {
          title: "",
          description: "",
        },
        type: "HERO",
      },
      features: {
        template: componentRefs.features.current?.getState()?.template || null,
        text: componentRefs.features.current?.getState()?.text || {
          title: "",
          description: "",
        },
        type: "FEATURES",
      },
      contactForm: {
        template:
          componentRefs.contactForm.current?.getState()?.template || null,
        text: componentRefs.contactForm.current?.getState()?.text || {
          title: "",
          description: "",
        },
        type: "CONTACT_FORM",
      },
      footer: {
        template: componentRefs.footer.current?.getState()?.template || null,
        text: componentRefs.footer.current?.getState()?.text || {
          title: "",
          description: "",
        },
        type: "FOOTER",
      },
    };
    Object.entries(componentRefs).forEach(([key, ref]) => {
      const state = ref.current?.getState();
      if (state) {
        components[key] = {
          template: state.template,
          text: state.text || { title: "", description: "" },
          type: state.type,
        };
      }
    });

    try {
      const savedVersion = await versionService.saveVersion(components);

      // 4. Wait for save to complete before navigation
      while (!savedVersion.url) {
        //sleep for 1sec
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      console.log("Save successful:", savedVersion);
    } catch (error) {
      console.error("Failed to save version:", error);
      alert("Error saving version. Please check the console for details.");
    } finally {
      setIsSaving(false);
    }
  };

  // Add function to load a specific version
  const loadVersion = async (versionNumber) => {
    try {
      const version = await versionService.getVersion(versionNumber);

      // Apply the loaded version's state to your components
      Object.entries(version.components).forEach(([key, state]) => {
        if (componentRefs[key].current) {
          componentRefs[key].current.setState(state);
        }
      });
    } catch (error) {
      console.error("Error loading version:", error);
      alert("Failed to load version. Please try again.");
    }
  };

  // Create editable components with refs
  const EditableNavbar = withEditMode(Navbar, "NAVBAR");
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
  const EditableFooter = withEditMode(Footer, "FOOTER");

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

      <EditableNavbar ref={componentRefs.navbar} />
      <EditableHeroSection ref={componentRefs.hero} />
      <EditableFeatures ref={componentRefs.features} />
      <EditableContactForm ref={componentRefs.contactForm} />
      <EditableFooter ref={componentRefs.footer} />
    </div>
  );
};

export default LandingPage;
