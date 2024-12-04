import { Link } from 'react-router-dom';
import './About';

export const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <Link className='start-page__link' to="/home">...back</Link>
      </div>
    </div>
  );
};
