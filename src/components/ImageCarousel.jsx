import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useHero } from "../hooks/useHero";
import './css/ImageCarousel.css'

const ImageCarousel = () => {
  const { hero, isLoading, } = useHero();
  const [heroImages, setHeroImages] = useState([]);


  useEffect(() => {
    if (hero && Array.isArray(hero)) {
      setHeroImages(hero);
    }
  }, [hero]);

  if (isLoading) {
    return (
      <div className="skeleton-carousel">
        {[...Array(1)].map((_, index) => (
          <div key={index} className="skeleton-slide">
            <div className="skeleton-img" />
            <div className="skeleton-text">
              <div className="skeleton-line title" />
              <div className="skeleton-line" />
              <div className="skeleton-line short" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!heroImages.length) {
    return <div>No hero images available.</div>;
  }

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="image-carousel"
    >
      {heroImages.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img.mainImage}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "400px", objectFit: "cover",
              touchAction: "auto", }}
          />
          <p className="carousel-title" style={{textAlign: "left"}}>{img.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
