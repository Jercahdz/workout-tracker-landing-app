import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function AISection() {
  const { content } = useLanguage()
  const { ai } = content
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    setVisibleLines(0)
  }, [ai])

  useEffect(() => {
    if (visibleLines >= ai.routineFocuses.length) return
    const timeout = setTimeout(() => setVisibleLines((n) => n + 1), 500)
    return () => clearTimeout(timeout)
  }, [visibleLines, ai.routineFocuses.length])

  return (
    <section id="ai" className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-accent-ai">
            <Sparkles size={14} />
            {ai.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase leading-tight text-text sm:text-5xl">{ai.headline}</h2>
          <p className="mt-6 max-w-md font-body text-text-muted">{ai.paragraph}</p>
        </div>
        <div className="rounded-2xl border border-border bg-bg p-6 font-mono text-sm shadow-2xl shadow-accent-ai/5">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <span className="h-3 w-3 rounded-full bg-border" />
            <span className="h-3 w-3 rounded-full bg-border" />
            <span className="h-3 w-3 rounded-full bg-border" />
            <span className="ml-2 text-text-dim">ai-routine.json</span>
          </div>
          <div className="mt-4 space-y-2">
            {ai.routineFocuses.slice(0, visibleLines).map((focus, index) => (
              <p key={focus} className="text-accent-ai">
                {`{ "day": ${index + 1}, "focus": "${focus}" }`}
              </p>
            ))}
            {visibleLines < ai.routineFocuses.length && (
              <span className="inline-block h-4 w-2 animate-pulse bg-accent-ai" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}