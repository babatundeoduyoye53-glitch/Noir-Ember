import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Background Image with Ken Burns */}
      <div className="hero__bg">
        <div className="hero__bg-img" />
        <div className="hero__overlay" />
      </div>

      {/* Decorative SVG Wave Lines */}
      <svg className="hero__waves" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,100 C360,160 720,40 1080,100 C1260,130 1380,90 1440,100" fill="none" stroke="rgba(212,175,55,0.18)" strokeWidth="1.5" />
        <path d="M0,120 C400,60 800,180 1200,80 C1320,55 1400,110 1440,120" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="1" />
        <path d="M0,80 C300,140 700,20 1100,90 C1280,120 1400,70 1440,80" fill="none" stroke="rgba(212,175,55,0.07)" strokeWidth="1" />
      </svg>

      {/* Content */}
      <div className="hero__content">
        <span className="section-eyebrow">Est. 2012 · Michelin Starred</span>

        <h1 className="hero__title">
          Where Every Dish<br />
          Tells a <em className="hero__title-italic">Story</em>
        </h1>

        <p className="hero__subtitle">
          An intimate sanctuary of flavour, fire, and artistry.<br />
          Experience cuisine that transcends the ordinary.
        </p>

        <div className="hero__cta-group">
          <Link to="/menu" className="btn-gold">
            Explore Menu <ArrowRight size={16} />
          </Link>
          <Link to="/reservations" className="btn-ghost">
            Reserve a Table
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">12+</span>
            <span className="hero__stat-label">Years of Excellence</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-number">48</span>
            <span className="hero__stat-label">Signature Dishes</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-number">3★</span>
            <span className="hero__stat-label">Michelin Stars</span>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <button 
        className="hero__scroll-indicator" 
        onClick={handleScrollDown}
        aria-label="Scroll down to see more"
      >
        <div className="hero__scroll-line" />
        <ChevronDown size={16} className="hero__scroll-icon" />
      </button>
    </section>
  );
};

export default Hero;
