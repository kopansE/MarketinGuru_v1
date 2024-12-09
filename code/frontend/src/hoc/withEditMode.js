import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

export const withEditMode = (WrappedComponent) => {
  return (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [componentText, setComponentText] = useState({
      title: props.title || "",
      description: props.description || "",
    });

    // Drag and drop configuration
    const [{ isDragging }, drag] = useDrag({
      type: "COMPONENT",
      item: {
        type: "COMPONENT",
        component: WrappedComponent,
        props: componentText,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });

    const [{ isOver }, drop] = useDrop({
      accept: "COMPONENT",
      drop: (item, monitor) => {
        // Handle component replacement logic here
        console.log("Dropped component:", item);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    });

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

    // Wrap the component with edit functionality
    return (
      <div
        ref={drop}
        style={{
          margin: "20px",
          padding: "20px",
          border: isOver ? "2px dashed blue" : "1px solid #ddd",
          opacity: isDragging ? 0.5 : 1,
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
        ) : (
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
            ref={drag}
            style={{
              padding: "5px 10px",
              background: "#f0f0f0",
              border: "1px solid #ddd",
            }}
          >
            Drag
          </button>
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
