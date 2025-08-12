import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Chetna Dresses";
  const typingSpeed = 150; // Adjust typing speed (ms per character)
  const pauseDuration = 3000; // Adjust pause before restart (ms)

  useEffect(() => {
    let i = 0;
    let timeout;

    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
        timeout = setTimeout(typeWriter, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setDisplayText('');
          i = 0;
          typeWriter(); // Restart animation
        }, pauseDuration);
      }
    };

    typeWriter();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="brand-section">
          <h2 className="brand-name">{displayText}</h2>
          <p className="tagline">From Everyday to Extra — We've Got You</p>
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