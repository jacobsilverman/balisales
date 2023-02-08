import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './Data/Assets/i18n/translations/en.json';
import es from './Data/Assets/i18n/translations/es.json';
import iw from './Data/Assets/i18n/translations/iw.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      },
      iw: {
        translation: iw
      }
    },
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });
export default i18n;