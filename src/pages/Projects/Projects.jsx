import { Link } from 'react-router-dom';
import './Projects';
import { useEffect } from 'react';
import { scrollToTop } from '../../utils/scrollToTop';
import { useMainContext } from '../../context/MainContext';
import { BackLink } from '../../components/BackLink/BackLink';

export const Projects = () => {
  const { setCurrentPage } = useMainContext();

  useEffect(() => {
    scrollToTop();
    setCurrentPage('projects');
  }, []);

  return (
    <div className="page projects">
      <div className="container">
        <BackLink />
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
          <div className="projects-page-section-top__left">
            <p className="projects-page-section__title text-accent">
              Landing pages...
            </p>
          </div>
          <div className="projects-page-section__content">
            <div className="project__content-top">
              <h2 className="project-name text-primary">Strategic Agency</h2>
              <div className="project__socials">
                <Link
                  to="https://paulmaistrenko.github.io/layout_dia/"
                  target="_blank"
                  className="project__social-link project-link"
                />
                <Link
                  to="https://github.com/PaulMaistrenko/layout_dia/tree/develop/src"
                  target="_blank"
                  className="project__social-link project__git-link"
                />
              </div>
            </div>
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
            <Link
              to="https://paulmaistrenko.github.io/layout_dia/"
              className="project-image landings__image"
              target="_blank"
            />
            <div className="slider-arrows">
              <button className="slider-arrow left" />
              <button className="slider-arrow right" />
            </div>
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
      </div>
    </div>
  );
};
