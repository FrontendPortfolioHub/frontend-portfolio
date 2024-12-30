import './ProjectsItem';

import StrategicAgency from '../../assets/images/projects/DIA_landing.png';
import { ArrowButton } from '../UI/ArrowButton/ArrowButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import { ProjectCard } from '../ProjectCard';

export const ProjectsItem = ({ projectsItem }) => {
  const { type, description, technologies, projects } = projectsItem;
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
          <div className="projects-slider">
            <div className="projects-slider__screen">
              <ul className="projects-list">
                {projects.map((project) => (
                  <li key={project.title} className="projects-list__item">
                    <ProjectCard project={project} />
                  </li>
                ))}
              </ul>
            </div>
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
