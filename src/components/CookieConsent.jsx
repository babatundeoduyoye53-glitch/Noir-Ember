import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__content">
        <div className="cookie-consent__icon">
          <Cookie size={24} />
        </div>
        
        <div className="cookie-consent__text">
          <h3 className="cookie-consent__title">We Value Your Privacy</h3>
          <p className="cookie-consent__description">
            We use cookies to enhance your browsing experience, remember your preferences, 
            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
          <a href="/privacy-policy" className="cookie-consent__link">
            Learn more in our Privacy Policy
          </a>
        </div>

        <div className="cookie-consent__actions">
          <button 
            className="cookie-consent__btn cookie-consent__btn--accept"
            onClick={handleAccept}
          >
            Accept All
          </button>
          <button 
            className="cookie-consent__btn cookie-consent__btn--decline"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>

        <button 
          className="cookie-consent__close"
          onClick={handleDecline}
          aria-label="Close cookie banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
