import { useLanguage } from '../i18n/LanguageContext'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs transition hover:border-accent"
      aria-label="Toggle language"
    >
      <span className={language === 'es' ? 'text-accent' : 'text-text-dim'}>ES</span>
      <span className="text-text-dim">/</span>
      <span className={language === 'en' ? 'text-accent' : 'text-text-dim'}>EN</span>
    </button>
  )
}