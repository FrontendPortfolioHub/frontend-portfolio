import { Link, NavLink } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import './Home';
import { menuPageNavItems } from '../../data/menuPageNavItems';
import { StartPage } from '../../components/StartPage/StartPage';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('visited');

    if (isFirstVisit) {
      // Если пользователь уже был на странице, сразу показываем Home
      setIsLoading(false);
    } else {
      // Если это первый визит, показываем StartPage с задержкой
      localStorage.setItem('visited', 'true');
      setTimeout(() => {
        setIsLoading(false); // Через 3 секунды показываем Home
      }, 3000); // 3000 миллисекунд = 3 секунды
    }
  }, []);

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
            {menuPageNavItems.map((item) => (
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
