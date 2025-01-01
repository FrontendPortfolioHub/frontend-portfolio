import { useContext, useEffect, useState } from 'react';
import './Header';
import classNames from 'classnames';
import { LanguageSelector } from '../UI/LanguageSelector';
import { NavLink } from 'react-router-dom';
import { DownloadCvButton } from '../UI/DownloadCvButton/DownloadCvButton';

export const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1280);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header
      className={`header ${scrollDirection === 'down' && isMobile ? 'header--hidden' : ''}`}
    >
      <LanguageSelector />
      <nav className="header__nav-bar">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a
              href="#about"
              className={
                activeSection === 'about'
                  ? 'heder__nav-link heder__nav-link--active'
                  : 'heder__nav-link'
              }
            >
              .about
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="#projects"
              className={
                activeSection === 'projects'
                  ? 'heder__nav-link heder__nav-link--active'
                  : 'heder__nav-link'
              }
            >
              .projects
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="#contacts"
              className={
                activeSection === 'contacts'
                  ? 'heder__nav-link heder__nav-link--active'
                  : 'heder__nav-link'
              }
            >
              .contacts
            </a>
          </li>
        </ul>
      </nav>
      <DownloadCvButton />
    </header>
  );
};
