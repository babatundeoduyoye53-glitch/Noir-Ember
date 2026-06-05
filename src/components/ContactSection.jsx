import { MapPin, Phone, Mail, Clock, Navigation, Car } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const restaurantInfo = {
    address: '12 Ember Lane, Mayfair, London W1K 4PL',
    phone: '+44 (0) 20 7946 0958',
    email: 'hello@noirandember.com',
    coordinates: {
      lat: 51.5074,
      lng: -0.1278,
    },
  };

  const handleCall = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${restaurantInfo.email}`;
  };

  const handleDirections = () => {
    const { lat, lng } = restaurantInfo.coordinates;
    // Opens Google Maps with directions
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      '_blank'
    );
  };

  const handleViewMap = () => {
    const { lat, lng } = restaurantInfo.coordinates;
    // Opens Google Maps at location
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      '_blank'
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-section__header">
          <span className="section-eyebrow">Visit Us</span>
          <h2 className="section-title">Location & Contact</h2>
          <p className="contact-section__subtitle">
            Find us in the heart of Mayfair. We look forward to welcoming you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Map Column */}
          <div className="contact-map">
            <div className="contact-map__embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2273568076204!2d-0.12775!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwNyczOC4wIlc!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Noir & Ember Restaurant Location"
              />
            </div>
            <button className="contact-map__overlay" onClick={handleViewMap}>
              <MapPin size={24} />
              <span>Open in Google Maps</span>
            </button>
          </div>

          {/* Info Column */}
          <div className="contact-info">
            {/* Address */}
            <div className="contact-info__item">
              <div className="contact-info__icon-wrap">
                <MapPin size={22} className="contact-info__icon" />
              </div>
              <div className="contact-info__content">
                <h3 className="contact-info__title">Address</h3>
                <p className="contact-info__text">{restaurantInfo.address}</p>
                <button className="contact-info__action" onClick={handleDirections}>
                  <Navigation size={14} />
                  Get Directions
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-info__item">
              <div className="contact-info__icon-wrap">
                <Phone size={22} className="contact-info__icon" />
              </div>
              <div className="contact-info__content">
                <h3 className="contact-info__title">Phone</h3>
                <p className="contact-info__text">{restaurantInfo.phone}</p>
                <button className="contact-info__action" onClick={handleCall}>
                  <Phone size={14} />
                  Call Now
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info__item">
              <div className="contact-info__icon-wrap">
                <Mail size={22} className="contact-info__icon" />
              </div>
              <div className="contact-info__content">
                <h3 className="contact-info__title">Email</h3>
                <p className="contact-info__text">{restaurantInfo.email}</p>
                <button className="contact-info__action" onClick={handleEmail}>
                  <Mail size={14} />
                  Send Email
                </button>
              </div>
            </div>

            {/* Parking Info */}
            <div className="contact-info__item contact-info__item--highlight">
              <div className="contact-info__icon-wrap">
                <Car size={22} className="contact-info__icon" />
              </div>
              <div className="contact-info__content">
                <h3 className="contact-info__title">Parking & Transport</h3>
                <ul className="contact-info__list">
                  <li>Valet parking available</li>
                  <li>Green Park Station - 5 min walk</li>
                  <li>Public car park nearby - £8/hour</li>
                  <li>Taxi drop-off point at entrance</li>
                </ul>
              </div>
            </div>

            {/* Hours Widget Placeholder */}
            <div className="contact-info__hours">
              <div className="contact-info__icon-wrap">
                <Clock size={22} className="contact-info__icon" />
              </div>
              <div className="contact-info__content">
                <h3 className="contact-info__title">Opening Hours</h3>
                <p className="contact-info__text contact-info__text--muted">
                  See detailed hours below
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
