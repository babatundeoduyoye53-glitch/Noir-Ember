import { useState } from 'react';
import { Heart, MessageCircle, ExternalLink, Camera } from 'lucide-react';
import './InstagramFeed.css';

const InstagramFeed = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=600&q=80&auto=format&fit=crop',
      likes: 1247,
      comments: 84,
      caption: 'Perfectly seared wagyu beef with truffle jus. A masterpiece on a plate! 🥩✨',
      link: 'https://instagram.com/noirandember',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=600&q=80&auto=format&fit=crop',
      likes: 892,
      comments: 56,
      caption: 'Our signature lobster bisque garnished with microgreens and edible flowers 🦞🌸',
      link: 'https://instagram.com/noirandember',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=600&q=80&auto=format&fit=crop',
      likes: 2103,
      comments: 127,
      caption: 'Chef\'s tasting menu - 9 courses of pure culinary artistry 👨‍🍳✨ #FineDining',
      link: 'https://instagram.com/noirandember',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&h=600&q=80&auto=format&fit=crop',
      likes: 1567,
      comments: 93,
      caption: 'Decadent chocolate soufflé with vanilla bean ice cream 🍫🍨 Pure heaven!',
      link: 'https://instagram.com/noirandember',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&h=600&q=80&auto=format&fit=crop',
      likes: 743,
      comments: 41,
      caption: 'Behind the scenes in our kitchen. Where magic happens daily! 🔥👨‍🍳',
      link: 'https://instagram.com/noirandember',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=600&q=80&auto=format&fit=crop',
      likes: 1891,
      comments: 108,
      caption: 'Pan-seared scallops with cauliflower purée and caviar 🐚✨ #Luxury',
      link: 'https://instagram.com/noirandember',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=600&q=80&auto=format&fit=crop',
      likes: 1324,
      comments: 76,
      caption: 'Beautifully plated appetizers ready to be served 🍽️✨ #ArtOnAPlate',
      link: 'https://instagram.com/noirandember',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=600&q=80&auto=format&fit=crop',
      likes: 2234,
      comments: 145,
      caption: 'A peek into our elegant dining room. Perfect for your special occasions 🕯️✨',
      link: 'https://instagram.com/noirandember',
    },
  ];

  const totalFollowers = '24.5K';
  const totalPosts = '1,247';

  return (
    <section className="instagram-feed" id="instagram">
      <div className="container">
        <div className="instagram-feed__header">
          <span className="section-eyebrow">Follow Our Journey</span>
          <h2 className="section-title">
            <Camera className="instagram-feed__title-icon" />
            @NoirAndEmber
          </h2>
          <p className="instagram-feed__subtitle">
            Get a daily dose of culinary inspiration. Follow us for behind-the-scenes moments, 
            new dishes, and exclusive offers!
          </p>
          
          {/* Stats */}
          <div className="instagram-feed__stats">
            <div className="instagram-feed__stat">
              <span className="instagram-feed__stat-number">{totalPosts}</span>
              <span className="instagram-feed__stat-label">Posts</span>
            </div>
            <div className="instagram-feed__stat">
              <span className="instagram-feed__stat-number">{totalFollowers}</span>
              <span className="instagram-feed__stat-label">Followers</span>
            </div>
          </div>

          <a
            href="https://instagram.com/noirandember"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-feed__follow-btn"
          >
            <Camera size={20} />
            Follow Us on Instagram
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="instagram-feed__grid">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-feed__item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={`Instagram post: ${post.caption}`}
            >
              <div className="instagram-feed__image-wrapper">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="instagram-feed__image"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div
                  className={`instagram-feed__overlay ${hoveredIndex === index ? 'instagram-feed__overlay--visible' : ''}`}
                >
                  <div className="instagram-feed__stats-overlay">
                    <div className="instagram-feed__stat-item">
                      <Heart size={20} fill="white" />
                      <span>{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="instagram-feed__stat-item">
                      <MessageCircle size={20} fill="white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <p className="instagram-feed__caption">{post.caption}</p>
                </div>

                {/* Instagram Icon Indicator */}
                <div className="instagram-feed__icon-indicator">
                  <Camera size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="instagram-feed__cta">
          <p className="instagram-feed__cta-text">
            Share your dining experience with us using <strong>#NoirAndEmber</strong> 
            and <strong>@NoirAndEmber</strong> for a chance to be featured!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
