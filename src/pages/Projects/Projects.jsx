import './Projects';
import { useEffect, useState } from 'react';
import { scrollToTop } from '../../utils/scrollToTop';
import { useMainContext } from '../../context/MainContext';
import { BackLink } from '../../components/BackLink/BackLink';
import { projectsData } from '../../data/projectsData';
import { ProjectsMobileItem } from '../../components/ProjectsMobileItem/ProjectsMobileItem';
import { useMediaQuery } from 'react-responsive';
import { ProjectsDesktopItem } from '../../components/ProjectsDesktopItem/ProjectsDesktopItem';

export const Projects = () => {
  const { setCurrentPage } = useMainContext();
  const isDesktop = useMediaQuery({ query: '(max-width: 1279px)' });

  useEffect(() => {
    scrollToTop();
    setCurrentPage('projects');
  }, []);

  return (
    <section id="projects" className="page projects">
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
        {isDesktop ? (
          <ul className="projects-page-list">
            {projectsData.map((projectsItem) => (
              <li key={projectsItem.id} className="projects-page-item">
                <ProjectsMobileItem projectsItem={projectsItem} />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="projects-page-list">
            {projectsData.map((projectsItem) => (
              <li key={projectsItem.id} className="projects-page-item--desktop">
                <ProjectsDesktopItem projectsItem={projectsItem}/>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
