import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Estados para favoritos y carrito
  const [favoritos, setFavoritos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // Funciones para favoritos
  const toggleFavorito = (peliculaId) => {
    setFavoritos(prev => {
      if (prev.includes(peliculaId)) {
        return prev.filter(id => id !== peliculaId);
      }
      return [...prev, peliculaId];
    });
  };

  const esFavorito = (peliculaId) => {
    return favoritos.includes(peliculaId);
  };

  // Funciones para carrito de alimentos
  const agregarAlCarrito = (item) => {
    setCarrito(prev => {
      const existente = prev.find(i => i.id === item.id);
      if (existente) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, cantidad: i.cantidad + 1 }
            : i
        );
      }
      return [...prev, { ...item, cantidad: 1 }];
    });
  };

  const removerDelCarrito = (itemId) => {
    setCarrito(prev => prev.filter(i => i.id !== itemId));
  };

  const actualizarCantidad = (itemId, cantidad) => {
    if (cantidad <= 0) {
      removerDelCarrito(itemId);
      return;
    }
    setCarrito(prev => 
      prev.map(i => i.id === itemId ? { ...i, cantidad } : i)
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalCarrito = carrito.reduce((sum, item) => 
    sum + (parseFloat(item.price) * item.cantidad), 0
  );

  const value = {
    favoritos,
    toggleFavorito,
    esFavorito,
    carrito,
    agregarAlCarrito,
    removerDelCarrito,
    actualizarCantidad,
    vaciarCarrito,
    totalCarrito
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
