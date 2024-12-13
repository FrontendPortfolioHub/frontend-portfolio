import { Link, NavLink } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import './Home';
import { homePageNavItems } from '../../data/homePageNavItems';
import { StartPage } from '../../components/StartPage/StartPage';
import { useEffect, useState } from 'react';
import { useMainContext } from '../../context/MainContext';

export const Home = () => {
  const {setCurrentPage} = useMainContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    scrollToTop();
    setCurrentPage('home');
  }, []);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('visited');

    if (isFirstVisit) {
       setIsLoading(false);
    } else {
      localStorage.setItem('visited', 'true');
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
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
        <nav className="mobile__nav">
          <ul className="mobile__nav-list">
            {homePageNavItems.map((item) => (
              <li key={item.id} className="mobile__nav-item">
                <NavLink
                  to={item.href}
                  className="mobile__nav-link"
                  onClick={handleMenuState}
                >
                  <span>.</span>{`${item.label}`}
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
              <p className="mobile__nav-link"><span>.</span>to start</p>
            </button>
          </ul>
          <div className="social__links">
            <ul className="social__nav-list">
              <li className="social__nav-item">
                <Link
                  to="https://www.linkedin.com/in/pavlomaistrenko/"
                  className="social__nav-link linkedin"
                  target="_blank"
                />
              </li>
              <li className="social__nav-item">
                <Link
                  to="https://github.com/PaulMaistrenko"
                  className="social__nav-link git-hub"
                  target="_blank"
                />
              </li>
            </ul>
          </div>
        </nav>
      )}
    </section>
  );
};
