// src/templates/templateLibrary.js
import React from "react";

// Navbar Templates
export const navbarTemplates = {
  type: "NAVBAR",
  templates: [
    {
      component: ({ title = "Modern Company" }) => (
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
          <h1 style={{ margin: 0 }}>{title}</h1>
          <button
            style={{
              background: "#007FFF",
              color: "white",
              padding: "0.5rem 1rem",
            }}
          >
            Sign In
          </button>
        </nav>
      ),
      label: "Modern Green",
      preview: () => (
        <div style={{ background: "#A2EC82", padding: "5px" }}>
          Modern Green Nav
        </div>
      ),
    },
    {
      component: ({ title = "Dark Theme" }) => (
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            background: "#2C3E50",
            color: "white",
          }}
        >
          <h1 style={{ margin: 0 }}>{title}</h1>
          <button
            style={{
              background: "#E74C3C",
              color: "white",
              padding: "0.5rem 1rem",
            }}
          >
            Login
          </button>
        </nav>
      ),
      label: "Dark Professional",
      preview: () => (
        <div style={{ background: "#2C3E50", color: "white", padding: "5px" }}>
          Dark Nav
        </div>
      ),
    },
    {
      component: ({ title = "Minimal Nav" }) => (
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            background: "#FFFFFF",
            borderBottom: "2px solid #EAEAEA",
          }}
        >
          <h1 style={{ margin: 0, color: "#333" }}>{title}</h1>
          <button
            style={{
              background: "#333",
              color: "white",
              padding: "0.5rem 1rem",
            }}
          >
            Get Started
          </button>
        </nav>
      ),
      label: "Minimal White",
      preview: () => (
        <div
          style={{
            background: "#FFFFFF",
            padding: "5px",
            border: "1px solid #EAEAEA",
          }}
        >
          Minimal Nav
        </div>
      ),
    },
  ],
};

