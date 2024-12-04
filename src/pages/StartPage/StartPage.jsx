import { useRef, useState } from 'react';
import './StartPage';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { StartButton } from '../../components/StartButton';

export const StartPage = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const handleRedirect = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsRedirecting(true);
    timeoutRef.current = setTimeout(() => {
      navigate('/home');
    }, 4000);
  };

  return (
    <div className="start-page">
      <div className="container">
        <div
          className={classNames('start-page__content', {
            'start-page__content--active': isRedirecting,
          })}
        >
          <h1 className="start-page__title text-primary">
            I'M <br /> Pavlo Maistrenko
          </h1>
          <h2 className="start-page__subtitle">Frontend Developer</h2>
          <p className="text-accent">
            with passion to creating and improving
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </div>
        <StartButton handleRedirect={handleRedirect} />
      </div>
    </div>
  );
};
