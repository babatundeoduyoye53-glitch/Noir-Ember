import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickActions from './components/QuickActions';
import LoadingScreen from './components/LoadingScreen';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import ReservationsPage from './pages/Reservations';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LoadingScreen />
        <Router>
          <ScrollToTop />
          <div className="app">
            <Navbar />
            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <QuickActions />
            <BackToTop />
            <CookieConsent />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
