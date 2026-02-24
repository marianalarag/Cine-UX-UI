import { useState } from "react";
import Button from "../Button/Button";
import "./CompraForm.css";

function CompraForm({ pelicula, onCerrar }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    cantidadBoletos: 1,
    horario: '12:00 PM',
    formato: '2D'
  });

  const [compraRealizada, setCompraRealizada] = useState(false);

  // onChange event - actualiza campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // onSubmit event - procesa el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setCompraRealizada(true);
  };

  const precioBoleto = formData.formato === '2D' ? 85 : 
                       formData.formato === '3D' ? 120 : 180;
  const total = precioBoleto * formData.cantidadBoletos;

  if (compraRealizada) {
    return (
      <div className="compra-form-overlay" onClick={onCerrar}>
        <div className="compra-form-modal compra-form-modal--success" onClick={e => e.stopPropagation()}>
          <div className="success-icon">✅</div>
          <h2 className="success-title">¡Compra Confirmada!</h2>
          
          <div className="compra-resumen">
            <h3>Resumen de tu compra:</h3>
            <div className="resumen-item">
              <span className="resumen-label">Película:</span>
              <span className="resumen-value">{pelicula}</span>
            </div>
            <div className="resumen-item">
              <span className="resumen-label">Nombre:</span>
              <span className="resumen-value">{formData.nombre}</span>
            </div>
            <div className="resumen-item">
              <span className="resumen-label">Email:</span>
              <span className="resumen-value">{formData.email}</span>
            </div>
            <div className="resumen-item">
              <span className="resumen-label">Teléfono:</span>
              <span className="resumen-value">{formData.telefono}</span>
            </div>
            <div className="resumen-item">
              <span className="resumen-label">Boletos:</span>
              <span className="resumen-value">{formData.cantidadBoletos} × ${precioBoleto}</span>
            </div>
            <div className="resumen-item">
              <span className="resumen-label">Horario:</span>
              <span className="resumen-value">{formData.horario}</span>
            </div>
            <div className="resumen-item">
              <span className="resumen-label">Formato:</span>
              <span className="resumen-value">{formData.formato}</span>
            </div>
            <div className="resumen-item resumen-item--total">
              <span className="resumen-label">Total:</span>
              <span className="resumen-value">${total} MXN</span>
            </div>
          </div>

          <p className="success-message">
            Hemos enviado tus boletos a <strong>{formData.email}</strong>
          </p>

          <Button text="Cerrar" variant="accent" onClick={onCerrar} />
        </div>
      </div>
    );
  }

  return (
    <div className="compra-form-overlay" onClick={onCerrar}>
      <div className="compra-form-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onCerrar}>×</button>
        
        <h2 className="modal-title">Comprar Boletos</h2>
        <p className="modal-subtitle">Para: <strong>{pelicula}</strong></p>

        <form onSubmit={handleSubmit} className="compra-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo *</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="555-123-4567"
              className="form-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cantidadBoletos">Cantidad de boletos</label>
              <input
                id="cantidadBoletos"
                type="number"
                name="cantidadBoletos"
                min="1"
                max="10"
                value={formData.cantidadBoletos}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="horario">Horario</label>
              <select
                id="horario"
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                className="form-input"
              >
                <option value="12:00 PM">12:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="8:30 PM">8:30 PM</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="formato">Formato</label>
            <select
              id="formato"
              name="formato"
              value={formData.formato}
              onChange={handleChange}
              className="form-input"
            >
              <option value="2D">2D - $85</option>
              <option value="3D">3D - $120</option>
              <option value="IMAX">IMAX - $180</option>
            </select>
          </div>

          <div className="form-total">
            <span>Total a pagar:</span>
            <span className="total-price">${total} MXN</span>
          </div>

          <div className="form-actions">
            <Button text="Cancelar" variant="secondary" onClick={onCerrar} />
            <Button text="Confirmar Compra" variant="accent" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompraForm;
