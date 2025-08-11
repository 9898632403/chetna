import React, { useState, useEffect, useRef } from 'react';
import { 
  FaShieldAlt, 
  FaUsers, 
  FaCheckCircle, 
  FaTruck, 
  FaLeaf, 
  FaBoxOpen, 
  FaGlobe, 
  FaAward, 
  FaClock, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaHandHoldingHeart,
  FaStar,
  FaRegStar
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "../styles/About.css";


const TypewriterText = ({ words, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== currentWord) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText !== '') {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

const FadingSubtitle = ({ subtitles, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <p key={currentIndex} className={`${className} slide-in`}>
      {subtitles[currentIndex]}
    </p>
  );
};

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "/kurti1.jpg", caption: "Drapes That Define Grace" },
    { image: "/kurti_h.png", caption: "Styles Made to Belong" },
    { image: "/cordset.jpg", caption: "Festive Looks, Forever Memories" },
    { image: "/kurti2.jpg", caption: "Tradition, The Chetna Way" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="testimonial-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="testimonial-image"
          />
          <div className="testimonial-overlay">
            <div className="testimonial-caption">
              {slide.caption}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 100;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    { number: "10000+", label: "Happy Customers" },
    { number: "200+", label: "Signature Ready-to-Wear Styles" },
    { number: "10+", label: "Premium Fabric Types" },
    { number: "500+", label: "WoolShell Loyal Customers" }
  ];

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <h2 className="stats-title fade-in-up">Why Choose Chetna</h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card fade-in-up">
              <div className="stat-number">
                {isVisible ? <AnimatedCounter target={stat.number} /> : "0+"}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function About() {
  const navigate = useNavigate();
  const heroWords = ["We Present the Best.", "We Select.", "We Deliver Elegance."];
  const subtitles = [
    "Since 2002 — Trusted in Ready-to-Wear Fashion",
    "Thoughtfully Chosen Styles for Every Occasion",
    "Bringing Premium Collections, Handpicked for You"
  ];

  const promiseCards = [
    {
      icon: <FaHandHoldingHeart className="icon" size={32} />,
      title: "Curated with Care",
      description: "Thoughtfully designed collections that blend style, comfort, and confidence."
    },
    {
      icon: <FaUsers className="icon" size={32} />,
      title: "Empowering Women",
      description: "Ready-to-wear fashion that celebrates every woman’s individuality and strength."
    },
    {
      icon: <FaCheckCircle className="icon" size={32} />,
      title: "Quality You Can Feel",
      description: "Premium fabrics, flattering cuts, and a finish that speaks for itself."
    }
  ];

  const services = [
    { icon: <FaStar className="icon" size={32} />, title: "Ready-to-Wear", description: "Tailored to your measurements" },
    { icon: <FaLeaf className="icon" size={32} />, title: "Trusted Since 2008", description: "Over a decade of customer trust and satisfaction" },
    { icon: <FaBoxOpen className="icon" size={32} />, title: "Affordable Range", description: "Comfort meets quality at the right price" },
    { icon: <FaRegStar className="icon" size={32} />, title: "Comfort-First", description: "Soft fabrics & easy fits for daily wear" },
    { icon: <FaAward className="icon" size={32} />, title: "Repeat Customers", description: "We grow through your love & referrals" },
    { icon: <FaClock className="icon" size={32} />, title: "Wholesale Shipping", description: "Delivery available exclusively for bulk orders" }
  ];

  return (
    <div className="min-h-screen bg-soft-pink">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-title">
            <TypewriterText words={heroWords} />
          </div>
          
          <div className="hero-subtitle">
            <FadingSubtitle subtitles={subtitles} />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-images collage-grid fade-in-left">
              <div className="collage-item item-1">
                <img src="/collection2.jpg" alt="Traditional Saree" className="story-image" />
              </div>
              <div className="collage-item item-2">
                <img src="/kurti1.jpg" alt="Designer Kurti" className="story-image" />
              </div>
              <div className="collage-item item-3">
                <img src="/pair3.jpg" alt="Bridal Lehenga" className="story-image" />
              </div>
              <div className="collage-item item-4">
                <img src="/kurtih2.png" alt="Artisan at work" className="story-image" />
              </div>
              <div className="collage-item item-5">
                <img src="/kurti1.jpg" alt="Artisan at work" className="story-image" />
              </div>
              <div className="collage-item item-6">
                <img src="/kurti2.jpg" alt="Artisan at work" className="story-image" />
              </div>
            </div>
            
            <div className="story-content fade-in-right">
              <h2>Our Story</h2>
              <p>
                Founded in 2002 in the culturally rich town of <strong>Patan</strong>, <strong>Chetna Dresses</strong> began as a small local shop with a heartfelt vision by <strong>Rohit Patel</strong> — to offer high-quality, ready-to-wear ethnic clothing that every woman could feel confident and comfortable in. With just a handful of styles, deep-rooted values, and a lot of heart, we started serving our community one thoughtfully crafted outfit at a time.
              </p>
              <p>
                Over the years, our collection has grown, our styles have evolved, and our customers have become family. Today, Chetna stands as a trusted name in ethnic fashion — offering everything from elegant daily wear and festive sets to trending silhouettes and versatile dress materials.
              </p>
              <p>
                Chetna isn’t just a brand — it’s a reflection of every woman who shops with us. Her grace, her choices, her story. And we’re proud to be part of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="promise-section">
        <div className="container">
          <h2 className="promise-title fade-in-up">Our Promise</h2>
          
          <div className="promise-cards">
            {promiseCards.map((card, index) => (
              <div key={index} className="promise-card fade-in-up">
                <div className="promise-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title fade-in-up">Our Collections</h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in-up">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Now using the new StatsSection component */}
      <StatsSection />

      {/* Testimonial Slider */}
      <section className="testimonial-section">
        <div className="container">
          <h2 className="testimonial-title fade-in-up">Our Craft</h2>
          
          <div className="fade-in-up">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Final Content Block */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content">
            <blockquote className="quote-text fade-in-up">
              "Rooted in the spirit of Patan and shaped by Rohit Patel’s vision, Chetna Dresses blends tradition with modern grace — empowering every woman to wear her culture with confidence and pride."
            </blockquote>
            
            <div className="quote-author fade-in-up">
              — Rohit Patel, Founder
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in-left">
              <h2>Visit Us</h2>
              <p>
                Want to explore our full ready-to-wear collection in person? Drop by our shop to browse a wide range of kurtis, tops, corset, and fabric pairs — all ready to pick and wear.  
  Wholesale buyers are always welcome.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon"><FaEnvelope className="icon" size={24} /></div>
                  <span><a href="mailto:chetnafashionhub@gmail.com">chetnafashionhub@gmail.com</a></span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><FaPhone className="icon" size={24} /></div>
                  <span><a href="tel:+919638681266">+91 9638681266</a></span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><FaMapMarkerAlt className="icon" size={24} /></div>
                  <span>patan</span>
                </div>
              </div>
            </div>
            
            <div className="contact-cta fade-in-right">
              <button className="cta-button" onClick={() => navigate('/contact')}>
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}