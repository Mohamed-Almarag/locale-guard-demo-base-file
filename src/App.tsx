import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Room } from './Room'
import { languages } from './i18n'

export function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.documentElement.dir = i18n.dir()
  }, [i18n, i18n.language])

  return (
    <>
      <header>
        <h1>{t('appName')}</h1>
        <label>
          {t('language')}
          <select value={i18n.language} onChange={(event) => i18n.changeLanguage(event.target.value)}>
            {languages.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </header>
      <main>
        <Room />
      </main>
    </>
  )
}
