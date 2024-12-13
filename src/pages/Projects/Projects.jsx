import { Link } from 'react-router-dom';
import './Projects';
import { scrollToTop } from '../../utils/scrollToTop';

export const Projects = () => {
  return (
    <div className="projects-page">
      <div className="container">
        <Link className="back__link text-accent" to="/">
          back...
        </Link>
        <h1 className="page__title text-secondary">Projects</h1>
        <article className="projects-page__description text-secondary">
          Here you will find projects that allowed me to learn and develop my
          skills in core technologies such as{' '}
          <span className="text-accent">
            HTML, CSS, JavaScript, React, and much more....
          </span>{' '}
          Each project reflects my journey in mastering and applying new skills,
          as well as my commitment to creating quality solutions.
        </article>
        <section className="projects-page-section landings">
          <div className="projects-page-section-top">
            <div className="projects-page-section-top__left">
              <p className="projects-page-section__title text-accent">
                Landings...
              </p>
            </div>
            <div className="slider-arrows">
              <button className="slider-arrow left" />
              <button className="slider-arrow right" />
            </div>
          </div>
          <div className="projects-page-section__content">
            <div className="project-technologies">
              <ul className="technologies__list">
                <li className="technologies__item">JavaScript</li>
                <li className="technologies__item">HTML,CSS,Sass(SCSS)</li>
                <li className="technologies__item">Figma</li>
                <li className="technologies__item">
                  Git/GitHub, VS Code, Chrome Developer Tools
                </li>
                <li className="technologies__item">BEM</li>
              </ul>
            </div>
            <div className="slider-dots">
              <div className="slider-dot slider-dot--active"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
            </div>
            <div className="project-image landings__image" />
          </div>
        </section>
        <section className="projects-page-section tsk-manager">
          <div className="projects-page-section-top">
            <div className="projects-page-section-top__left">
              <p className="projects-page-section__title text-accent">
                Task manager...
              </p>
            </div>
          </div>
          <div className="projects-page-section__content">
            <div className="project-technologies">
              <ul className="technologies__list">
                <li className="technologies__item">JavaScript,TypeScript</li>
                <li className="technologies__item">HTML,CSS,Sass(SCSS)</li>
                <li className="technologies__item">React</li>
                <li className="technologies__item">Fetch, Axios, REST API</li>
                <li className="technologies__item">Figma</li>
                <li className="technologies__item">
                  Git/GitHub, VS Code, Chrome Developer Tools
                </li>
                <li className="technologies__item">BEM</li>
              </ul>
            </div>
            <div className="project-image tsk-manager__image" />
          </div>
        </section>
        <section className="projects-page-section game">
          <div className="projects-page-section-top">
            <div className="projects-page-section-top__left">
              <p className="projects-page-section__title text-accent">
                Strategy squared...
              </p>
            </div>
          </div>
          <div className="projects-page-section__content">
            <div className="project-technologies">
              <ul className="technologies__list">
                <li className="technologies__item">JavaScript</li>
                <li className="technologies__item">HTML,CSS,Sass(SCSS)</li>
                <li className="technologies__item">Figma</li>
                <li className="technologies__item">
                  Git/GitHub, VS Code, Chrome Developer Tools
                </li>
              </ul>
            </div>
            <div className="project-image game__image" />
          </div>
        </section>
        <section className="projects-page-section online-shop">
          <div className="projects-page-section-top">
            <div className="projects-page-section-top__left">
              <p className="projects-page-section__title text-accent">
                Online-store...
              </p>
            </div>
          </div>
          <div className="projects-page-section__content">
            <div className="project-technologies">
              <ul className="technologies__list">
                <li className="technologies__item">JavaScript,TypeScript</li>
                <li className="technologies__item">HTML,CSS,Sass(SCSS)</li>
                <li className="technologies__item">React</li>
                <li className="technologies__item">Fetch, Axios, REST API</li>
                <li className="technologies__item">
                  Git/GitHub, VS Code, Chrome Developer Tools
                </li>
              </ul>
            </div>
            <div className="project-image online-shop__image" />
          </div>
        </section>
        <nav className="projects-page__nav">
          <ul className="projects-page__nav-list">
            <li className="projects-page__nav-item">
              <Link
                to="/"
                className="projects-page__nav-link menu-link text-accent"
              >
                ...menu
              </Link>
            </li>
            <li className="projects-page__nav-item">
              <Link
                to="/contacts"
                className="projects-page__nav-link contacts-page-link text-accent"
              >
                contacts...
              </Link>
            </li>
            <li className="projects-page__nav-item">
              <button
                onClick={() => scrollToTop()}
                className="projects-page__nav-link top-link text-accent"
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
