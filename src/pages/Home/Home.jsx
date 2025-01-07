import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { scrollToTop } from '../../utils/scrollToTop';

import { useMainContext } from '../../context/MainContext';

import { StartPage } from '../../components/StartPage/StartPage';
import { SocialLinks } from '../../components/SocialLinks/SocialLinks';

import { homePageNavItems } from '../../data/homePageNavItems';

export const Home = () => {
  const { setCurrentPage } = useMainContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scrollToTop();
    setCurrentPage('home');
  });

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('visited');

    if (isFirstVisit) {
      setIsLoading(false);
    } else {
      localStorage.setItem('visited', 'true');
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }, [isLoading]);

  const handleMenuState = () => {
    scrollToTop();
  };

  return (
    <section className="home-page">
      {isLoading ? (
        <StartPage isLoading={isLoading} />
      ) : (
        <div className="home-page__content">
          <div className="home-page__top">
            <h1 className="start-page__title text-primary">
              I<span>'</span>M <br /> Pavlo Maistrenko
            </h1>
            <p className="start-page__subtitle">Frontend Developer</p>
          </div>
          <nav className="mobile__nav">
            <ul className="mobile__nav-list">
              {homePageNavItems.map((item) => (
                <li key={item.id} className="mobile__nav-item">
                  <NavLink
                    to={item.href}
                    className="mobile__nav-link"
                    onClick={handleMenuState}
                  >
                    <span>.</span>
                    {`${item.label}`}
                  </NavLink>
                </li>
              ))}
              <button
                className="mobile__nav-item"
                onClick={() => {
                  localStorage.removeItem('visited');
                  setIsLoading(true);
                }}
              >
                <p className="mobile__nav-link">
                  <span>.</span>to start
                </p>
              </button>
            </ul>
            <SocialLinks />
          </nav>
        </div>
      )}
    </section>
  );
};
