import { Link } from 'react-router-dom';
import './ProjectsDesktopItem';
import { useState } from 'react';
import classNames from 'classnames';

export const ProjectsDesktopItem = ({ projectsItem }) => {
  const { type, description, technologies, projects, backImage } = projectsItem;
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="projects-page-item-card projects-page-item">
      <div className="projects-page-item__content">
        <div
          className={`projects-content-front project-type-card--${backImage}`}
        >
          <h3 className="projects-type-card__title text-accent">{type}</h3>
          <div className="projects-type-card__description">{description}</div>
          <ul className="technologies__list">
            {technologies.map((technology) => (
              <li key={technology} className="technologies__item">
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="projects-content-back">
          <div className="projects-card projects-card-desktop">
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
            <div className="projects-card-actions">
              {projects.length > 1 && (
                <button
                  className={classNames('prev-button-desktop', {
                    'prev-button-desktop--disable':
                      currentIndex === 0,
                  })}
                  onClick={() => handlePrevSlide()}
                />
              )}
              <Link
                to={projects[currentIndex].projectLink}
                target="_blank"
                className={`projects-card__image ${projects[currentIndex].backImageLink}`}
              />
              {projects.length > 1 && (
                <button
                  className={classNames('next-button-desktop', {
                    'next-button-desktop--disable':
                      currentIndex === projects.length - 1,
                  })}
                  onClick={() => handleNextSlide()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
