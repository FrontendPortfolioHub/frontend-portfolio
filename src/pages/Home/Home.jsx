import { useContext, useEffect, useState } from 'react';
import './Home';
import { MenuPage } from '../MenuPage/MenuPage';
import classNames from 'classnames';
import { MainContext } from '../../context/MainContext';


export const Home = () => {
  const {
    isStarted,
  } = useContext(MainContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isStarted]);

  return (
    <div className="home-page">
      <div className="container">
        {(!isLoading || !isStarted) ? (
          <div
            className={classNames('home-page__content', {
              'home-page__content--active': isStarted,
            })}
          >
            <h1 className="home-page__title text-primary">
              I'M <br /> Pavlo Maistrenko
            </h1>
            <h2 className="home-page__subtitle">Frontend Developer</h2>
            <p className="text-accent">
              with passion to creating and improving
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </p>
          </div>
        ) : (
          <MenuPage />
        )}
      </div>
    </div>
  );
};
