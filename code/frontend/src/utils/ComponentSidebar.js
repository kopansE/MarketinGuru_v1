// src/utils/ComponentSidebar.js
import React from "react";
import { useDrag } from "react-dnd";
import { allTemplates } from "../templates/templateLibrary";

const ComponentTemplate = ({ template, type, label }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "COMPONENT",
    item: {
      type,
      template,
      label,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        padding: "10px",
        margin: "5px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        cursor: "move",
        opacity: isDragging ? 0.5 : 1,
        background: "#fff",
      }}
    >
      <h4 style={{ margin: "0 0 8px 0" }}>{label}</h4>
      <div
        className="template-preview"
        style={{ padding: "8px", background: "#f5f5f5", borderRadius: "2px" }}
      >
        {React.createElement(template.preview)}
      </div>
    </div>
  );
};

const ComponentSidebar = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "300px",
        height: "100%",
        background: "#f8f9fa",
        padding: "20px",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
        overflowY: "auto",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Component Templates</h2>

      {Object.entries(allTemplates).map(([type, { templates }]) => (
        <div key={type} style={{ marginBottom: "20px" }}>
          <h3
            style={{
              padding: "10px",
              background: "#e9ecef",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          >
            {type}
          </h3>
          {templates.map((template, index) => (
            <ComponentTemplate
              key={`${type}-${index}`}
              template={template}
              type={type}
              label={template.label}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ComponentSidebar;
