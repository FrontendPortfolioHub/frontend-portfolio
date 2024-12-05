import { Link } from 'react-router-dom';
import './About';

export const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <Link className="start-page__link text-accent" to="/">
          back...
        </Link>
        <h1 className="page__title text-secondary">About</h1>
        <div className="about-page__image"></div>
      </div>
    </div>
  );
};
