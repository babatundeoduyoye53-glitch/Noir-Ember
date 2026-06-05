import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ChefsSpecials.css';

const specials = [
  {
    id: 1,
    subtitle: 'Weekly Special',
    title: 'The Ember Tasting Menu',
    description:
      'Seven courses of fire-kissed perfection. Our head chef curates a new journey each week, celebrating the finest seasonal produce from local farms and global purveyors.',
    image: '/images/ember-tasting-menu.jpg',
    cta: 'Discover This Week\'s Menu',
  },
  {
    id: 2,
    subtitle: 'Private Dining',
    title: 'The Chef\'s Table',
    description:
      'An exclusive 8-seat counter experience where you watch the brigade at work. Engage directly with the chef, ask questions, and witness the artistry behind every plate.',
    image: '/images/chefs-table.jpg',
    cta: 'Book the Chef\'s Table',
  },
];

const ChefsSpecials = () => {
  return (
    <section className="chefs-specials" id="specials">
      <div className="container">
        <div className="chefs-specials__header">
          <span className="section-eyebrow">From the Kitchen</span>
          <h2 className="section-title">Chef's Specials</h2>
        </div>
      </div>

      <div className="chefs-specials__banners">
        {specials.map(special => (
          <div
            key={special.id}
            className="special-banner"
            style={{ backgroundImage: `url(${special.image})` }}
          >
            <div className="special-banner__overlay" />
            <div className="special-banner__content">
              <span className="section-eyebrow">{special.subtitle}</span>
              <h3 className="special-banner__title">{special.title}</h3>
              <p className="special-banner__desc">{special.description}</p>
              <Link to="/reservations" className="btn-text">
                {special.cta} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefsSpecials;
