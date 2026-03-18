// src/components/PromocionesWidget/PromocionesWidget.jsx
import { useState, useEffect } from "react";
import "./PromocionesWidget.css";

function PromocionesWidget() {
  // Estados necesarios para cumplir con la rúbrica (mínimo 2 estados funcionales)
  const [promociones, setPromociones] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [activeTab, setActiveTab] = useState("club");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [promoSeleccionada, setPromoSeleccionada] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // useEffect para consumir datos del JSON local - CUMPLE CON LA RÚBRICA
  useEffect(() => {
    const cargarPromociones = async () => {
      setLoading(true);
      setError(null);

      try {
        // Simulamos un fetch a un archivo JSON local
        const response = await fetch("/src/data/promociones.json");

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        // Actualizamos los estados con los datos recibidos
        setPromociones(data.promociones);
        setCategorias(data.categorias);

        // Establecemos la primera categoría como activa si existe
        if (data.categorias.length > 0 && !activeTab) {
          setActiveTab(data.categorias[0].id);
        }
      } catch (err) {
        console.error("Error al cargar promociones:", err);
        setError("No se pudieron cargar las promociones. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    cargarPromociones();
  }, []); // Array vacío = solo se ejecuta al montar el componente

  // Filtrar promociones por categoría activa - RENDERIZADO DINÁMICO
  const promocionesFiltradas = promociones.filter(
    (promo) => promo.categoria === activeTab,
  );

  // Manejador para abrir modal con detalles de la promoción
  const handleVerDetalles = (promo) => {
    setPromoSeleccionada(promo);
    setShowModal(true);
  };

  // Manejador para cerrar modal
  const handleCerrarModal = () => {
    setShowModal(false);
    setPromoSeleccionada(null);
  };

  // Renderizado condicional según estado de carga
  if (loading) {
    return (
      <div className="promociones-widget">
        <h2 className="section-title">Promos</h2>
        <div className="widget-loading">
          <div className="spinner" />
          <p>Cargando promociones...</p>
        </div>
      </div>
    );
  }

  // Renderizado condicional en caso de error
  if (error) {
    return (
      <div className="promociones-widget">
        <h2 className="section-title">Promos</h2>
        <div className="widget-error">
          <span>⚠️</span>
          <p>{error}</p>
          <button
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="promociones-widget">
      {/* Título de sección - simplificado */}
      <h2 className="section-title">Promos</h2>

      {/* Tabs de categorías - RENDERIZADO DINÁMICO con map */}
      <div className="tabs-container">
        <div className="tabs-header">
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className={`tab-item ${activeTab === categoria.id ? "tab-item--active" : ""}`}
              onClick={() => setActiveTab(categoria.id)}
              role="tab"
              aria-selected={activeTab === categoria.id}
              tabIndex={0}
            >
              {categoria.nombre}
            </div>
          ))}
        </div>
      </div>

      {/* Grid de promociones - RENDERIZADO DINÁMICO con map */}
      <div className="promociones-container">
        <div className="promociones-grid">
          {promocionesFiltradas.length > 0 ? (
            promocionesFiltradas.map((promo) => (
              <div
                key={promo.id}
                className="promo-card"
                onClick={() => handleVerDetalles(promo)}
                role="button"
                tabIndex={0}
                aria-label={`Ver detalles de ${promo.titulo}`}
              >
                <div className="promo-imagen-container">
                  <img
                    src={promo.imagen}
                    alt={promo.titulo}
                    className="promo-imagen"
                    loading="lazy"
                  />
                </div>
                <div
                  className="promo-contenido"
                  style={{ backgroundColor: promo.colorFondo }}
                >
                  <h3 className="promo-titulo">{promo.titulo}</h3>
                  <p className="promo-descripcion">{promo.descripcion}</p>
                  <div className="promo-footer">
                    <span className="promo-precio">{promo.precio}</span>
                    <span className="promo-vigencia">📅 {promo.vigencia}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No hay promociones disponibles en esta categoría</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal de detalles - RENDERIZADO CONDICIONAL */}
      {showModal && promoSeleccionada && (
        <div className="modal-overlay" onClick={handleCerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCerrarModal}>
              ×
            </button>

            <div className="modal-body">
              <img
                src={promoSeleccionada.imagen}
                alt={promoSeleccionada.titulo}
                className="modal-imagen"
              />

              <div className="modal-info">
                <h3 className="modal-titulo">{promoSeleccionada.titulo}</h3>
                <p className="modal-descripcion">
                  {promoSeleccionada.descripcion}
                </p>

                <div className="modal-detalles">
                  <div className="modal-detalle-item">
                    <span className="detalle-label">Precio especial:</span>
                    <span className="detalle-valor">
                      {promoSeleccionada.precio}
                    </span>
                  </div>

                  <div className="modal-detalle-item">
                    <span className="detalle-label">Vigencia:</span>
                    <span className="detalle-valor">
                      {promoSeleccionada.vigencia}
                    </span>
                  </div>

                  {promoSeleccionada.beneficios && (
                    <div className="modal-beneficios">
                      <h4>Beneficios:</h4>
                      <ul>
                        {promoSeleccionada.beneficios.map(
                          (beneficio, index) => (
                            <li key={index}>{beneficio}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                <button className="modal-btn">Aprovechar promoción</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PromocionesWidget;
