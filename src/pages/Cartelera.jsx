import { useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import "./Cartelera.css";

const PELICULAS = [
  {
    id: 1,
    title: "La ventajas de ser invisible",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/0bf85f45dd8a43abe54307d0c9b0668c075c044b958407b4a95683949adc3860.jpg",
    genre: "Drama",
    duration: "2h 45min",
    rating: "8.2",
  },
  {
    id: 2,
    title: "El diablo viste a la moda",
    image:
      "https://pics.filmaffinity.com/the_devil_wears_prada-636873258-large.jpg",
    genre: "Drama",
    duration: "1h 40min",
    rating: "7.5",
  },
  {
    id: 3,
    title: "Imagine Me & You",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTViMGNiNDItMDFiMC00YzYyLThjYTgtNDY3Mzg0ZDE4ZmU1XkEyXkFqcGc@._V1_.jpg",
    genre: "Romántica",
    duration: "1h 50min",
    rating: "7.8",
  },
  {
    id: 4,
    title: "Ready Player One",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzVkMTgzODQtMWIwZC00NzE4LTgzZjYtMzAwM2I5OGZhNjE4XkEyXkFqcGc@._V1_.jpg",
    genre: "Acción",
    duration: "2h 28min",
    rating: "7.4",
  },
];

const FILTROS = ["Todos", "Drama", "Romántica", "Acción"];

function Cartelera({ cambiarVista }) {
  const [filtro, setFiltro] = useState("Todos");

  const peliculasFiltradas =
    filtro === "Todos"
      ? PELICULAS
      : PELICULAS.filter((p) => p.genre === filtro);

  return (
    <main className="cartelera">
      <div className="cartelera-header">
        <h2 className="page-title"> Cartelera</h2>
        <p className="page-subtitle">
          Elige tu película favorita y vívela en pantalla grande
        </p>

        <div className="filtros">
          {FILTROS.map((f) => (
            <button
              key={f}
              className={`filtro-btn ${
                filtro === f ? "filtro-btn--active" : ""
              }`}
              onClick={() => setFiltro(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="cartelera-grid">
        {peliculasFiltradas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            {...pelicula}
            onVerDetalle={() => cambiarVista("detalle")}
            onComprar={() => cambiarVista("detalle")}
          />
        ))}
      </div>

      {peliculasFiltradas.length === 0 && (
        <div className="empty-state">
          <span>🎭</span>
          <p>No hay películas en esta categoría por el momento.</p>
        </div>
      )}
    </main>
  );
}

export default Cartelera;
