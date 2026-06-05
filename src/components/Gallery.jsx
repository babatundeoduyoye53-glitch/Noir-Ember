import { ZoomIn } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80&auto=format&fit=crop',
    alt: 'Elegant dining room ambience',
    span: 'tall',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&auto=format&fit=crop',
    alt: 'Artfully plated dish',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80&auto=format&fit=crop',
    alt: 'Chef at work in the kitchen',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=700&q=80&auto=format&fit=crop',
    alt: 'Candlelit table setting',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80&auto=format&fit=crop',
    alt: 'Signature cocktail',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80&auto=format&fit=crop',
    alt: 'Restaurant interior at night',
  },
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header">
          <span className="section-eyebrow">Visual Journey</span>
          <h2 className="section-title">Our Gallery</h2>
          <p className="gallery__subtitle">
            A glimpse into the world of Noir & Ember — where every corner tells a story.
          </p>
        </div>

        <div className="gallery__mosaic">
          {galleryImages.map(img => (
            <div
              key={img.id}
              className={`gallery__item ${img.span === 'tall' ? 'gallery__item--tall' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery__img"
                loading="lazy"
              />
              <div className="gallery__overlay">
                <ZoomIn size={28} className="gallery__icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
