// About Page
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ReviewsCarousel from '../components/ReviewsCarousel';
import InstagramFeed from '../components/InstagramFeed';
import './About.css';

const About = () => {
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <span className="section-eyebrow">Our Story</span>
            <h1 className="section-title">Welcome to Noir & Ember</h1>
            <p className="about-hero__text">
              Born from a passion for culinary excellence, Noir & Ember represents the 
              perfect fusion of contemporary innovation and timeless tradition. Our 
              award-winning chef brings over 20 years of Michelin-starred experience 
              to create dishes that tell a story.
            </p>
            <p className="about-hero__text">
              Every ingredient is carefully sourced from local artisans and sustainable 
              farms. Our dark, elegant ambiance paired with the warmth of our open kitchen 
              creates an intimate dining experience that engages all your senses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="about-philosophy">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-card__icon">🔥</div>
              <h3 className="philosophy-card__title">Fire & Precision</h3>
              <p className="philosophy-card__text">
                We believe in the transformative power of fire, using traditional 
                techniques combined with modern precision to create unforgettable flavors.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-card__icon">🌱</div>
              <h3 className="philosophy-card__title">Sustainable Sourcing</h3>
              <p className="philosophy-card__text">
                Every ingredient is ethically sourced from local farms and sustainable 
                suppliers. We're committed to supporting our community and the environment.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-card__icon">✨</div>
              <h3 className="philosophy-card__title">Artful Presentation</h3>
              <p className="philosophy-card__text">
                Each dish is a canvas where culinary art meets gastronomy. We believe 
                dining is a multi-sensory experience that begins with the eyes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
      <ReviewsCarousel />
      <InstagramFeed />
    </>
  );
};

export default About;
