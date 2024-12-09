import { useState, useEffect } from "react";

export const usePageVersioning = () => {
  // Track all saved versions
  const [savedVersions, setSavedVersions] = useState(() => {
    const saved = localStorage.getItem("landingPageVersions");
    return saved ? JSON.parse(saved) : [];
  });

  // Save current state of components and their templates
  const saveVersion = (components) => {
    const newVersion = {
      id: savedVersions.length + 1,
      timestamp: new Date().toISOString(),
      components,
      url: `/v${savedVersions.length + 1}`,
    };

    const updatedVersions = [...savedVersions, newVersion];
    setSavedVersions(updatedVersions);
    localStorage.setItem(
      "landingPageVersions",
      JSON.stringify(updatedVersions)
    );
    return newVersion;
  };

  // Get a specific version
  const getVersion = (versionId) => {
    return savedVersions.find((version) => version.id === versionId);
  };

  return {
    savedVersions,
    saveVersion,
    getVersion,
    currentVersionNumber: savedVersions.length,
  };
};
