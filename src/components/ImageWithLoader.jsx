import { useState } from 'react';
import './ImageWithLoader.css';

const ImageWithLoader = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`image-loader ${className}`}>
      {!isLoaded && !hasError && (
        <div className="image-loader__skeleton" aria-label="Loading image" />
      )}
      {hasError && (
        <div className="image-loader__error" aria-label="Failed to load image">
          <span>⚠️</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`image-loader__img ${isLoaded ? 'image-loader__img--loaded' : ''}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
};

export default ImageWithLoader;
