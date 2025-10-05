import React from 'react';
import { FaClock, FaUser } from 'react-icons/fa';
import './css/MissedArticle.css';
import image1 from '../assets/Thisisanamazingpicture1726381673-2.jpg'
import image2 from '../assets/event6.jpg'
import image3 from '../assets/event5.jpg'
import image4 from '../assets/English1.webp'
import { Link } from 'react-router-dom';

const missedArticles = [
  {
    title: 'HFA WEBINAR-Industry Updates November 2020',
    image: image1,
    link: "https://halalfoodauthority.com/hfa-webinar-2020/"
  },
  {
    title: 'HFA Halal Industry Conference (HHIC) June 2019',
    image: image3,
    link: "https://halalfoodauthority.com/hhic2019/"
  },
  {
    title: 'HFA Halal Industry Conference (HHIC) May 2018',
    image: image2,
    link: "https://halalfoodauthority.com/hhic2018/"
  },
  {
    title: 'HFA Halal Industry Conference (HHIC) May 2017',
    image: image4,
    link: "https://halalfoodauthority.com/hhic2017/"
  },
];

const MissedArticles = () => {
  return (
    <div id='events' className="missed-container">
      <div className="missed-header">
        <h2>Events</h2>
      </div>

      <div className="missed-grid">
        {missedArticles.map((article, idx) => (
          <a href={article.link} target='_blank' rel="noopener noreferrer" key={idx} className="missed-card">
            <div
              className="missed-image"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className="image-overlay"></div>
              {/* <div className="missed-categories">
                {article.categories.map((cat, i) => (
                  <span key={i} className="missed-category">
                    {cat}
                  </span>
                ))}
              </div> */}
            </div>
            <div className="missed-content">
              <h3>{article.title}</h3>
              <div className="missed-meta">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="read-more-btn">Read More..</button>
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MissedArticles;
