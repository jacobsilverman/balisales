import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import ar from './Data/Assets/i18n/translations/ar.json';
import de from './Data/Assets/i18n/translations/de.json';
import en from './Data/Assets/i18n/translations/en.json';
import es from './Data/Assets/i18n/translations/es.json';
import fr from './Data/Assets/i18n/translations/fr.json';
import hi from './Data/Assets/i18n/translations/hi.json';
import id from './Data/Assets/i18n/translations/id.json';
import is from './Data/Assets/i18n/translations/is.json';
import it from './Data/Assets/i18n/translations/it.json';
import iw from './Data/Assets/i18n/translations/iw.json';
import ja from './Data/Assets/i18n/translations/ja.json';
import ko from './Data/Assets/i18n/translations/ko.json';
import pl from './Data/Assets/i18n/translations/pl.json';
import pt from './Data/Assets/i18n/translations/pt.json';
import ru from './Data/Assets/i18n/translations/ru.json';
import tr from './Data/Assets/i18n/translations/tr.json';
import vi from './Data/Assets/i18n/translations/vi.json';
import zh from './Data/Assets/i18n/translations/zh.json';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: ar
      },
      de: {
        translation: de
      },
      en: {
        translation: en
      },
      es: {
        translation: es
      },
      fr: {
        translation: fr
      },
      hi: {
        translation: hi
      },
      id: {
        translation: id
      },
      is: {
        translation: is
      },
      it: {
        translation: it
      },
      iw: {
        translation: iw
      },
      ja: {
        translation: ja
      },
      ko: {
        translation: ko
      },
      pl: {
        translation: pl
      },
      pt: {
        translation: pt
      },
      ru: {
        translation: ru
      },
      tr: {
        translation: tr
      },
      vi: {
        translation: vi
      },
      zh: {
        translation: zh
      }
    },
    fallbackLng: 'en',
    debug: true,
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    }
  });
export default i18n;