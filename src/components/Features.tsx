import { UserCircle, Dumbbell, ListVideo, LineChart, Flame, Globe2, type LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const ICONS: LucideIcon[] = [UserCircle, Dumbbell, ListVideo, LineChart, Flame, Globe2]

export function Features() {
  const { content } = useLanguage()
  const { features } = content

  return (
    <section id="features" className="border-b border-border bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-[0.3em] text-accent">{features.eyebrow}</span>
        <h2 className="mt-4 max-w-xl font-display text-4xl uppercase leading-tight text-text sm:text-5xl">
          {features.headline}
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, index) => {
            const Icon = ICONS[index]
            return (
              <div key={item.title} className="bg-surface p-8 transition hover:bg-surface-2">
                <Icon className="text-accent" size={28} strokeWidth={1.5} />
                <h3 className="mt-6 font-body text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 font-body text-sm text-text-muted">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}