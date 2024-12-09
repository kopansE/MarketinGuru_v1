import React from "react";
import "./styles/globals.css";
import LandingPage from "./pages/LandingPage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// const App = () => <LandingPage />;
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <LandingPage />
    </DndProvider>
  );
}
export default App;
