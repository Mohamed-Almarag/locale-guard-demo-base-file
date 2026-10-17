import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Notes } from './Notes'

export function Room() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [joined, setJoined] = useState(false)
  const [muted, setMuted] = useState(false)
  const people = 3

  if (!joined) {
    return (
      <section>
        <h2>{t('lobby.title')}</h2>
        <label>
          {t('lobby.nameLabel')}
          <input value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <button type="button" disabled={!name} onClick={() => setJoined(true)}>
          {t('lobby.join')}
        </button>
      </section>
    )
  }

  return (
    <section>
      <h2>{t('room.welcome', { name })}</h2>
      <p>{t('room.people', { count: people })}</p>
      <div role="toolbar">
        <button type="button" onClick={() => setMuted(!muted)}>
          {muted ? t('toolbar.unmute') : t('toolbar.mute')}
        </button>
        <button type="button">{t('toolbar.camera')}</button>
        <button type="button" onClick={() => setJoined(false)}>
          {t('toolbar.leave')}
        </button>
      </div>
      <Notes />
    </section>
  )
}
