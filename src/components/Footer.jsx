// import React from 'react'
// import "./footer.css"

// const Footer = () => {
//   return (
//     <>
//       <div className='footer'>
//         <p>@ 2020 - 2022, All rights reserved.</p>
//       </div>
//     </>
//   )
// }

// export default Footer







import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setIsSubscribed(true);
      setEmail('');
      // Optionally send email to backend or external service
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Empowering learners worldwide with quality education and innovative learning solutions.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Education Street, Learning City, 12345</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+1 (123) 456-7890</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@edulearn.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {isSubscribed && (
            <div className="subscription-message">
              Thank you for subscribing!
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EduLearn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
