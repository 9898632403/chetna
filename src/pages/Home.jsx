import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf } from 'react-icons/fa';

import {
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  Heart,
  ShoppingBag,
  Users,
  MapPin,
  Calendar,
  Package,
  Sparkles,
  BookOpen,
  Box,
  Gem
} from 'lucide-react';

import '../styles/Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [stats, setStats] = useState({
    clients: 0,
    cities: 0,
    years: 0,
    pieces: 0
  });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  // Gujarati-inspired Chetna component
  const GujaratiChetna = ({ className = '' }) => (
    <span className={`gujarati-chetna ${className}`}>ચેતના</span>
  );

  // Hero slides data
  const heroSlides = [
    {
      image: '/kurti1.jpg',
      heading: 'Style. Ready When You Are.',
      subtitle: <><GujaratiChetna /> Dresses – effortless, elevated fashion that fits right in.</>
      
    },
    {
      image: '/kurti2.jpg',
      heading: 'Everyday Looks. Premium Vibes.',
      subtitle: "From casual fits to statement pieces — we've got your wardrobe sorted."
    },
    {
      image: '/pair3.jpg',
      heading: 'Chetna – Wear It Like You Own It',
      subtitle: 'Ready-to-wear outfits designed to turn heads, every single time.'
    }
  ];

  // Products data
  const products = [
    {
      image: '/pair3.jpg',
      name: 'Heavy Pair Set',
      caption: 'Bold. Beautiful. Made to turn heads'
    },
    {
      image: '/kurti2.jpg',
      name: 'Regular Pair',
      caption: 'Effortless everyday wear — made to move, styled to shine.'
    },
    {
      image: '/cordset.jpg',
      name: 'Cordset',
      caption: 'Snatched fit. Effortless glam.'
    },
    {
      image: '/sort2.jpg',
      name: 'Short Kurti',
      caption: 'Everyday ease. Elevated style.'
    },
    {
      image: '/collection1.jpg',
      name: 'Dress Fabric Set',
      caption: 'Premium fabrics, your design — tailor it your way.'
    }
  ];

  // Information cards data
  const infoCards = [
    {
      id: 1,
      title: 'Premium Fabrics & Ready Styles',
      icon: <FaLeaf size={32} />,
      shortDesc: 'Comfortable, stylish pieces in rich, everyday fabrics',
      image: '/card1.jpg',
      fullDesc: 'Chetna offers a thoughtful selection of readymade ethnic wear, crafted using quality fabrics like cotton, rayon, georgette, and more. Our collection focuses on both comfort and appeal, ideal for regular wear, festive occasions, or casual styling.'
    },
    {
      id: 2,
      title: 'Style Guides',
      icon: <BookOpen size={32} />,
      shortDesc: 'Friendly assistance for finding your perfect outfit',
      image: '/shop2.jpg',
      fullDesc: "Our experienced team at Chetna helps guide you with personalized suggestions based on your style, occasion, and comfort. Whether you're choosing a festive look or daily wear, we ensure you leave with something that truly fits you — both in size and personality."
    },
    {
      id: 3,
      title: 'Collections',
      icon: <Sparkles size={32} />,
      shortDesc: 'Latest fashion sets, mix & match, and fabrics for every season',
      image: '/card3.jpg',
      fullDesc: 'Explore our thoughtfully curated collections that celebrate the diversity of Indian ethnic fashion, offering a fresh variety of heavy sets, smart pairs, short tops, trendy silhouettes like corsets, regular wear, and pure dress fabric. We continuously update our stock with in-demand styles suited for all age groups and preferences.'
    },
    {
      id: 4,
      title: 'Reliable Wholesale Distribution',
      icon: <Box size={32} />,
      shortDesc: 'Doorstep delivery available for bulk buyers',
      image: '/card4.jpg',
      fullDesc: 'We provide safe and timely shipping for our wholesale clients across regions. Whether you run a retail shop or resell online, our team ensures secure packaging and doorstep delivery directly from our store to yours.'
    },
    {
      id: 5,
      title: 'Trusted Storefront',
      icon: <Gem size={32} />,
      shortDesc: 'Visit our shop for a quality shopping experience',
      image: '/chetna_shop.jpg',
      fullDesc: "Chetna is a known and trusted name for women's ethnic wear, offering ready pieces and fabric options for every preference. Our physical store is designed for comfortable browsing, personalized support, and a reliable shopping experience you can count on."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "Chetna has redefined my wardrobe with their exquisite collection. The quality and craftsmanship are simply unmatched. Every piece tells a story of tradition and elegance.",
      author: "Riya Shah",
      location: "Mumbai"
    },
    {
      text: "As a boutique owner, I've been sourcing from Chetna for a while now. Their dress materials are consistently high-quality, well-packed, and always delivered on time. My customers love them — and so do I!",
      author: "Priya Mehta",
      location: "Delhi"
    },
    {
      text: "I buy in wholesale from Chetna and sell from home through WhatsApp and local groups. The quality is so good that most pieces get booked as soon as I share photos. It's helped me grow my small business without any stress.",
      author: "Kavya Patel",
      location: "Bangalore"
    }
  ];

  // Moodboard images
  const moodboardImages = [
    '/bandhani_dress.jpg',
    '/collection1.jpg',
    '/collection2.jpg',
    '/dress.jpg',
    '/collection3.jpg',
    '/shop2.jpg'  
   
    
  ];

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Auto-advance product slider with smooth transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProductSlide((prev) => (prev + 1) % products.length);
    }, 5000); // Increased time for smoother transition
    return () => clearInterval(timer);
  }, [products.length]);

  // Auto-advance testimonials with smooth transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000); // Increased time for smoother transition
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Animate stats when in view
  useEffect(() => {
    if (isStatsInView) {
      const timers = [];
      
      // Animate clients counter
      let clientCount = 0;
      const clientTimer = setInterval(() => {
        clientCount += 10000;
        setStats(prev => ({ ...prev, clients: clientCount }));
        if (clientCount >= 10000) {
          clearInterval(clientTimer);
          setStats(prev => ({ ...prev, clients: 10000 }));
        }
      }, 20);
      timers.push(clientTimer);

      // Animate cities counter
      let cityCount = 0;
      const cityTimer = setInterval(() => {
        cityCount += 500;
        setStats(prev => ({ ...prev, cities: cityCount }));
        if (cityCount >= 500) {
          clearInterval(cityTimer);
          setStats(prev => ({ ...prev, cities: 500 }));
        }
      }, 40);
      timers.push(cityTimer);

      // Animate years counter
      let yearCount = 0;
      const yearTimer = setInterval(() => {
        yearCount += 23;
        setStats(prev => ({ ...prev, years: yearCount }));
        if (yearCount >= 23) {
          clearInterval(yearTimer);
          setStats(prev => ({ ...prev, years: 23 }));
        }
      }, 80);
      timers.push(yearTimer);

      // Animate pieces counter
      let pieceCount = 0;
      const pieceTimer = setInterval(() => {
        pieceCount += 5000;
        setStats(prev => ({ ...prev, pieces: pieceCount }));
        if (pieceCount >= 5000) {
          clearInterval(pieceTimer);
          setStats(prev => ({ ...prev, pieces: 5000 }));
        }
      }, 15);
      timers.push(pieceTimer);

      return () => timers.forEach(timer => clearInterval(timer));
    }
  }, [isStatsInView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="home-container">
      {/* Hero Slider Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
              animate={{ 
                clipPath: index === currentSlide 
                  ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
              }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <motion.h1 
                  className="hero-heading"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 50 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {slide.heading}
                </motion.h1>
                <motion.p 
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
          
          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="split-section">
        <div className="container">
          <div className="split-content">
            <motion.div 
              className="split-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Welcome to <GujaratiChetna /></h2>
              <p>
                At <GujaratiChetna />, we believe every woman deserves to express her style with confidence and comfort. Our ready-to-wear collection blends modern trends with the timeless charm of Indian design, made for real, everyday moments.
              </p>
              <p>
                 We specialize in premium ready-to-wear ethnic styles, from daily essentials and soft, breathable pairs to festive-ready sets, cordset styles, short tops, and handpicked dress materials. Each piece in our collection is chosen not just for its look, but for how it feels, comfortable, wearable, and true to modern Indian women.
              </p>
              <p>
                Whether you're shopping for yourself or sourcing for your boutique, we offer a reliable and welcoming experience. With ready stock, trusted quality, and dedicated support, <GujaratiChetna /> has earned the confidence of thousands of women and wholesale buyers across regions.
              </p>
            </motion.div>
            
            <motion.div 
              className="split-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="shop-image-container">
                <img 
                  src="chetna_shop.jpg" 
                  alt="Chetna Boutique"
                  className="shop-image"
                />
                <div className="image-overlay-content">
                  <span className="overlay-text">Chetna Dresses</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Moodboard Section */}
      <section className="moodboard-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Inspiration
          </motion.h2>
          
          <div className="moodboard-grid">
            {moodboardImages.map((image, index) => (
              <motion.div
                key={index}
                className={`moodboard-item item-${index + 1}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <img src={image} alt={`Inspiration ${index + 1}`} />
                <div className="golden-border"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="info-cards-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore Our World
          </motion.h2>
          
          <div className="info-cards-grid">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="info-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.shortDesc}</p>
                <button 
                  className="learn-more-btn"
                  onClick={() => setSelectedCard(card)}
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCard && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCard(null)}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={() => setSelectedCard(null)}
            >
              <X />
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedCard.image} alt={selectedCard.title} />
              </div>
              <div className="modal-text">
                <h3>{selectedCard.title}</h3>
                <p>{selectedCard.fullDesc}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)' }}
            >
              <Users className="stat-icon" />
              <span className="stat-number">{stats.clients.toLocaleString()}+</span>
              <span className="stat-label">Happy Clients</span>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)' }}
            >
              <MapPin className="stat-icon" />
              <span className="stat-number">{stats.cities}+</span>
              <span className="stat-label">Cities Served</span>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)' }}
            >
              <Calendar className="stat-icon" />
              <span className="stat-number">{stats.years}+</span>
              <span className="stat-label">Years of Excellence</span>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)' }}
            >
              <Package className="stat-icon" />
              <span className="stat-number">{stats.pieces.toLocaleString()}+</span>
              <span className="stat-label">Exclusive Pieces</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Slider Section */}
      <section className="product-slider-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Signature Collection
          </motion.h2>
          
          <div className="product-slider">
            <motion.div 
              className="product-track"
              animate={{ 
                x: `-${currentProductSlide * (100 / 3)}%`,
                transition: { duration: 1, ease: [0.32, 0.72, 0, 1] }
              }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="product-card"
                  whileHover={{ y: -10 }}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <Heart className="heart-icon" />
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: index === currentTestimonial ? 1 : 0,
                  scale: index === currentTestimonial ? 1 : 0.9,
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              >
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <span className="author-name">~ {testimonial.author}</span>
                  <span className="author-location">{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Brand Section */}
      <section className="brand-section">
        <div className="container">
          <div className="brand-content">
            <motion.div 
              className="brand-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Philosophy</h2>
              <div className="brand-quote">
                <span>"Not just fashion, a feeling that fits."</span>
              </div>
              <p>
                At chetna, we bring you carefully selected, ready-to-wear clothing made for real women and real life. Our collection includes everyday kurtis, short tops, corset, and versatile fabric pairs, all chosen for comfort, fit, and effortless style.
              </p>
              <p>
                Whether you're dressing for work, a casual outing, or a festive moment, our pieces are made to feel good and look great, without the wait. No tailoring, no hassle, just high-quality garments that fit right off the rack.
              </p>
              <p>
                Since 2002, <GujaratiChetna /> has built its name on consistency, quality, and long-term relationships with our customers. Over the years, we've become a trusted choice for women looking for everyday ethnic wear that's comfortable, stylish, and ready to wear.
We believe fashion should be easy, affordable, and reliable, and that's exactly what we've delivered for over a decade.
              </p>
              
              <div className="founder-signature">
                <span>Founder</span>
                <span className="founder-name handwritten">Rohit Patel</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
