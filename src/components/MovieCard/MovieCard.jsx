import Button from "../Button/Button";
import "./MovieCard.css";

function MovieCard({
  title,
  image,
  genre,
  duration,
  rating,
  onVerDetalle,
  onComprar,
}) {
  return (
    <div className="movie-card">
      <div className="movie-image" onClick={onVerDetalle}>
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div className="movie-image-placeholder">🎬</div>
        )}
        {rating && <div className="movie-rating">⭐ {rating}</div>}
        <div className="movie-overlay">
          <span className="movie-overlay-text">Ver detalles</span>
        </div>
      </div>

      <div className="movie-content">
        <h3 className="movie-title">{title}</h3>

        <div className="movie-details">
          {genre && (
            <span className="movie-badge movie-badge--genre">{genre}</span>
          )}
          {duration && <span className="movie-meta"> {duration}</span>}
        </div>

        <div className="movie-actions">
          <Button text="Detalles" variant="secondary" onClick={onVerDetalle} />
          <Button
            text="Comprar"
            variant="accent"
            onClick={onComprar || onVerDetalle}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
