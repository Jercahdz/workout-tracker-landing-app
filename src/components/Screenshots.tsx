import { useLanguage } from '../i18n/LanguageContext'
import type { ScreenshotId } from '../i18n/translations'
import loginImg from '../assets/screenshots/login.jpg'
import homeImg from '../assets/screenshots/home.jpg'
import aiImg from '../assets/screenshots/ai.jpg'
import workoutsImg from '../assets/screenshots/workouts.jpg'
import exercisesImg from '../assets/screenshots/exercises.jpg'
import exercisesDetailImg from '../assets/screenshots/id_exercises.jpg'
import progressImg from '../assets/screenshots/progress.jpg'
import statsImg from '../assets/screenshots/stats.jpg'
import profileImg from '../assets/screenshots/profile.jpg'

const SCREENS: { id: ScreenshotId; src: string }[] = [
  { id: 'login', src: loginImg },
  { id: 'home', src: homeImg },
  { id: 'ai', src: aiImg },
  { id: 'workouts', src: workoutsImg },
  { id: 'exercises', src: exercisesImg },
  { id: 'exercisesDetail', src: exercisesDetailImg },
  { id: 'progress', src: progressImg },
  { id: 'stats', src: statsImg },
  { id: 'profile', src: profileImg },
]

export function Screenshots() {
  const { content } = useLanguage()
  const { screenshots } = content

  return (
    <section id="screenshots" className="border-b border-border bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-[0.3em] text-accent">{screenshots.eyebrow}</span>
        <h2 className="mt-4 font-display text-4xl uppercase leading-tight text-text sm:text-5xl">
          {screenshots.headline}
        </h2>
        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
          {SCREENS.map((screen) => (
            <div key={screen.id} className="min-w-[220px] snap-center">
              <div className="overflow-hidden rounded-[2rem] border border-border bg-surface p-2">
                <img
                  src={screen.src}
                  alt={screenshots.labels[screen.id]}
                  className="aspect-[9/19] w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <p className="mt-3 text-center font-body text-sm text-text-muted">{screenshots.labels[screen.id]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}