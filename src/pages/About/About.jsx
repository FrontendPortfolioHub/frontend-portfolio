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
          <button className="additional-information__button text-accent">
            <span>...</span>more
          </button>
        </article>
        <article className="additional-information">
          <h2 className="additional-information__title">
            How I became a Frontend Deweloper
          </h2>
          <p className="additional-information__text text-secondary">
            I dedicated a significant part of my career to collaborating with
            international companies in the field of trade. This experience
            exposed me to innovative technological solutions, sparking a deep
            interest in the rapidly evolving field of information technology.
            Inspired by this exposure and enriched by my professional journey, I
            honed qualities such as determination, perseverance, and
            resilience—traits that became the cornerstone of my personal and
            professional growth.
            <br /> In 2021, driven by curiosity and a passion for the exact
            sciences, I embarked on a transformative journey into web
            development. This decision marked a pivotal moment in my life,
            allowing me to blend an analytical mindset with a creative approach
            to problem-solving. The immense opportunities and prospects offered
            by modern web technologies solidified my commitment to this field.
            <br />
            Frontend development, in particular, inspires me. The ability to see
            tangible results almost instantly and to infuse creativity into
            technical solutions continues to fuel my passion for growth and
            self-improvement.
            <br /> Outside of my professional pursuits, I enjoy traveling and
            exploring new places. These experiences provide fresh perspectives
            and inspiration, enriching both my personal and professional
            endeavors.
            <button className="additional-information__button text-accent">
              <span>...</span>less
            </button>
          </p>
        </article>
      </div>
    </div>
  );
};
