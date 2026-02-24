import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            Ciné<span>polis</span>
          </span>
        </div>
        <div className="footer-links">
          <h5>Navegación</h5>
          <ul>
            <li>Cartelera</li>
            <li>Alimentos</li>
            <li>Promociones</li>
            <li>Membresías</li>
          </ul>
        </div>
        <div className="footer-links">
          <h5>Legal</h5>
          <ul>
            <li>Aviso de privacidad</li>
            <li>Términos y condiciones</li>
            <li>Políticas de reembolso</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Cinépolis. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
