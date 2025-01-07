import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../translations/en.json';
import deTranslation from '../translations/de.json';
import ukTranslation from '../translations/uk.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true, // Показывать отладочные сообщения в консоли (включите только в разработке)
    interpolation: {
      escapeValue: false, // Не экранируйте строки, React это делает автоматически
    },
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
      uk: { translation: ukTranslation },
    },
  });

export default i18n;
