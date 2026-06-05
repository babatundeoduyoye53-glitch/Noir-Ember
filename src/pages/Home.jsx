// Home Page - Clean, focused landing experience
import Hero from '../components/Hero';
import FeaturedMenu from '../components/FeaturedMenu';
import PopularDishes from '../components/PopularDishes';
import ChefsSpecials from '../components/ChefsSpecials';
import ReviewsCarousel from '../components/ReviewsCarousel';
import OpeningHours from '../components/OpeningHours';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <PopularDishes />
      <ChefsSpecials />
      
      {/* CTA Section - View Full Menu */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Explore Our Complete Menu</h2>
            <p className="cta-text">
              Discover 30 exquisite dishes across 6 categories. Search by dietary preferences,
              view detailed descriptions, and find your perfect meal.
            </p>
            <Link to="/menu" className="btn-gold btn-large">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
      
      <ReviewsCarousel />
      <OpeningHours />
      
      {/* CTA Section - Reserve Table */}
      <section className="cta-section cta-section--dark">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Experience Noir & Ember?</h2>
            <p className="cta-text">
              Book your table now and indulge in an unforgettable dining experience.
              We recommend booking 48 hours in advance.
            </p>
            <Link to="/reservations" className="btn-gold btn-large">
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
