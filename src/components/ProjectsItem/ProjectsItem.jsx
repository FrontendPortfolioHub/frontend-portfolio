import './ProjectsItem';

import { ArrowButton } from '../UI/ArrowButton/ArrowButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

export const ProjectsItem = ({ projectsItem }) => {
  const { type, description, technologies, projects, backImage } = projectsItem;
  const [isProjectsCardOpen, setIsOpenProjectsCardOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX === null) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setStartX(null);
    } else if (diffX < -50) {
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
          <div className="projects-card__top">
            <h2 className="projects-card__title">
              {projects[currentIndex].title}
            </h2>
            <div className="projects-card__links">
              <Link
                to={projects[currentIndex].projectLink}
                className="projects-card__link project-link"
              />
              <Link
                to={projects[currentIndex].codeLink}
                className="projects-card__link project-git-link"
              />
            </div>
          </div>
          <Link
            to={projects[currentIndex].projectLink}
            target='_blank'
            className={`projects-card__image ${projects[currentIndex].backImageLink}`}
          />
          {projects.length > 1 && (
            <div className="dots-container">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentIndex ? 'dot--active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
