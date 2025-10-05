import React from 'react';
import './css/BottomBar.css';
import { Link } from 'react-router-dom';
import location from '../assets/icons8-location-50.png'
import phone from '../assets/icons8-phone-50.png'
import email from '../assets/icons8-email-50.png'

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
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-section">
          <h3 className="section-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#about-us">About Us</a></li>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Middle Section - Support */}
        <div className="footer-section">
          <h3 className="section-title">Important Links</h3>
          <ul className="footer-links">
            {/* <li><a href="#">Apply for Certification</a></li> */}
            <li><a href="#events">Our Events</a></li>
            <li><a href="#">Free Policy</a></li>
            <li><a href="#">Hff Quality Policy</a></li>
            <li><a href="#">Terms and Condition</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div className="footer-section newsletter">
          <h3 className="section-title">Contact Us</h3>
           <ul className="contact-info">
              <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                <img style={{width: "25px"}} src={phone} alt="" />
                <li> +44 (0) 208 4467 127</li>
              </div>
              <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                <img style={{width: "25px"}} src={email} alt="" />
                <li> info@halalfoodfoundation.co.uk</li>
              </div>
              <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                <img style={{width: "25px"}} src={location} alt="" />
                <li>3rd Floor, Balfour House,741 High Road, London N12 0BP, UK</li>
              </div>
          </ul>
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