// Hero Section Templates
export const heroTemplates = {
  type: "HERO",
  templates: [
    {
      component: ({
        title = "Welcome to Innovation",
        description = "Transform your business with our cutting-edge solutions",
      }) => (
        <section
          style={{
            padding: "4rem 2rem",
            background: "#f4f4f4",
            textAlign: "center",
          }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <button
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
      ),
      label: "Classic Blue",
      preview: () => (
        <div style={{ background: "#f4f4f4", padding: "5px" }}>
          Classic Hero
        </div>
      ),
    },
    {
      component: ({
        title = "Discover Excellence",
        description = "Join thousands of satisfied customers",
      }) => (
        <section
          style={{
            padding: "4rem 2rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <button
            style={{
              padding: "0.5rem 1rem",
              background: "white",
              color: "#667eea",
              border: "none",
              borderRadius: "25px",
            }}
          >
            Learn More
          </button>
        </section>
      ),
      label: "Gradient Purple",
      preview: () => (
        <div style={{ background: "#667eea", color: "white", padding: "5px" }}>
          Gradient Hero
        </div>
      ),
    },
    {
      component: ({
        title = "Build Your Future",
        description = "Start your journey with our proven solutions",
      }) => (
        <section
          style={{
            padding: "4rem 2rem",
            background: "#222",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2 style={{ color: "#00ff00" }}>{title}</h2>
          <p>{description}</p>
          <button
            style={{
              padding: "0.5rem 1rem",
              background: "#00ff00",
              color: "black",
              border: "none",
              borderRadius: "0px",
            }}
          >
            Start Now
          </button>
        </section>
      ),
      label: "Dark Tech",
      preview: () => (
        <div style={{ background: "#222", color: "#00ff00", padding: "5px" }}>
          Tech Hero
        </div>
      ),
    },
  ],
};

// Features Templates
export const featuresTemplates = {
  type: "FEATURES",
  templates: [
    {
      component: () => (
        <section style={{ padding: "2rem", background: "#fff" }}>
          <h3>Core Features</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "1rem",
            }}
          >
            <div>
              <h4>Fast & Reliable</h4>
              <p>Lightning-quick performance</p>
            </div>
            <div>
              <h4>User Friendly</h4>
              <p>Intuitive design</p>
            </div>
            <div>
              <h4>Customizable</h4>
              <p>Tailored to your needs</p>
            </div>
          </div>
        </section>
      ),
      label: "Three Column",
      preview: () => <div style={{ padding: "5px" }}>3-Col Features</div>,
    },
    {
      component: () => (
        <section style={{ padding: "2rem", background: "#f8f9fa" }}>
          <h3 style={{ textAlign: "center", color: "#333" }}>Why Choose Us</h3>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              style={{
                margin: "1rem 0",
                padding: "1rem",
                background: "white",
                borderRadius: "8px",
              }}
            >
              <h4>Enterprise Solutions</h4>
              <p>Scalable and secure</p>
            </div>
            <div
              style={{
                margin: "1rem 0",
                padding: "1rem",
                background: "white",
                borderRadius: "8px",
              }}
            >
              <h4>24/7 Support</h4>
              <p>Always here to help</p>
            </div>
            <div
              style={{
                margin: "1rem 0",
                padding: "1rem",
                background: "white",
                borderRadius: "8px",
              }}
            >
              <h4>Innovation First</h4>
              <p>Leading-edge technology</p>
            </div>
          </div>
        </section>
      ),
      label: "Cards Stack",
      preview: () => (
        <div style={{ background: "#f8f9fa", padding: "5px" }}>
          Card Features
        </div>
      ),
    },
    {
      component: () => (
        <section
          style={{ padding: "2rem", background: "#1a1a1a", color: "white" }}
        >
          <h3 style={{ textAlign: "center", color: "#00ff00" }}>
            Premium Features
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            <div style={{ border: "1px solid #00ff00", padding: "1rem" }}>
              <h4>Advanced Analytics</h4>
              <p>Deep insights</p>
            </div>
            <div style={{ border: "1px solid #00ff00", padding: "1rem" }}>
              <h4>Smart Automation</h4>
              <p>Efficient workflows</p>
            </div>
            <div style={{ border: "1px solid #00ff00", padding: "1rem" }}>
              <h4>Secure Platform</h4>
              <p>Enterprise-grade security</p>
            </div>
            <div style={{ border: "1px solid #00ff00", padding: "1rem" }}>
              <h4>Global Scale</h4>
              <p>Worldwide reach</p>
            </div>
          </div>
        </section>
      ),
      label: "Tech Grid",
      preview: () => (
        <div
          style={{ background: "#1a1a1a", color: "#00ff00", padding: "5px" }}
        >
          Grid Features
        </div>
      ),
    },
  ],
};

// Footer Templates
export const footerTemplates = {
  type: "FOOTER",
  templates: [
    {
      component: () => (
        <footer
          style={{
            padding: "1rem",
            background: "#007FFF",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <a href="#" style={{ color: "#fff", margin: "0 1rem" }}>
              About
            </a>
            <a href="#" style={{ color: "#fff", margin: "0 1rem" }}>
              Contact
            </a>
            <a href="#" style={{ color: "#fff", margin: "0 1rem" }}>
              Privacy
            </a>
          </div>
          <p>&copy; 2024 Company Name</p>
        </footer>
      ),
      label: "Simple Blue",
      preview: () => (
        <div style={{ background: "#007FFF", color: "white", padding: "5px" }}>
          Simple Footer
        </div>
      ),
    },
    {
      component: () => (
        <footer
          style={{
            padding: "2rem",
            background: "#2C3E50",
            color: "#fff",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            <div>
              <h4>Company</h4>
              <p>About Us</p>
              <p>Careers</p>
            </div>
            <div>
              <h4>Resources</h4>
              <p>Blog</p>
              <p>Guides</p>
            </div>
            <div>
              <h4>Legal</h4>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #fff",
              marginTop: "1rem",
              paddingTop: "1rem",
              textAlign: "center",
            }}
          >
            <p>&copy; 2024 Company Name</p>
          </div>
        </footer>
      ),
      label: "Grid Dark",
      preview: () => (
        <div style={{ background: "#2C3E50", color: "white", padding: "5px" }}>
          Grid Footer
        </div>
      ),
    },
    {
      component: () => (
        <footer
          style={{
            padding: "2rem",
            background: "#f8f9fa",
            color: "#333",
            borderTop: "1px solid #dee2e6",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h3>Connect With Us</h3>
            <div style={{ margin: "1rem 0" }}>
              <span style={{ margin: "0 1rem" }}>Facebook</span>
              <span style={{ margin: "0 1rem" }}>Twitter</span>
              <span style={{ margin: "0 1rem" }}>LinkedIn</span>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </footer>
      ),
      label: "Social Light",
      preview: () => (
        <div style={{ background: "#f8f9fa", padding: "5px" }}>
          Social Footer
        </div>
      ),
    },
  ],
};

export const allTemplates = {
  NAVBAR: navbarTemplates,
  HERO: heroTemplates,
  FEATURES: featuresTemplates,
  FOOTER: footerTemplates,
};
