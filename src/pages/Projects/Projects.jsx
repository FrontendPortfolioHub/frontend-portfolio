import { Link } from 'react-router-dom';
import './Projects';

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
              <div className="slider-arrows__line" />
              <button className="slider-arrow right" />
            </div>
          </div>
          <div className="projects-page-section__content">
            <div className="project__technologies"></div>
            <div className="slider-dots">
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
              <div className="slider-dot"></div>
            </div>
            <div className="project-image" />
          </div>
        </section>
      </div>
    </div>
  );
};
