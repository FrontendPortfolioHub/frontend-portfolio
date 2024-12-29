import './ProjectsItem';

import StrategicAgency from '../../assets/images/projects/DIA_landing.png';
import { ArrowButton } from '../UI/ArrowButton/ArrowButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

export const ProjectsItem = ({ projectsItem }) => {
  const {
    type,
    description,
    technologies,
    projects,
  } = projectsItem;
  const [isProjectsCardOpen, setIsOpenProjectsCardOpen] = useState(false);

  return (
    <>
      <div className="project-type-card">
        <h3 className="projects-type-card__title text-accent">{type}</h3>
        <div className="projects-type-card__description">{description}</div>
        <div className="projects-type-card__bottom">
          <ul className="technologies__list">
            {technologies.map((technology) => (
              <li key={technology} className="technologies__item">
                {technology}
              </li>
            ))}
          </ul>
          <ArrowButton
            isProjectsCardOpen={isProjectsCardOpen}
            setIsOpenProjectsCardOpen={setIsOpenProjectsCardOpen}
          />
        </div>
      </div>
      {isProjectsCardOpen && (
        <div className="projects-card">
          <div className="projects-card__slider">
            <ul className="projects-list">
              {projects.map((project) => (
                <li key={project.title} className="projects-list__item">
                  <div className="projects-list-item__top">
                    <h2 className="projects-list-item__title">
                      {project.title}
                    </h2>
                    <div className="projects-list-item__links">
                      <Link
                        to={project.projectLink}
                        className="projects-list-item__link project-link"
                      />
                      <Link  to={project.codeLink} className="projects-list-item__link project-git-link" />
                    </div>
                  </div>
                  <Link className={`projects-list-item__image ${project.backImageLink}`} />
                </li>
              ))}
            </ul>
            {projects.length > 1 && (
              <div className="slider-dots">
                <div className="slider-dots__item slider-dots__item--active"></div>
                <div className="slider-dots__item"></div>
                <div className="slider-dots__item"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
