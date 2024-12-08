import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const LandingPage = () => (
  <div>
    <Navbar />
    <HeroSection />
    <Features />
    <ContactForm />
    <Footer />
  </div>
);

export default LandingPage;
