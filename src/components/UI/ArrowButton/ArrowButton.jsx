import classNames from 'classnames';
import './ArrowButton';

export const ArrowButton = ({
  isProjectsCardOpen,
  setIsOpenProjectsCardOpen,
}) => {
  return (
    <button
      className={classNames('arrow-button', {
        'arrow-button--up': isProjectsCardOpen,
      })}
      onClick={() => setIsOpenProjectsCardOpen(!isProjectsCardOpen)}
    />
  );
};
