import { useEffect, useState } from 'react';
import './StartPage';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export const StartPage = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsRedirecting(true);
    const timer = setTimeout(() => {
      navigate('/home');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
          <p className="start-page__subtitle">Frontend Developer</p>
          <p className="text-accent">
            with passion to creating and improving
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
