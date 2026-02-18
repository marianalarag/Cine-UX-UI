import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Alimentos from "./pages/Alimentos";
import Otros from "./pages/Otros";
import Detalle from "./pages/Detalle";

function App() {
  const [vistaActual, setVistaActual] = useState("home");

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header cambiarVista={setVistaActual} vistaActual={vistaActual} />

      <div style={{ flex: 1 }}>
        {vistaActual === "home" && <Home cambiarVista={setVistaActual} />}
        {vistaActual === "cartelera" && (
          <Cartelera cambiarVista={setVistaActual} />
        )}
        {vistaActual === "alimentos" && <Alimentos />}
        {vistaActual === "otros" && <Otros />}
        {vistaActual === "detalle" && <Detalle cambiarVista={setVistaActual} />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
