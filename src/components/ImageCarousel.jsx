import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useHero } from "../hooks/useHero";

const ImageCarousel = () => {
  const { hero, isLoading, fetchHero } = useHero();
  const [heroImages, setHeroImages] = useState([]);

  // useEffect(() => {
  //   fetchHero();
  // }, [fetchHero]);

  useEffect(() => {
    if (hero && Array.isArray(hero)) {
      setHeroImages(hero);
    }
  }, [hero]);

  if (isLoading) {
    return <div>Loading carousel...</div>;
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
      interval={4000}
      transitionTime={700}
      stopOnHover={false}
      useKeyboardArrows
      aria-label="Image carousel of events"
    >
      {heroImages.map((img, index) => (
        <div key={index}>
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
          <p style={{textAlign: "left"}}>{img.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
