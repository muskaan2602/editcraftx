import { useState, useEffect } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words - Array of strings to cycle through
 * @param {number} typeSpeed - ms per character when typing
 * @param {number} deleteSpeed - ms per character when deleting
 * @param {number} pauseTime - ms to pause after fully typed
 */
export function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1))
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1))
        if (displayed.length === 0) {
          setIsDeleting(false)
          setWordIndex(i => i + 1)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime])

  return displayed
}
