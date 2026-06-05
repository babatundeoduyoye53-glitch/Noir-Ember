import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    
    // Focus management for drawer
    if (drawerOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
    
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  // Focus trap for drawer
  useEffect(() => {
    if (!drawerOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
      }

      if (e.key === 'Tab') {
        const drawer = drawerRef.current;
        if (!drawer) return;

        const focusableElements = drawer.querySelectorAll(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [drawerOpen]);

  const handleNavClick = () => {
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={handleNavClick}>
            <span className="navbar__logo-main">Noir & Ember</span>
            <span className="navbar__logo-sub">Fine Dining</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="navbar__controls">
            {/* Theme Toggle */}
            <button
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <span className={`toggle-track ${theme === 'light' ? 'toggle-track--light' : ''}`}>
                <span className="toggle-thumb">
                  {theme === 'dark'
                    ? <Moon size={10} strokeWidth={2} />
                    : <Sun size={10} strokeWidth={2} />
                  }
                </span>
              </span>
            </button>

            {/* Reserve CTA */}
            <Link
              to="/reservations"
              className="navbar__cta"
              onClick={handleNavClick}
            >
              Reserve
            </Link>

            {/* Hamburger */}
            <button
              className="navbar__hamburger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`drawer-overlay ${drawerOpen ? 'drawer-overlay--open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside 
        className={`drawer ${drawerOpen ? 'drawer--open' : ''}`}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="drawer__header">
          <span className="drawer__logo">Noir & Ember</span>
          <button 
            ref={closeButtonRef}
            className="drawer__close" 
            onClick={() => setDrawerOpen(false)} 
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <ul className="drawer__links">
          {navLinks.map(link => (
            <li key={link.label}>
              <Link
                to={link.path}
                className={`drawer__link ${location.pathname === link.path ? 'drawer__link--active' : ''}`}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="drawer__footer">
          <button className="drawer__theme-btn" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link
            to="/reservations"
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
            onClick={handleNavClick}
          >
            Reserve a Table
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
