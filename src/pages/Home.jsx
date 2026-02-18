import MovieCard from "../components/MovieCard/MovieCard";
import Button from "../components/Button/Button";
import "./Home.css";

const DESTACADAS = [
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

function Home({ cambiarVista }) {
  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb--blue" />
          <div className="hero-orb hero-orb--purple" />
        </div>
        <div className="hero-content">
          <span className="hero-eyebrow">
            La mejor experiencia cinematográfica
          </span>
          <h1 className="hero-title">
            Vive el cine
            <br />
            <span className="hero-title--accent">como nunca antes</span>
          </h1>
          <p className="hero-subtitle">
            Descubre los últimos estrenos, compra tus boletos y disfruta la
            magia del cine con Cinépolis.
          </p>
          <div className="hero-buttons">
            <Button
              text="Ver Cartelera"
              variant="accent"
              onClick={() => cambiarVista("cartelera")}
            />
            <Button
              text="Nuestros Alimentos"
              variant="outline"
              onClick={() => cambiarVista("alimentos")}
            />
          </div>
        </div>
      </section>

      {/* ── DESTACADAS ── */}
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
            onClick={() => cambiarVista("cartelera")}
          />
        </div>

        <div className="movies-grid">
          {DESTACADAS.map((p) => (
            <MovieCard
              key={p.id}
              {...p}
              onVerDetalle={() => cambiarVista("detalle")}
              onComprar={() => cambiarVista("cartelera")}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
