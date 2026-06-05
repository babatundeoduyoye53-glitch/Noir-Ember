import { useState } from 'react';
import { Gift, Users, Calendar, ChefHat, Sparkles, Check, Clock, MapPin, Mail, Phone } from 'lucide-react';
import './SpecialOccasions.css';

const SpecialOccasions = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [guestCount, setGuestCount] = useState(2);
  const [showContactForm, setShowContactForm] = useState(false);

  const packages = [
    {
      id: 'romantic',
      name: 'Romantic Evening',
      icon: <Gift size={32} />,
      price: 280,
      duration: '2.5 hours',
      guests: '2 people',
      description: 'Perfect for anniversaries, proposals, or date nights',
      includes: [
        'Private corner table with ambient lighting',
        'Complimentary champagne on arrival',
        '3-course prix fixe menu',
        'Fresh rose bouquet',
        'Live piano music',
        'Professional photography (3 photos)',
      ],
      popular: true,
    },
    {
      id: 'celebration',
      name: 'Celebration Package',
      icon: <Sparkles size={32} />,
      price: 150,
      duration: '3 hours',
      guests: '4-8 people',
      description: 'Ideal for birthdays, graduations, or small gatherings',
      includes: [
        'Semi-private dining area',
        'Personalized menu cards',
        '4-course tasting menu',
        'Celebration cake or dessert platter',
        'Complimentary bottle of prosecco',
        'Custom decoration setup',
      ],
      popular: false,
    },
    {
      id: 'private-dining',
      name: 'Private Dining Experience',
      icon: <Users size={32} />,
      price: 250,
      duration: '4 hours',
      guests: '10-20 people',
      description: 'Exclusive space for corporate events or large celebrations',
      includes: [
        'Exclusive private dining room',
        'Dedicated waitstaff',
        'Customizable 5-course menu',
        'Premium wine pairing',
        'Audio-visual equipment included',
        'Event coordinator support',
      ],
      popular: false,
    },
    {
      id: 'chefs-table',
      name: "Chef's Table Experience",
      icon: <ChefHat size={32} />,
      price: 450,
      duration: '3.5 hours',
      guests: '6-8 people',
      description: 'Interactive fine dining with our executive chef',
      includes: [
        'Exclusive chef\'s table seating',
        'Live cooking demonstration',
        '9-course tasting menu',
        'Wine pairing by sommelier',
        'Meet & greet with head chef',
        'Recipe cards and signed menu',
      ],
      popular: true,
    },
  ];

  const addons = [
    {
      id: 'photographer',
      name: 'Professional Photographer',
      price: 150,
      icon: '📸',
      description: '1 hour session with 20+ edited photos',
    },
    {
      id: 'flowers',
      name: 'Premium Flower Arrangement',
      price: 85,
      icon: '💐',
      description: 'Luxury seasonal floral centerpiece',
    },
    {
      id: 'wine-pairing',
      name: 'Exclusive Wine Pairing',
      price: 120,
      icon: '🍷',
      description: 'Curated 5-wine pairing by sommelier',
    },
    {
      id: 'music',
      name: 'Live Musician',
      price: 200,
      icon: '🎵',
      description: 'Solo violinist or acoustic guitarist',
    },
    {
      id: 'cake',
      name: 'Custom Celebration Cake',
      price: 95,
      icon: '🎂',
      description: 'Bespoke cake designed by our pastry chef',
    },
    {
      id: 'transport',
      name: 'Luxury Car Service',
      price: 175,
      icon: '🚗',
      description: 'Round-trip chauffeur service',
    },
  ];

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const calculateTotal = () => {
    if (!selectedPackage) return 0;
    
    const pkg = packages.find((p) => p.id === selectedPackage);
    const packagePrice = pkg.price * (pkg.guests === '2 people' ? guestCount / 2 : 1);
    const addonsPrice = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find((a) => a.id === addonId);
      return total + addon.price;
    }, 0);
    
    return packagePrice + addonsPrice;
  };

  const handleInquiry = () => {
    setShowContactForm(true);
  };

  return (
    <section className="special-occasions" id="special-occasions">
      <div className="container">
        <div className="special-occasions__header">
          <span className="section-eyebrow">Make It Memorable</span>
          <h2 className="section-title">Special Occasions Packages</h2>
          <p className="special-occasions__subtitle">
            Create unforgettable moments with our curated celebration packages. 
            Customize your experience with premium add-ons.
          </p>
        </div>

        {/* Package Selection */}
        <div className="special-occasions__packages">
          <h3 className="special-occasions__section-title">Choose Your Package</h3>
          <div className="special-occasions__packages-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`package-card ${selectedPackage === pkg.id ? 'package-card--selected' : ''} ${pkg.popular ? 'package-card--popular' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="package-card__badge">Most Popular</div>
                )}

                <div className="package-card__icon">{pkg.icon}</div>
                <h4 className="package-card__name">{pkg.name}</h4>
                <p className="package-card__description">{pkg.description}</p>

                <div className="package-card__price">
                  <span className="package-card__amount">£{pkg.price}</span>
                  <span className="package-card__unit">per person</span>
                </div>

                <div className="package-card__meta">
                  <div className="package-card__meta-item">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="package-card__meta-item">
                    <Users size={16} />
                    <span>{pkg.guests}</span>
                  </div>
                </div>

                <div className="package-card__includes">
                  <strong>Includes:</strong>
                  <ul className="package-card__includes-list">
                    {pkg.includes.map((item, index) => (
                      <li key={index}>
                        <Check size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="package-card__select-btn">
                  {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Count Selector (if package selected) */}
        {selectedPackage && (
          <div className="special-occasions__guest-selector">
            <h3 className="special-occasions__section-title">Number of Guests</h3>
            <div className="guest-selector">
              <button
                className="guest-selector__btn"
                onClick={() => setGuestCount(Math.max(2, guestCount - 1))}
                disabled={guestCount <= 2}
              >
                -
              </button>
              <div className="guest-selector__display">
                <Users size={20} />
                <span className="guest-selector__count">{guestCount}</span>
                <span className="guest-selector__label">guests</span>
              </div>
              <button
                className="guest-selector__btn"
                onClick={() => setGuestCount(Math.min(20, guestCount + 1))}
                disabled={guestCount >= 20}
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* Add-ons */}
        {selectedPackage && (
          <div className="special-occasions__addons">
            <h3 className="special-occasions__section-title">Enhance Your Experience</h3>
            <div className="special-occasions__addons-grid">
              {addons.map((addon) => (
                <div
                  key={addon.id}
                  className={`addon-card ${selectedAddons.includes(addon.id) ? 'addon-card--selected' : ''}`}
                  onClick={() => toggleAddon(addon.id)}
                >
                  {selectedAddons.includes(addon.id) && (
                    <div className="addon-card__check">
                      <Check size={20} />
                    </div>
                  )}
                  <div className="addon-card__icon">{addon.icon}</div>
                  <h4 className="addon-card__name">{addon.name}</h4>
                  <p className="addon-card__description">{addon.description}</p>
                  <div className="addon-card__price">+£{addon.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Summary & CTA */}
        {selectedPackage && (
          <div className="special-occasions__summary">
            <div className="summary-card">
              <h3 className="summary-card__title">Your Package Summary</h3>
              
              <div className="summary-card__items">
                <div className="summary-card__item">
                  <span className="summary-card__label">
                    {packages.find((p) => p.id === selectedPackage)?.name}
                  </span>
                  <span className="summary-card__value">
                    £{packages.find((p) => p.id === selectedPackage)?.price * guestCount}
                  </span>
                </div>

                {selectedAddons.length > 0 && (
                  <>
                    <div className="summary-card__divider" />
                    {selectedAddons.map((addonId) => {
                      const addon = addons.find((a) => a.id === addonId);
                      return (
                        <div key={addonId} className="summary-card__item summary-card__item--addon">
                          <span className="summary-card__label">{addon.name}</span>
                          <span className="summary-card__value">£{addon.price}</span>
                        </div>
                      );
                    })}
                  </>
                )}

                <div className="summary-card__divider" />
                <div className="summary-card__item summary-card__item--total">
                  <span className="summary-card__label">Estimated Total</span>
                  <span className="summary-card__value">£{calculateTotal()}</span>
                </div>
              </div>

              <button className="summary-card__cta" onClick={handleInquiry}>
                <Calendar size={20} />
                Request Booking
              </button>

              <p className="summary-card__note">
                * Final price may vary based on menu selections and availability. 
                Our team will confirm details within 24 hours.
              </p>
            </div>

            {/* Contact Info */}
            <div className="special-occasions__contact">
              <h4 className="special-occasions__contact-title">Need Help Planning?</h4>
              <p className="special-occasions__contact-text">
                Our events team is here to create your perfect celebration.
              </p>
              <div className="special-occasions__contact-methods">
                <a href="tel:+442079460958" className="contact-method">
                  <Phone size={18} />
                  <span>+44 (0) 20 7946 0958</span>
                </a>
                <a href="mailto:events@noirandember.com" className="contact-method">
                  <Mail size={18} />
                  <span>events@noirandember.com</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Initial CTA (when no package selected) */}
        {!selectedPackage && (
          <div className="special-occasions__initial-cta">
            <p className="special-occasions__initial-cta-text">
              Can't find the perfect package? We create bespoke experiences tailored to your needs.
            </p>
            <a href="tel:+442079460958" className="btn-gold">
              Speak to Our Events Team
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialOccasions;
