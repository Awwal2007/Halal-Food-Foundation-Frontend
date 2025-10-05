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
  },
  {
    title: 'HFA Halal Industry Conference (HHIC) June 2019',
    image: image3,
  },
  {
    title: 'HFA Halal Industry Conference (HHIC) May 2018',
    image: image2,
  },
  {
    title: 'HFA Halal Industry Conference (HHIC) May 2017',
    image: image4,
  },
];

const MissedArticles = () => {
  return (
    <div className="missed-container">
      <div className="missed-header">
        <h2>Events</h2>
      </div>

      <div className="missed-grid">
        {missedArticles.map((article, idx) => (
          <Link key={idx} className="missed-card">
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
                <Link>
                  <button className='read-more-btn'>Read More..</button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MissedArticles;
