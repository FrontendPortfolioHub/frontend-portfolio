import './ProjectsItem';

import StrategicAgency from '../../assets/images/projects/DIA_landing.png';
import { ArrowButton } from '../UI/ArrowButton/ArrowButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import { ProjectCard } from '../ProjectCard';

export const ProjectsItem = ({ projectsItem }) => {
  const { type, description, technologies, projects, backImage } = projectsItem;
  const [isProjectsCardOpen, setIsOpenProjectsCardOpen] = useState(false);

  return (
    <>
      <div
        className={classNames(
          `project-type-card project-type-card--${backImage}`,
          {
            'position--static': isProjectsCardOpen,
          },
        )}
      >
        <h3 className="projects-type-card__title text-accent">{type}</h3>
        <div
          className={classNames('projects-type-card__description', {
            'text-secondary': isProjectsCardOpen,
          })}
        >
          {description}
        </div>
        <div className="projects-type-card__bottom">
          <ul className="technologies__list">
            {technologies.map((technology) => (
              <li
                key={technology}
                className={classNames('technologies__item', {
                  'text-secondary': isProjectsCardOpen,
                })}
              >
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
          <div className="projects-list-item__top">
            <h2 className="projects-list-item__title">Strategic Agency</h2>
            <div className="projects-list-item__links">
              <Link
                to="https://paulmaistrenko.github.io/layout_dia/"
                className="projects-list-item__link project-link"
              />
              <Link
                to="https://github.com/PaulMaistrenko/layout_dia/tree/develop/src"
                className="projects-list-item__link project-git-link"
              />
            </div>
          </div>
          <Link className={`projects-list-item__image strategic-agency`} />
          {/*<div className="projects-slider">
            <div
              className={classNames('projects-slider__screen', {
                'justify-content--start': projects.length > 1,
              })}
            >
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
          </div>*/}
        </div>
      )}
    </>
  );
};
