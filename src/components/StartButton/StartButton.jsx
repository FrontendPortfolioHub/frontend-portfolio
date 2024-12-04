import classNames from 'classnames';
import './StartButton';
import { useState } from 'react';

export const StartButton = ({ handleRedirect }) => {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <button
      className={classNames('start-button', {
      'start-button--active': isActivated,
    })}
      onClick={() => {
        handleRedirect();
        setIsActivated(true);
      }}
    >
      start
    </button>
  )
}