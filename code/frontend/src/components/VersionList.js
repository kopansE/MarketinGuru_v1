import React, { useEffect, useState } from "react";
import { versionService } from "../services/versionService";

const VersionList = ({ onVersionSelect }) => {
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    loadVersions();
  }, []);

  const loadVersions = async () => {
    try {
      const allVersions = await versionService.getAllVersions();
      setVersions(allVersions);
    } catch (error) {
      console.error("Error loading versions:", error);
    }
  };

  return (
    <div>
      <h3>Saved Versions</h3>
      <ul>
        {versions.map((version) => (
          <li key={version.versionNumber}>
            <button onClick={() => onVersionSelect(version.versionNumber)}>
              Version {version.versionNumber} -{" "}
              {new Date(version.timestamp).toLocaleDateString()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VersionList;
