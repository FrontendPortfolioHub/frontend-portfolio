import { Link } from 'react-router-dom';
import './About';
import { scrollToTop } from '../../utils/scrollToTop';
import { useState } from 'react';
import classNames from 'classnames';

export const About = () => {
  const [isMoreInfoOpen, setMoreInfoOpen] = useState(false);

  return (
    <div className="about-page">
      <div className="container">
        <Link className="back__link text-accent" to="/">
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
          <button
            onClick={() => setMoreInfoOpen(true)}
            className={classNames(
              'additional-information__button text-accent',
              {
                'button--hidden': isMoreInfoOpen,
              },
            )}
          >
            <span>...</span>more
          </button>
        </article>
        <article
          className={classNames('additional-information', {
            hidden: !isMoreInfoOpen,
          })}
        >
          <h2 className="additional-information__title text-primary">
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
            <button
              onClick={() => setMoreInfoOpen(false)}
              className="additional-information__button text-accent"
            >
              <span>...</span>less
            </button>
          </p>
        </article>
        <ul className="features__list">
          <li className="features__item">
            <div className="features-item__top">
              <p className="feature__title text-accent">My education...</p>
            </div>
            <div className="feature__content">
              <ul className="feature-content__list">
                <li className="feauture-content__item">
                  Master's Degree in Electronic Industry
                </li>
                <li className="feauture-content__item">Frontend Development</li>
                <li className="feauture-content__item">
                  ...many days of practice and experimenting.
                </li>
              </ul>
            </div>
          </li>
          <li className="features__item">
            <div className="features-item__top">
              <p className="feature__title text-accent">What I know...</p>
            </div>
            <div className="feature__content">
              <ul className="feature-content__list">
                <li className="feauture-content__item">
                  JavaScript,TypeScript
                </li>
                <li className="feauture-content__item">React, Redux</li>
                <li className="feauture-content__item">HTML,CSS,Sass(SCSS)</li>
                <li className="feauture-content__item">Bootstrap,Bulma</li>
                <li className="feauture-content__item">
                  Fetch, Axios, REST API
                </li>
                <li className="feauture-content__item">Figma</li>
                <li className="feauture-content__item">
                  Git/GitHub, VS Code, Chrome Developer Tools (incl. React)
                </li>
                <li className="feauture-content__item">
                  Basic OOP understanding
                </li>
                <li className="feauture-content__item">
                  Jira, Trello, Сonfluence (Atlassian Products)
                </li>
              </ul>
            </div>
          </li>
          <li className="features__item">
            <div className="features-item__top">
              <p className="feature__title text-accent">My future way...</p>
            </div>
            <div className="feature__content">
              <ul className="feature-content__list">
                <li className="feauture-content__item">Backend Development</li>
                <li className="feauture-content__item">UX/UI Design</li>
                <li className="feauture-content__item">DevOps</li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="about-page__footer">
          <button className="cv-button text-accent">download cv...</button>
        </div>
        <nav className="about-page__nav">
          <ul className="about-page__nav-list">
            <li className="about-page__nav-item">
              <Link
                to="/"
                className="about-page__nav-link menu-link text-accent"
              >
                ...menu
              </Link>
            </li>
            <li className="about-page__nav-item">
              <Link
                to="/projects"
                className="about-page__nav-link projects-link text-accent"
              >
                projects...
              </Link>
            </li>
            <li className="about-page__nav-item">
              <button
                onClick={() => scrollToTop()}
                className="about-page__nav-link top-link text-accent"
              >
                ...to top
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
