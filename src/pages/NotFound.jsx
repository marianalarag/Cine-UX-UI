import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to='/' style={{ textDecoration: 'none', color: '#e50914' }}>
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;
