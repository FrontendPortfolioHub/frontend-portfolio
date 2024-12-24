import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects';
import { Contacts } from './pages/Contacts';
import { Footer } from './components/Footer';
import { FooterMobile } from './components/FooterMobile';
import { useMainContext } from './context/MainContext';
import { useEffect, useState } from 'react';

export const App = () => {
  const { currentPage } = useMainContext();
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="app-container">
      {isMobile ? (
        <div className="mobile__content">
          <Outlet />
          {currentPage !== 'home' && <FooterMobile />}
        </div>
      ) : (
        <div className="desktop__content">
          <Header />
          <About />
          <Projects />
          <Contacts />
          <Footer />
        </div>
      )}
    </div>
  );
};
