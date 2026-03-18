// src/pages/Detalle.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import CompraForm from "../components/CompraForm/CompraForm";
import { useCart } from "../context/CartContext";
import { PELICULAS } from "../data/Peliculas"; // Importamos las películas
import "./Detalle.css";

// Información adicional que no está en el archivo original
const INFO_ADICIONAL = {
  1: {
    year: "2012",
    synopsis:
      "Charlie es un adolescente introvertido que lucha por encajar mientras inicia la preparatoria. A través de nuevas amistades, el amor y la música, comienza a sanar heridas del pasado y a descubrir quién es realmente.",
    director: "Stephen Chbosky",
    elenco: "Logan Lerman, Emma Watson, Ezra Miller",
  },
  2: {
    year: "2006",
    synopsis:
      "Andy consigue trabajo en una prestigiosa revista de moda bajo la dirección de la temida Miranda Priestly. Lo que parecía una oportunidad soñada se convierte en una prueba de sacrificios personales y profesionales.",
    director: "David Frankel",
    elenco: "Meryl Streep, Anne Hathaway, Emily Blunt",
  },
  3: {
    year: "2005",
    synopsis:
      "Durante el día de su boda, Rachel se enamora inesperadamente de Luce. Atrapada entre lo que se espera de ella y lo que siente realmente, deberá decidir seguir su corazón.",
    director: "Ol Parker",
    elenco: "Piper Perabo, Lena Headey, Matthew Goode",
  },
  4: {
    year: "2018",
    synopsis:
      "En un futuro distópico, la humanidad escapa de la realidad a través del OASIS, un mundo virtual. Wade Watts se une a una competencia épica que podría cambiar su vida y el destino del mundo digital.",
    director: "Steven Spielberg",
    elenco: "Tye Sheridan, Olivia Cooke, Ben Mendelsohn",
  },
  5: {
    year: "2023",
    synopsis:
      "El físico J. Robert Oppenheimer trabaja con un equipo de científicos durante el Proyecto Manhattan, que condujo al desarrollo de la bomba atómica. La película explora su vida, logros y las consecuencias morales de su creación.",
    director: "Christopher Nolan",
    elenco: "Cillian Murphy, Emily Blunt, Robert Downey Jr.",
  },
  6: {
    year: "2023",
    synopsis:
      "Barbie vive en un mundo perfecto hasta que comienza a experimentar cambios que la llevan a aventurarse en el mundo real. Ken la acompaña en este viaje de autodescubrimiento.",
    director: "Greta Gerwig",
    elenco: "Margot Robbie, Ryan Gosling, America Ferrera",
  },
  7: {
    year: "2024",
    synopsis:
      "Paul Atreides se une a los Fremen en su lucha contra la Casa Harkonnen. Mientras busca venganza por la caída de su familia, debe decidir entre su amor por Chani y el destino del universo.",
    director: "Denis Villeneuve",
    elenco: "Timothée Chalamet, Zendaya, Austin Butler",
  },
  8: {
    year: "2024",
    synopsis:
      "Po debe entrenar a un nuevo Guerrero Dragón mientras enfrenta a una nueva villana, la Camaleona, que puede imitar a los villanos del pasado.",
    director: "Mike Mitchell",
    elenco: "Jack Black, Awkwafina, Viola Davis",
  },
  9: {
    year: "2024",
    synopsis:
      "Godzilla y Kong unen fuerzas para enfrentar una amenaza colosal escondida en las profundidades de la Tierra que pone en peligro la supervivencia de los humanos y los Titanes.",
    director: "Adam Wingard",
    elenco: "Rebecca Hall, Brian Tyree Henry, Dan Stevens",
  },
  10: {
    year: "2024",
    synopsis:
      "Riley entra en la adolescencia y nuevas emociones llegan al cuartel general. Alegría, Tristeza, Furia, Temor y Desagrado deben aprender a convivir con Ansiedad, Envidia, Vergüenza y Ennui.",
    director: "Kelsey Mann",
    elenco: "Amy Poehler, Maya Hawke, Kensington Tallman",
  },
};

function Detalle() {
  const { id } = useParams();
  const peliculaId = Number(id);
  const navigate = useNavigate();

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const { toggleFavorito, esFavorito } = useCart();

  // Buscar la película en PELICULAS por su id
  const peliculaBase = PELICULAS.find((p) => p.id === peliculaId);
  const infoAdicional = INFO_ADICIONAL[peliculaId];

  // Combinar la información base con la adicional
  const pelicula = peliculaBase
    ? {
        ...peliculaBase,
        ...infoAdicional,
        // Asegurar que la imagen de la base sea la que se usa
        image: peliculaBase.image,
      }
    : null;

  const isFav = esFavorito(peliculaId);

  if (!pelicula) {
    return (
      <main className="detalle">
        <p>Película no encontrada.</p>
        <Button
          text="Volver a cartelera"
          variant="secondary"
          onClick={() => navigate("/cartelera")}
        />
      </main>
    );
  }

  return (
    <main className="detalle">
      <button className="detalle-back" onClick={() => navigate("/cartelera")}>
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

          {pelicula.director && pelicula.elenco && (
            <div className="detalle-crew">
              <p>
                <strong>Director:</strong> {pelicula.director}
              </p>
              <p>
                <strong>Elenco:</strong> {pelicula.elenco}
              </p>
            </div>
          )}

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

      {/* Formulario de compra */}
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
