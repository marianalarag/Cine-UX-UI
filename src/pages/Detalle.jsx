import { useState } from "react";
import Button from "../components/Button/Button";
import CompraForm from "../components/CompraForm/CompraForm";
import { useCart } from "../context/CartContext";
import "./Detalle.css";

const INFO_PELICULAS = {
  1: {
    title: "Las ventajas de ser invisible",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/0bf85f45dd8a43abe54307d0c9b0668c075c044b958407b4a95683949adc3860.jpg",
    genre: "Drama",
    duration: "1h 43min",
    rating: "8.0",
    year: "2012",
    synopsis:
      "Charlie es un adolescente introvertido que lucha por encajar mientras inicia la preparatoria. A través de nuevas amistades, el amor y la música, comienza a sanar heridas del pasado y a descubrir quién es realmente.",
  },
  2: {
    title: "El diablo viste a la moda",
    image:
      "https://pics.filmaffinity.com/the_devil_wears_prada-636873258-large.jpg",
    genre: "Drama / Comedia",
    duration: "1h 49min",
    rating: "7.0",
    year: "2006",
    synopsis:
      "Andy consigue trabajo en una prestigiosa revista de moda bajo la dirección de la temida Miranda Priestly. Lo que parecía una oportunidad soñada se convierte en una prueba de sacrificios personales y profesionales.",
  },
  3: {
    title: "Imagine Me & You",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTViMGNiNDItMDFiMC00YzYyLThjYTgtNDY3Mzg0ZDE4ZmU1XkEyXkFqcGc@._V1_.jpg",
    genre: "Romántica",
    duration: "1h 30min",
    rating: "7.4",
    year: "2005",
    synopsis:
      "Durante el día de su boda, Rachel se enamora inesperadamente de Luce. Atrapada entre lo que se espera de ella y lo que siente realmente, deberá decidir seguir su corazón.",
  },
  4: {
    title: "Ready Player One",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzVkMTgzODQtMWIwZC00NzE4LTgzZjYtMzAwM2I5OGZhNjE4XkEyXkFqcGc@._V1_.jpg",
    genre: "Acción / Ciencia Ficción",
    duration: "2h 20min",
    rating: "7.4",
    year: "2018",
    synopsis:
      "En un futuro distópico, la humanidad escapa de la realidad a través del OASIS, un mundo virtual. Wade Watts se une a una competencia épica que podría cambiar su vida y el destino del mundo digital.",
  },
};

function Detalle({ peliculaId = 1, cambiarVista }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const { toggleFavorito, esFavorito } = useCart();
  const pelicula = INFO_PELICULAS[peliculaId];
  const isFav = esFavorito(peliculaId);

  if (!pelicula) {
    return (
      <main className="detalle">
        <p>Película no encontrada.</p>
        <Button
          text="Volver a cartelera"
          variant="secondary"
          onClick={() => cambiarVista("cartelera")}
        />
      </main>
    );
  }

  return (
    <main className="detalle">
      <button
        className="detalle-back"
        onClick={() => cambiarVista("cartelera")}
      >
        ← Volver a cartelera
      </button>

      <div className="detalle-hero">
        <div className="detalle-poster">
          <img src={pelicula.image} alt={pelicula.title} />
        </div>

        <div className="detalle-info">
          <span className="detalle-genre">{pelicula.genre}</span>
          <h1 className="detalle-title">{pelicula.title}</h1>

          <div className="detalle-meta">
            <span className="detalle-rating">⭐ {pelicula.rating} / 10</span>
            <span className="detalle-sep">·</span>
            <span>{pelicula.duration}</span>
            <span className="detalle-sep">·</span>
            <span>{pelicula.year}</span>
          </div>

          <p className="detalle-synopsis">{pelicula.synopsis}</p>

          <div className="detalle-horarios">
            <h4>Horarios disponibles</h4>
            <div className="horarios-grid">
              {["12:00 PM", "3:00 PM", "6:00 PM", "8:30 PM"].map((h) => (
                <button key={h} className="horario-btn">
                  {h}
                </button>
              ))}
            </div>
          </div>

          <div className="detalle-actions">
            <Button 
              text="🎟️ Comprar Boletos" 
              variant="accent"
              onClick={() => setMostrarFormulario(true)}
            />
            <Button 
              text={isFav ? "❤️ En favoritos" : "🤍 Agregar a favoritos"}
              variant="secondary"
              onClick={() => toggleFavorito(peliculaId)}
            />
          </div>
        </div>
      </div>

      {/* Formulario de compra (onSubmit) */}
      {mostrarFormulario && (
        <CompraForm 
          pelicula={pelicula.title}
          onCerrar={() => setMostrarFormulario(false)}
        />
      )}
    </main>
  );
}

export default Detalle;
