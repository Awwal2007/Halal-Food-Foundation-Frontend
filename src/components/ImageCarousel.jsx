import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
    <Carousel
      className="image-carousel"
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={1000}
      stopOnHover={false}
      useKeyboardArrows
      aria-label="Image carousel of events"
    >
      {heroImages.map((img, index) => (
        <div className="carousel-title-relative" key={index}>
          <img
            src={img.mainImage || img} // <-- support both object and string
            alt={img.title || `Slide ${index + 1}`}
            loading="lazy"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              touchAction: "auto",
            }}
          />
          <p className="carousel-title" style={{textAlign: "left"}}>{img.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
