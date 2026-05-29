'use client'
import { useEffect, useState } from 'react'

interface BubbleData {
  id: number
  size: number
  left: number
  delay: number
  duration: number
  bottom: number
}

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<BubbleData[]>([])

  useEffect(() => {
    const generated: BubbleData[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      size: Math.random() * 48 + 12,
      left: Math.random() * 95,
      delay: Math.random() * 12,
      duration: Math.random() * 14 + 10,
      bottom: Math.random() * -20 - 5,
    }))
    setBubbles(generated)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden',
    }}>
      {bubbles.map(b => (
        <div
          key={b.id}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: `${b.bottom}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
