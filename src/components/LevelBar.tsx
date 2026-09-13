import { useEffect, useState } from 'react'

interface LevelBarProps {
  tiers: string[]
  currentTier: number
  progress: number
}

export function LevelBar({ tiers, currentTier, progress }: LevelBarProps) {
  const [fill, setFill] = useState(0)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setFill(progress))
    return () => cancelAnimationFrame(frame)
  }, [progress])

  return (
    <div className="w-full max-w-md">
      <div className="mb-2 flex items-center justify-between font-mono text-xs text-text-muted">
        <span className="text-accent">{tiers[currentTier]}</span>
        <span>{tiers[currentTier + 1] ?? 'MAX'}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full border border-border bg-surface-2">
        <div
          className="h-full bg-accent transition-all duration-[1400ms] ease-out"
          style={{ width: `${fill}%` }}
        />
      </div>
      <div className="mt-2 flex gap-1">
        {tiers.map((tier, index) => (
          <div
            key={tier}
            className={`h-1 flex-1 rounded-full ${index <= currentTier ? 'bg-accent' : 'bg-border'}`}
          />
        ))}
      </div>
    </div>
  )
}