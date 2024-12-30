import { Link } from 'react-router-dom';
import './ProjectCard';

export const ProjectCard = ({project}) => {
  return (
    <>
      <div className="projects-list-item__top">
        <h2 className="projects-list-item__title">{project.title}</h2>
        <div className="projects-list-item__links">
          <Link
            to={project.projectLink}
            className="projects-list-item__link project-link"
          />
          <Link
            to={project.codeLink}
            className="projects-list-item__link project-git-link"
          />
        </div>
      </div>
      <Link className={`projects-list-item__image ${project.backImageLink}`} />
    </>
  );
};
