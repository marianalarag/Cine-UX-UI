// src/components/Header/Header.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Header.css";

const Header = ({ onToggleCarrito, carritoAbierto }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const { carrito } = useCart();

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/cartelera", label: "Cartelera" },
    { path: "/alimentos", label: "Alimentos" },
    { path: "/otros", label: "Otros" },
  ];

  const closeMenu = () => {
    setMenuAbierto(false);
  };

  // Calcular total de items en el carrito
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const handleToggleCarrito = () => {
    if (onToggleCarrito) {
      onToggleCarrito();
    }
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            {/* Menú desktop */}
            <div className="menu-list">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `menu-button ${isActive ? "menu-button--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  <span className="button-text">
                    <span className="invisible-text">{item.label}</span>
                    <span className="visible-text">{item.label}</span>
                  </span>
                </NavLink>
              ))}
            </div>

            {/* Modal de información (opcional) */}
            {modalInfo && (
              <div id="modal-info" className="modal-info">
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        className="modal-close"
                        onClick={() => setModalInfo(false)}
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <h3 className="modal-title">Información</h3>
                      <p className="modal-text">Contenido del modal</p>
                    </div>
                    <div className="modal-actions">
                      <button
                        className="modal-button modal-button--primary"
                        onClick={() => setModalInfo(false)}
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Botón menú móvil */}
            <button
              className="mobile-menu-button"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label="Menú"
            >
              <img
                src="https://tickets-static-content.cinepolis.com/Tickets_Assets/Host/icons/IconMenuWhite.svg"
                alt="menu"
                className="menu-icon"
              />
            </button>
          </li>
        </ul>

        {/* Logo centrado */}
        <div className="logo-container">
          <Link to="/" className="logo-text" style={{ textDecoration: "none" }}>
            Ciné<span className="logo-accent">polis</span>
          </Link>
        </div>

        {/* Acciones derecha */}
        <ul className="actions-menu">
          <li>
            <div className="actions-container">
              {/* Botón de búsqueda */}
              <div className="search-mobile">
                <Link
                  to="/cartelera"
                  className="action-button"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="https://tickets-static-content.cinepolis.com/Tickets_Assets/Host/icons/iconSearchWhite.svg"
                    alt="Buscar"
                    className="action-icon"
                  />
                </Link>
              </div>

              {/* Botón del carrito */}
              <div className="cart-container">
                <button
                  className={`cart-button ${carritoAbierto ? "cart-button--active" : ""}`}
                  onClick={handleToggleCarrito}
                  aria-label="Carrito de compras"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cart-icon-header"
                  >
                    <path
                      d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  {totalItems > 0 && (
                    <span className="cart-badge-header">{totalItems}</span>
                  )}
                </button>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      {/* Menú móvil */}
      <nav className={`mobile-nav ${menuAbierto ? "mobile-nav--open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`
            }
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}
        <Link
          to="/cartelera"
          className="mobile-nav-link mobile-nav-cta"
          onClick={closeMenu}
        >
          Comprar Boletos
        </Link>
        {/* Carrito en móvil */}
        <button
          className="mobile-nav-link mobile-cart"
          onClick={handleToggleCarrito}
        >
          🛒 Carrito {totalItems > 0 && `(${totalItems})`}
        </button>
      </nav>
    </header>
  );
};

export default Header;
