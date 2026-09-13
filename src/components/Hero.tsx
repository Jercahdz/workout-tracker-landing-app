import { Download } from 'lucide-react'
import { LevelBar } from './LevelBar'
import { useLanguage } from '../i18n/LanguageContext'
import homeImg from '../assets/screenshots/home.jpg'

const GITHUB_URL = 'https://github.com/Jercahdz/workout-tracker-app'
const APK_URL = 'https://github.com/Jercahdz/workout-tracker-landing-app/releases/latest'

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  )
}

export function Hero() {
  const { content } = useLanguage()
  const { hero } = content

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <span className="font-mono text-xs tracking-[0.3em] text-accent">{hero.eyebrow}</span>
          <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] tracking-tight text-text sm:text-6xl lg:text-7xl">
            {hero.headlineLine1}
            <br />
            {hero.headlineLine2}
            <br />
            <span className="text-accent">{hero.headlineLine3}</span>
          </h1>
          <p className="mt-6 max-w-md font-body text-base text-text-muted">{hero.subcopy}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={APK_URL} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition hover:bg-accent-dim">
              <Download size={16} />
              {hero.ctaPrimary}
            </a>
            <a href={GITHUB_URL} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm text-text transition hover:border-accent hover:text-accent">
              <GithubIcon />
              {hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-14">
            <LevelBar tiers={hero.tiers} currentTier={1} progress={64} />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[300px]">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface p-3 shadow-2xl shadow-black/60">
            <img
              src={homeImg}
              alt={hero.headlineLine1 + ' ' + hero.headlineLine2}
              className="aspect-[9/19] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}