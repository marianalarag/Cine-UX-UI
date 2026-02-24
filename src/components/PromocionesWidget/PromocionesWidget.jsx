import { useState, useEffect } from "react";
import "./PromocionesWidget.css";

function PromocionesWidget() {
  const [promociones, setPromociones] = useState([]);
  const [loading, setLoading] = useState(true);

  const promocionesReales = [
    {
      id: 1,
      titulo: "Martes 2x1",
      descripcion:
        "Disfruta del 2x1 en boletos todos los martes. Aplica para todas las funciones y formatos.",
      emoji: "🎟️",
      color: "blue",
      precio: "2x1",
      vigencia: "Todos los martes",
    },
    {
      id: 2,
      titulo: "Combo Dúo",
      descripcion:
        "Lleva 2 refrescos medianos + 1 palomitas grandes por solo $199.",
      emoji: "🥤",
      color: "yellow",
      precio: "$199",
      vigencia: "Hasta agotar existencias",
    },
    {
      id: 3,
      titulo: "Miércoles de Cinéfilo",
      descripcion:
        "Descuento del 30% en boletos para estudiantes y maestros presentando credencial.",
      emoji: "🎓",
      color: "purple",
      precio: "30% OFF",
      vigencia: "Todos los miércoles",
    },
    {
      id: 4,
      titulo: "Combo Estreno",
      descripcion:
        "2 boletos para función de estreno + 1 combo de palomitas + 2 refrescos + 2 dulces.",
      emoji: "✨",
      color: "green",
      precio: "$499",
      vigencia: "Sólo fines de semana",
    },
  ];

  useEffect(() => {
    const cargarPromociones = async () => {
      setLoading(true);
      try {
        // Simulamos carga de API
        await new Promise((resolve) => setTimeout(resolve, 800));
        setPromociones(promocionesReales);
      } finally {
        setLoading(false);
      }
    };

    cargarPromociones();
  }, []);

  if (loading) {
    return (
      <div className="promociones-widget">
        <h3 className="widget-title">Promociones Especiales</h3>
        <div className="widget-loading">
          <div className="spinner" />
          <p>Cargando promociones...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="promociones-widget">
      <h3 className="widget-title">Promociones Especiales</h3>
      <div className="promociones-grid">
        {promociones.map((promo) => (
          <div
            key={promo.id}
            className={`promo-card promo-card--${promo.color}`}
          >
            <div className="promo-header">
              <span className="promo-emoji">{promo.emoji}</span>
              <span className="promo-precio">{promo.precio}</span>
            </div>
            <h4 className="promo-titulo">{promo.titulo}</h4>
            <p className="promo-desc">{promo.descripcion}</p>
            <div className="promo-footer">
              <small className="promo-vigencia">
                📅 {promo.vigencia}
                <br />
              </small>
              <button className="promo-btn">Aprovechar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromocionesWidget;
