import { Link } from 'react-router-dom';
import './FooterMobile';
import { scrollToTop } from '../../utils/scrollToTop';

export const FooterMobile = () => {
  return (
    <div className="footer-mobile">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <Link to="/" className="footer__nav-link">.menu</Link>
          </li>
          <li className="footer__nav-item">
            <Link to="/contacts" className="footer__nav-link">.contacts</Link>
          </li>
          <li className="footer__nav-item">
            <button onClick={() => scrollToTop()} className="footer__nav-link">.to top</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
