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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX === null) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setStartX(null);
    } else if (diffX < -50) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
      );
      setStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

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
        <div
          className="projects-card"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="projects-list-item__top">
            <h2
              className="projects-list-item__title"
            >
              {projects[currentIndex].title}
            </h2>
            <div className="projects-list-item__links">
              <Link
                to={projects[currentIndex].projectLink}
                className="projects-list-item__link project-link"
              />
              <Link
                to={projects[currentIndex].codeLink}
                className="projects-list-item__link project-git-link"
              />
            </div>
          </div>
          <Link
            style={{
              transition: isTransitioning
                ? 'background-image 0.5s ease-in-out'
                : 'none',
            }}
            className={`projects-list-item__image ${projects[currentIndex].backImageLink}`}
          />
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
