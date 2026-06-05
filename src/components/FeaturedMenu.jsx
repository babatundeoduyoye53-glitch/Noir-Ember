import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FeaturedMenu.css';

const menuItems = [
  {
    id: 1,
    name: 'Truffle Risotto',
    description: 'Aged Arborio rice, black truffle shavings, Parmigiano-Reggiano, and a drizzle of white truffle oil.',
    price: '$68',
    tag: 'Chef\'s Pick',
    tagType: 'featured',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Seared Wagyu Tenderloin',
    description: 'A5 Japanese Wagyu, roasted bone marrow, red wine jus, and micro herb garnish.',
    price: '$145',
    tag: 'Signature',
    tagType: 'signature',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Lobster Bisque',
    description: 'Maine lobster, cognac cream, saffron, and a toasted brioche crouton.',
    price: '$52',
    tag: 'Seasonal',
    tagType: 'seasonal',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80&auto=format&fit=crop',
  },
];

const FeaturedMenu = () => {
  return (
    <section className="featured-menu" id="menu">
      <div className="container">
        <div className="featured-menu__header">
          <span className="section-eyebrow">Curated Selection</span>
          <h2 className="section-title">Featured Menu</h2>
          <p className="featured-menu__subtitle">
            Each dish is a composition — crafted with seasonal ingredients, classical technique, and a modern soul.
          </p>
        </div>

        <div className="featured-menu__grid">
          {menuItems.map(item => (
            <article className="menu-card" key={item.id}>
              <div className="menu-card__image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-card__image"
                  loading="lazy"
                />
                <span className={`menu-card__tag menu-card__tag--${item.tagType}`}>
                  {item.tag}
                </span>
                <span className="menu-card__price">{item.price}</span>
              </div>
              <div className="menu-card__body">
                <h3 className="menu-card__name">{item.name}</h3>
                <p className="menu-card__desc">{item.description}</p>
                <Link to="/menu" className="menu-card__btn">
                  <ShoppingBag size={14} />
                  View Menu
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
