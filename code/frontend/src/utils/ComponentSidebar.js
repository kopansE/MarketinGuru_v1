import React from "react";
import { useDrag } from "react-dnd";
import HeroSection from "../components/HeroSection";

const ComponentItem = ({ component: Component, label }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "COMPONENT",
    item: { type: "COMPONENT", component: Component },
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
        cursor: "move",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {label}
    </div>
  );
};

const ComponentSidebar = () => {
  const availableComponents = [
    {
      component: HeroSection,
      label: "Hero Section",
      defaultProps: {
        title: "New Hero Section",
        description: "Replace with your content",
      },
    },
    // Add more components here
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "250px",
        height: "100%",
        background: "#f0f0f0",
        padding: "20px",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Drag Components</h3>
      {availableComponents.map((comp, index) => (
        <ComponentItem
          key={index}
          component={comp.component}
          label={comp.label}
        />
      ))}
    </div>
  );
};

export default ComponentSidebar;
