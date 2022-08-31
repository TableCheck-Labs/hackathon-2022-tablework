import { LocaleCode, ordered as orderedLocales } from '@tablecheck/locales';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';

import 'moment/locale/ar';
import 'moment/locale/de';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/id';
import 'moment/locale/it';
import 'moment/locale/ja';
import 'moment/locale/ko';
import 'moment/locale/lo';
import 'moment/locale/ms';
import 'moment/locale/pt';
import 'moment/locale/ru';
import 'moment/locale/th';
import 'moment/locale/tl-ph';
import 'moment/locale/tr';
import 'moment/locale/vi';
import 'moment/locale/zh-cn';
import 'moment/locale/zh-tw';

const SUPPORTED_LOCALES = orderedLocales.map(({ code }) => code);
const DEFAULT_LOCALE = LocaleCode.English;

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use({
    type: 'backend',
    read<Namespace extends keyof typeof en>(
      language: LocaleCode,
      namespace: Namespace,
      callback: (
        errorValue: unknown,
        translations: null | typeof en[Namespace]
      ) => void
    ) {
      import(`./locales/${language}.json`)
        .then((resources) => {
          moment.locale(language);
          // eslint-disable-next-line promise/no-callback-in-promise
          callback(null, resources);
        })
        .catch((error) => {
          // eslint-disable-next-line promise/no-callback-in-promise
          callback(error, null);
        });
    }
  });

export async function initI18n(): Promise<typeof i18next> {
  if (!i18next.isInitialized) {
    await i18next.init({
      resources: { en: { translations: en } },
      partialBundledLanguages: true,
      fallbackLng: DEFAULT_LOCALE,
      supportedLngs: [...SUPPORTED_LOCALES],
      ns: ['translations'],
      defaultNS: 'translations',
      debug: CONFIG.isDevelopment,
      interpolation: {
        escapeValue: false // not needed for react!!
      },
      react: {
        useSuspense: false
      }
    });
  }

  return i18next;
}

export function getI18nextInstance(): typeof i18next {
  if (!i18next.isInitialized)
    throw new Error("i18next hasn't been initialized yet");
  return i18next;
}
