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
    <header>
      Header
    </header>
  );
};
