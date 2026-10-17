import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Notes() {
  const { t } = useTranslation()
  const [notes, setNotes] = useState<string[]>([])

  return (
    <aside>
      <h3>{t('notes.title')}</h3>
      <p>{t('notes.count', { count: notes.length })}</p>
      <button type="button" onClick={() => setNotes([...notes, ''])}>
        {t('notes.add')}
      </button>
    </aside>
  )
}
