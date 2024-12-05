import './StartPage';
import classNames from 'classnames';

export const StartPage = ({ isLoading }) => {

  return (
    <div className="start-page">
      <div className="container">
        <div
          className={classNames('start-page__content', {
            'start-page__content--active': isLoading,
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
