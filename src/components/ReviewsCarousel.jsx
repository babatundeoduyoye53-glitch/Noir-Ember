import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ThumbsUp, Quote } from 'lucide-react';
import './ReviewsCarousel.css';

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      author: 'Sarah Mitchell',
      platform: 'Google',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      helpful: 24,
      review: 'Absolutely phenomenal experience! The Wagyu beef was cooked to perfection and the service was impeccable. The ambiance is exactly what you want for a special occasion.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
    },
    {
      id: 2,
      author: 'James Chen',
      platform: 'TripAdvisor',
      rating: 5,
      date: '1 week ago',
      verified: true,
      helpful: 31,
      review: 'Best restaurant in London! Every dish was a work of art. The chef\'s tasting menu is worth every penny. Staff were knowledgeable and friendly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
    },
    {
      id: 3,
      author: 'Emma Thompson',
      platform: 'Google',
      rating: 5,
      date: '3 days ago',
      verified: true,
      helpful: 18,
      review: 'Outstanding from start to finish! The truffle risotto was divine and the chocolate soufflé was the best I\'ve ever had. Will definitely return!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
    },
    {
      id: 4,
      author: 'Michael Rodriguez',
      platform: 'Google',
      rating: 5,
      date: '5 days ago',
      verified: true,
      helpful: 22,
      review: 'Celebrated our anniversary here and couldn\'t have chosen better. The staff went above and beyond, and the food was exceptional. Truly Michelin-star quality!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
    },
    {
      id: 5,
      author: 'Olivia Parker',
      platform: 'TripAdvisor',
      rating: 5,
      date: '1 week ago',
      verified: true,
      helpful: 27,
      review: 'The Chef\'s Table experience was unforgettable! Watching the team work was mesmerizing, and every course was perfectly explained. A must-try!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&q=80&auto=format&fit=crop&crop=face',
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'review-star review-star--filled' : 'review-star'}
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  const getPlatformColor = (platform) => {
    return platform === 'Google' ? '#4285F4' : '#00AF87';
  };

  return (
    <section className="reviews-carousel" id="reviews">
      <div className="container">
        <div className="reviews-carousel__header">
          <span className="section-eyebrow">What People Say</span>
          <h2 className="section-title">Customer Reviews</h2>
          <p className="reviews-carousel__subtitle">
            Read what our guests have to say about their dining experience.
          </p>
        </div>

        <div className="reviews-carousel__wrapper">
          {/* Navigation Arrows */}
          <button
            className="reviews-carousel__arrow reviews-carousel__arrow--left"
            onClick={() => { goToPrevious(); handleInteraction(); }}
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="reviews-carousel__arrow reviews-carousel__arrow--right"
            onClick={() => { goToNext(); handleInteraction(); }}
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track */}
          <div
            className="reviews-carousel__track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <Quote className="review-card__quote-icon" size={40} />
                
                <div className="review-card__header">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="review-card__avatar"
                  />
                  <div className="review-card__meta">
                    <div className="review-card__author-row">
                      <h3 className="review-card__author">{review.author}</h3>
                      {review.verified && (
                        <span className="review-card__verified" title="Verified customer">
                          ✓
                        </span>
                      )}
                    </div>
                    <div className="review-card__platform-row">
                      <span
                        className="review-card__platform"
                        style={{ color: getPlatformColor(review.platform) }}
                      >
                        {review.platform} Review
                      </span>
                      <span className="review-card__date">{review.date}</span>
                    </div>
                  </div>
                </div>

                <div className="review-card__rating">
                  {renderStars(review.rating)}
                </div>

                <p className="review-card__text">{review.review}</p>

                <div className="review-card__footer">
                  <button className="review-card__helpful">
                    <ThumbsUp size={14} />
                    Helpful ({review.helpful})
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="reviews-carousel__dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`reviews-carousel__dot ${index === currentIndex ? 'reviews-carousel__dot--active' : ''}`}
                onClick={() => { goToSlide(index); handleInteraction(); }}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="reviews-stats">
          <div className="reviews-stats__item">
            <div className="reviews-stats__number">4.9</div>
            <div className="reviews-stats__label">Average Rating</div>
            <div className="reviews-stats__stars">{renderStars(5)}</div>
          </div>
          <div className="reviews-stats__divider" />
          <div className="reviews-stats__item">
            <div className="reviews-stats__number">1,200+</div>
            <div className="reviews-stats__label">Total Reviews</div>
          </div>
          <div className="reviews-stats__divider" />
          <div className="reviews-stats__item">
            <div className="reviews-stats__number">98%</div>
            <div className="reviews-stats__label">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
