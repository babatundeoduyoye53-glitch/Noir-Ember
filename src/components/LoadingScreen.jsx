import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time of 1.5 seconds for smooth experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        {/* Animated Logo */}
        <div className="loading-logo">
          <div className="loading-logo__frame">
            <div className="loading-logo__text">
              <span className="loading-logo__n">N</span>
              <span className="loading-logo__ampersand">&</span>
              <span className="loading-logo__e">E</span>
            </div>
          </div>
        </div>

        {/* Restaurant Name */}
        <h1 className="loading-title">Noir & Ember</h1>
        <p className="loading-subtitle">Fine Dining</p>

        {/* Loading Bar */}
        <div className="loading-bar">
          <div className="loading-bar__progress" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
