import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (window.innerWidth < 1154) {
      setIsVisible(true);
    }
  }, [isVisible]);

  const closeNotification = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="notification">
        <h3 className="notification__title text-accent">{t('Sorry')}</h3>
        <p className="notification__text text-primary">
          {t(
            'Notification text',
          )}
        </p>
        <button
          className="close-notification-button text-accent"
          onClick={closeNotification}
        >
          {t(`${'close'}...`)}
        </button>
      </div>
    )
  );
};
