import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSelector } from '../UI/LanguageSelector';
import { DownloadCvButton } from '../UI/DownloadCvButton/DownloadCvButton';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { t } = useTranslation();

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

  return (
    <header className="header">
      <div className="header__content">
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
                .{t('about')}
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
                .{t('projects')}
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
                .{t('contacts')}
              </a>
            </li>
          </ul>
        </nav>
        <DownloadCvButton />
      </div>
    </header>
  );
};
