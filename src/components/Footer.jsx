import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Share2, Rss, Play, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday – Thursday', time: '6:00 PM – 10:30 PM' },
  { day: 'Friday – Saturday', time: '5:30 PM – 11:30 PM' },
  { day: 'Sunday', time: '12:00 PM – 9:00 PM' },
];

const socials = [
  { icon: Link, label: 'Instagram', href: '#' },
  { icon: Share2, label: 'Twitter / X', href: '#' },
  { icon: Rss, label: 'Facebook', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmailError('');
    
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }
    
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Column 1 — Brand */}
            <div className="footer__col footer__col--brand">
              <RouterLink to="/" className="footer__logo">Noir & Ember</RouterLink>
              <p className="footer__tagline">
                A sanctuary of flavour, fire, and artistry. Michelin-starred fine dining in the heart of the city.
              </p>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <MapPin size={14} />
                  <span>12 Ember Lane, Mayfair, London W1K 4PL</span>
                </div>
                <div className="footer__contact-item">
                  <Phone size={14} />
                  <span>+44 (0) 20 7946 0958</span>
                </div>
                <div className="footer__contact-item">
                  <Mail size={14} />
                  <span>hello@noirandember.com</span>
                </div>
              </div>
            </div>

            {/* Column 2 — Hours */}
            <div className="footer__col">
              <h4 className="footer__col-title">Opening Hours</h4>
              <table className="footer__hours">
                <tbody>
                  {hours.map(h => (
                    <tr key={h.day} className={h.time === 'Closed' ? 'footer__hours-row--closed' : ''}>
                      <td className="footer__hours-day">{h.day}</td>
                      <td className="footer__hours-time">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Column 3 — Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Explore</h4>
              <ul className="footer__links">
                {footerLinks.map(link => (
                  <li key={link.label}>
                    <RouterLink
                      to={link.path}
                      className="footer__link"
                    >
                      {link.label}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Newsletter */}
            <div className="footer__col">
              <h4 className="footer__col-title">Stay in the Know</h4>
              <p className="footer__newsletter-desc">
                Subscribe for seasonal menus, exclusive events, and early reservation access.
              </p>
              {subscribed ? (
                <p className="footer__subscribed">Thank you for subscribing.</p>
              ) : (
                <>
                  <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                    <input
                      type="email"
                      className={`footer__newsletter-input ${emailError ? 'footer__newsletter-input--error' : ''}`}
                      placeholder="Your email address"
                      value={email}
                      onChange={e => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      required
                      aria-label="Email address for newsletter"
                      aria-invalid={emailError ? 'true' : 'false'}
                      aria-describedby={emailError ? 'newsletter-error' : undefined}
                    />
                    <button type="submit" className="footer__newsletter-btn" aria-label="Subscribe">
                      <ArrowRight size={16} />
                    </button>
                  </form>
                  {emailError && <span id="newsletter-error" className="footer__newsletter-error">{emailError}</span>}
                </>
              )}
              <div className="footer__socials">
                {socials.map(s => (
                  <a key={s.label} href={s.href} className="footer__social" aria-label={s.label}>
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              © {new Date().getFullYear()} Noir & Ember. All rights reserved.
            </p>
            <div className="footer__bottom-links">
              <a href="#" className="footer__bottom-link">Privacy Policy</a>
              <a href="#" className="footer__bottom-link">Terms of Service</a>
              <a href="#" className="footer__bottom-link">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
