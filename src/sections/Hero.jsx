import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for new projects
        </div>

        <h1 className="hero-title">
          We Edit Videos<br />
          <span className="hero-accent">That Get Noticed</span>
        </h1>

        <p className="hero-subtitle">
          Premium video editing for creators, brands, and businesses. From raw footage to cinematic masterpieces — we bring your story to life.
        </p>

        <div className="hero-actions">
          <Link to="/portfolio" className="btn-primary">
            View Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link to="/contact" className="btn-outline">Book a Session</Link>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Videos Edited</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
