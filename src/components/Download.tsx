import { Download as DownloadIcon } from 'lucide-react'
import { LevelBar } from './LevelBar'
import { useLanguage } from '../i18n/LanguageContext'

const APK_URL = 'https://github.com/Jercahdz/workout-tracker-landing-app/releases/latest'

export function DownloadSection() {
  const { content } = useLanguage()
  const { download, hero } = content

  return (
    <section id="download" className="bg-bg px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-3xl border border-border bg-surface px-8 py-16 text-center">
        <span className="font-mono text-xs tracking-[0.3em] text-accent">{download.eyebrow}</span>
        <h2 className="font-display text-4xl uppercase leading-tight text-text sm:text-5xl">{download.headline}</h2>
        <p className="max-w-md font-body text-text-muted">{download.paragraph}</p>
        <a href={APK_URL} className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-mono text-sm font-medium text-bg transition hover:bg-accent-dim">
          <DownloadIcon size={18} />
          {download.cta}
        </a>
        <LevelBar tiers={hero.tiers} currentTier={0} progress={12} />
      </div>
    </section>
  )
}