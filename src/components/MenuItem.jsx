import { Star, Flame } from 'lucide-react';
import './MenuItem.css';

const MenuItem = ({ item, onClick }) => {
  const formatPrice = (price) => {
    return `$${price}`;
  };

  const getDietaryBadges = () => {
    const badges = [];
    
    if (item.dietary.includes('vegetarian')) {
      badges.push({ icon: '🌱', label: 'Vegetarian', color: 'green' });
    }
    if (item.dietary.includes('vegan')) {
      badges.push({ icon: '🌿', label: 'Vegan', color: 'green' });
    }
    if (item.dietary.includes('gluten-free')) {
      badges.push({ icon: '🌾', label: 'Gluten-Free', color: 'blue' });
    }
    if (item.dietary.includes('spicy')) {
      badges.push({ icon: '🌶️', label: 'Spicy', color: 'red' });
    }
    
    return badges;
  };

  const badges = getDietaryBadges();

  return (
    <article className="menu-item" onClick={onClick}>
      {/* Image */}
      <div className="menu-item__image-wrap">
        <img
          src={item.image}
          alt={item.name}
          className="menu-item__image"
          loading="lazy"
        />
        <div className="menu-item__overlay" />
        
        {/* Badges */}
        <div className="menu-item__badges">
          {item.popular && (
            <span className="menu-item__badge menu-item__badge--popular" title="Popular Dish">
              <Flame size={12} />
              Popular
            </span>
          )}
          {item.chefSpecial && (
            <span className="menu-item__badge menu-item__badge--special" title="Chef's Special">
              <Star size={12} />
              Chef's Special
            </span>
          )}
        </div>

        {/* Price Tag */}
        <div className="menu-item__price-tag">
          {formatPrice(item.price)}
        </div>
      </div>

      {/* Content */}
      <div className="menu-item__content">
        <div className="menu-item__header">
          <h3 className="menu-item__name">{item.name}</h3>
          {badges.length > 0 && (
            <div className="menu-item__dietary">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={`menu-item__dietary-badge menu-item__dietary-badge--${badge.color}`}
                  title={badge.label}
                >
                  {badge.icon}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <p className="menu-item__description">
          {item.description}
        </p>

        {/* Allergens Info */}
        {item.allergens && item.allergens.length > 0 && (
          <div className="menu-item__allergens">
            <span className="menu-item__allergens-label">Contains:</span>
            <span className="menu-item__allergens-list">
              {item.allergens.join(', ')}
            </span>
          </div>
        )}

        <button className="menu-item__cta">
          View Details
        </button>
      </div>
    </article>
  );
};

export default MenuItem;
