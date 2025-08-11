import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="brand-section">
          <h2 className="brand-name">Chetna Dresses</h2>
          <p className="tagline">From Everyday to Extra — We’ve Got You</p>
        </div>

        <nav className="footer-nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="social-media">
          <a href="https://www.instagram.com/chetna_fashion_hub_patan" aria-label="Instagram" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://wa.link/jr9ihg" aria-label="WhatsApp" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>

        <div className="copyright">
          <p>© 2025 Chetna Dresses. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;