import React from "react";
//Ayuda en la navegación
import { BrowserRouter as Router } from "react-router-dom";
//Donde se tiene registrado todas las rutas
import { Navigation } from "./screens/navigation";

function App() {
  return (
    <Router>
        <Navigation />
      </Router>
  );
}

export default App;
