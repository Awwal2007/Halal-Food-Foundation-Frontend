import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/drMartin1.webp";
import image2 from "../assets/drSiddque1.webp";
import image3 from "../assets/mrChoudary.webp";
import image4 from "../assets/mrLatif.webp";

import './css/ImageCarousel2.css'

const boardOfTrustees = [
  {
    name: "Dr Abdul Matin Khan (Chair)",
    image: image1,
    description:
      "Having acquired the highest professional qualifications in Finance, Accounting and Administration in the UK as Chartered Management Accountant and Chartered Company Secretary and Administrator, Dr Khan has worked at senior management positions in Asia, Africa and Europe. Dr Khan has been involved with the HFA since its inception as one of the founding members of the BOT.",
  },
  {
    name: "Dr Ghayasuddin Siddiqui",
    image: image2,
    description:
      "Dr Ghayasuddin Siddiqui, a PhD in Chemistry is a well-known activist, campaigner, writer and expert on Muslim political thought. Dr Siddiqui has promoted dialogue and engagement across all barriers: religious, social, cultural and political; and was the founding chairman of the Halal Food Authority.",
  },
  {
    name: "Mr Ehsan Choudhry",
    image: image3,
    description:
      "Ehsan Choudhry is a graduate in Urdu, a General Secretary of Pakistan Welfare Association Hounslow, a research scholar and a world famous poet and author of seven books. Topping all of that with a heart of gold, Ehsan is also a pioneer volunteer of HFA since 1995, the owner of an established business and a responsible journalist in the UK.",
  },
  {
    name: "Mr Ahmed Latif",
    image: image4,
    description:
      "Mr Ahmed Latif is presently CEO of A & M International Limited, which is a metal trading company and part of AMIDT Group of Dubai. Mr Latif Graduated in Commerce in 1963 from Karachi University and secured First Class First Position and was also awarded Gold Medal for his academic achievements. Mr Latif is also a member of Lions Club and spends great deal of his time in charitable work.",
  },
];

const ImageCarousel2 = () => {
  const [heroImages, setHeroImages] = useState([]);

  useEffect(() => {
    setHeroImages(boardOfTrustees);
  }, []);

  if (!heroImages.length) {
    return <div>No board of trustees available.</div>;
  }

  return (
    <Carousel
      className="image-carousel"
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
      transitionTime={800}
      stopOnHover={true}
      useKeyboardArrows
      swipeable
      emulateTouch
      aria-label="Board of Trustees carousel"
    >
      {heroImages.map((member, index) => (
        <div key={index} className="carousel-slide">
          <img
            src={member.image}
            alt={member.name}
            className="trustee-img"
          />
          <div className="caption">
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel2;
