import { useContext } from 'react';
import './Header';
import classNames from 'classnames';
import { MainContext } from '../../context/MainContext';
import { LanguageSelector } from '../UI/LanguageSelector';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header container">
      <LanguageSelector />
      <nav className="header__nav-bar">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/about" className="heder__nav-link">.about</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/projects" className="heder__nav-link">.projects</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/contacts" className="heder__nav-link">.contacts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
