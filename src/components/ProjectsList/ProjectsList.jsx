import { Link } from 'react-router-dom';
import './ProjectsList';

export const ProjectsList = ({ projects }) => {

  return (
    <ul className="projects__list">
      {projects.map((project) => (
        <li className="projects__item" key={project.title}>
          <div className="projects__item-content">
            <div className="project__content-top">
              <h2 className="project-name text-primary">{project.title}</h2>
              <div className="project__socials">
                <Link
                  to={project.projectLink}
                  target="_blank"
                  className="project__social-link project-link"
                />
                <Link
                  to={project.codeLink}
                  target="_blank"
                  className="project__social-link project__git-link"
                />
              </div>
            </div>
            <div className="project-technologies">
              <ul className="technologies__list">
                {project.technologies.map((technology) => (
                  <li key={technology} className="technologies__item">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to={project.projectLink}
              className={`project-image ${project.backImageLink}`}
              target="_blank"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
