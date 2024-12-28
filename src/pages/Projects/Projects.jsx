import { Link } from 'react-router-dom';
import './Projects';
import { useEffect } from 'react';
import { scrollToTop } from '../../utils/scrollToTop';
import { useMainContext } from '../../context/MainContext';
import { BackLink } from '../../components/BackLink/BackLink';
import { ProjectsList } from '../../components/ProjectsList/ProjectsList';
import { projectsData } from '../../data/projectsData';
import { ArrowButton } from '../../components/UI/ArrowButton/ArrowButton';

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
        {/*<ul className="project-type__list">
          {projectsData.map((projectsTypeItem) => (
            <li key={projectsTypeItem.id} className="project-type__item">
              <div className="project-type__title text-accent">
                {projectsTypeItem.type}
              </div>
              <div className="project-type__content">
                <ProjectsList projects={projectsTypeItem.projects} />
              </div>
            </li>
          ))}
        </ul>*/}
        <article className="project-type-card">
          <h3 className="project-type-card__title text-accent">Landing pages</h3>
          <div className="project-type-card__description">
            Pixel-perfect adaptive landing pages: crisp design, flawless
            responsiveness, maximum conversion.
          </div>
          <div className="project-type-card__bottom">
            <ul className="technologies__list">
              <li className="technologies__item">JavaScript</li>
              <li className="technologies__item">HTML,CSS,Sass(SCSS)</li>
              <li className="technologies__item">Figma</li>
              <li className="technologies__item">Git/GitHub, VS Code, Chrome Developer Tools</li>
              <li className="technologies__item">BEM</li>
            </ul>
            <ArrowButton />
          </div>
        </article>
      </div>
    </div>
  );
};
