import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import './MenuPage';

export const MenuPage = () => {
  const handleMenuState = () => {
    scrollToTop();
  };

  return (
    <div className="menu-page">
      <nav className="mobile__nav">
        <ul className="mobile__nav-list">
          <li className="mobile__nav-item">
            <NavLink
              to="/about"
              className="mobile__nav-link"
              onClick={handleMenuState}
            >
              About my
            </NavLink>
          </li>
          <li className="mobile__nav-item">
            <NavLink
              to="/projects"
              className="mobile__nav-link"
              onClick={handleMenuState}
            >
              Projects
            </NavLink>
          </li>
          <li className="mobile__nav-item">
            <NavLink
              to="/contacts"
              className="mobile__nav-link"
              onClick={handleMenuState}
            >
              Contacts
            </NavLink>
          </li>
          <li className="mobile__nav-item">
            <a
              href="/files/CV Frontend Dev Pavlo Maistrenko.pdf"
              download="CV Frontend Dev Pavlo Maistrenko.pdf"
              className="mobile__nav-link mobile__nav-button"
            >
              Download-CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
