import { Phone, Navigation, Calendar, Menu as MenuIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './QuickActions.css';

const QuickActions = () => {
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = 'tel:+442079460958';
  };

  const handleDirections = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=51.5074,-0.1278',
      '_blank'
    );
  };

  const handleReserve = () => {
    navigate('/reservations');
  };

  const handleMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="quick-actions">
      <button
        className="quick-actions__btn quick-actions__btn--call"
        onClick={handleCall}
        aria-label="Call restaurant"
      >
        <Phone size={20} className="quick-actions__icon" />
        <span className="quick-actions__label">Call</span>
      </button>

      <button
        className="quick-actions__btn quick-actions__btn--directions"
        onClick={handleDirections}
        aria-label="Get directions"
      >
        <Navigation size={20} className="quick-actions__icon" />
        <span className="quick-actions__label">Directions</span>
      </button>

      <button
        className="quick-actions__btn quick-actions__btn--reserve"
        onClick={handleReserve}
        aria-label="Reserve a table"
      >
        <Calendar size={20} className="quick-actions__icon" />
        <span className="quick-actions__label">Reserve</span>
      </button>

      <button
        className="quick-actions__btn quick-actions__btn--menu"
        onClick={handleMenu}
        aria-label="View menu"
      >
        <MenuIcon size={20} className="quick-actions__icon" />
        <span className="quick-actions__label">Menu</span>
      </button>
    </div>
  );
};

export default QuickActions;
