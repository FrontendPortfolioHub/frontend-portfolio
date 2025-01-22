import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const MainLogo = ({ isVisibleLogo = true }) => {
  return (
    <Link
      className={classNames('main-logo', { 'main-logo--visible': isVisibleLogo })}
    />
  );
};
