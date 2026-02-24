import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../Button/Button";
import "./CarritoWidget.css";

function CarritoWidget() {
  const { carrito, removerDelCarrito, actualizarCantidad, vaciarCarrito, totalCarrito } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (carrito.length === 0) {
    return null; // No mostrar si está vacío
  }

  return (
    <>
      {/* Botón flotante */}
      <button 
        className="carrito-float-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ver carrito"
      >
        <span className="cart-icon">🛒</span>
        <span className="cart-badge">{carrito.length}</span>
      </button>

      {/* Panel del carrito */}
      {isOpen && (
        <div className="carrito-panel">
          <div className="carrito-header">
            <h3>🛒 Tu Carrito</h3>
            <button 
              className="carrito-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="carrito-items">
            {carrito.map(item => (
              <div key={item.id} className="carrito-item">
                <div className="item-emoji">{item.emoji}</div>
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <span className="item-price">${item.price}</span>
                </div>
                <div className="item-controls">
                  <button 
                    onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                    className="qty-btn"
                  >
                    −
                  </button>
                  <span className="qty-display">{item.cantidad}</span>
                  <button 
                    onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                    className="qty-btn"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => removerDelCarrito(item.id)}
                    className="remove-btn"
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-footer">
            <div className="carrito-total">
              <span>Total:</span>
              <span className="total-amount">${totalCarrito.toFixed(2)}</span>
            </div>
            <div className="carrito-actions">
              <Button 
                text="Vaciar" 
                variant="secondary" 
                onClick={vaciarCarrito}
              />
              <Button 
                text="Pagar" 
                variant="accent"
                onClick={() => alert('Función de pago próximamente')}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CarritoWidget;
