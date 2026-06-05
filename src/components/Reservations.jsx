import { useState } from 'react';
import { Calendar, Clock, Users, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';
import './Reservations.css';

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
  '8:30 PM', '9:00 PM', '9:30 PM',
];

const guestOptions = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests', '7+ Guests'];

const Reservations = () => {
  const [form, setForm] = useState({
    name: '', email: '', date: '', time: '', guests: '', requests: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Date validation
    if (!form.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }
    
    // Time validation
    if (!form.time) {
      newErrors.time = 'Time is required';
    }
    
    // Guests validation
    if (!form.guests) {
      newErrors.guests = 'Number of guests is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', date: '', time: '', guests: '', requests: '' });
    setErrors({});
  };

  return (
    <section className="reservations" id="reservations">
      <div className="reservations__bg" aria-hidden="true" />
      <div className="container">
        <div className="reservations__inner">
          <div className="reservations__header">
            <span className="section-eyebrow">Book Your Table</span>
            <h2 className="section-title">Make a Reservation</h2>
            <p className="reservations__subtitle">
              Reserve your place at Noir & Ember. We recommend booking at least 48 hours in advance for the best availability.
            </p>
          </div>

          {submitted ? (
            <div className="reservations__success">
              <CheckCircle size={48} className="reservations__success-icon" />
              <h3>Reservation Received</h3>
              <p>Thank you. We'll confirm your booking within 24 hours via email.</p>
            </div>
          ) : (
            <form className="reservations__form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <User size={14} /> Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <Mail size={14} /> Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">
                    <Calendar size={14} /> Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className={`form-input ${errors.date ? 'form-input--error' : ''}`}
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    aria-invalid={errors.date ? 'true' : 'false'}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                  />
                  {errors.date && <span id="date-error" className="form-error">{errors.date}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="time" className="form-label">
                    <Clock size={14} /> Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    className={`form-input form-select ${errors.time ? 'form-input--error' : ''}`}
                    value={form.time}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.time ? 'true' : 'false'}
                    aria-describedby={errors.time ? 'time-error' : undefined}
                  >
                    <option value="" disabled>Select a time</option>
                    {timeSlots.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.time && <span id="time-error" className="form-error">{errors.time}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="guests" className="form-label">
                    <Users size={14} /> Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    className={`form-input form-select ${errors.guests ? 'form-input--error' : ''}`}
                    value={form.guests}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.guests ? 'true' : 'false'}
                    aria-describedby={errors.guests ? 'guests-error' : undefined}
                  >
                    <option value="" disabled>Number of guests</option>
                    {guestOptions.map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                  {errors.guests && <span id="guests-error" className="form-error">{errors.guests}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="requests" className="form-label">
                  <MessageSquare size={14} /> Special Requests
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  className="form-input form-textarea"
                  placeholder="Dietary requirements, celebrations, accessibility needs..."
                  rows={4}
                  value={form.requests}
                  onChange={handleChange}
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-gold reservations__submit">
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservations;
