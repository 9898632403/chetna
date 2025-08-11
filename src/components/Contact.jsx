import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import { FaRupeeSign } from "react-icons/fa";
import { 
  FiSend, 
  FiCheckCircle, 
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiShoppingBag,
  FiInstagram,
  FiPackage,
  FiTruck,
  FiCreditCard,
  FiChevronDown,
  FiChevronUp,
  FiMessageSquare
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business_name: "",
    business_email: "",
    city: "",
    instagram: "",
    monthly_volume: "",
    message: "",
    inquiry_type: "wholesale"
  });

  const [status, setStatus] = useState("idle");
  const [activeTab, setActiveTab] = useState("wholesale");
  const [activeFaq, setActiveFaq] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          inquiry_type: "wholesale"
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        business_name: "",
        business_email: "",
        city: "",
        instagram: "",
        monthly_volume: "",
        message: "",
      });
      
      document.getElementById('success-message')?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="https://wa.link/jr9ihg" className="floating-whatsapp">
        <FiMessageSquare className="whatsapp-icon" />
      </a>

      <div className={`wholesale-hero ${isScrolled ? 'scrolled' : ''}`}>
        <div className="wholesale-hero-content">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            Wholesale Partnership with <span className="brand-highlight">Chetna Dress</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hero-subtitle"
          >
            Premium kurtis for resellers, boutique owners, and every woman building her dream — from home or shop — with exclusive wholesale terms.
          </motion.p>
          
          <motion.div 
            className="benefits-carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="benefits-track">
              <div className="benefit-card">
                <FaRupeeSign className="benefit-icon" />
                <h4>Competitive Pricing</h4>
                <p>Exclusive wholesale terms & manufacturer-direct rates — perfect for bulk buyers & boutique resellers</p>
              </div>
              
              <div className="benefit-card">
                <FiPackage className="benefit-icon" />
                <h4>MOQ Flexibility</h4>
                <p>Low minimums — start with just 10 pieces per design and scale as you grow</p>
              </div>
              
              <div className="benefit-card">
                <FiTruck className="benefit-icon" />
                <h4>Pan-India Shipping</h4>
                <p>Timely doorstep delivery across India with trusted partners</p>
              </div>
              
              <div className="benefit-card">
                <FiCreditCard className="benefit-icon" />
                <h4>Flexible Payments</h4>
                <p>Secure payments via UPI, Bank Transfer & more</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hero-cta"
          >
            <a href="#wholesale-form" className="cta-button primary">
              Apply for Wholesale Access
            </a>
            <a href="https://wa.link/jr9ihg" className="cta-button secondary">
              <FiMessageSquare /> Chat with Manager
            </a>
          </motion.div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-overlay"></div>
          <img src="/chetna_shop.jpg" alt="Wholesale Kurti Collection" className="hero-image" />
        </div>
      </div>

      <div className="retail-section">
        <div className="retail-content">
          <h3>Shopping for Yourself?</h3>
          <p>Discover our newest arrivals and shop effortlessly through our curated Instagram store.</p>
          <a 
            href="https://www.instagram.com/chetna_fashion_hub_patan" 
            className="retail-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram /> Visit Instagram Store
          </a>
        </div>
      </div>

      <div className="wholesale-inquiry-section" id="wholesale-form">
        {status === "success" ? (
          <motion.div 
            id="success-message"
            className="thank-you-container"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="thank-you-content">
              <div className="success-illustration">
                <FiCheckCircle className="success-icon" />
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
              </div>
              
              <h2>Thank You for Your Wholesale Inquiry!</h2>
              
              <div className="success-timeline">
                <div className="timeline-step current">
                  <div className="step-indicator">
                    <div className="step-number">1</div>
                    <div className="step-connector"></div>
                  </div>
                  <div className="step-content">
                    <h4>Form Submitted</h4>
                    <p>We've received your wholesale application</p>
                  </div>
                </div>
                
                <div className="timeline-step">
                  <div className="step-indicator">
                    <div className="step-number">2</div>
                    <div className="step-connector"></div>
                  </div>
                  <div className="step-content">
                    <h4>Review Process</h4>
                    <p>Our team is reviewing your request and verifying your business details.</p>
                  </div>
                </div>
                
                <div className="timeline-step">
                  <div className="step-indicator">
                    <div className="step-number">3</div>
                  </div>
                  <div className="step-content">
                    <h4>Getting Started</h4>
                    <p>Our team will reach out to you within 24 hours to share our latest catalog and exclusive wholesale pricing.</p>
                  </div>
                </div>
              </div>
              
              <div className="success-contact-options">
                <h3>Need help or want to order right away?</h3>
                <div className="contact-buttons">
                  <a href="tel:+917" className="contact-button">
                    <FiPhone /> Call Now
                  </a>
                  <a href="https://wa.link/jr9ihg" className="contact-button whatsapp">
                    <FiMessageSquare /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="wholesale-form-container">
            <motion.form 
              className="wholesale-form"
              onSubmit={handleSubmit}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                backgroundImage: "url('/chetna.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "2rem",
                borderRadius: "10px",
                position: "relative"
              }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderRadius: "10px",
                zIndex: 0
              }}></div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="form-header">
                  <h3>Wholesale Application</h3>
                  <p className="form-subtitle">
                    Fill out this form to unlock exclusive wholesale pricing, personalized support, and priority service.
                  </p>
                </div>

                <div className="form-grid">
                  <div className="form-group floating-label">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="name">Full Name *</label>
                    <FiUser className="input-icon" />
                  </div>

                  <div className="form-group floating-label">
                    <input
                      type="text"
                      name="business_name"
                      id="business_name"
                      value={formData.business_name}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="business_name">Business Name</label>
                    <FiShoppingBag className="input-icon" />
                  </div>

                  <div className="form-group floating-label">
                    <input
                      type="email"
                      name="business_email"
                      id="business_email"
                      value={formData.business_email}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="business_email">Business Email</label>
                    <FiMail className="input-icon" />
                  </div>

                  <div className="form-group floating-label">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="phone">Phone (WhatsApp preferred) *</label>
                    <FiPhone className="input-icon" />
                  </div>

                  <div className="form-group floating-label">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="city">Business Location (City) *</label>
                    <FiMapPin className="input-icon" />
                  </div>

                  <div className="form-group floating-label select-group">
                    <select
                      name="monthly_volume"
                      id="monthly_volume"
                      value={formData.monthly_volume}
                      onChange={handleChange}
                    >
                      <option value=""></option>
                      <option value="10-50">10-50 pieces</option>
                      <option value="50-100">50-100 pieces</option>
                      <option value="100-300">100-300 pieces</option>
                      <option value="300+">300+ pieces</option>
                    </select>
                    <label htmlFor="monthly_volume">Estimated Monthly Volume</label>
                  </div>

                  <div className="form-group floating-label">
                    <input
                      type="text"
                      name="instagram"
                      id="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="instagram">Instagram/Facebook Page</label>
                    <FiInstagram className="input-icon" />
                  </div>

                  <div className="form-group floating-label full-width">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      rows="4"
                    />
                    <label htmlFor="message">Share your business goals with us *</label>
                  </div>
                </div>

                <div className="form-footer">
                  <motion.button 
                    type="submit" 
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="submit-button"
                  >
                    {status === "sending" ? (
                      <span className="button-loading">
                        <span className="spinner"></span> Please wait...
                      </span>
                    ) : (
                      <>
                        <FiSend className="button-icon" /> Submit Application
                      </>
                    )}
                  </motion.button>
                  <p className="form-note">
                    Thanks for reaching out to Chetna. By submitting this form, you agree to be contacted by our wholesale specialists to help with your request.  
  Rest assured, your information is transmitted securely and is never stored or shared — your privacy and trust are our top priority.
                  </p>
                </div>
              </div>
            </motion.form>

            <div className="wholesale-info-sidebar">
              <div className="info-card">
                <h4>Wholesale Benefits</h4>
                <ul className="benefits-list">
                  <li>
                    <FiPackage className="benefit-icon" />
                    <span>150+ designs updated monthly</span>
                  </li>
                  <li>
                    <FiCreditCard className="benefit-icon" />
                    <span>Flexible payment options</span>
                  </li>
                  <li>
                    <FiTruck className="benefit-icon" />
                    <span>Doorstep delivery across India</span>
                  </li>
                  <li>
                    <FaRupeeSign className="benefit-icon" />
                    <span>Volume discounts available</span>
                  </li>
                  <li>
                    <div className="benefit-icon">🔄</div>
                    <span>Easy return policy for defects</span>
                  </li>
                  <li>
                    <div className="benefit-icon">📈</div>
                    <span>Sales support & marketing materials</span>
                  </li>
                </ul>
              </div>

              <div className="info-card process-card">
                <h4>How It Works</h4>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h5>Submit Request</h5>
                      <p>Fill in the wholesale enquiry form with your details.</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h5>We Connect</h5>
                      <p>Our team will reach out to understand your requirements.</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h5>Personalised Support</h5>
                      <p>We guide you with product suggestions, pricing, and availability.</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h5>Place Your Order</h5>
                      <p>Once you're ready, confirm your selection and we begin processing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quick-contact-card">
                <h4>Prefer to Talk Directly?</h4>
                <p>Our friendly wholesale experts are just a call away — available daily from <strong>7:00 AM to 7:00 PM</strong>.</p>
                <div className="quick-contact-buttons">
                  <a href="tel:+919638681266" className="quick-contact-button">
                    <FiPhone /> Call Now
                  </a>
                  <a href="https://wa.link/jr9ihg" className="quick-contact-button whatsapp">
                    <FiMessageSquare /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="showroom-section">
        <div className="showroom-image-container">
          <img src="/chetna_shop.jpg" alt="Chetna Dress Showroom" className="showroom-image" />
          <div className="image-overlay"></div>
          <div className="showroom-badge">
            <FiMapPin className="badge-icon" />
            <span>Chetna Dresses, Patan</span>
          </div>
        </div>
        
        <div className="showroom-content">
          <h2>Step Into Our World — In Person</h2>
          <p className="showroom-description">
           Explore our latest collections in person at Chetna Dresses, Patan. 
    Discover high-quality collection, receive expert guidance on trending styles and customer preferences, and access showroom-only wholesale offers tailored for serious buyers..
          </p>
          
          <div className="showroom-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🛋️</div>
              <div className="highlight-content">
                <h4>Private Viewing</h4>
                <p>Dedicated space to explore collections in comfort and privacy.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">💼</div>
              <div className="highlight-content">
                <h4>Expert Advice</h4>
                <p>Guidance based on current fashion trends and your target customers.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🏷️</div>
              <div className="highlight-content">
                <h4>Exclusive Offers</h4>
                <p>Avail exclusive in-store deals and limited-time wholesale benefits.</p>
              </div>
            </div>
          </div>
          
          <div className="showroom-actions">
            <a 
              href="#wholesale-form"
              className="showroom-button primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('wholesale-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FiCalendar /> Schedule Your Visit
            </a>
            <a 
              href="https://www.google.com/maps/place/Chetna+dresses/@23.8540186,72.1223531,17z/data=!3m1!4b1!4m6!3m5!1s0x395c87df08a66e0b:0xf85fed84c05976ce!8m2!3d23.8540137!4d72.124928!16s%2Fg%2F11p5f_5_cc?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
              className="showroom-button secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMapPin /> Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="section-header">
          <h2>Wholesale FAQs</h2>
          <p>Common questions about our wholesale program</p>
        </div>
        
        <div className="faq-container">
          {[
            {
              question: "What is the minimum order quantity?",
              answer: "Our MOQ is 10 pieces per design, with mixed designs allowed to reach the minimum. Larger orders qualify for volume discounts."
            },
            {
              question: "How often do you release new designs?",
              answer: "We introduce 20-30 new designs every month. Wholesale partners receive advance previews of upcoming collections."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept bank transfers, UPI, and select digital payment methods. Credit terms may be available for established partners."
            },
            {
              question: "What is your shipping policy?",
              answer: "Orders ship within 2-3 business days after confirmation. We work with reliable courier partners across India."
            },
            {
              question: "Do you offer custom labeling?",
              answer: "Yes, we can provide custom labeling for orders over 100+ pieces of a single design at a small additional cost."
            },
            {
              question: "Can I mix sizes in my order?",
              answer: "Absolutely! You can specify size breakdowns for each design according to your customer demographics."
            }
          ].map((faq, index) => (
            <div 
              className={`faq-item ${activeFaq === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                {activeFaq === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <p>Still have questions? We're happy to help.</p>
          <a href="https://wa.link/jr9ihg" className="faq-button">
            <FiMessageSquare /> Chat with Us
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;