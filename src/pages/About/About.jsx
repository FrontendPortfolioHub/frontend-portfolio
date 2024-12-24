import './About';
import { scrollToTop } from '../../utils/scrollToTop';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { useMainContext } from '../../context/MainContext';
import { BackLink } from '../../components/BackLink/BackLink';
import { DownloadCvButton } from '../../components/UI/DownloadCvButton/DownloadCvButton';
import { FeaturesItem } from '../../components/FeaturesItem/FeaturesItem';
import { featuresData } from '../../data/aboutPageFeatures';

export const About = () => {
  const { setCurrentPage } = useMainContext();
  const [isMoreInfoOpen, setMoreInfoOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    scrollToTop();
    setCurrentPage('about');
  }, []);

  return (
    <div className="page about">
      <div className="container">
        <BackLink />
        <h1 className="page__title text-secondary">About</h1>
        <div className="about-page__image"></div>
        <p className="greeting text-accent">Hi, my name is</p>
        <p className="name text-primary">Pavlo Maistrenko</p>
        <article className="short-description text-secondary">
          Since 2021, I’ve enjoyed creating efficient and intuitive solutions in
          frontend development. When I'm not coding, I'm learning something new,
          traveling, or working out.
          <button
            onClick={() => setMoreInfoOpen(true)}
            className={classNames(
              'additional-information__button text-accent',
              {
                'button--hidden': isMoreInfoOpen,
              },
            )}
          >
            <span>...</span>more
          </button>
        </article>
        <article
          className={classNames('additional-information', {
            hidden: !isMoreInfoOpen,
          })}
        >
          <h2 className="additional-information__title text-primary">
            How I became a Frontend Deweloper
          </h2>
          <p className="additional-information__text text-secondary">
            I dedicated a significant part of my career to collaborating with
            international companies in the field of trade. This experience
            exposed me to innovative technological solutions, sparking a deep
            interest in the rapidly evolving field of information technology.
            Inspired by this exposure and enriched by my professional journey, I
            honed qualities such as determination, perseverance, and
            resilience—traits that became the cornerstone of my personal and
            professional growth.
            <br /> In 2021, driven by curiosity and a passion for the exact
            sciences, I embarked on a transformative journey into web
            development. This decision marked a pivotal moment in my life,
            allowing me to blend an analytical mindset with a creative approach
            to problem-solving. The immense opportunities and prospects offered
            by modern web technologies solidified my commitment to this field.
            <br />
            Frontend development, in particular, inspires me. The ability to see
            tangible results almost instantly and to infuse creativity into
            technical solutions continues to fuel my passion for growth and
            self-improvement.
            <br /> Outside of my professional pursuits, I enjoy traveling and
            exploring new places. These experiences provide fresh perspectives
            and inspiration, enriching both my personal and professional
            endeavors.
            <button
              onClick={() => setMoreInfoOpen(false)}
              className="additional-information__button text-accent"
            >
              <span>...</span>less
            </button>
          </p>
        </article>
        <ul className="features__list">
          {featuresData.map((item) => (
            <li key={item.id} className="features__item">
              <FeaturesItem title={item.title} features={item.features} />
            </li>
          ))}
        </ul>
        {isMobile && <DownloadCvButton />}
      </div>
    </div>
  );
};
