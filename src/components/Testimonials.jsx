import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    review:
      'An extraordinary evening from start to finish. The truffle risotto was transcendent — each bite a meditation on flavour. The service was impeccable, attentive without being intrusive.',
    name: 'Isabelle Fontaine',
    role: 'Food Critic, Le Monde Gastronomique',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
  },
  {
    id: 2,
    review:
      'Noir & Ember is not just a restaurant — it is a theatre of the senses. The Chef\'s Table experience was the highlight of our anniversary trip. We will return every year.',
    name: 'Marcus Whitfield',
    role: 'Travel Writer, Condé Nast',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
  },
  {
    id: 3,
    review:
      'The Omakase journey was a revelation. Eleven courses of pure artistry — each one a surprise, each one perfect. The wine pairings were inspired. Truly Michelin-worthy.',
    name: 'Yuki Tanaka',
    role: 'Culinary Director, Tokyo Eats',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__bg-quote" aria-hidden="true">"</div>
      <div className="container">
        <div className="testimonials__header">
          <span className="section-eyebrow">Guest Voices</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map(t => (
            <article className="testimonial-card" key={t.id}>
              <div className="testimonial-card__quote-mark" aria-hidden="true">"</div>
              <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="testimonial-card__star">★</span>
                ))}
              </div>
              <blockquote className="testimonial-card__text">
                {t.review}
              </blockquote>
              <footer className="testimonial-card__footer">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testimonial-card__avatar"
                  loading="lazy"
                />
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__role">{t.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
