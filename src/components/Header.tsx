import { LanguageToggle } from './LanguageToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Workout Tracker" className="h-8 w-8 rounded-lg object-cover" />
          <span className="font-display text-sm uppercase tracking-wide text-text">Workout Tracker</span>
        </div>
        <LanguageToggle />
      </div>
    </header>
  )
}