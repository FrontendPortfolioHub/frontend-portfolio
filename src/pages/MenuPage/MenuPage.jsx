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
              About
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
            <NavLink
              to="/"
              className="mobile__nav-link"
            >
              Home
            </NavLink>
          </li>
          <li className="mobile__nav-item">
            <NavLink
              to="https://drive.google.com/file/d/1gn8pSq_oSFfB7OU71VvLzV25nurwP1qr/view?usp=drive_link"
              className="mobile__nav-link mobile__nav-button"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
