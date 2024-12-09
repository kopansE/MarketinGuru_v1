// src/hoc/withEditMode.js
import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

export const withEditMode = (WrappedComponent, componentType) => {
  return ({ initialTemplate, ...props }) => {
    const [currentTemplate, setCurrentTemplate] = useState(
      initialTemplate || null
    );
    const [componentText, setComponentText] = useState({
      title: props.title || "",
      description: props.description || "",
    });

    // Drag configuration
    const [{ isDragging }, drag] = useDrag({
      type: "COMPONENT",
      item: {
        type: componentType, // This is the component type (NAVBAR, HERO, etc.)
        currentTemplate,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });

    // Drop configuration
    const [{ isOver, canDrop }, drop] = useDrop({
      accept: "COMPONENT",
      canDrop: (item) => item.type === componentType, // Only allow drops if types match
      drop: (item) => {
        console.log("Dropped template:", item.template);
        if (item.template) {
          setCurrentTemplate(item.template);
          // Reset text when switching templates
          setComponentText({
            title: item.template.defaultProps?.title || "",
            description: item.template.defaultProps?.description || "",
          });
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
      setIsEditing(!isEditing);
    };

    const handleTextChange = (e) => {
      const { name, value } = e.target;
      setComponentText((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    // Define border color based on drag and drop state
    const getBorderColor = () => {
      if (isOver) {
        return canDrop ? "#4CAF50" : "#f44336"; // Green if can drop, red if cannot
      }
      return "#ddd";
    };

    // Combine drag and drop refs
    const combineRefs = (...refs) => {
      return (element) => {
        refs.forEach((ref) => {
          if (typeof ref === "function") {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
        });
      };
    };

    return (
      <div
        ref={combineRefs(drag, drop)}
        style={{
          margin: "20px",
          padding: "20px",
          border: `2px solid ${getBorderColor()}`,
          opacity: isDragging ? 0.5 : 1,
          background: isOver && canDrop ? "rgba(76, 175, 80, 0.1)" : "white",
          transition: "all 0.3s ease",
        }}
      >
        {isEditing ? (
          <div>
            <input
              name="title"
              value={componentText.title}
              onChange={handleTextChange}
              placeholder="Enter title"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <input
              name="description"
              value={componentText.description}
              onChange={handleTextChange}
              placeholder="Enter description"
              style={{ width: "100%", marginBottom: "10px" }}
            />
          </div>
        ) : currentTemplate ? (
          // Render the selected template with current text
          <currentTemplate.component {...componentText} />
        ) : (
          // Render the original component if no template is selected
          <WrappedComponent {...props} {...componentText} />
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <button
            onClick={handleEdit}
            style={{
              padding: "5px 10px",
              background: isEditing ? "#4CAF50" : "#2196F3",
              color: "white",
              border: "none",
            }}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    );
  };
};
