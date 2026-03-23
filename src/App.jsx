// src/App.jsx
import { useState } from "react";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarritoWidget from "./components/CarritoWidget/CarritoWidget";
import AppRouter from "./routes/AppRouter";

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
          <AppRouter />
        </div>

        {/* CarritoWidget con control externo */}
        <CarritoWidget isOpen={carritoAbierto} onToggle={toggleCarrito} />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
