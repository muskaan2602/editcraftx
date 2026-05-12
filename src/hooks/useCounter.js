import { useState, useEffect, useRef } from 'react'

/**
 * Animates a number from 0 to `target` using an easing curve.
 * Only starts when `start` is true.
 */
export function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!start) return

    const startTime = performance.now()
    const startVal = 0

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuart(progress)
      setCount(Math.floor(startVal + eased * (target - startVal)))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        setCount(target)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [start, target, duration])

  return count
}
