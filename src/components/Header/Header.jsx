import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/navItems';
import './Header';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <button className="language-switcher"></button>
        <nav class="navbar">
          <ul class="navbar__list">
            {navItems.map((item) => (
              <li key={item.id} class="navbar__item">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'navbar__link navbar__link--active'
                      : 'navbar__link'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button className="theme-switcher"></button>
      </div>
    </header>
  );
};
