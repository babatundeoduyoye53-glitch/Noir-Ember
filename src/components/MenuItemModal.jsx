import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Star, Flame, AlertCircle } from 'lucide-react';
import './MenuItemModal.css';

const MenuItemModal = ({ item, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const formatPrice = (price) => `$${price}`;

  const getDietaryInfo = () => {
    const info = [];
    if (item.dietary.includes('vegetarian')) info.push('Vegetarian');
    if (item.dietary.includes('vegan')) info.push('Vegan');
    if (item.dietary.includes('gluten-free')) info.push('Gluten-Free');
    if (item.dietary.includes('spicy')) info.push('Spicy');
    return info;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        {/* Image */}
        <div className="modal-image-wrap">
          <img src={item.image} alt={item.name} className="modal-image" />
          <div className="modal-image-overlay" />
          
          {/* Floating Badges */}
          <div className="modal-badges">
            {item.popular && (
              <span className="modal-badge modal-badge--popular">
                <Flame size={14} />
                Popular
              </span>
            )}
            {item.chefSpecial && (
              <span className="modal-badge modal-badge--special">
                <Star size={14} />
                Chef's Special
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="modal-body">
          {/* Header */}
          <div className="modal-header">
            <h2 className="modal-title">{item.name}</h2>
            <div className="modal-price">{formatPrice(item.price)}</div>
          </div>

          {/* Description */}
          <p className="modal-description">{item.description}</p>

          {/* Dietary Info */}
          {getDietaryInfo().length > 0 && (
            <div className="modal-info-section">
              <h3 className="modal-info-title">Dietary Information</h3>
              <div className="modal-tags">
                {getDietaryInfo().map((diet, index) => (
                  <span key={index} className="modal-tag modal-tag--dietary">
                    {diet}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Allergens */}
          {item.allergens && item.allergens.length > 0 && (
            <div className="modal-info-section modal-info-section--alert">
              <div className="modal-info-header">
                <AlertCircle size={18} className="modal-info-icon" />
                <h3 className="modal-info-title">Allergen Information</h3>
              </div>
              <p className="modal-allergens">
                This dish contains: <strong>{item.allergens.join(', ')}</strong>
              </p>
              <p className="modal-allergens-note">
                Please inform your server of any allergies or dietary restrictions.
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="modal-actions">
            <Link to="/reservations" className="btn-gold" onClick={onClose}>
              Reserve a Table
            </Link>
            <button className="btn-ghost" onClick={onClose}>
              Back to Menu
            </button>
          </div>

          {/* Additional Info */}
          <div className="modal-footer">
            <p className="modal-footer-text">
              All our dishes are prepared fresh to order. 
              Please allow 15-20 minutes for preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemModal;
