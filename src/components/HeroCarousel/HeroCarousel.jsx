import Carousel from "../Carousel/Carousel";
import "./HeroCarousel.css";

function HeroCarousel({ items }) {
  return (
    <div className="hero-carousel-container">
      <Carousel
        items={items}
        renderItem={(item) => (
          <div className="hero-slide">
            <div className="hero-slide-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button className="hero-cta-button">Unirme ahora</button>
            </div>
            <div className="hero-slide-image">
              <img src={item.image} alt={item.title} />
              {item.exclusive && (
                <span className="exclusive-badge">Exclusivo</span>
              )}
            </div>
          </div>
        )}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      />
    </div>
  );
}

export default HeroCarousel;
