import './PopularDishes.css';

const dishes = [
  {
    id: 1,
    name: 'Duck Confit',
    price: '$58',
    rating: 4.9,
    reviews: 312,
    tags: ['🦆', '🍷', '🌿'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Foie Gras Torchon',
    price: '$72',
    rating: 4.8,
    reviews: 198,
    tags: ['🥂', '🍑', '✨'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Saffron Bouillabaisse',
    price: '$64',
    rating: 4.9,
    reviews: 276,
    tags: ['🦞', '🌊', '🧄'],
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Chocolate Soufflé',
    price: '$34',
    rating: 5.0,
    reviews: 421,
    tags: ['🍫', '🍓', '🌸'],
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80&auto=format&fit=crop',
  },
];

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const partial = rating % 1;
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            color: i < full ? 'var(--accent-gold)' : i === full && partial > 0 ? 'var(--accent-gold)' : 'var(--text-muted)',
            opacity: i === full && partial > 0 ? partial : 1,
          }}
        >
          ★
        </span>
      ))}
      <span className="star-value">{rating}</span>
    </div>
  );
};

const PopularDishes = () => {
  return (
    <section className="popular-dishes">
      <div className="container">
        <div className="popular-dishes__header">
          <span className="section-eyebrow">Guest Favourites</span>
          <h2 className="section-title">Most Popular Dishes</h2>
        </div>

        <div className="popular-dishes__grid">
          {dishes.map(dish => (
            <article className="popular-card" key={dish.id}>
              <div className="popular-card__image-wrap">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="popular-card__image"
                  loading="lazy"
                />
                <div className="popular-card__tags">
                  {dish.tags.map((tag, i) => (
                    <span key={i} className="popular-card__emoji">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="popular-card__body">
                <div className="popular-card__top">
                  <h3 className="popular-card__name">{dish.name}</h3>
                  <span className="popular-card__price">{dish.price}</span>
                </div>
                <div className="popular-card__bottom">
                  <StarRating rating={dish.rating} />
                  <span className="popular-card__reviews">({dish.reviews})</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
