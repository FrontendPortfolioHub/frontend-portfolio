import { Link } from 'react-router-dom';

import { scrollToTop } from '../../utils/scrollToTop';

import { useMainContext } from '../../context/MainContext';

import { CreaterInfo } from '../CreaterInfo/CreaterInfo';

export const FooterMobile = () => {
  const {currentPage} = useMainContext();

  return (
    <div className="footer-mobile">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <Link to="/" className="footer__nav-link">.menu</Link>
          </li>
          <li className="footer__nav-item">
            {currentPage === 'about' && <Link to="/projects" className="footer__nav-link">.projects</Link>}
            {currentPage === 'projects' && <Link to="/contacts" className="footer__nav-link">.contacts</Link>}
            {currentPage === 'contacts' && <Link to="/about" className="footer__nav-link">.about</Link>}
          </li>
          <li className="footer__nav-item">
            <button onClick={() => scrollToTop()} className="footer__nav-link">.to top</button>
          </li>
        </ul>
      </nav>
      <CreaterInfo />
    </div>
  );
};
