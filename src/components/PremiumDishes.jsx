import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PremiumDishes.css';

const premiumItems = [
  {
    id: 1,
    eyebrow: 'The Ocean Experience',
    title: 'Grand Seafood Platter',
    description:
      'A theatrical presentation of the finest ocean harvest — Alaskan king crab, Brittany oysters, tiger prawns, and sea urchin, served on a bed of crushed ice with three house-made sauces.',
    price: '$220',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&q=85&auto=format&fit=crop',
    imageLeft: false,
  },
  {
    id: 2,
    eyebrow: 'The Omakase Journey',
    title: 'Signature Omakase',
    description:
      'An 11-course chef\'s tasting menu that evolves with the seasons. Each course is a dialogue between Japanese precision and French elegance, paired with curated sake and natural wines.',
    price: '$380 per person',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900&q=85&auto=format&fit=crop',
    imageLeft: true,
  },
];

const PremiumDishes = () => {
  return (
    <section className="premium-dishes" id="premium">
      <div className="container">
        <div className="premium-dishes__header">
          <span className="section-eyebrow">Elevated Experiences</span>
          <h2 className="section-title">Premium Offerings</h2>
        </div>

        <div className="premium-dishes__list">
          {premiumItems.map(item => (
            <article
              key={item.id}
              className={`premium-item ${item.imageLeft ? 'premium-item--reversed' : ''}`}
            >
              {/* Image Side */}
              <div className="premium-item__image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="premium-item__image"
                  loading="lazy"
                />
                <div className="premium-item__image-overlay" />
              </div>

              {/* Content Side */}
              <div className="premium-item__content">
                <span className="section-eyebrow">{item.eyebrow}</span>
                <h3 className="premium-item__title">{item.title}</h3>
                <div className="gold-divider" />
                <p className="premium-item__desc">{item.description}</p>
                <div className="premium-item__price-row">
                  <span className="premium-item__price">{item.price}</span>
                </div>
                <Link to="/reservations" className="btn-gold">
                  Reserve Experience <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumDishes;
