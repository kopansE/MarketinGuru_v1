const API_URL = "http://localhost:5000/api";

export const versionService = {
  async saveVersion(components) {
    try {
      // Strip out React components before sending to backend
      const preparedComponents = Object.entries(components).reduce(
        (acc, [key, value]) => {
          if (!value) return acc;

          acc[key] = {
            template: value.template
              ? {
                  label: value.template.label,
                  type: value.type,
                }
              : null,
            text: value.text,
            type: value.type,
          };

          return acc;
        },
        {}
      );

      const response = await fetch(`${API_URL}/versions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ components: preparedComponents }),
      });

      if (!response.ok) {
        throw new Error("Failed to save version");
      }

      const savedVersion = await response.json();
      localStorage.setItem(
        `version_${savedVersion.versionNumber}`,
        JSON.stringify(savedVersion)
      );

      return savedVersion;
    } catch (error) {
      console.error("Error saving version:", error);
      throw error;
    }
  },

  async getVersion(versionNumber) {
    const cachedVersion = localStorage.getItem(`version_${versionNumber}`);
    if (cachedVersion) {
      return JSON.parse(cachedVersion);
    }

    try {
      const response = await fetch(`${API_URL}/versions/${versionNumber}`);
      if (!response.ok) {
        throw new Error("Failed to fetch version");
      }
      const version = await response.json();
      localStorage.setItem(`version_${versionNumber}`, JSON.stringify(version));
      return version;
    } catch (error) {
      console.error("Error fetching version:", error);
      throw error;
    }
  },
};
