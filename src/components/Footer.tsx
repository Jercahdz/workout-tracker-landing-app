import { useLanguage } from '../i18n/LanguageContext'

const APP_REPO = 'https://github.com/Jercahdz/workout-tracker-app'
const API_REPO = 'https://github.com/Jercahdz/workout_tracker_api'

export function Footer() {
  const { content } = useLanguage()
  const { footer } = content

  return (
    <footer className="px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 font-mono text-xs text-text-dim sm:flex-row">
        <span>{footer.tagline} © {new Date().getFullYear()}</span>
        <div className="flex gap-6">
          <a href={APP_REPO} className="transition hover:text-accent">{footer.appLink}</a>
          <a href={API_REPO} className="transition hover:text-accent">{footer.apiLink}</a>
        </div>
      </div>
    </footer>
  )
}