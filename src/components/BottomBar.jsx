import React from 'react';
import './css/BottomBar.css';
import { Link } from 'react-router-dom';

// const images = [
//   {
//     src: '/images/img1.jpg',
//     caption: 'Title goes here',
//   },
//   {
//     src: '/images/img2.jpg',
//     caption: 'Title goes here',
//   },
//   {
//     src: '/images/img3.jpg',
//     caption: 'Another caption',
//   },
// ];

const ButtonBar = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section company-info">
          <img src="/logo.png" alt="Absolute Grace Logo" className="footer-logo" />
          <p>
            Accredited Halal Certification Ensuring Worldwide Trust and Compliance
          </p>
          <ul className="contact-info">
            <li>📞 +44 (0) 208 4467 127</li>
            <li>📧 info@halalfoodfoundation.co.uk</li>
            <li>📍 3rd Floor, Balfour House,741 High Road, London N12 0BP, UK</li>
          </ul>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-section">
          <h3 className="section-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#">List Your Property</a></li>
            <li><a href="#">Commercial</a></li>
            <li><a href="#">Property Management</a></li>
          </ul>
        </div>

        {/* Middle Section - Support */}
        <div className="footer-section">
          <h3 className="section-title">Support</h3>
          <ul className="footer-links">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div className="footer-section newsletter">
          <h3 className="section-title">Stay Updated</h3>
          <p>Get the latest property deals delivered to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Halal Food Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ButtonBar;