import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

export const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'de', name: 'Deutsch', dir: 'ltr' },
  { code: 'tr', name: 'Türkçe', dir: 'ltr' }
] as const

// English lives in public/lang/main.json, every other language in
// public/lang/main-{language}.json, as in Jitsi Meet. Plurals use i18next
// suffixes: count_one, count_other, and for Arabic also _zero, _two, _few and _many.
void i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      loadPath: (languages: readonly string[]) =>
        languages[0] === 'en' ? '/lang/main.json' : `/lang/main-${languages[0]}.json`
    },
    interpolation: { escapeValue: false }
  })

export default i18n
