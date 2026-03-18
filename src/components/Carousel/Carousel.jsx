import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

function Carousel({
  items,
  renderItem,
  slidesPerView = 1,
  spaceBetween = 20,
  navigation = true,
  pagination = false,
  autoplay = false,
  breakpoints = {},
}) {
  const defaultBreakpoints = {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    ...breakpoints,
  };

  const modules = [Navigation];
  if (pagination) modules.push(Pagination);
  if (autoplay) modules.push(Autoplay);

  return (
    <Swiper
      modules={modules}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={defaultBreakpoints}
      className="carousel"
    >
      {items.map((item, index) => (
        <SwiperSlide key={item.id || index}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
