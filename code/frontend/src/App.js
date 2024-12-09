// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { VersionProvider } from "./contexts/VersionContext";
import LandingPage from "./pages/LandingPage";
import "./styles/globals.css";

function App() {
  return (
    <Router>
      <VersionProvider>
        <DndProvider backend={HTML5Backend}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/v:versionId" element={<LandingPage />} />
          </Routes>
        </DndProvider>
      </VersionProvider>
    </Router>
  );
}

export default App;
