import { Link, NavLink } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import './MenuPage';
import { menuPageNavItems } from '../../data/menuPageNavItems';

export const MenuPage = () => {
  const handleMenuState = () => {
    scrollToTop();
  };

  return (
    <div className="menu-page">
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
          {/*<li className="mobile__nav-item">
            <a
              href="/files/CV Frontend Dev Pavlo Maistrenko.pdf"
              download="CV Frontend Dev Pavlo Maistrenko.pdf"
              className="mobile__nav-link mobile__nav-button"
            >
              Download-CV
            </a>
          </li>-->*/}
        </ul>
        <div className="social__links">
          <ul className="social__nav-list">
            <li className="social__nav-item">
              <Link className="social__nav-link linkedin" />
            </li>
            <li className="social__nav-item">
              <Link className="social__nav-link git-hub" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
