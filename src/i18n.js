import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// //local imports
import ru from './locales/ru.json';
import kg from './locales/kg.json';

let language = localStorage.getItem('language');

if (language === undefined) {
    language = 'ru';
}

i18n.use(initReactI18next).init({
    resources: {
        ru: { translations: ru },
        kg: { translations: kg },
    },
    fallbackLng: 'ru',
    lng: 'ru',
    // debug only when not in production
    debug: process.env.NODE_ENV !== 'production',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
    react: {
        wait: true,
    },
});

export default i18n;