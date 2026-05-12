import { Link } from 'react-router-dom'
import { useTypewriter } from '../hooks/useTypewriter'
import { useCounter } from '../hooks/useCounter'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Hero.css'

const typewriterWords = [
  'That Get Noticed.',
  'That Tell Stories.',
  'That Drive Results.',
  'That Go Viral.',
  'That Win Awards.',
]

const titleWords = ['We', 'Edit', 'Videos']

function WordReveal({ words, className }) {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-reveal"
          style={{ animationDelay: `${i * 120}ms` }}
        >
          {word}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

function StatCounter({ target, suffix = '+', label, start }) {
  const count = useCounter(target, 2000, start)
  return (
    <div className="stat">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(typewriterWords, 70, 35, 2200)
  const [statsRef, statsInView] = useScrollAnimation(0.5)

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-orb-1"></div>
        <div className="hero-orb-2"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for new projects
        </div>

        <h1 className="hero-title">
          <WordReveal words={titleWords} className="hero-title-line1" />
          <span className="hero-accent hero-typewriter">
            {typed}
            <span className="cursor-blink">|</span>
          </span>
        </h1>

        <p className="hero-subtitle hero-subtitle-reveal">
          Premium video editing for creators, brands, and businesses. From raw footage to cinematic masterpieces — we bring your story to life.
        </p>

        <div className="hero-actions hero-actions-reveal">
          <Link to="/portfolio" className="btn-primary">
            View Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link to="/contact" className="btn-outline">Book a Session</Link>
        </div>

        <div ref={statsRef} className="hero-stats">
          <StatCounter target={200} suffix="+" label="Videos Edited" start={statsInView} />
          <div className="stat-divider"></div>
          <StatCounter target={50} suffix="+" label="Happy Clients" start={statsInView} />
          <div className="stat-divider"></div>
          <StatCounter target={5} suffix="+" label="Years Experience" start={statsInView} />
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
