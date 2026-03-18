import { useNavigate } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import MovieCard from "../components/MovieCard/MovieCard";
import Button from "../components/Button/Button";
import PromocionesWidget from "../components/PromocionesWidget/PromocionesWidget";
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import { PELICULAS_DESTACADAS, PELICULAS } from "../data/Peliculas"; // Importa las destacadas
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleVerDetalle = (peliculaId) => {
    navigate(`/pelicula/${peliculaId}`);
  };

  const handleComprar = (peliculaId) => {
    navigate(`/pelicula/${peliculaId}`);
  };

  const heroItems = PELICULAS_DESTACADAS.map((p) => ({
    id: p.id,
    title: p.title,
    description:
      "Una aventura que mezcla tecnología, naturaleza y un mensaje ecológico.",
    image: p.image,
  }));

  return (
    <main className="home">
      <HeroCarousel items={heroItems} />

      <section className="home-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Películas Destacadas</h2>
            <p className="section-subtitle">
              Los mejores estrenos en cartelera esta semana
            </p>
          </div>
          <Button
            text="Ver todo"
            variant="secondary"
            onClick={() => navigate("/cartelera")}
          />
        </div>

        <div className="movies-grid">
          {PELICULAS_DESTACADAS.map((p) => (
            <MovieCard
              key={p.id}
              {...p}
              onVerDetalle={() => handleVerDetalle(p.id)}
              onComprar={() => handleComprar(p.id)}
            />
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px",
        }}
      >
        <h2>ESTRENOS</h2>
        <MovieCarousel movies={PELICULAS} />
      </section>

      {/* ── PROMOCIONES DINÁMICAS ── */}
      <PromocionesWidget />
    </main>
  );
}

export default Home;
