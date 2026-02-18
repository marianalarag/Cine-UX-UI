import { useState } from "react";
import "./Header.css";

const Header = ({ cambiarVista, vistaActual }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navItems = [
    { key: "home", label: "Inicio" },
    { key: "cartelera", label: "Cartelera" },
    { key: "alimentos", label: "Alimentos" },
    { key: "otros", label: "Otros" },
  ];

  const handleNav = (key) => {
    cambiarVista(key);
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => handleNav("home")}>
          <span className="logo-text">
            Ciné<span className="logo-accent">polis</span>
          </span>
        </div>

        {/* Nav desktop */}
        <nav className="navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.key} className="nav-item">
                <span
                  className={`nav-link ${vistaActual === item.key ? "nav-link--active" : ""}`}
                  onClick={() => handleNav(item.key)}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <button className="header-cta" onClick={() => handleNav("cartelera")}>
          Comprar Boletos
        </button>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuAbierto ? "hamburger--open" : ""}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`mobile-menu ${menuAbierto ? "mobile-menu--open" : ""}`}>
        {navItems.map((item) => (
          <span
            key={item.key}
            className={`mobile-link ${vistaActual === item.key ? "mobile-link--active" : ""}`}
            onClick={() => handleNav(item.key)}
          >
            {item.label}
          </span>
        ))}
        <button
          className="header-cta mobile-cta"
          onClick={() => handleNav("cartelera")}
        >
          Comprar Boletos
        </button>
      </nav>
    </header>
  );
};

export default Header;
