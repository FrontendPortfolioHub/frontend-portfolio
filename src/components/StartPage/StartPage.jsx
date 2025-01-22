import { useTranslation } from 'react-i18next';
import { MainLogo } from '../UI/MainLogo';
import { useEffect, useState } from 'react';

export const StartPage = () => {
  const [isVisibleLogo, setIsVisibleLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleLogo(true);
    }, 1000);
  }, []);

  const { t } = useTranslation();

  return (
    <div className="start-page">
      <div className="container">
        <MainLogo isVisibleLogo={isVisibleLogo}/>
        <div className="start-page__content">
          <h1 className="start-page__title text-primary">
            I<span>'</span>M <br /> Pavlo Maistrenko
          </h1>
          <p className="start-page__subtitle">{t('position')}</p>
          <p className="text-accent">
            {t('with passion to creating and improving')}
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
