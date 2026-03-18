import { useNavigate } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import MovieCard from "../MovieCard/MovieCard";

function MovieCarousel({ movies }) {
  const navigate = useNavigate();

  return (
    <Carousel
      items={movies}
      renderItem={(movie) => (
        <MovieCard
          {...movie}
          onVerDetalle={() => navigate(`/pelicula/${movie.id}`)}
          onComprar={() => navigate(`/pelicula/${movie.id}`)}
        />
      )}
      slidesPerView={1}
      spaceBetween={20}
      navigation
    />
  );
}

export default MovieCarousel;
