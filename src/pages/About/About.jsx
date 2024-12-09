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
        <p className="greeting text-accent">Hi, my name is</p>
        <p className="name text-primary">Pavlo Maistrenko</p>
        <article className="short-description text-secondary">
          Since 2021, I’ve enjoyed creating efficient and intuitive solutions in
          frontend development. When I'm not coding, I'm learning something new,
          traveling, or working out.
          <button className="more-information__button text-accent"><span>...</span>more</button>
        </article>
      </div>
    </div>
  );
};
