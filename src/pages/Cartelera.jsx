// src/pages/Cartelera/Cartelera.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import { PELICULAS_CARTELERA, FILTROS } from "../data/Peliculas";
import "./Cartelera.css";

function Cartelera() {
  const [filtro, setFiltro] = useState("Todos");
  const navigate = useNavigate();

  const peliculasFiltradas =
    filtro === "Todos"
      ? PELICULAS_CARTELERA
      : PELICULAS_CARTELERA.filter((p) => p.genre === filtro);

  const handleVerDetalle = (peliculaId) => {
    navigate(`/pelicula/${peliculaId}`);
  };

  const handleComprar = (peliculaId) => {
    navigate(`/pelicula/${peliculaId}`);
  };

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
            onVerDetalle={() => handleVerDetalle(pelicula.id)}
            onComprar={() => handleComprar(pelicula.id)}
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
