// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarritoWidget from "./components/CarritoWidget/CarritoWidget";

import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Alimentos from "./pages/Alimentos";
import Otros from "./pages/Otros";
import Detalle from "./pages/Detalle";
import NotFound from "./pages/NotFound";

function App() {
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // Función para alternar el carrito
  const toggleCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };

  return (
    <CartProvider>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header
          onToggleCarrito={toggleCarrito}
          carritoAbierto={carritoAbierto}
        />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartelera" element={<Cartelera />} />
            <Route path="/alimentos" element={<Alimentos />} />
            <Route path="/otros" element={<Otros />} />
            <Route path="/pelicula/:id" element={<Detalle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* CarritoWidget con control externo */}
        <CarritoWidget isOpen={carritoAbierto} onToggle={toggleCarrito} />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
