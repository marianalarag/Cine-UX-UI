// src/components/CarritoWidget/CarritoWidget.jsx
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../Button/Button";
import "./CarritoWidget.css";

function CarritoWidget({ isOpen: externalIsOpen, onToggle }) {
  const {
    carrito,
    removerDelCarrito,
    actualizarCantidad,
    vaciarCarrito,
    totalCarrito,
  } = useCart();
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Usar estado externo si se proporciona, sino usar interno
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  // Escuchar evento para abrir/cerrar el carrito desde el header (como fallback)
  useEffect(() => {
    const handleToggleCart = () => {
      if (onToggle) {
        onToggle();
      } else {
        setInternalIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("toggleCart", handleToggleCart);

    return () => {
      window.removeEventListener("toggleCart", handleToggleCart);
    };
  }, [onToggle]);

  // Cerrar el carrito cuando está vacío
  useEffect(() => {
    if (carrito.length === 0 && isOpen) {
      if (onToggle) {
        onToggle();
      } else {
        setInternalIsOpen(false);
      }
    }
  }, [carrito, isOpen, onToggle]);

  const handleClose = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(false);
    }
  };

  const handleOpen = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(true);
    }
  };

  if (carrito.length === 0) {
    return null;
  }

  return (
    <>
      {/* Botón flotante - solo visible en móvil */}
      <button
        className="carrito-float-btn mobile-only"
        onClick={handleOpen}
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
            <button className="carrito-close" onClick={handleClose}>
              ×
            </button>
          </div>

          <div className="carrito-items">
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <div className="item-image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/60x60?text=Producto";
                    }}
                  />
                </div>
                <div className="item-info">
                  <h4 className="item-name">{item.name}</h4>
                  <div className="item-details">
                    <span className="item-price">${item.price}</span>
                    {item.tag && (
                      <span
                        className={`item-tag item-tag--${item.tagColor || "blue"}`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>
                <div className="item-controls">
                  <button
                    onClick={() =>
                      actualizarCantidad(item.id, item.cantidad - 1)
                    }
                    className="qty-btn"
                    aria-label="Disminuir cantidad"
                  >
                    −
                  </button>
                  <span className="qty-display">{item.cantidad}</span>
                  <button
                    onClick={() =>
                      actualizarCantidad(item.id, item.cantidad + 1)
                    }
                    className="qty-btn"
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removerDelCarrito(item.id)}
                    className="remove-btn"
                    aria-label="Eliminar producto"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-footer">
            <div className="carrito-resumen">
              <div className="resumen-row">
                <span>
                  Subtotal ({carrito.length}{" "}
                  {carrito.length === 1 ? "producto" : "productos"}):
                </span>
                <span className="resumen-value">
                  ${totalCarrito.toFixed(2)}
                </span>
              </div>
              <div className="resumen-row">
                <span>Envío:</span>
                <span className="resumen-value envio-gratis">Gratis</span>
              </div>
              <div className="resumen-divider"></div>
              <div className="resumen-row total">
                <span>Total:</span>
                <span className="total-amount">${totalCarrito.toFixed(2)}</span>
              </div>
            </div>

            <div className="carrito-actions">
              <Button
                text="Vaciar"
                variant="secondary"
                onClick={vaciarCarrito}
              />
              <Button
                text="Proceder al pago"
                variant="accent"
                onClick={() => alert("🛍️ Función de pago próximamente")}
              />
            </div>

            <p className="carrito-nota">* Los precios incluyen impuestos</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CarritoWidget;
