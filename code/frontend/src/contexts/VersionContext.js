// src/contexts/VersionContext.js
import React, { createContext, useContext } from "react";
import { usePageVersioning } from "../utils/pageVersioning";

// Create the context
export const VersionContext = createContext(null);

// Custom hook to use the version context
export const useVersionContext = () => {
  const context = useContext(VersionContext);
  if (context === null) {
    throw new Error("useVersionContext must be used within a VersionProvider");
  }
  return context;
};

// Provider component
export const VersionProvider = ({ children }) => {
  const versioningUtils = usePageVersioning();

  return (
    <VersionContext.Provider value={versioningUtils}>
      {children}
    </VersionContext.Provider>
  );
};

// Export a default object in case it's needed
export default {
  VersionContext,
  VersionProvider,
  useVersionContext,
};
