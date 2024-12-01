import { useContext } from 'react';
import './Header';
import classNames from 'classnames';
import { MainContext } from '../../context/MainContext';

export const Header = () => {
  const {
    isStarted,
    setIsStarted,
  } = useContext(MainContext);

  const handleStartButton = () => {
    setIsStarted(!isStarted);
  }

  return (
    <header
      className={classNames('header container', {
        'header__border-bottom--active': isStarted,
        'fade-slide-out': isStarted,
      })}
    >
      <div className="header__mobile">
        <button
          className={classNames('start-button', {
            'start-button--active': isStarted,
          })}
          onClick={handleStartButton}
        />
      </div>
    </header>
  );
};
