import { Link } from 'react-router-dom';
import './ProjectsPageItem';
import { useState } from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

export const ProjectsPageItem = ({ projectsItem }) => {
  const { type, description, technologies, projects, backImage } = projectsItem;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const handleNextSlide = () => {
    if (currentIndex === projects.length - 1) {
      return;
    }
    setCurrentIndex((prewIndex) => (prewIndex + 1) % projects.length);
  };

  const handlePrevSlide = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(
      (prewIndex) => (prewIndex - 1 + projects.length) % projects.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="projects-card__inner">
      <div className={`projects-card-front projects-card-front--${backImage}`}>
        <div className="projects-card-front__content">
          <h3 className="projects-card-front__title text-accent">{type}</h3>
          <div className="projects-card-front__description text-primary">
            {description}
          </div>
          <ul className="technologies__list">
            {technologies.map((technology) => (
              <li key={technology} className="technologies__item text-primary">
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="projects-card-back">
        <div className="projects-card-back__top">
          <h2 className="project-card__title">
            {projects[currentIndex].title}
          </h2>
          <div className="project-card__links">
            <Link
              to={projects[currentIndex].projectLink}
              className="project-card__link project-link"
            />
            <Link
              to={projects[currentIndex].codeLink}
              className="project-card__link project-git-link"
            />
          </div>
        </div>
        <div className="projects-card-back__bottom">
          <div className="projects-card-back__action">
            {projects.length > 1 && (
              <button
                className={classNames('prev-button', {
                  'prev-button--disable': currentIndex === 0,
                })}
                onClick={() => handlePrevSlide()}
              />
            )}
            <Link
              to={projects[currentIndex].projectLink}
              target="_blank"
              className={`project__image ${projects[currentIndex].backImageLink}`}
            />
            {projects.length > 1 && (
              <button
                className={classNames('next-button', {
                  'next-button--disable': currentIndex === projects.length - 1,
                })}
                onClick={() => handleNextSlide()}
              />
            )}
          </div>
          {projects.length > 1 && !isDesktop && (
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
      </div>
    </div>
  );
};
