// src/pages/Home/Home.jsx
import MovieCard from "../components/MovieCard/MovieCard";
import Button from "../components/Button/Button";
import PromocionesWidget from "../components/PromocionesWidget/PromocionesWidget";
import { PELICULAS_DESTACADAS } from "../data/Peliculas"; // Importa las destacadas
import "./Home.css";

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
          {PELICULAS_DESTACADAS.map((p) => (
            <MovieCard
              key={p.id}
              {...p}
              onVerDetalle={() => cambiarVista("detalle")}
              onComprar={() => cambiarVista("cartelera")}
            />
          ))}
        </div>
      </section>

      {/* ── PROMOCIONES DINÁMICAS ── */}
      <PromocionesWidget />
    </main>
  );
}

export default Home;
