import { Link, NavLink } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import './Home';
import { menuPageNavItems } from '../../data/menuPageNavItems';

export const Home = () => {
  const handleMenuState = () => {
    scrollToTop();
  };

  return (
    <div className="home-page">
      <nav className="mobile__nav">
        <ul className="mobile__nav-list">
          {menuPageNavItems.map((item) => (
            <li key={item.id} className="mobile__nav-item">
              <NavLink
                to={item.href}
                className="mobile__nav-link"
                onClick={handleMenuState}
              >
                {`.${item.label}`}
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
    </div>
  );
};
